"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { defaultSort, sorting } from "@/lib/constants";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  totalOffers: number;
};

export const OffersSectionFilters = ({ totalOffers }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSortSlug = searchParams.get("sort") || defaultSort.slug;
  const currentSortTitle = sorting.filter(
    (item) => item.slug === currentSortSlug,
  )[0].title;

  return (
    <nav className="flex flex-col md:flex-row gap-2 md:items-center justify-between py-8 text-base">
      <output className="hidden md:inline-flex text-secondary text-base">
        Liczba dostępnych ofert: {totalOffers}
      </output>
      <div className="flex flex-row flex-wrap items-center justify-between gap-2">
        <span>Sortuj:</span>
        <Menu as="div" className="relative focus:outline-red">
          <Menu.Button className="flex flex-row items-center gap-2 border-2 border-secondary bg-white rounded px-3 py-1.5 relative flex">
            {currentSortTitle}
            <FaChevronDown />
          </Menu.Button>
          <Menu.Items className="absolute z-30 flex flex-col bg-white w-72 mt-1 right-0 border-2 border-secondary shadow-lg divide-y-2 divide-secondary/20 rounded px-4 py-2">
            {sorting.map((item) => (
              <Menu.Item key={item.slug}>
                <Link
                  href={`${pathname}?sort=${item.slug}`}
                  prefetch={false}
                  className={twMerge(
                    "py-2 hover:text-primary focus:text-primary transition-colors",
                    currentSortSlug === item.slug && "text-primary",
                  )}
                >
                  {item.title}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};
