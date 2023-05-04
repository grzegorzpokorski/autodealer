import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import { client } from "@/lib/apollo";
import type {
  GetOffersQuery,
  GetOffersQueryVariables,
} from "@/generated/graphql";
import { GetOffersDocument } from "@/generated/graphql";

export const metadata = {
  title: "oferta",
};

export default async function Page() {
  const offers = await client.query<GetOffersQuery, GetOffersQueryVariables>({
    query: GetOffersDocument,
    variables: { sold: false },
  });

  return <OfferPage offers={offers.data.offers} />;
}
