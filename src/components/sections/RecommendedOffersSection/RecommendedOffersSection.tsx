import { useId } from "react";
import Link from "next/link";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { GridList } from "@/components/blocks/GridList/GridList";
import { Offer } from "@/components/blocks/Offer/Offer";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import offersFromJSON from "@/data/offers.json";

type Props = {
  offers: (typeof offersFromJSON)[number][];
  title: string;
  cta?: boolean;
};

export const RecommendedOffersSection = ({
  offers,
  title,
  cta = true,
}: Props) => {
  const sectionTitleID = useId();

  return (
    <Section ariaLabelledby={sectionTitleID} border="top">
      <Container>
        <header>
          <Heading as="h2" size="md" id={sectionTitleID}>
            {title}
          </Heading>
        </header>
        <GridList margin="top">
          {offers.map((offer) => (
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
                <Offer.Footer.PriceTag price={offer.price} type="brutto" />
                <Offer.Footer.Link href={offer.link} />
              </Offer.Footer>
            </Offer>
          ))}
        </GridList>
        {cta && (
          <footer className="pt-8 text-center">
            <LinkAsButton href="/oferta" buttonStyle="primary" size="large">
              Zobacz całą ofertę
            </LinkAsButton>
          </footer>
        )}
      </Container>
    </Section>
  );
};
