import { WarrantyPage } from "@/components/pages/WarrantyPage/WarrantyPage";

export const metadata = {
  title: "Gwarancja",
  description:
    "Wychodząć na przeciw oczekiwaniom klientów firma AutoDealer oferuje możliwość dokupienia dodatkowe gwarancji na okres od 1 do 24 miesięcy.",
  alternates: {
    canonical: "gwarancja",
  },
};

export default function Page() {
  return <WarrantyPage />;
}
