import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FeatureHeader = ({ children }: Props) => (
  <header
    className="flex flex-row items-center gap-4 text-xl"
    aria-hidden="true"
  >
    {children}
  </header>
);
