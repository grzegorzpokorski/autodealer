import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";

export const ContactPage = () => {
  return (
    <>
      <HedaerSection title="Kontakt" />
      <Main>
        <ContactSection />
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymarzone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
