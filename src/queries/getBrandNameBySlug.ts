import { fetcher } from "@/lib/fetcher";
import { GetBrandNameBySlugDocument } from "@/generated/graphql";

type Args = {
  slug: string;
};

export const getBrandNameBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetBrandNameBySlugDocument,
    variables: { slug },
  });

  return result.brand?.brandName;
};
