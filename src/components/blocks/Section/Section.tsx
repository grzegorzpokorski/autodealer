import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Paddings = "none" | "default";
type Margins = "none" | "negative-top";
type Borders = "none" | "top";

const paddingVariants = {
  none: "p-0",
  default: "py-16",
} as const;

const marginVariants = {
  none: "m-0",
  "negative-top": "-mt-8",
} as const;

const borderVariants = {
  none: "border-0",
  top: "border-t",
} as const;

type Props = {
  ariaLabelledby: string;
  children: ReactNode;
  padding?: Paddings;
  margin?: Margins;
  border?: Borders;
  as?: "section" | "header";
};

export const Section = ({
  ariaLabelledby,
  children,
  padding = "default",
  margin = "none",
  border = "none",
  as: Tag = "section",
}: Props) => {
  return (
    <Tag
      aria-labelledby={ariaLabelledby}
      className={twMerge(
        "relative border-secondary/10",
        paddingVariants[padding],
        marginVariants[margin],
        borderVariants[border],
      )}
    >
      {children}
    </Tag>
  );
};
