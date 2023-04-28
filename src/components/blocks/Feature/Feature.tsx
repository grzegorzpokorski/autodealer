import type { ReactNode } from "react";
import { FeatureDescription } from "./FeatureDescription";
import { FeatureHeader } from "./FeatureHeader";
import { FeatureTitle } from "./FeatureTitle";
import { FeatureIcon } from "./FeatureIcon";

type Props = {
  children: ReactNode;
};
export const Feature = ({ children }: Props) => {
  return (
    <li>
      <article className="flex flex-col gap-4">{children}</article>
    </li>
  );
};

Feature.Header = FeatureHeader;
Feature.Description = FeatureDescription;
Feature.Title = FeatureTitle;
Feature.Icon = FeatureIcon;
