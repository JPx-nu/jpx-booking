import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/booking',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Optional: helps with some static hosts
};

export default nextConfig;
