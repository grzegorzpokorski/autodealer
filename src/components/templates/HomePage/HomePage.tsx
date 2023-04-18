import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/molecules/Main/Main";
import { SectionWithCounters } from "@/components/molecules/SectionWithCounters/SectionWithCounters";
import { SectionWithFeatures } from "@/components/molecules/SectionWithFeatures/SectionWithFeatures";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import { SectionWithRecommendedModels } from "@/components/organisms/SectionWithRecommendedModels/SectionWithRecommendedModels";
import Image from "next/image";

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
              src="/hero-image.png"
              alt=""
              className="w-full h-auto object-contain"
              width={1920}
              height={1084}
              priority
            />
          </picture>
        </div>
      </SectionWithOverlay>
      <Main>
        <SectionWithCounters />
        <SectionWithFeatures />
        <SectionWithRecommendedModels />
      </Main>
    </>
  );
};
