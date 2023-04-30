import type { ReactNode } from "react";
import { OfferFooterLink } from "./OfferFooterLink";
import { OfferFooterPriceTag } from "./OfferFooterPriceTag";

type Props = {
  children: ReactNode;
};

export const OfferFooter = ({ children }: Props) => (
  <footer className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-4">
    {children}
  </footer>
);

OfferFooter.Link = OfferFooterLink;
OfferFooter.PriceTag = OfferFooterPriceTag;
