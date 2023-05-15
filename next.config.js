/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: "/sprzedane/:slug",
        destination: "/sprzedane/:slug/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
