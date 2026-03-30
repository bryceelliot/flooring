import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/website_ae22452a" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/website_ae22452a" : "",
  assetPrefix: isProd ? "/website_ae22452a" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kelownaflooringsuperstore.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
