import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";
import { getBrandNameBySlug } from "@/queries/getBrandNameBySlug";
import { getBrandsOfSoldOffers } from "@/queries/getBrandsOfSoldOffers";
import { getOffersByBrandSlug } from "@/queries/getOffersByBrandSlug";
import { OfferOrderByInput } from "@/generated/graphql";
import { offersPerPage } from "@/settings/consts";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const brands = await getBrandsOfSoldOffers();

  return brands
    .map((brand) =>
      [...Array(Math.ceil(brand.offers.length / offersPerPage)).keys()].map(
        (i) => ({ brandSlug: brand.slug, page: `${i + 1}` }),
      ),
    )
    .flat(1);
};

export default async function Page({
  params: { brandSlug, page },
}: {
  params: { brandSlug: string; page: string };
}) {
  const currentPage = parseInt(page);
  const brandName = await getBrandNameBySlug({ slug: brandSlug });
  const offers = await getOffersByBrandSlug({
    brandSlug,
    sold: true,
    first: offersPerPage,
    skip: (currentPage - 1) * offersPerPage,
    order: OfferOrderByInput.CreatedAtDesc,
  });
  const totalOffersCount = offers.offersCount;
  const totalPages = Math.ceil(totalOffersCount / offersPerPage);

  return (
    <>
      <HedaerSection title={`Sprzedane: ${brandName || brandSlug}`} />
      <Main>
        <OffersSection
          offers={offers.offers}
          title={`Sprzedane samochody marki ${
            brandName || brandSlug
          }, strona ${currentPage} z ${totalPages}`}
          pagination={{
            currentPage: currentPage,
            totalPages: totalPages,
            base: `/sprzedalismy/${brandSlug}`,
          }}
        />

        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
        />
      </Main>
    </>
  );
}
