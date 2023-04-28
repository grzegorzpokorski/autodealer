import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FeatureDescription = ({ children }: Props) => (
  <p className="text-secondary/80">{children}</p>
);
