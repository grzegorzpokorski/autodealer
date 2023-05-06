import type {
  GetOffersCountQuery,
  GetOffersCountQueryVariables,
} from "@/generated/graphql";
import { GetOffersCountDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  sold: boolean;
};

export const getOffersCount = async ({ sold }: Args) => {
  return await client.query<GetOffersCountQuery, GetOffersCountQueryVariables>({
    query: GetOffersCountDocument,
    variables: { sold },
  });
};
