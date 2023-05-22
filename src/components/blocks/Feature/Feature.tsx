import type { ReactNode } from "react";
import { FeatureDescription } from "./parts/FeatureDescription/FeatureDescription";
import { FeatureHeader } from "./parts/FeatureHeader/FeatureHeader";
import { FeatureTitle } from "./parts/FeatureTitle/FeatureTitle";
import { FeatureIcon } from "./parts/FeatureIcon/FeatureIcon";

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
