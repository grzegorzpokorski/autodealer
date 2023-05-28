"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { defaultSort, sorting } from "@/lib/constants";

type Props = {
  totalOffers: number;
};

export const Filters = ({ totalOffers }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSortSlug = searchParams.get("sort") || defaultSort.slug;

  return (
    <nav className="flex flex-col md:flex-row gap-2 md:items-center justify-between py-8 text-base">
      <output className="hidden md:inline-flex text-secondary text-base">
        Liczba dostępnych ofert: {totalOffers}
      </output>
      <div className="flex flex-row flex-wrap items-center justify-between gap-2">
        <label htmlFor="sortingMethod">Sortuj:</label>
        <select
          name="sortingMethod"
          id="sortingMethod"
          className={twMerge(
            "rounded transition",
            "border-2 border-secondary/80",
            "hover:border-secondary focus:border-secondary",
          )}
          defaultValue={currentSortSlug}
          onChange={(e) => router.push(`${pathname}?sort=${e.target.value}`)}
        >
          {sorting.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};
