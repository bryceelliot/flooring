/**
 * Build-time Instagram fetcher (runs via `npm run prebuild`).
 *
 * Pulls the latest posts from the Instagram Graph API, downloads each image
 * into public/assets/instagram/ (Instagram's CDN URLs are signed and expire,
 * so we self-host stable copies), and writes src/lib/instagram-cache.json,
 * which the site reads at build time.
 *
 * REQUIRED ENV (set before `npm run build`):
 *   INSTAGRAM_ACCESS_TOKEN  — long-lived Instagram Graph API token
 * OPTIONAL ENV:
 *   INSTAGRAM_MAX_POSTS     — how many images to show (default 8)
 *
 * If no token is set, this is a no-op: the site falls back to the curated
 * grid in src/lib/instagram-feed.ts. This script NEVER fails the build — any
 * error is logged and the previous cache is left untouched.
 */
import { writeFile, mkdir, readdir, unlink, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

/** Load .env.local (same file Next.js uses) so tokens live in one place.
 *  Only sets vars that aren't already in the environment. Best-effort. */
async function loadEnvLocal() {
  for (const name of [".env.local", ".env"]) {
    try {
      const raw = await readFile(join(ROOT, name), "utf8");
      for (const line of raw.split("\n")) {
        const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (!m || line.trim().startsWith("#")) continue;
        const key = m[1];
        let val = (m[2] || "").trim();
        if (/^(['"]).*\1$/.test(val)) val = val.slice(1, -1);
        if (process.env[key] === undefined) process.env[key] = val;
      }
    } catch {
      /* file absent — fine */
    }
  }
}
await loadEnvLocal();
const IMG_DIR = join(ROOT, "public", "assets", "instagram");
const CACHE_FILE = join(ROOT, "src", "lib", "instagram-cache.json");
const PUBLIC_PREFIX = "/assets/instagram";

const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const MAX = Number(process.env.INSTAGRAM_MAX_POSTS || 8);

function log(msg) {
  console.log(`[instagram] ${msg}`);
}

/** Turn a caption into a short, clean alt string (no hashtags, no emoji). */
function altFromCaption(caption) {
  if (!caption) return "Kelowna Flooring Superstore on Instagram";
  const firstLine = caption.split("\n")[0].replace(/#[^\s#]+/g, "");
  const noEmoji = firstLine.replace(
    /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}]/gu,
    ""
  );
  const clean = noEmoji.replace(/\s+/g, " ").slice(0, 140).trim();
  return clean || "Kelowna Flooring Superstore on Instagram";
}

/** Save a refreshed token back into .env.local so it persists across builds. */
async function persistToken(newToken) {
  const envPath = join(ROOT, ".env.local");
  try {
    let raw = "";
    try { raw = await readFile(envPath, "utf8"); } catch { /* create fresh */ }
    const line = `INSTAGRAM_ACCESS_TOKEN=${newToken}`;
    raw = /^INSTAGRAM_ACCESS_TOKEN=.*$/m.test(raw)
      ? raw.replace(/^INSTAGRAM_ACCESS_TOKEN=.*$/m, line)
      : (raw ? raw.replace(/\n?$/, "\n") : "") + line + "\n";
    await writeFile(envPath, raw);
    log("saved refreshed token to .env.local");
  } catch (e) {
    log(`could not persist refreshed token: ${e?.message || e}`);
  }
}

/** Extend the 60-day long-lived token on every build so it never lapses (as
 *  long as the site rebuilds within 60 days). Instagram only allows refresh
 *  once the token is >24h old; before that we just use it as-is. */
async function refreshTokenIfPossible(token) {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
    const res = await fetch(url);
    if (!res.ok) {
      log(`token refresh skipped (${res.status}) — token likely <24h old; using as-is.`);
      return token;
    }
    const json = await res.json();
    if (json.access_token) {
      log(`token refreshed, now valid ~${Math.round((json.expires_in || 0) / 86400)} days.`);
      await persistToken(json.access_token);
      return json.access_token;
    }
  } catch (e) {
    log(`token refresh error (${e?.message || e}) — using existing token.`);
  }
  return token;
}

async function main() {
  if (!TOKEN) {
    log("no INSTAGRAM_ACCESS_TOKEN set — skipping (curated fallback will be used).");
    return;
  }

  const token = await refreshTokenIfPossible(TOKEN);
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${MAX * 2}&access_token=${token}`;

  let items;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const body = await res.text();
      log(`API responded ${res.status}: ${body.slice(0, 200)} — keeping existing cache.`);
      return;
    }
    const json = await res.json();
    items = Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    log(`fetch failed (${err?.message || err}) — keeping existing cache.`);
    return;
  }

  // Keep only items that have an image we can show (photos + album covers +
  // video thumbnails), newest first, capped at MAX.
  const usable = items
    .map((it) => ({
      id: it.id,
      permalink: it.permalink,
      caption: it.caption,
      imageUrl: it.media_type === "VIDEO" ? it.thumbnail_url : it.media_url,
      timestamp: it.timestamp,
    }))
    .filter((it) => it.imageUrl && it.permalink)
    .slice(0, MAX);

  if (usable.length === 0) {
    log("no usable media returned — keeping existing cache.");
    return;
  }

  await mkdir(IMG_DIR, { recursive: true });

  const manifest = [];
  for (const it of usable) {
    try {
      const res = await fetch(it.imageUrl);
      if (!res.ok) {
        log(`image download failed for ${it.id} (${res.status}) — skipping.`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const file = `${it.id}.jpg`;
      await writeFile(join(IMG_DIR, file), buf);
      manifest.push({
        src: `${PUBLIC_PREFIX}/${file}`,
        alt: altFromCaption(it.caption),
        permalink: it.permalink,
      });
    } catch (err) {
      log(`error saving ${it.id}: ${err?.message || err} — skipping.`);
    }
  }

  if (manifest.length === 0) {
    log("could not download any images — keeping existing cache.");
    return;
  }

  // Remove stale images no longer in the manifest.
  const keep = new Set(manifest.map((m) => m.src.split("/").pop()));
  try {
    for (const f of await readdir(IMG_DIR)) {
      if (f !== ".gitkeep" && !keep.has(f)) await unlink(join(IMG_DIR, f));
    }
  } catch {
    /* dir listing is best-effort cleanup */
  }

  await writeFile(CACHE_FILE, JSON.stringify(manifest, null, 2) + "\n");
  log(`wrote ${manifest.length} live posts to instagram-cache.json.`);
}

main().catch((err) => {
  log(`unexpected error: ${err?.message || err} — build continues with fallback.`);
});
