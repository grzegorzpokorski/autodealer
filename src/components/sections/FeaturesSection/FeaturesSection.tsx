import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Feature } from "@/components/blocks/Feature/Feature";
import {
  FaCar,
  FaFlag,
  FaShieldAlt,
  FaTachometerAlt,
  FaUser,
  FaWrench,
} from "react-icons/fa";

export const FeaturesSection = () => {
  const sectionTitleID = useId();
  return (
    <Section ariaLabelledby={sectionTitleID}>
      <Container>
        <header className="text-center">
          <Heading as="h2" size="md" id={sectionTitleID}>
            Dlaczego warto nam zaufać?
          </Heading>
        </header>
        <GridList margin="top">
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaTachometerAlt />
              </Feature.Icon>
              <Feature.Title>Udokumentowane przebiegi</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Firma AUTO-HANDEL oferuje kompleksową obsługę finansowania
              zakupionych pojazdów w firmie jak i z własnego źródła zarówno w
              kredycie jak i leasingu.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaUser />
              </Feature.Icon>
              <Feature.Title>Pierwszy właściciel</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Większoś oferowanyc aut posiadała jednego właściiela od nowości,
              dzięki czemu auta są zadbane, a ich historia serwisowa jest
              doskonale udokumentowana.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaFlag />
              </Feature.Icon>
              <Feature.Title>Jasne pochodzenie</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Auta pochodzą od polskich autoryzowanych delearów oraz
              sprawdzonych niemieckich salonów. Każdy samochód musi spełniać
              restrykcyjne wymogi aby znalazł się w naszej ofercie
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaWrench />
              </Feature.Icon>
              <Feature.Title>Książka serwisowa</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Jasna i przejżyszta historia sprzedawanych przez nas aut to
              podstawa, dlatego dbamy, aby każfy samochód bez wyjątku posiadał
              oryginalną ksiązkę serwisową.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaShieldAlt />
              </Feature.Icon>
              <Feature.Title>Dodatkowa gwarancja</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Wychodząć na przeciw oczekiwaniom klientów oferujemy możliwośc
              dokupienia dodatkowe gwarancji na okres od 1 do 24 miesięcy.
              Szczególowe informacje w zakładce gwarancja.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaCar />
              </Feature.Icon>
              <Feature.Title>Sprawdzone modele</Feature.Title>
            </Feature.Header>
            <Feature.Description>
              Samochody są sprawdzane pod kątem ewentualnych uszkodzeń, wad tak
              aby odpowiadały naszym standardom jakości - sprzedajemy tylko
              sprawdzone auta!
            </Feature.Description>
          </Feature>
        </GridList>
      </Container>
    </Section>
  );
};
