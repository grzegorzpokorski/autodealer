import type { ReactNode } from "react";
import { OfferFooterLink } from "./parts/OfferFooterLink/OfferFooterLink";
import { OfferFooterPriceTag } from "./parts/OfferFooterPriceTag/OfferFooterPriceTag";

type Props = {
  children: ReactNode;
};

export const OfferFooter = ({ children }: Props) => (
  <footer className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-4 mt-auto">
    {children}
  </footer>
);

OfferFooter.Link = OfferFooterLink;
OfferFooter.PriceTag = OfferFooterPriceTag;
