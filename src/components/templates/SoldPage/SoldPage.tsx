import { Category } from "@/components/atoms/Category/Category";
import { Container } from "@/components/atoms/Container/Container";
import { GridList } from "@/components/atoms/GridList/GridList";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Section } from "@/components/atoms/Section/Section";
import { Main } from "@/components/molecules/Main/Main";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";

type Props = {
  soldByCategory: {
    name: string;
    count: number;
  }[];
};

export const SoldPage = ({ soldByCategory }: Props) => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby="title"
        overlayColor="secondary"
      >
        <header className="flex flex-col gap-4 text-center lg:w-8/12 mx-auto">
          <Heading as="h1" size="lg" id="title">
            Sprzedaliśmy
          </Heading>
          <p>
            Zapraszam do obejrzenia ciekawych samochodów jakie zostały zakupione
            w firmie AUTO-Handel. Modele wyselekcjonowane wg. marek.
          </p>
        </header>
      </SectionWithOverlay>
      <Main>
        <Section ariaLabelledby="categories">
          <header>
            <Heading as="h2" size="base" hidden>
              Lista sprzedanych samochodów pogrupowane po marce
            </Heading>
          </header>
          <Container>
            <GridList gap="gap-4">
              {soldByCategory.length > 0 &&
                soldByCategory.map((item) => (
                  <Category key={item.name} href="/">
                    {item.name}
                    <Category.Counter>{item.count}</Category.Counter>
                  </Category>
                ))}
            </GridList>
          </Container>
        </Section>
      </Main>
    </>
  );
};
