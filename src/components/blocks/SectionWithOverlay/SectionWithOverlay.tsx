import type { ReactNode } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  ariaLabeledby: string;
  overlayColor: "primary-dark" | "secondary";
  as: "header" | "section";
  padding?: "none" | "default";
  margin?: "none" | "banner";
};

const overlayVariants = {
  "primary-dark": "after:bg-primary-dark/90",
  secondary: "after:bg-secondary/95 ",
};

const paddingVariants = {
  none: "p-0",
  default: "py-20",
} as const;

const marginVariants = {
  none: "m-0",
  banner: "lg:mt-28",
} as const;

export const SectionWithOverlay = ({
  children,
  ariaLabeledby,
  overlayColor = "secondary",
  as: Tag,
  padding = "default",
  margin = "none",
}: Props) => {
  return (
    <Tag
      className={twMerge(
        "bg-[url('/hero.webp')] bg-cover bg-center text-white",
        "relative after:absolute after:content-[''] after:inset-0 z-[0]",
        overlayVariants[overlayColor],
        paddingVariants[padding],
        marginVariants[margin],
      )}
      aria-labelledby={ariaLabeledby}
    >
      <Container>{children}</Container>
    </Tag>
  );
};
