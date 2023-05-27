import { Main } from "@/components/blocks/Main/Main";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { HedaerSection } from "@/components/templates/HeaderSection/HeaderSection";
import type { ReactNode } from "react";

export const metadata = {
  openGraph: {
    images: [
      {
        url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
          "Oferta",
        )}`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HedaerSection title="Oferta" />
      <Main>
        {children}
        <DefaultBanner />
      </Main>
    </>
  );
}
