import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MetricsItemDescription = ({ children }: Props) => (
  <p className="text-xl">{children}</p>
);
