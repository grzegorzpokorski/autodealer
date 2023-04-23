import { useId, type ReactNode } from "react";
import { Container } from "@/components/atoms/Container/Container";
import { Section } from "@/components/atoms/Section/Section";
import { Heading } from "@/components/atoms/Heading/Heading";
import { twMerge } from "tailwind-merge";
import { MetricsItem } from "./MetricsItem/MetricsItem";
import { MetricsLink } from "./MetricsLink";

type Props = {
  children: ReactNode;
  title: string;
};

export const Metrics = ({ children, title }: Props) => {
  const sectionTitleID = useId();
  return (
    <Section
      ariaLabelledby={sectionTitleID}
      margin="negative-top"
      padding="none"
    >
      <Container>
        <header>
          <Heading as="h2" size="base" hidden id={sectionTitleID}>
            {title}
          </Heading>
        </header>
        <ul
          className={twMerge(
            "list-none flex flex-col lg:flex-row text-center md:text-start text-white",
          )}
          role="list"
        >
          {children}
        </ul>
      </Container>
    </Section>
  );
};

Metrics.Item = MetricsItem;
Metrics.Link = MetricsLink;
