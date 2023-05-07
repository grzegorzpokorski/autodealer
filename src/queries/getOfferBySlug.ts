import { GetOfferBySlugDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  slug: string;
};

export const getOfferBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetOfferBySlugDocument,
    variables: { slug },
  });

  return result.offer;
};
