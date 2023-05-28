import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferSkeleton } from "@/components/blocks/Offer/OfferSkeleton";
import { env } from "@/lib/env.mjs";

export const OffersListSkeleton = () => {
  return (
    <GridList>
      {Array(env.OFFERS_PER_PAGE)
        .fill(0)
        .map((_, idx) => (
          <OfferSkeleton key={idx} />
        ))}
    </GridList>
  );
};
