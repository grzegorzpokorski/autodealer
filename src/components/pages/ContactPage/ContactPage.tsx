import { Main } from "@/components/blocks/Main/Main";
import { Metrics } from "@/components/blocks/Metrics/Metrics";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <>
      <HedaerSection title="Kontakt" />
      <Main>
        <div className="pb-16 lg:p-0">
          <Metrics title="Wybierz sposób kontaktu">
            <Metrics.Item bg="primary-dark">
              <Metrics.Item.Number>
                <FaPhoneAlt />
              </Metrics.Item.Number>
              <Metrics.Item.Description>
                <Metrics.Link href="tel:+48123456789">
                  +48 123 456 789
                </Metrics.Link>
              </Metrics.Item.Description>
            </Metrics.Item>
            <Metrics.Item bg="primary">
              <Metrics.Item.Number>
                <FaMailBulk />
              </Metrics.Item.Number>
              <Metrics.Item.Description>
                <Metrics.Link href="mailto:mail@yoursuperbcompany.com">
                  mail@yoursuperbcompany.com
                </Metrics.Link>
              </Metrics.Item.Description>
            </Metrics.Item>
          </Metrics>
        </div>
        <BannerSection
          title="Już dzisiaj znajdź dla siebie wymażone auto!"
          button={{ label: "Zobacz naszą ofetę", href: "/oferta" }}
        />
      </Main>
    </>
  );
};
