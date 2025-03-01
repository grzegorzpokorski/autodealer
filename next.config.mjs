import { env } from "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "eu-central-1.graphassets.com",
        protocol: "https",
      },
    ],
    unoptimized: env.OPTIMIZE_IMAGES === false,
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

export default nextConfig;
