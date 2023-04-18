import { SectionWithOverlay } from "@/components/molecules/SectionWithOverlay/SectionWithOverlay";
import Image from "next/image";
import { Link } from "@/components/atoms/Link/Link";
import HandWithKeys from "./../../../../public/hand-with-keys.webp";

export const Banner = () => {
  return (
    <SectionWithOverlay
      as="section"
      overlayColor="primary-dark"
      ariaLabeledby="banner-title"
      margins="banner"
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
          <h2 className="font-bold text-4xl" id="banner-title">
            Już dzisiaj znajdź dla siebie wymażone auto!
          </h2>
          <Link href="/oferta" buttonStyle="white">
            Zobacz naszą ofertę
          </Link>
        </header>
      </div>
    </SectionWithOverlay>
  );
};
