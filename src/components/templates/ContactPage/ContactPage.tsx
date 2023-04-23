import { Heading } from "@/components/atoms/Heading/Heading";
import { Main } from "@/components/molecules/Main/Main";
import { Metrics } from "@/components/molecules/Metrics/Metrics";
import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <>
      <SectionWithOverlay
        as="header"
        ariaLabeledby="title"
        overlayColor="secondary"
      >
        <header className="flex flex-col gap-4 text-center lg:w-8/12 mx-auto">
          <Heading as="h1" size="lg" id="title">
            Kontakt
          </Heading>
        </header>
      </SectionWithOverlay>
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
      </Main>
    </>
  );
};
