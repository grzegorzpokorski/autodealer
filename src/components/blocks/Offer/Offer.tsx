import type { ReactNode } from "react";
import { OfferImage } from "./parts/OfferImage/OfferImage";
import { OfferInvoice } from "./parts/OfferInvoice/OfferInvoice";
import { OfferFeaturesList } from "./parts/OfferFeaturesList/OfferFeaturesList";
import { OfferFooter } from "./parts/OfferFooter/OfferFooter";
import { OfferHeader } from "./parts/OfferHeader/OfferHeader";

type Props = {
  children: ReactNode;
};

export const Offer = ({ children }: Props) => (
  <li className="shadow-md rounded-md bg-white border-2 border-primary/30">
    <article className="flex flex-col gap-4 pb-4 min-h-full items-between relative">
      {children}
    </article>
  </li>
);

Offer.Invoice = OfferInvoice;
Offer.Image = OfferImage;
Offer.Header = OfferHeader;
Offer.FeaturesList = OfferFeaturesList;
Offer.Footer = OfferFooter;
