import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferSkeleton } from "@/components/blocks/Offer/OfferSkeleton";
import { offersPerPage } from "@/settings/consts";

export const OffersListSkeleton = () => {
  return (
    <GridList>
      {Array(offersPerPage)
        .fill(0)
        .map((_, idx) => (
          <OfferSkeleton key={idx} />
        ))}
    </GridList>
  );
};
