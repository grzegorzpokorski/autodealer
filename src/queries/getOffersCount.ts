import { GetOffersCountDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  sold: boolean;
};

export const getOffersCount = async ({ sold }: Args) => {
  const result = await fetcher({
    query: GetOffersCountDocument,
    variables: { sold },
  });

  return result.offersConnection.aggregate.count;
};
