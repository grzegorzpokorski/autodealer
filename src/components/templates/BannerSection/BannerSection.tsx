import { useId } from "react";
import Image from "next/image";
import { SectionWithOverlay } from "@/components/blocks/SectionWithOverlay/SectionWithOverlay";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Heading } from "@/components/blocks/Heading/Heading";
import HandWithKeys from "publicDir/hand-with-keys.webp";

type Props = {
  title: string;
  button?: {
    label: string;
    href: string;
  };
};

export const BannerSection = ({ title, button }: Props) => {
  const sectionTitleID = useId();

  return (
    <SectionWithOverlay
      as="section"
      ariaLabeledby={sectionTitleID}
      overlayColor="primary-dark"
      margin="banner"
      padding="none"
    >
      <div className="grid grid-cols-4 relative">
        <picture className="hidden md:flex relative col-span-1">
          <Image
            src={HandWithKeys}
            alt="hand with keys"
            className="absolute bottom-0"
          />
        </picture>
        <header className="flex flex-col items-center text-center md:text-start md:items-start gap-4 col-span-4 md:col-span-3 py-20 md:ms-20 md:w-8/12">
          <Heading as="h2" size="md" id={sectionTitleID}>
            {title}
          </Heading>
          {button && (
            <LinkAsButton href={button.href} buttonStyle="white">
              {button.label}
            </LinkAsButton>
          )}
        </header>
      </div>
    </SectionWithOverlay>
  );
};
