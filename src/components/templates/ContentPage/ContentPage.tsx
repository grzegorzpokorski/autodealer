import { type ReactNode } from "react";
import { Main } from "@/components/blocks/Main/Main";
import { Container } from "@/components/blocks/Container/Container";
import { HeaderSection } from "@/components/templates/HeaderSection/HeaderSection";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";

type Props = {
  title: string;
  subtitle: string;
  content: ReactNode;
};

export const ContentPage = ({ title, subtitle, content }: Props) => {
  return (
    <>
      <HeaderSection title={title} description={subtitle} />
      <Main>
        <Container>
          <article className="py-16 lg:pb-0 mx-auto prose">{content}</article>
        </Container>
        <DefaultBanner />
      </Main>
    </>
  );
};
