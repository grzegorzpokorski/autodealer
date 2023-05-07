import type { GetOfferSlugsQuery } from "@/generated/graphql";
import { GetOfferSlugsDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

export const getOffersSlugs = async () => {
  return await client.query<GetOfferSlugsQuery>({
    query: GetOfferSlugsDocument,
  });
};
