import { OfferOrderByInput } from "@/generated/graphql";

export type SortFilterItem = {
  title: string;
  slug: string;
  sortKey: OfferOrderByInput;
};

export const defaultSort = {
  title: "Cena: od najdroższego",
  slug: "price-desc",
  sortKey: OfferOrderByInput.PriceDesc,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Cena: od najtańszego",
    slug: "price-asc",
    sortKey: OfferOrderByInput.PriceAsc,
  },
  {
    title: "Data dodania: od najstarszego",
    slug: "latest-desc",
    sortKey: OfferOrderByInput.PublishedAtAsc,
  },
  {
    title: "Data dodania: od najnowszego",
    slug: "latest-asc",
    sortKey: OfferOrderByInput.PublishedAtDesc,
  },
];

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
