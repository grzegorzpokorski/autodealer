import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby={"hero-title"}
        overlayColor="secondary"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start relative z-[2]">
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
              alt=""
              className="w-full h-auto object-contain"
              width={567}
              height={290}
              priority
            />
          </picture>
        </div>
      </SectionWithOverlay>
      <Main>
        {/* <section className="py-20" aria-labelledby="hero-title">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-start">
            <header className="flex flex-col gap-4">
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
            </header>
            <picture className="relative w-full">
              <Image
                src="/hero-image.webp"
                alt=""
                className="w-full h-auto object-contain"
                fill
                priority
              />
            </picture>
          </div>
        </Container>
      </section> */}
      </Main>
    </>
  );
};
