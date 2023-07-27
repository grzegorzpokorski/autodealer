import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { GridList } from "@/components/blocks/GridList/GridList";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { OfferCard } from "@/components/templates/OfferCard/OfferCard";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offers: OfferContentFragment[];
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
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </GridList>
        {cta && (
          <footer className="pt-8 text-center">
            <LinkAsButton href="/oferty" linkStyle="primary" size="large">
              Zobacz całą ofertę
            </LinkAsButton>
          </footer>
        )}
      </Container>
    </Section>
  );
};
