import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { MetricsItemNumber } from "./MetricsItemNumber";
import { MetricsItemDescription } from "./MetricsItemDescription";

type Props = {
  children: ReactNode;
  bg: "primary" | "primary-dark" | "primary-light";
};

const bgVariants = {
  primary: "bg-primary",
  "primary-dark": "bg-primary-dark",
  "primary-light": "bg-primary-light",
} as const;

export const MetricsItem = ({ children, bg }: Props) => (
  <li
    className={twMerge(
      "flex-1",
      bgVariants[bg],
      "first:rounded-t first:lg:rounded-bl first:lg:rounded-tl first:lg:rounded-tr-none",
      "last:rounded-b last:lg:rounded-br last:lg:rounded-tr last:lg:rounded-bl-none",
    )}
  >
    <article className="p-8 flex flex-col lg:flex-row gap-4 items-center min-h-full justify-center">
      {children}
    </article>
  </li>
);

MetricsItem.Number = MetricsItemNumber;
MetricsItem.Description = MetricsItemDescription;
