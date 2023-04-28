import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { MetricsItem } from "./MetricsItem/MetricsItem";
import { MetricsLink } from "./MetricsLink";

type Props = {
  children: ReactNode;
};

export const Metrics = ({ children }: Props) => {
  return (
    <ul
      className={twMerge(
        "list-none flex flex-col lg:flex-row text-center md:text-start text-white",
      )}
      role="list"
    >
      {children}
    </ul>
  );
};

Metrics.Item = MetricsItem;
Metrics.Link = MetricsLink;
