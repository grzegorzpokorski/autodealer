import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MainProps = {
  children: ReactNode;
  withMarginOnTop?: boolean;
};

export const Main = ({ children, withMarginOnTop }: MainProps) => {
  return (
    <main id="tresc" className={twMerge(withMarginOnTop && "mt-8")}>
      {children}
    </main>
  );
};
