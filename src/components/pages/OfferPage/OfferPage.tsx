import Link from "next/link";
import offersFromJSON from "@/data/offers.json";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Main } from "@/components/blocks/Main/Main";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { Offer } from "@/components/blocks/Offer/Offer";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";

type Props = {
  offers: (typeof offersFromJSON)[number][];
};

export const OfferPage = ({ offers }: Props) => {
  return (
    <>
      <HedaerSection title="Oferta" />
      <Main>
        <Section ariaLabelledby="offers">
          <Container>
            <Heading as="h2" size="base" hidden>
              Aktualnie dostępne modele
            </Heading>
            <GridList>
              {offers.length > 0 &&
                offers.map((offer) => (
                  <Offer key={offer.title}>
                    {offer.invoice && <Offer.Invoice />}
                    <Link href={offer.link}>
                      <Offer.Image image={offer.gallery[0]} />
                    </Link>
                    <Offer.Header href="/" title={offer.title} />
                    {offer.features.length > 0 && (
                      <Offer.FeaturesList>
                        {offer.features.map((feature) => (
                          <Offer.FeaturesList.Item key={feature.label}>
                            {feature.value}
                          </Offer.FeaturesList.Item>
                        ))}
                      </Offer.FeaturesList>
                    )}
                    <Offer.Footer>
                      <Offer.Footer.PriceTag
                        price={offer.price}
                        type="brutto"
                      />
                      <Offer.Footer.Link href={offer.link} />
                    </Offer.Footer>
                  </Offer>
                ))}
            </GridList>
          </Container>
        </Section>
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymażone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
