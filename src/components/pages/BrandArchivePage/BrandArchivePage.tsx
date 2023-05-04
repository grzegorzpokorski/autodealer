import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";
import type { GetSoldOffersByBrandSlugQuery } from "@/generated/graphql";

type Props = {
  title: string;
  offers: GetSoldOffersByBrandSlugQuery["offers"];
};

export const BrandArchivePage = ({ title, offers }: Props) => {
  return (
    <>
      <HedaerSection title={title} />
      <Main>
        <OffersSection offers={offers} title="Lista ofert" />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
