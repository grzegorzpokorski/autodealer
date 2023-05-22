import { OffersSection } from "@/components/templates/OffersSection/OffersSection";
import { defaultSort, sorting } from "@/lib/constants";
import { getOffers } from "@/queries/getOffers";
import { offersPerPage } from "@/settings/consts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";

export function generateMetadata({
  params: { page },
}: {
  params: { page: string };
}): Metadata {
  return {
    title: `Oferta`,
    alternates: {
      canonical: `/oferty/${page}`,
    },
  };
}

export default async function Page({
  params: { page },
  searchParams,
}: {
  params: { page: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = parseInt(page);
  if (currentPage < 1) return notFound();

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, slug: sortingSlug } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const offers = await getOffers({
    sold: false,
    first: offersPerPage,
    skip: (currentPage - 1) * offersPerPage,
    order: sortKey,
  });
  const totalPages = Math.ceil(offers.total / offersPerPage);

  if (offers.offers.length === 0) return notFound();

  return (
    <OffersSection
      title={`Obecnie dostępne modele, strona ${currentPage} z ${totalPages}`}
    >
      <OffersSection.Filters totalOffers={offers.total} />
      <Suspense fallback={<p>loading</p>}>
        <OffersSection.OfferList offers={offers.offers} />
      </Suspense>
      {totalPages > 1 && (
        <OffersSection.Pagination
          pagination={{
            currentPage: currentPage,
            totalPages: totalPages,
            base: "/oferty",
            searchParams: sortingSlug
              ? new URLSearchParams({ sort: sortingSlug }).toString()
              : null,
          }}
        />
      )}
    </OffersSection>
  );
}
