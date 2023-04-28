import "./../styles/globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Layout } from "@/components/blocks/Layout/Layout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: { default: "AutoDealer", template: "AutoDealer | %s" },
  description:
    "Samochody z Polskiej sieci dealerskiej. Sprzedaż samochodów Gdynia.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${poppins.variable} bg-light-gray text-secondary`}
    >
      <body>
        <Layout>{children}</Layout>
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
