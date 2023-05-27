import "./../styles/globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Layout } from "@/components/blocks/Layout/Layout";
import { baseUrl, indexPage, pageName } from "@/settings/consts";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: { default: pageName, template: `${pageName} | %s` },
  description:
    "Samochody z Polskiej sieci dealerskiej. Sprzedaż samochodów Gdynia.",
  robots: {
    index: indexPage,
    follow: indexPage,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/api/icon",
    apple: "/api/icon?size=180",
  },
  openGraph: {
    images: [
      {
        url: "/api/og?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${poppins.variable} bg-light-gray text-secondary scrollbar-gutter-stable `}
    >
      <body>
        <Layout>{children}</Layout>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
