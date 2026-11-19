import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern, small formats — important for slow rural connections.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1920],
  },
};

export default nextConfig;
