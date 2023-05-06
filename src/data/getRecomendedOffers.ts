import type {
  GetRecomendedOffersQuery,
  GetRecomendedOffersQueryVariables,
} from "@/generated/graphql";
import { GetRecomendedOffersDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  first: number;
  skip: number;
  currentSlug: string;
};
export const getRecomendedOffers = async ({ currentSlug, first, skip }: Args) =>
  await client.query<
    GetRecomendedOffersQuery,
    GetRecomendedOffersQueryVariables
  >({
    query: GetRecomendedOffersDocument,
    variables: { currentSlug, first, skip },
  });
