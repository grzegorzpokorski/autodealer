import { Main } from "@/components/blocks/Main/Main";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { FeaturesSection } from "@/components/sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection/MetricsSection";
import { RecommendedOffersSection } from "@/components/templates/RecommendedOffersSection/RecommendedOffersSection";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offers: OfferContentFragment[];
};

export const HomePage = ({ offers }: Props) => {
  return (
    <>
      <HeroSection />
      <Main>
        <MetricsSection />
        <FeaturesSection />
        <RecommendedOffersSection
          offers={offers.slice(0, 3)}
          title="Zobacz polecane modele"
        />
        <DefaultBanner />
      </Main>
    </>
  );
};
