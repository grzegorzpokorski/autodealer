import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferCard } from "@/components/templates/OfferCard/OfferCard";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offers: OfferContentFragment[];
};

export const OfferList = ({ offers }: Props) => (
  <GridList>
    {offers.length > 0 &&
      offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
  </GridList>
);
