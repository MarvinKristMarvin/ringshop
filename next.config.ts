import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options */

  // Ensure Next.js listens on the correct port
  experimental: {
    // Any experimental features you want to enable
  },

  // Handle the port configuration for deployment
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },

  // Optional: Configure environment variables
  env: {
    PORT: process.env.PORT || "3000",
  },
};

export default nextConfig;
