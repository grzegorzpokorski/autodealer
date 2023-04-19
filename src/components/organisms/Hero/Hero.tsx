import { Heading } from "@/components/atoms/Heading/Heading";
import { Link } from "@/components/atoms/Link/Link";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWithOverlay
      as="header"
      ariaLabeledby={"hero-title"}
      overlayColor="secondary"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
        <div className="flex flex-col gap-4 flex-1">
          <Heading as="h2" size="lg">
            Samochody z Polskiej sieci dealerskiej
          </Heading>
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
  );
};
