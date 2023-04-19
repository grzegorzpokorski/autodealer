import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MetricsItemNumber = ({ children }: Props) => (
  <span className="font-bold text-5xl">{children}</span>
);
