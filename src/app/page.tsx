import { HomePage } from "@/components/pages/HomePage/HomePage";
import type {
  GetOffersQuery,
  GetOffersQueryVariables,
} from "@/generated/graphql";
import { GetOffersDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

export default async function Home() {
  const offers = await client.query<GetOffersQuery, GetOffersQueryVariables>({
    query: GetOffersDocument,
    variables: { sold: false },
  });
  return <HomePage offers={offers.data.offers} />;
}
