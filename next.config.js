/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: "media.graphassets.com", protocol: "https" }],
  },
};

module.exports = nextConfig;
