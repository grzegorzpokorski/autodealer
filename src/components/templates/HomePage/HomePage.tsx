import { Main } from "@/components/molecules/Main/Main";
import { Features } from "@/components/organisms/Features/Features";
import { RecommendedModels } from "@/components/organisms/RecommendedModels/RecommendedModels";
import { Metrics } from "@/components/molecules/Metrics/Metrics";
import { Hero } from "@/components/organisms/Hero/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
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
        <Features />
        <RecommendedModels />
      </Main>
    </>
  );
};
