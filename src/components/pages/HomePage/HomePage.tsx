import { Main } from "@/components/blocks/Main/Main";
import { Metrics } from "@/components/blocks/Metrics/Metrics";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import offersFromJSON from "@/data/offers.json";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Main>
        <Metrics title="Kilka naszych zalet">
          <Metrics.Item bg="primary-dark">
            <Metrics.Item.Number>21</Metrics.Item.Number>
            <Metrics.Item.Description>
              lat doświadczenia w branży
            </Metrics.Item.Description>
          </Metrics.Item>
          <Metrics.Item bg="primary">
            <Metrics.Item.Number>+480</Metrics.Item.Number>
            <Metrics.Item.Description>
              zadowolonych klientów
            </Metrics.Item.Description>
          </Metrics.Item>
          <Metrics.Item bg="primary-light">
            <Metrics.Item.Number>24</Metrics.Item.Number>
            <Metrics.Item.Description>
              nawet do 24 miesięcy dodatkowej gwarancji
            </Metrics.Item.Description>
          </Metrics.Item>
        </Metrics>
        <FeaturesSection />
        <RecommendedOffersSection
          offers={offersFromJSON.slice(0, 3)}
          title="Zobacz polecane modele"
        />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymażone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
