import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OffersSection } from "@/components/templates/OffersSection/OffersSection";
import { getBrandNameBySlug } from "@/queries/getBrandNameBySlug";
import { getOffersByBrandSlug } from "@/queries/getOffersByBrandSlug";
import { defaultSort, sorting } from "@/lib/constants";
import { offersPerPage } from "@/settings/consts";

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
    openGraph: {
      images: [
        {
          url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
            `Sprzedane: ${brandName}`,
          )}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
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

  const brandName =
    (await getBrandNameBySlug({ slug: brandSlug })) || brandSlug;
  const { offers, total } = await getOffersByBrandSlug({
    brandSlug,
    sold: true,
    first: offersPerPage,
    skip: (currentPage - 1) * offersPerPage,
    order: sortKey,
  });

  if (offers.length === 0) return notFound();

  const totalPages = Math.ceil(total / offersPerPage);

  return (
    <OffersSection
      title={`Sprzedane samochody marki ${brandName}, strona ${currentPage} z ${totalPages}`}
    >
      <OffersSection.Filters totalOffers={total} />
      <OffersSection.OfferList offers={offers} />
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
  );
}
