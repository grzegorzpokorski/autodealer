import type { ReactNode } from "react";
import { OfferFeaturesListItem } from "./OfferFeaturesListItem";

type Props = {
  children: ReactNode;
};

export const OfferFeaturesList = ({ children }: Props) => (
  <ul
    className="list-none px-4 flex flex-row flex-wrap gap-2 text-secondary/80"
    role="list"
  >
    {children}
  </ul>
);

OfferFeaturesList.Item = OfferFeaturesListItem;
