import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const OfferPage = ({ children }: Props) => {
  return (
    <>
      <HedaerSection title="Oferta" />
      <Main>
        {children}
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
        />
      </Main>
    </>
  );
};
