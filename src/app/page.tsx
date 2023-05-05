import { HomePage } from "@/components/pages/HomePage/HomePage";
import { getOffers } from "@/data/getOffers";
import { OfferOrderByInput } from "@/generated/graphql";

export default async function Home() {
  const offers = await getOffers({
    sold: false,
    order: OfferOrderByInput.PriceDesc,
  });

  return <HomePage offers={offers.data.offers} />;
}
