import { useId } from "react";
import Image from "next/image";
import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { SectionWithOverlay } from "@/components/blocks/SectionWithOverlay/SectionWithOverlay";

export const HeroSection = () => {
  const sectionTitleID = useId();

  return (
    <SectionWithOverlay
      as="header"
      ariaLabeledby={sectionTitleID}
      overlayColor="secondary"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
        <div className="flex flex-col gap-4 flex-1">
          <Heading as="h2" size="lg" id={sectionTitleID}>
            Samochody z Polskiej sieci dealerskiej
          </Heading>
          <p>
            W swojej ofercie posiada samochody pochodzące z polskiej sieci
            dealerskiej oraz luksusowe samochody od niemieckich dealerów.
          </p>
          <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start mt-2">
            <LinkAsButton href="/oferta" buttonStyle="primary">
              Oferta
            </LinkAsButton>
            <LinkAsButton href="/kontakt" buttonStyle="white">
              Kontakt
            </LinkAsButton>
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
  );
};
