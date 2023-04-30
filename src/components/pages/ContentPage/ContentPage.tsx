import { type ReactNode } from "react";
import { Main } from "@/components/blocks/Main/Main";
import { Container } from "@/components/blocks/Container/Container";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";

type Props = {
  title: string;
  subtitle: string;
  content: ReactNode;
};

export const ContentPage = ({ title, subtitle, content }: Props) => {
  return (
    <>
      <HedaerSection title={title} description={subtitle} />
      <Main>
        <Container>
          <article className="py-16 lg:pb-0 mx-auto prose">{content}</article>
        </Container>
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
