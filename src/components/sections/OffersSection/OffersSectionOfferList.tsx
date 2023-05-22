import type { GetOffersQuery } from "@/generated/graphql";
import { GridList } from "@/components/blocks/GridList/GridList";
import { OfferList } from "@/components/templates/OfferList/OfferList";

type Props = {
  offers: GetOffersQuery["offers"];
};

export const OffersSectionOfferList = ({ offers }: Props) => (
  <GridList>{offers.length > 0 && <OfferList offers={offers} />}</GridList>
);
