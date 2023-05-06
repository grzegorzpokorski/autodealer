import { Container } from "@/components/blocks/Container/Container";
import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Main } from "@/components/blocks/Main/Main";
import { Slider } from "@/components/blocks/Slider/Slider";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
// import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import type { GetOfferBySlugQuery, GetOffersQuery } from "@/generated/graphql";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatNumber } from "@/utils/formatNumber";
import { twMerge } from "tailwind-merge";

type Props = {
  offer: GetOfferBySlugQuery["offer"];
  recommendedOffers: GetOffersQuery["offers"];
};

export const SinglePage = ({ offer, recommendedOffers }: Props) => {
  if (!offer) return null;

  return (
    <>
      <Main>
        <Container>
          <article className="grid grid-cols-12 gap-3 md:gap-6 py-8">
            <div className="col-span-12">
              <Slider images={offer.gallery} />
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-6 order-2 md:order-1">
              <div className="p-8 bg-white shadow prose max-w-none flex flex-col gap-4 rounded">
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
                  {offer.features && (
                    <table className="m-0">
                      <thead className="sr-only">
                        <tr>
                          <th>parametr</th>
                          <th>wartośc</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={offer.features.kolor} className="pb-10">
                          <td>Kolor</td>
                          <td>{offer.features.kolor}</td>
                        </tr>
                        <tr key={offer.features.moc} className="pb-10">
                          <td>Moc</td>
                          <td>{offer.features.moc} KM</td>
                        </tr>
                        <tr
                          key={offer.features.pojemnoscSilnika}
                          className="pb-10"
                        >
                          <td>Pojemność silnika</td>
                          <td>{offer.features.pojemnoscSilnika}</td>
                        </tr>
                        <tr key={offer.features.przebieg} className="pb-10">
                          <td>Przebieg</td>
                          <td>
                            {formatNumber(parseInt(offer.features.przebieg))} km
                          </td>
                        </tr>
                        <tr key={offer.features.rocznik} className="pb-10">
                          <td>Rocznik</td>
                          <td>{offer.features.rocznik}</td>
                        </tr>
                        <tr key={offer.features.typ} className="pb-10">
                          <td>Typ</td>
                          <td>{offer.features.typ}</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </section>
              </div>
              {offer.description && (
                <section
                  className="p-8 bg-white shadow rounded"
                  aria-labelledby="opis"
                >
                  <header className="sr-only">
                    <Heading as="h2" size="base" id="opis" hidden>
                      Opis
                    </Heading>
                  </header>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: offer.description?.html,
                    }}
                  />
                </section>
              )}
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-6 order-1 md:order-2">
              <section
                className="p-8 bg-primary-dark text-white sticky top-6 flex flex-col gap-8 shadow rounded"
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
                  {offer.sold ? (
                    <p className="inline-flex transition-colors border-2 text-center items-center justify-center gap-1.5 bg-white text-gray-800 border-white px-5 py-2 text-base font-bold rounded">
                      sprzedany
                    </p>
                  ) : (
                    <LinkAsButton href="tel:+48123456789" buttonStyle="white">
                      <span className="font-bold">Zadźwoń:</span>+48 123 456 789
                    </LinkAsButton>
                  )}
                </div>
              </section>
            </div>
          </article>
        </Container>
        <RecommendedOffersSection
          offers={recommendedOffers}
          title="Zobacz dostępne modele"
          cta={false}
        />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
        />
      </Main>
    </>
  );
};
