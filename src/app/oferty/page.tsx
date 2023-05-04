import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import { client } from "@/lib/apollo";
import type { GetOffersQuery } from "@/generated/graphql";
import { GetOffersDocument } from "@/generated/graphql";

export const metadata = {
  title: "oferta",
};

export default async function Page() {
  const offers = await client.query<GetOffersQuery>({
    query: GetOffersDocument,
  });

  return <OfferPage offers={offers.data.offers} />;
}
