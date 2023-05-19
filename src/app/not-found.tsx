import { NotFoundPage } from "@/components/pages/NotFoundPage/NotFoundPage";
import { OfferOrderByInput } from "@/generated/graphql";
import { getOffers } from "@/queries/getOffers";

export default async function Page() {
  const { offers } = await getOffers({
    sold: false,
    order: OfferOrderByInput.PriceDesc,
    first: 3,
    skip: 0,
  });

  return <NotFoundPage offers={offers} />;
}
