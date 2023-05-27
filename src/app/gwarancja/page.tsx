import { WarrantyPage } from "@/components/pages/WarrantyPage/WarrantyPage";

export const metadata = {
  title: "Gwarancja",
  description:
    "Wychodząć na przeciw oczekiwaniom klientów firma AutoDealer oferuje możliwość dokupienia dodatkowe gwarancji na okres od 1 do 24 miesięcy.",
  alternates: {
    canonical: "gwarancja",
  },
  openGraph: {
    images: [
      {
        url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
          "Gwarancja",
        )}`,
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Page() {
  return <WarrantyPage />;
}
