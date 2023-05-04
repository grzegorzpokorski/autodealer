import { CategoryLink } from "@/components/blocks/CategoryLink/CategoryLink";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Main } from "@/components/blocks/Main/Main";
import { Section } from "@/components/blocks/Section/Section";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import type { GetBrandsOfSoldOffersQuery } from "@/generated/graphql";

type Props = {
  brands: GetBrandsOfSoldOffersQuery["brands"];
};

export const SoldPage = ({ brands }: Props) => {
  return (
    <>
      <HedaerSection
        title="Sprzedaliśmy"
        description="Zapraszam do obejrzenia ciekawych samochodów jakie zostały zakupione
            w firmie AUTO-Handel. Modele wyselekcjonowane wg. marek."
      />
      <Main>
        <Section ariaLabelledby="categories">
          <header>
            <Heading as="h2" size="base" hidden>
              Lista sprzedanych samochodów pogrupowane po marce
            </Heading>
          </header>
          <Container>
            <GridList gap="gap-4">
              {brands.length > 0 &&
                brands.map((brand) => (
                  <CategoryLink
                    key={brand.slug}
                    href={`/sprzedalismy/${brand.slug}`}
                  >
                    {brand.brandName}
                    <CategoryLink.Counter>
                      {brand.offers.length}
                    </CategoryLink.Counter>
                  </CategoryLink>
                ))}
            </GridList>
          </Container>
        </Section>
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
        />
      </Main>
    </>
  );
};
