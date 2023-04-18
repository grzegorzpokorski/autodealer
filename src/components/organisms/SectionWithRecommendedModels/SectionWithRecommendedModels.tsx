import { Container } from "@/components/atoms/Container/Container";
import { Link } from "@/components/atoms/Link/Link";
import { OfferList } from "@/components/molecules/OfferLilst/OfferList";

export const SectionWithRecommendedModels = () => {
  return (
    <section
      aria-labelledby="recomended-models"
      className="pt-16 border-t border-secondary/10"
    >
      <Container>
        <header className="text-start">
          <h2 className="font-bold text-4xl" id="recomended-models">
            Zobacz polecane modele
          </h2>
        </header>
        <OfferList
          offers={[
            {
              invoice: true,
              image: {
                src: "/mercedes.webp",
                width: 768,
                height: 576,
                alt: "Mercedes s500 amg aso",
              },
              title: "Mercedes s500 amg aso",
              features: [
                "2009",
                "235 KM",
                "139 000 km",
                "3.0",
                "Szary metalik",
                "limuzyna",
              ],
              price: 19999,
              link: "/",
            },
            {
              invoice: true,
              image: {
                src: "/citroen.webp",
                width: 768,
                height: 576,
                alt: "Citroen C4 Picasso",
              },
              title: "Citroen C4 Picasso",
              features: [
                "2009",
                "235 KM",
                "139 000 km",
                "3.0",
                "Szary metalik",
                "limuzyna",
              ],
              price: 56400,
              link: "/",
            },
            {
              invoice: true,
              image: {
                src: "/ferrari.webp",
                width: 768,
                height: 576,
                alt: "Ferrari F420 edition",
              },
              title: "Ferrari F420 edition",
              features: [
                "2009",
                "235 KM",
                "139 000 km",
                "3.0",
                "Szary metalik",
                "limuzyna",
              ],
              price: 419000,
              link: "/",
            },
          ]}
        />
        <footer className="text-center mt-8">
          <Link href="/oferta" buttonStyle="primary" size="large">
            Zobacz całą ofertę
          </Link>
        </footer>
      </Container>
    </section>
  );
};
