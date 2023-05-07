import type {
  GetBrandNameBySlugQuery,
  GetBrandNameBySlugQueryVariables,
} from "@/generated/graphql";
import { GetBrandNameBySlugDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

type Args = {
  slug: string;
};

export const getBrandNameBySlug = async ({ slug }: Args) => {
  return await client.query<
    GetBrandNameBySlugQuery,
    GetBrandNameBySlugQueryVariables
  >({
    query: GetBrandNameBySlugDocument,
    variables: { slug },
  });
};
