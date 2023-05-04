import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { GridList } from "@/components/blocks/GridList/GridList";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { OfferList } from "@/components/templates/OfferList/OfferList";
import type { GetOffersQuery } from "@/generated/graphql";

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

  return (
    <Section ariaLabelledby={sectionTitleID} border="top">
      <Container>
        <header>
          <Heading as="h2" size="md" id={sectionTitleID}>
            {title}
          </Heading>
        </header>
        <GridList margin="top">
          {offers.length > 0 && <OfferList offers={offers} />}
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
