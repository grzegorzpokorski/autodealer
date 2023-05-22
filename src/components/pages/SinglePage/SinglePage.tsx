import { Container } from "@/components/blocks/Container/Container";
import { Main } from "@/components/blocks/Main/Main";
import { RecommendedOffersSection } from "@/components/templates/RecommendedOffersSection/RecommendedOffersSection";
import { SingleOffer } from "@/components/templates/SingleOffer/SingleOffer";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offer: OfferContentFragment;
  recommendedOffers: OfferContentFragment[];
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
        <DefaultBanner />
      </Main>
    </>
  );
};
