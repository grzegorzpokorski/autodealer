import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FeatureIcon = ({ children }: Props) => (
  <span className="text-primary-dark" aria-hidden="true">
    {children}
  </span>
);
