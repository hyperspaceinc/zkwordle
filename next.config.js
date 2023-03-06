// @ts-check
/// <reference path="./env.d.ts" />
/// <reference path="./vercel.d.ts" />

require("./scripts/favicons");

/** @type {import("next").NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: "/:path*{/}?",
      headers: [
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
      ],
    },
  ],
  reactStrictMode: true,
  redirects: async () => [],
  rewrites: async () => [],
  trailingSlash: true,
  webpack: (config, { dev, webpack }) => {
    return config;
  },
};

module.exports = nextConfig;
