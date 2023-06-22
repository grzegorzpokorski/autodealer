import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferListItem } from "@/components/templates/OfferListItem/OfferListItem";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offers: OfferContentFragment[];
};

export const OfferList = ({ offers }: Props) => (
  <GridList>
    {offers.length > 0 &&
      offers.map((offer) => <OfferListItem key={offer.id} offer={offer} />)}
  </GridList>
);
