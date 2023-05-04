import { HomePage } from "@/components/pages/HomePage/HomePage";
import type { GetOffersQuery } from "@/generated/graphql";
import { GetOffersDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

export default async function Home() {
  const offers = await client.query<GetOffersQuery>({
    query: GetOffersDocument,
  });
  return <HomePage offers={offers.data.offers} />;
}
