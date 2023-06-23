import { Main } from "@/components/blocks/Main/Main";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { HeaderSection } from "@/components/templates/HeaderSection/HeaderSection";

export const ContactPage = () => {
  return (
    <>
      <HeaderSection title="Kontakt" />
      <Main>
        <ContactSection />
        <DefaultBanner />
      </Main>
    </>
  );
};
