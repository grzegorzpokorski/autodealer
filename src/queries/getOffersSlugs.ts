import { GetOffersSlugsDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  sold: boolean;
};

export const getOffersSlugs = async ({ sold }: Args) => {
  const result = await fetcher({
    query: GetOffersSlugsDocument,
    variables: { sold },
  });

  return result.offers.map((offer) => offer.slug);
};
