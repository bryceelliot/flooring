@AGENTS.md

# Bluehost Deploy — READ THIS BEFORE EVERY DEPLOY

## Build
```
npm run build
```

## Zip — ALWAYS use Python, NEVER PowerShell
```
python "c:/Users/bryce/OneDrive/Desktop/make-zip.py"
```
PowerShell creates zips with wrong Unix mode bits. `_next/` won't extract correctly. Python sets `0o040755` directory type bits so cPanel recognizes directories.

## Upload steps
1. Delete EVERYTHING in `website_ae22452a/` on Bluehost first (old `_next` causes Permission Denied)
2. Upload `kfss-bluehost.zip` from Desktop
3. Extract in File Manager
4. Delete the zip

## Why things are set up this way
- `public/.htaccess` — overrides parent WordPress `.htaccess` that blocks `_next/static/`; sets MIME types
- `basePath/assetPrefix: isProd ? "/website_ae22452a" : ""` — site is in a subdirectory, not domain root
- `NEXT_PUBLIC_BASE_PATH` + `src/lib/bp.ts` — `<video>` and `<img>` tags need manual basePath prefix; `<Link>` and `<Image>` get it automatically
- `make-zip.py` lives at `c:\Users\bryce\OneDrive\Desktop\make-zip.py` — do not delete it

## Hosting
- Bluehost shared hosting
- Temp URL: https://lfg.obp.mybluehost.me/website_ae22452a/
- Server path: /home2/lfgobpmy/public_html/website_ae22452a/
