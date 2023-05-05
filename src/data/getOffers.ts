import type {
  GetOffersQuery,
  GetOffersQueryVariables,
} from "@/generated/graphql";
import { GetOffersDocument, OfferOrderByInput } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  sold: boolean;
  order?: OfferOrderByInput;
  first: number;
  skip: number;
};

export const getOffers = async ({
  sold,
  order = OfferOrderByInput.PriceDesc,
  first = 3,
  skip = 0,
}: Args) => {
  return await client.query<GetOffersQuery, GetOffersQueryVariables>({
    query: GetOffersDocument,
    variables: { sold, order, first, skip },
  });
};
