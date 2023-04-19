import { Container } from "@/components/atoms/Container/Container";
import { Main } from "@/components/molecules/Main/Main";
import { OfferList } from "@/components/molecules/OfferLilst/OfferList";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import offers from "@/data/offers.json";

export const OfferPage = () => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby={"hero-title"}
        overlayColor="secondary"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center text-center">
          <div className="flex flex-col gap-4 flex-1">
            <h1
              className="font-bold text-3xl md:text-4xl lg:text-5xl/[1.25]"
              id="hero-title"
            >
              Oferta
            </h1>
          </div>
        </div>
      </SectionWithOverlay>
      <Main>
        <section
          aria-labelledby="recomended-models"
          className="py-16 lg:pb-0 border-t border-secondary/10"
        >
          <Container>
            <header className="text-start sr-only">
              <h2 className="font-bold text-4xl" id="recomended-models">
                Lista dostępnych samohodów
              </h2>
            </header>
            <OfferList offers={offers} withMarginAbove={false} />
          </Container>
        </section>
      </Main>
    </>
  );
};
