import { Banner } from "@/components/organisms/Banner/Banner";
import type { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
  withMarginOnTop?: boolean;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main id="tresc">
      {children}
      <Banner />
    </main>
  );
};
