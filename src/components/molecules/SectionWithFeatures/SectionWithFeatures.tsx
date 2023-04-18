import { Container } from "@/components/atoms/Container/Container";
import {
  FaCar,
  FaFlag,
  FaShieldAlt,
  FaTachometerAlt,
  FaUser,
  FaWrench,
} from "react-icons/fa";

export const SectionWithFeatures = () => {
  return (
    <section aria-labelledby="features" className="py-16">
      <Container>
        <header className="text-center">
          <h2 className="font-bold text-4xl" id="features">
            Dlaczego warto nam zaufać?
          </h2>
        </header>
        <ul
          className="list-none mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaTachometerAlt
                  className="text-primary-dark"
                  aria-hidden="true"
                />
                Udokumentowane przebiegi
              </h3>
              <p className="text-secondary/80">
                Firma AUTO-HANDEL oferuje kompleksową obsługę finansowania
                zakupionych pojazdów w firmie jak i z własnego źródła zarówno w
                kredycie jak i leasingu.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaUser className="text-primary-dark" aria-hidden="true" />
                Pierwszy właściciel
              </h3>
              <p className="text-secondary/80">
                Większoś oferowanyc aut posiadała jednego właściiela od nowości,
                dzięki czemu auta są zadbane, a ich historia serwisowa jest
                doskonale udokumentowana.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaFlag className="text-primary-dark" aria-hidden="true" />
                Jasne pochodzenie
              </h3>
              <p className="text-secondary/80">
                Auta pochodzą od polskich autoryzowanych delearów oraz
                sprawdzonych niemieckich salonów. Każdy samochód musi spełniać
                restrykcyjne wymogi aby znalazł się w naszej ofercie
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaWrench className="text-primary-dark" aria-hidden="true" />
                Książka serwisowa
              </h3>
              <p className="text-secondary/80">
                Jasna i przejżyszta historia sprzedawanych przez nas aut to
                podstawa, dlatego dbamy, aby każfy samochód bez wyjątku posiadał
                oryginalną ksiązkę serwisową.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaShieldAlt className="text-primary-dark" aria-hidden="true" />
                Dodatkowa gwarancja
              </h3>
              <p className="text-secondary/80">
                Wychodząć na przeciw oczekiwaniom klientów oferujemy możliwośc
                dokupienia dodatkowe gwarancji na okres od 1 do 24 miesięcy.
                Szczególowe informacje w zakładce gwarancja.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex flex-row items-center gap-4">
                <FaCar className="text-primary-dark" aria-hidden="true" />
                Sprawdzone modele
              </h3>
              <p className="text-secondary/80">
                Samochody są sprawdzane pod kątem ewentualnych uszkodzeń, wad
                tak aby odpowiadały naszym standardom jakości - sprzedajemy
                tylko sprawdzone auta!
              </p>
            </article>
          </li>
        </ul>
      </Container>
    </section>
  );
};
