import { OffersSection } from "@/components/templates/OffersSection/OffersSection";
import { defaultSort, sorting } from "@/lib/constants";
import { getOffers } from "@/queries/getOffers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { env } from "@/lib/env.mjs";

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
    first: env.OFFERS_PER_PAGE,
    skip: (currentPage - 1) * env.OFFERS_PER_PAGE,
    order: sortKey,
  });
  const totalPages = Math.ceil(offers.total / env.OFFERS_PER_PAGE);

  if (offers.offers.length === 0) return notFound();

  return (
    <OffersSection
      title={`Obecnie dostępne modele, strona ${currentPage} z ${totalPages}`}
    >
      <OffersSection.Filters totalOffers={offers.total} />
      <OffersSection.OfferList offers={offers.offers} />
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
