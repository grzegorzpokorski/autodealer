import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { GridList } from "@/components/blocks/GridList/GridList";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import type { GetOffersQuery } from "@/generated/graphql";
import { Offer } from "@/components/blocks/Offer/Offer";
import Link from "next/link";
import { formatNumber } from "@/utils/formatNumber";

type Props = {
  offers: GetOffersQuery["offers"];
  title: string;
  cta?: boolean;
};

export const RecommendedOffersSection = ({
  offers,
  title,
  cta = true,
}: Props) => {
  const sectionTitleID = useId();

  if (offers.length === 0) return null;

  return (
    <Section
      ariaLabelledby={sectionTitleID}
      border="top"
      padding="recommendedOffers"
    >
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
              <Link href={`/oferta/${offer.slug}`} tabIndex={-1}>
                {/* @ts-expect-error Server Component */}
                <Offer.Image image={offer.gallery[0]} />
              </Link>
              <Offer.Header
                href={`/oferta/${offer.slug}`}
                title={offer.title}
              />
              {offer.features && (
                <Offer.FeaturesList>
                  <Offer.FeaturesList.Item key={offer.features.rocznik}>
                    {offer.features.rocznik}
                  </Offer.FeaturesList.Item>
                  <Offer.FeaturesList.Item key={offer.features.moc}>
                    {offer.features.moc} KM
                  </Offer.FeaturesList.Item>
                  <Offer.FeaturesList.Item key={offer.features.przebieg}>
                    {formatNumber(parseInt(offer.features.przebieg))} km
                  </Offer.FeaturesList.Item>
                  <Offer.FeaturesList.Item
                    key={offer.features.pojemnoscSilnika}
                  >
                    {offer.features.pojemnoscSilnika}
                  </Offer.FeaturesList.Item>
                  <Offer.FeaturesList.Item key={offer.features.kolor}>
                    {offer.features.kolor}
                  </Offer.FeaturesList.Item>
                  <Offer.FeaturesList.Item key={offer.features.typ}>
                    {offer.features.typ}
                  </Offer.FeaturesList.Item>
                </Offer.FeaturesList>
              )}
              <Offer.Footer>
                <Offer.Footer.PriceTag price={offer.price} type="brutto" />
                <Offer.Footer.Link href={`/oferta/${offer.slug}`} />
              </Offer.Footer>
            </Offer>
          ))}
        </GridList>
        {cta && (
          <footer className="pt-8 text-center">
            <LinkAsButton href="/oferty" buttonStyle="primary" size="large">
              Zobacz całą ofertę
            </LinkAsButton>
          </footer>
        )}
      </Container>
    </Section>
  );
};
