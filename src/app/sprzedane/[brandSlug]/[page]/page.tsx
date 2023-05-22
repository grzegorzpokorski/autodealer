import { Main } from "@/components/blocks/Main/Main";
import { HedaerSection } from "@/components/templates/HeaderSection/HeaderSection";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";
import { getBrandNameBySlug } from "@/queries/getBrandNameBySlug";
import { getOffersByBrandSlug } from "@/queries/getOffersByBrandSlug";
import { offersPerPage } from "@/settings/consts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { defaultSort, sorting } from "@/lib/constants";

export async function generateMetadata({
  params: { brandSlug, page },
}: {
  params: { brandSlug: string; page: string };
}): Promise<Metadata> {
  const brandName = await getBrandNameBySlug({ slug: brandSlug });

  if (!brandName) return notFound();

  return {
    title: `Sprzedane: ${brandName}`,
    description: `Sprzedane samochody marki ${brandName}, strona ${page}`,
    alternates: {
      canonical: `/sprzedane/${brandSlug}/${page}`,
    },
  };
}

export default async function Page({
  params: { brandSlug, page },
  searchParams,
}: {
  params: { brandSlug: string; page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = parseInt(page);
  if (currentPage < 1) return notFound();

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, slug: sortingSlug } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const brandName = await getBrandNameBySlug({ slug: brandSlug });
  const offers = await getOffersByBrandSlug({
    brandSlug,
    sold: true,
    first: offersPerPage,
    skip: (currentPage - 1) * offersPerPage,
    order: sortKey,
  });
  const totalOffers = offers.offersCount;

  if (offers.offers.length === 0) return notFound();

  const totalPages = Math.ceil(totalOffers / offersPerPage);

  return (
    <>
      <HedaerSection title={`Sprzedane: ${brandName || brandSlug}`} />
      <Main>
        <OffersSection
          title={`Sprzedane samochody marki ${
            brandName || brandSlug
          }, strona ${currentPage} z ${totalPages}`}
        >
          <OffersSection.Filters totalOffers={totalOffers} />
          <OffersSection.OfferList offers={offers.offers} />
          {totalPages > 1 && (
            <OffersSection.Pagination
              pagination={{
                currentPage: currentPage,
                totalPages: totalPages,
                base: `/sprzedalismy/${brandSlug}`,
                searchParams: sortingSlug
                  ? new URLSearchParams({ sort: sortingSlug }).toString()
                  : null,
              }}
            />
          )}
        </OffersSection>
        <DefaultBanner />
      </Main>
    </>
  );
}
