import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ShadowBoxHeader } from "./ShadowBoxHeader";

type Props = {
  children: ReactNode;
  as?: "div" | "section";
  id?: string;
  variant?: "white" | "primary-dark";
};

const variants = {
  white: "bg-white text-secondary",
  "primary-dark": "bg-primary-dark text-white",
} as const;

export const ShadowBox = ({
  children,
  as: Tag = "div",
  id,
  variant = "white",
}: Props) => {
  return (
    <Tag
      className={twMerge("p-8 bg-white shadow rounded", variants[variant])}
      id={id}
    >
      {children}
    </Tag>
  );
};

ShadowBox.Header = ShadowBoxHeader;
