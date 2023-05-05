import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import { getOffers } from "@/data/getOffers";

export const metadata = {
  title: "oferta",
};

export default async function Page() {
  const offers = await getOffers({
    sold: false,
  });

  return <OfferPage offers={offers.data?.offers || []} />;
}
