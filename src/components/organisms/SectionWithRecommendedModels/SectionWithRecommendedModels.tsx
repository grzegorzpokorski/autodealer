import { Container } from "@/components/atoms/Container/Container";
import { Link } from "@/components/atoms/Link/Link";
import { OfferList } from "@/components/molecules/OfferLilst/OfferList";
import offers from "@/data/offers.json";

export const SectionWithRecommendedModels = () => {
  return (
    <section
      aria-labelledby="recomended-models"
      className="py-16 lg:pb-0 border-t border-secondary/10"
    >
      <Container>
        <header className="text-start">
          <h2 className="font-bold text-4xl" id="recomended-models">
            Zobacz polecane modele
          </h2>
        </header>
        <OfferList offers={offers.slice(0, 3)} withMarginAbove />
        <footer className="text-center mt-8">
          <Link href="/oferta" buttonStyle="primary" size="large">
            Zobacz całą ofertę
          </Link>
        </footer>
      </Container>
    </section>
  );
};
