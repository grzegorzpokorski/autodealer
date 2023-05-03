import type offersFromJSON from "@/data/offers.json";
import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";

type Props = {
  offers: (typeof offersFromJSON)[number][];
};

export const OfferPage = ({ offers }: Props) => {
  return (
    <>
      <HedaerSection title="Oferta" />
      <Main>
        <OffersSection offers={offers} title="Obecnie dostępne modele" />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
