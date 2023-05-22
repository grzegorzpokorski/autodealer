import type { ReactNode } from "react";
import { useId } from "react";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Container } from "@/components/blocks/Container/Container";
import { OfferList } from "./parts/OfferList/OfferList";
import { PaginationSkeleton } from "./parts/Pagination/PaginationSkeleton";
import { FiltersSkeleton } from "./parts/Filters/FiltersSkeleton";
import { OffersListSkeleton } from "./parts/OfferList/OffersListSkeleton";
import { Filters } from "./parts/Filters/Filters";
import { Pagination } from "./parts/Pagination/Pagination";

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

OffersSection.OfferList = OfferList;
OffersSection.Filters = Filters;
OffersSection.Pagination = Pagination;

OffersSection.OffersListSkeleton = OffersListSkeleton;
OffersSection.FiltersSkeleton = FiltersSkeleton;
OffersSection.PaginationSkeleton = PaginationSkeleton;
