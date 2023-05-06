import { useId } from "react";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferList } from "@/components/templates/OfferList/OfferList";
import type { GetOffersQuery } from "@/generated/graphql";
import { Pagination } from "@/components/blocks/Pagination/Pagination";

type Props = {
  title: string;
  offers: GetOffersQuery["offers"];
  pagination?: {
    currentPage: number;
    totalPages: number;
    base: string;
  };
};

export const OffersSection = ({ title, offers, pagination }: Props) => {
  const sectionHeadingId = useId();

  return (
    <Section ariaLabelledby={sectionHeadingId}>
      <Container>
        <Heading as="h2" size="base" id={sectionHeadingId} hidden>
          {title}
        </Heading>
        {pagination && (
          <output
            className="inline-flex mb-8 text-secondary text-sm"
            aria-hidden="true"
          >
            Strona {pagination.currentPage} z {pagination.totalPages}
          </output>
        )}
        <GridList>
          {offers.length > 0 && <OfferList offers={offers} />}
        </GridList>
        {pagination && pagination.totalPages > 1 && (
          <div className="mt-8">
            <Pagination pagination={pagination} />
          </div>
        )}
      </Container>
    </Section>
  );
};
