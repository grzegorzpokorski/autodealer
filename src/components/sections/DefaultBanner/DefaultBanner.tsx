import { BannerSection } from "@/components/templates/BannerSection/BannerSection";

export const DefaultBanner = () => (
  <BannerSection
    title="Już dzisiaj znajdź dla siebie wymarzone auto!"
    button={{ label: "Zobacz naszą ofetę", href: "/oferty" }}
  />
);
