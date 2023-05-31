import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { OffersSection } from "@/components/templates/OffersSection/OffersSection";

export const OffersSectionSkeleton = () => {
  return (
    <div role="status" className="motion-safe:animate-pulse">
      <Section ariaLabelledby="loading" padding="offersArchive">
        <Container>
          <OffersSection.FiltersSkeleton />
          <OffersSection.OffersListSkeleton />
          <OffersSection.PaginationSkeleton />
        </Container>
      </Section>
    </div>
  );
};
