import { Container } from "@/components/blocks/Container/Container";
import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Main } from "@/components/blocks/Main/Main";
import { Slider } from "@/components/blocks/Slider/Slider";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import { formatCurrency } from "@/utils/formatCurrency";
import { twMerge } from "tailwind-merge";

type Props = {
  offer: {
    id: string;
    sold: boolean;
    invoice: boolean;
    title: string;
    features: {
      label: string;
      value: string;
    }[];
    price: number;
    gallery: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  recommendedOffers: {
    id: string;
    sold: boolean;
    invoice: boolean;
    title: string;
    features: {
      label: string;
      value: string;
    }[];
    price: number;
    gallery: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  }[];
};

export const SinglePage = ({ offer, recommendedOffers }: Props) => {
  return (
    <>
      <Main>
        <Container>
          <article className="grid grid-cols-12 gap-3 md:gap-6 py-8">
            <div className="col-span-12">
              <Slider images={offer.gallery} />
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-6 order-2 md:order-1">
              <div className="p-8 bg-white shadow prose max-w-none flex flex-col gap-4">
                <header aria-labelledby="title">
                  <Heading as="h1" size="base" id="title">
                    {offer.title}
                  </Heading>
                </header>
                <section aria-labelledby="parametry">
                  <header className="sr-only">
                    <Heading as="h2" size="base" id="parametry" hidden>
                      Parametry
                    </Heading>
                  </header>
                  <table className="m-0">
                    <thead className="sr-only">
                      <tr>
                        <th>parametr</th>
                        <th>wartośc</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offer.features.map((feature) => (
                        <tr key={feature.label} className="pb-10">
                          <td>{feature.label}</td>
                          <td>{feature.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>
              <section className="p-8 bg-white shadow" aria-labelledby="opis">
                <header className="sr-only">
                  <Heading as="h2" size="base" id="opis" hidden>
                    Opis
                  </Heading>
                </header>
                <div className="prose max-w-none">
                  <p>
                    Samochód zakupiłem w salonie Mercedesa w Niemczech osobiście
                    (posiadam dokumentację fotograficzną z odbioru, kopię oferty
                    salonu). Samochód jest bez zbędnego rozpisywania się w
                    stanie technicznym i wizualnym idealnym!
                  </p>
                  <p>
                    Przepiękne zadbane wnętrze w połączeniu porcelanowej skóry i
                    skórzanej deski rozdzielczej w kolorze espresso z
                    przeszyciami białą nicią.
                  </p>
                  <p>
                    Serwisowany regularnie w ASO MERCEDES-BENZ co dokumentuje
                    pełna historia w bazie serwisowej ASO MB.
                  </p>
                  <p>Ważniejsze dla tej klasy opcje wyposażenia:</p>
                  <ul>
                    <li>12 x AIRBAG</li>
                    <li>
                      Delectus veritatis dignissimos repellendus repellat sed
                      praesentium, explicabo mollitia, consequatur sint, sunt
                      pariatur ut asperiores ipsa dolorem labore dolorum
                      tenetur!
                    </li>
                    <li>
                      Quo exercitationem corrupti dolorum fuga beatae, cum.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-6 order-1 md:order-2">
              <section
                className="p-8 bg-primary-dark text-white sticky top-6 flex flex-col gap-8 shadow"
                aria-labelledby="cena-i-kontakt"
              >
                <header className="sr-only">
                  <Heading as="h2" size="base" id="cena-i-kontakt" hidden>
                    Cena i kontakt
                  </Heading>
                </header>
                <div
                  className={twMerge(
                    "divide-y-2 [&>p]:py-4 [&>p:first-child]:pt-0 [&>p:last-child]:pb-0",
                    !offer.invoice && "pb-4 border-b-2",
                  )}
                >
                  {offer.invoice ? (
                    <>
                      <p className="flex flex-row justify-between">
                        Cena brutto:{" "}
                        <span className="font-bold">
                          {formatCurrency(offer.price)}
                        </span>
                      </p>
                      <p className="flex flex-row justify-between">
                        Cena netto:{" "}
                        <span className="font-bold">
                          {formatCurrency(offer.price * 0.77)}
                        </span>
                      </p>
                    </>
                  ) : (
                    <p className="flex flex-row justify-between">
                      Cena:
                      <span className="font-bold">
                        {formatCurrency(offer.price)}
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex flex-col flex-wrap flex-wrap justify-center gap-2">
                  <LinkAsButton href="tel:+48123456789" buttonStyle="white">
                    <span className="font-bold">Zadźwoń:</span>+48 123 456 789
                  </LinkAsButton>
                </div>
              </section>
            </div>
          </article>
        </Container>
        <RecommendedOffersSection
          offers={recommendedOffers}
          title="Zobacz również inne modele"
          cta={false}
        />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
