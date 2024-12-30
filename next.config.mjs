import { env } from "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
        protocol: "https",
      },
    ],
    unoptimized:
      process.env.VERCEL_ENV !== "production" ||
      env.OPTIMIZE_IMAGES === "false",
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
