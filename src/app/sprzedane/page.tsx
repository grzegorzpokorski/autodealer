import { SoldPage } from "@/components/pages/SoldPage/SoldPage";
import { getBrandsOfSoldOffers } from "@/queries/getBrandsOfSoldOffers";

export const metadata = {
  title: "Sprzedane",
  description:
    "Zapraszam do obejrzenia ciekawych samochodów jakie zostały zakupione w firmie AUTO-Handel. Modele wyselekcjonowane wg. marek.",
  alternates: {
    canonical: "sprzedane",
  },
};

export default async function Page() {
  const brands = await getBrandsOfSoldOffers();

  return <SoldPage brands={brands} />;
}
