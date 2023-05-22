import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SliderContainer = ({ children }: Props) => (
  <div className="relative">{children}</div>
);
