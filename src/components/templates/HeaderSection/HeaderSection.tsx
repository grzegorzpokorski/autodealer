import { useId } from "react";
import { Heading } from "@/components/blocks/Heading/Heading";
import { SectionWithOverlay } from "@/components/blocks/SectionWithOverlay/SectionWithOverlay";

type Props = {
  title: string;
  description?: string;
};

export const HedaerSection = ({ title, description }: Props) => {
  const headerTitleID = useId();
  return (
    <SectionWithOverlay
      as="header"
      ariaLabeledby={headerTitleID}
      overlayColor="secondary"
    >
      <header className="flex flex-col gap-4 text-center max-w-[70ch] mx-auto">
        <Heading as="h1" size="lg" id={headerTitleID}>
          {title}
        </Heading>
        {description && <p>{description}</p>}
      </header>
    </SectionWithOverlay>
  );
};
