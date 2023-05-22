import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Main } from "@/components/blocks/Main/Main";
import { SectionWithOverlay } from "@/components/blocks/SectionWithOverlay/SectionWithOverlay";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import type { OfferContentFragment } from "@/generated/graphql";

type Props = {
  offers: OfferContentFragment[];
};

export const NotFoundPage = ({ offers }: Props) => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby="not-found-title"
        overlayColor="secondary"
      >
        <div className="flex flex-col items-center text-center py-20">
          <div className="flex flex-col gap-4 flex-1">
            <Heading as="h2" size="lg" id="not-found-title">
              Ta przestrzeń jest pusta
            </Heading>
            <p>Strona, której szukasz, nie istnieje (błąd 404)</p>
            <div className="flex flex-row flex-wrap gap-2 justify-center mt-2">
              <LinkAsButton href="/oferty" buttonStyle="primary">
                Aktualna oferta
              </LinkAsButton>
              <LinkAsButton href="/" buttonStyle="white">
                Zabierz mnie na stronę główną
              </LinkAsButton>
            </div>
          </div>
        </div>
      </SectionWithOverlay>
      <Main>
        <RecommendedOffersSection
          offers={offers.slice(0, 3)}
          title="Chciałbyś sprawdzić polecene modele?"
        />
        <DefaultBanner />
      </Main>
    </>
  );
};
