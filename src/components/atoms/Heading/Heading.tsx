import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  as: "h1" | "h2" | "h3" | "h4";
  size: "lg" | "md" | "base";
  children: ReactNode;
  id?: string;
  hidden?: boolean;
};

const sizeVariant = {
  lg: "font-bold text-3xl md:text-4xl lg:text-5xl/[1.25]",
  md: "font-bold text-4xl",
  base: "font-bold text-xl",
} as const;

export const Heading = ({ as: Tag, size, children, id, hidden }: Props) => {
  return (
    <Tag className={twMerge(sizeVariant[size], hidden && "sr-only")} id={id}>
      {children}
    </Tag>
  );
};
