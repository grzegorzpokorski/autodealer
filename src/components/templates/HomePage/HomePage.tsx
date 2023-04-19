import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/molecules/Main/Main";
import { SectionWithFeatures } from "@/components/organisms/SectionWithFeatures/SectionWithFeatures";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import { SectionWithRecommendedModels } from "@/components/organisms/SectionWithRecommendedModels/SectionWithRecommendedModels";
import Image from "next/image";
import { Metrics } from "@/components/molecules/Metrics/Metrics";

export const HomePage = () => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby={"hero-title"}
        overlayColor="secondary"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
          <div className="flex flex-col gap-4 flex-1">
            <h2
              className="font-bold text-3xl md:text-4xl lg:text-5xl/[1.25]"
              id="hero-title"
            >
              Samochody z Polskiej sieci dealerskiej
            </h2>
            <p>
              W swojej ofercie posiada samochody pochodzące z polskiej sieci
              dealerskiej oraz luksusowe samochody od niemieckich dealerów.
            </p>
            <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start mt-2">
              <Link href="/oferta" buttonStyle="primary">
                Oferta
              </Link>
              <Link href="/kontakt" buttonStyle="white">
                Kontakt
              </Link>
            </div>
          </div>
          <picture className="relative w-full flex-1">
            <Image
              src="/hero-image.webp"
              alt="white mercedes car"
              className="w-full h-auto object-contain"
              width={1920}
              height={1084}
              sizes="(max-width: 720px) 100vw, 50vw"
              priority
            />
          </picture>
        </div>
      </SectionWithOverlay>
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
        <SectionWithFeatures />
        <SectionWithRecommendedModels />
      </Main>
    </>
  );
};
