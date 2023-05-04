/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: "media.graphassets.com", protocol: "https" }],
  },
  async redirects() {
    return [
      {
        source: "/oferty",
        destination: "/oferty/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
