import type {
  GetOfferBySlugQuery,
  GetOfferBySlugQueryVariables,
} from "@/generated/graphql";
import { GetOfferBySlugDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  slug: string;
};

export const getOfferBySlug = async ({ slug }: Args) => {
  return await client.query<GetOfferBySlugQuery, GetOfferBySlugQueryVariables>({
    query: GetOfferBySlugDocument,
    variables: { slug },
  });
};
