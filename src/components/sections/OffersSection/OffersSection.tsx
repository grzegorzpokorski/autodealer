import type { ReactNode } from "react";
import { useId } from "react";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Container } from "@/components/blocks/Container/Container";
import { OffersSectionOfferList } from "./OffersSectionOfferList";
import { OffersSectionPagination } from "./OffersSectionPagination";
import { OffersSectionFilters } from "./OffersSectionFilters";

type Props = {
  children: ReactNode;
  title: string;
};

export const OffersSection = ({ children, title }: Props) => {
  const sectionHeadingId = useId();
  return (
    <Section ariaLabelledby={sectionHeadingId} padding="offersArchive">
      <Container>
        <Heading as="h2" size="base" id={sectionHeadingId} hidden>
          {title}
        </Heading>
        {children}
      </Container>
    </Section>
  );
};

OffersSection.OfferList = OffersSectionOfferList;
OffersSection.Filters = OffersSectionFilters;
OffersSection.Pagination = OffersSectionPagination;
