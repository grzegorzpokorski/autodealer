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
        {/* <ul
          className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16"
          role="list"
        >
          <li className="shadow-md rounded-md">
            <article className="flex flex-col gap-4 pb-4 min-h-full relative">
              <span className="absolute z-10 bg-secondary text-white text-xs px-3 py-1.5 top-2 left-2">
                Faktura VAT
              </span>
              <NextLink href="/">
                <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
                  <Image
                    src="/mercedes.webp"
                    alt="auto"
                    width={768}
                    height={576}
                    className="object-cover object-center w-full h-full hover:scale-105 transition-all"
                  />
                </picture>
              </NextLink>
              <header className="px-4">
                <NextLink href="/">
                  <h3 className="font-bold text-xl hover:underline focus:underline">
                    Mercedes s500 amg aso
                  </h3>
                </NextLink>
              </header>
              <ul
                className="list-none px-4 flex flex-row flex-wrap gap-2 text-secondary/80"
                role="list"
              >
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  2009
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  235 KM
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  139 000 km
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  3.0
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  SZARY METALIK
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  limuzyna
                </li>
              </ul>
              <footer className="flex flex-row justify-between items-center px-4">
                <p className="flex flex-col font-bold">
                  {formatCurrency(19999)}
                  <span className="font-normal text-secondary/80 text-sm">
                    brutto
                  </span>
                </p>
                <Link href="/" buttonStyle="primary">
                  Przejdź do oferty
                </Link>
              </footer>
            </article>
          </li>
          <li className="shadow-md rounded-md">
            <article className="flex flex-col gap-4 pb-4 min-h-full relative">
              <NextLink href="/">
                <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
                  <Image
                    src="/citroen.webp"
                    alt="auto"
                    width={768}
                    height={576}
                    className="object-cover object-center w-full h-full hover:scale-105 transition-all"
                  />
                </picture>
              </NextLink>
              <header className="px-4">
                <NextLink href="/">
                  <h3 className="font-bold text-xl hover:underline focus:underline">
                    Mercedes s500 amg aso
                  </h3>
                </NextLink>
              </header>
              <ul
                className="list-none px-4 flex flex-row flex-wrap gap-2 text-secondary/80"
                role="list"
              >
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  2009
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  235 KM
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  139 000 km
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  3.0
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  SZARY METALIK
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  limuzyna
                </li>
              </ul>
              <footer className="flex flex-row justify-between items-center px-4">
                <p className="flex flex-col font-bold">
                  {formatCurrency(229000)}
                  <span className="font-normal text-secondary/80 text-sm">
                    brutto
                  </span>
                </p>
                <Link href="/" buttonStyle="primary">
                  Przejdź do oferty
                </Link>
              </footer>
            </article>
          </li>
          <li className="shadow-md rounded-md">
            <article className="flex flex-col gap-4 pb-4 min-h-full relative">
              <span className="absolute z-10 bg-secondary text-white text-xs px-3 py-1.5 top-2 left-2">
                Faktura VAT
              </span>
              <NextLink href="/">
                <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
                  <Image
                    src="/ferrari.webp"
                    alt="auto"
                    width={768}
                    height={576}
                    className="object-cover object-center w-full h-full hover:scale-105 transition-all"
                  />
                </picture>
              </NextLink>
              <header className="px-4">
                <NextLink href="/">
                  <h3 className="font-bold text-xl hover:underline focus:underline">
                    Mercedes s500 amg aso
                  </h3>
                </NextLink>
              </header>
              <ul
                className="list-none px-4 flex flex-row flex-wrap gap-2 text-secondary/80"
                role="list"
              >
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  2009
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  235 KM
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  139 000 km
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  3.0
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  SZARY METALIK
                </li>
                <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
                  limuzyna
                </li>
              </ul>
              <footer className="flex flex-row justify-between items-center px-4">
                <p className="flex flex-col font-bold">
                  {formatCurrency(229000)}
                  <span className="font-normal text-secondary/80 text-sm">
                    brutto
                  </span>
                </p>
                <Link href="/" buttonStyle="primary">
                  Przejdź do oferty
                </Link>
              </footer>
            </article>
          </li>
        </ul> */}
        <footer className="text-center mt-8">
          <Link href="/oferta" buttonStyle="primary" size="large">
            Zobacz całą ofertę
          </Link>
        </footer>
      </Container>
    </section>
  );
};
