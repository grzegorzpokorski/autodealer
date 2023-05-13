import { GetOffersBySlugsDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  first: number;
  skip: number;
  limitCountOfImages: number;
  slugs: string[];
  sold: boolean;
};
export const getOffersBySlugs = async ({
  first,
  skip,
  limitCountOfImages,
  slugs,
  sold,
}: Args) => {
  const result = await fetcher({
    query: GetOffersBySlugsDocument,
    variables: { first, skip, limitCountOfImages, slugs, sold },
  });

  return result.offers;
};
