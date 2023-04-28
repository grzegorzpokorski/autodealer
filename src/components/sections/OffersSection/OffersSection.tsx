import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { useId } from "react";
import { OfferList } from "@/components/templates/OfferList/OfferList";

type Props = {
  title: string;
  offers: {
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

export const OffersSection = ({ title, offers }: Props) => {
  const sectionHeadingId = useId();

  return (
    <Section ariaLabelledby={sectionHeadingId}>
      <Container>
        <Heading as="h2" size="base" hidden id={sectionHeadingId}>
          {title}
        </Heading>
        <GridList>
          {offers.length > 0 && <OfferList offers={offers} />}
        </GridList>
      </Container>
    </Section>
  );
};
