import { BrandArchivePage } from "@/components/pages/BrandArchivePage/BrandArchivePage";
import { getBrandNameBySlug } from "@/data/getBrandNameBySlug";
import { getBrandsOfSoldOffers } from "@/data/getBrandsOfSoldOffers";
import { getOffersByBrandSlug } from "@/data/getOffersByBrandSlug";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const brands = await getBrandsOfSoldOffers();

  return brands.data.brands.map((brand) => ({
    brandSlug: brand.slug,
  }));
};

export default async function Page({
  params: { brandSlug },
}: {
  params: { brandSlug: string };
}) {
  const brandName = await getBrandNameBySlug({ slug: brandSlug });
  const offers = await getOffersByBrandSlug({ brandSlug, sold: true });

  return (
    <BrandArchivePage
      offers={offers.data.offers}
      title={brandName.data.brand?.brandName || ""}
    />
  );
}
