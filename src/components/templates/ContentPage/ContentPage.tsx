import { Container } from "@/components/atoms/Container/Container";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Main } from "@/components/molecules/Main/Main";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import { ReactNode, useId } from "react";

type Props = {
  title: string;
  subtitle: string;
  content: ReactNode;
};

export const ContentPage = ({ title, subtitle, content }: Props) => {
  const headerTitleID = useId();
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby={headerTitleID}
        overlayColor="secondary"
      >
        <header className="flex flex-col gap-4 text-center lg:w-8/12 mx-auto">
          <Heading as="h1" size="lg" id={headerTitleID}>
            {title}
          </Heading>
          {subtitle && <p>{subtitle}</p>}
        </header>
      </SectionWithOverlay>
      <Main>
        <Container>
          <article className="py-16 lg:pb-0 mx-auto prose">{content}</article>
        </Container>
      </Main>
    </>
  );
};
