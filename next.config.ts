import type { NextConfig } from "next";

/**
 * Static export for classic web hosting (world4you): `next build` writes a
 * plain HTML/CSS/JS site to `out/`. `trailingSlash` makes every route a
 * directory with its own index.html, so Apache serves it without rewrites.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
