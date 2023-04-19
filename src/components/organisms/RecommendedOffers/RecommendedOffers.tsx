import { useId } from "react";
import Link from "next/link";
import { Container } from "@/components/atoms/Container/Container";
import { Section } from "@/components/atoms/Section/Section";
import { Heading } from "@/components/atoms/Heading/Heading";
import { GridList } from "@/components/atoms/GridList/GridList";
import { Offer } from "@/components/molecules/Offer/Offer";
import offersFromJSON from "@/data/offers.json";

type Props = {
  offers: (typeof offersFromJSON)[number][];
};

export const RecommendedOffers = ({ offers }: Props) => {
  const sectionTitleID = useId();

  return (
    <Section ariaLabelledby={sectionTitleID} border="top">
      <Container>
        <header>
          <Heading as="h2" size="md" id={sectionTitleID}>
            Zobacz polecane modele
          </Heading>
        </header>
        <GridList margin="top">
          {offers.map((offer) => (
            <Offer key={offer.title}>
              {offer.invoice && <Offer.Invoice />}
              <Link href={offer.link}>
                <Offer.Image image={offer.image} />
              </Link>
              <Offer.Header href="/" title={offer.title} />
              {offer.features.length > 0 && (
                <Offer.FeaturesList>
                  {offer.features.map((feature) => (
                    <Offer.FeaturesList.Item key={feature}>
                      {feature}
                    </Offer.FeaturesList.Item>
                  ))}
                </Offer.FeaturesList>
              )}
              <Offer.Footer>
                <Offer.Footer.PriceTag price={offer.price} type="brutto" />
                <Offer.Footer.Link href={offer.link} />
              </Offer.Footer>
            </Offer>
          ))}
        </GridList>
      </Container>
    </Section>
  );
};
