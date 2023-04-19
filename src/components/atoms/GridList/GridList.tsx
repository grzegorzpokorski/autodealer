import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  margin?: "none" | "top";
  gap?: "gap-4" | "gap-8";
};

const marginVariants = {
  none: "m-0",
  top: "mt-16",
} as const;

const gapVariants = {
  "gap-8": "gap-8",
  "gap-4": "gap-4",
} as const;

export const GridList = ({
  children,
  margin = "none",
  gap = "gap-8",
}: Props) => {
  return (
    <ul
      className={twMerge(
        "list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        marginVariants[margin],
        gapVariants[gap],
      )}
      role="list"
    >
      {children}
    </ul>
  );
};
