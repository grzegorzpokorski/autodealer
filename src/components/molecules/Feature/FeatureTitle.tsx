import type { ReactNode } from "react";
import { Heading } from "@/components/atoms/Heading/Heading";

type Props = {
  children: ReactNode;
};

export const FeatureTitle = ({ children }: Props) => (
  <Heading as="h3" size="base">
    {children}
  </Heading>
);
