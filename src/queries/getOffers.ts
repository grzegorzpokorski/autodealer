import type {
  GetOffersQuery,
  GetOffersQueryVariables,
} from "@/generated/graphql";
import { GetOffersDocument, OfferOrderByInput } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  sold: boolean;
  first: number;
  skip: number;
  order?: OfferOrderByInput;
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
