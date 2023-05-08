import { HomePage } from "@/components/pages/HomePage/HomePage";
import { getOffers } from "@/queries/getOffers";
import { OfferOrderByInput } from "@/generated/graphql";

export default async function Home() {
  const offers = await getOffers({
    sold: false,
    order: OfferOrderByInput.PriceDesc,
    first: 3,
    skip: 0,
  });

  return <HomePage offers={offers.offers} />;
}
