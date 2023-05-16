import { Container } from "@/components/blocks/Container/Container";
import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import type { GetOfferBySlugQuery, GetOffersQuery } from "@/generated/graphql";
import { SingleOffer } from "@/components/templates/SingleOffer/SingleOffer";

type Props = {
  offer: GetOfferBySlugQuery["offer"];
  recommendedOffers: GetOffersQuery["offers"];
};

export const SinglePage = ({ offer, recommendedOffers }: Props) => {
  if (!offer) return null;

  return (
    <>
      <Main>
        <Container>
          {/* @ts-expect-error Server Component */}
          <SingleOffer offer={offer} />
        </Container>
        <RecommendedOffersSection
          offers={recommendedOffers}
          title="Zobacz dostępne modele"
          cta={false}
        />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
        />
      </Main>
    </>
  );
};
