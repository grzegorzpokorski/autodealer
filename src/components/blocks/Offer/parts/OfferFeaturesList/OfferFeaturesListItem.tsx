import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const OfferFeaturesListItem = ({ children }: Props) => (
  <li className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden">
    {children}
  </li>
);
