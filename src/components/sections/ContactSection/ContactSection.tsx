import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Metrics } from "@/components/blocks/Metrics/Metrics";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export const ContactSection = () => {
  const sectionTitleID = useId();

  return (
    <Section ariaLabelledby={sectionTitleID}>
      <Container>
        <header className="sr-only">
          <Heading as="h2" size="base" hidden id={sectionTitleID}>
            Dane kontaktowe
          </Heading>
        </header>
        <Metrics>
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
      </Container>
    </Section>
  );
};
