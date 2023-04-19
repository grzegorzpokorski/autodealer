import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  margin?: "none" | "top";
};

const marginVariants = {
  none: "m-0",
  top: "mt-16",
} as const;

export const GridList = ({ children, margin = "none" }: Props) => {
  return (
    <ul
      className={twMerge(
        "list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        marginVariants[margin],
      )}
      role="list"
    >
      {children}
    </ul>
  );
};
