import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/b2s-boutique-software.github.io' : '',
  assetPrefix: isProd ? '/b2s-boutique-software.github.io/' : '',
  trailingSlash: true
};

export default nextConfig;
