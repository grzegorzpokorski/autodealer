import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container/Container";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  ariaLabeledby: string;
  overlayColor: "primary-dark" | "secondary";
  as: "header" | "section";
  margins?: "default" | "banner";
};

const overlayVariants = {
  "primary-dark": "after:bg-primary-dark/90",
  secondary: "after:bg-secondary/95 ",
};

const marginsVariants = {
  default: "py-20",
  banner: "mt-28",
};

export const SectionWithOverlay = ({
  children,
  ariaLabeledby,
  overlayColor = "secondary",
  as: Tag,
  margins = "default",
}: Props) => {
  return (
    <Tag
      className={twMerge(
        "bg-[url('/hero.webp')] bg-cover bg-center text-white",
        "relative after:absolute after:content-[''] after:inset-0 z-[0]",
        overlayVariants[overlayColor],
        marginsVariants[margins],
      )}
      aria-labelledby={ariaLabeledby}
    >
      <Container>{children}</Container>
    </Tag>
  );
};
