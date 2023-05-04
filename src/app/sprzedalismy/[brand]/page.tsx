import { BrandArchivePage } from "@/components/pages/BrandArchivePage/BrandArchivePage";
import type {
  GetBrandNameBySlugQuery,
  GetBrandNameBySlugQueryVariables,
  GetSoldOffersByBrandSlugQuery,
  GetSoldOffersByBrandSlugQueryVariables,
} from "@/generated/graphql";
import {
  GetSoldOffersByBrandSlugDocument,
  GetBrandNameBySlugDocument,
} from "@/generated/graphql";
import { client } from "@/lib/apollo";

export default async function Page({
  params: { brand },
}: {
  params: { brand: string };
}) {
  const brandName = await client.query<
    GetBrandNameBySlugQuery,
    GetBrandNameBySlugQueryVariables
  >({
    query: GetBrandNameBySlugDocument,
    variables: { slug: brand },
  });

  const offers = await client.query<
    GetSoldOffersByBrandSlugQuery,
    GetSoldOffersByBrandSlugQueryVariables
  >({
    query: GetSoldOffersByBrandSlugDocument,
    variables: { slug: brand },
  });

  return (
    <BrandArchivePage
      offers={offers.data.offers}
      title={brandName.data.brand?.brandName || ""}
    />
  );
}
