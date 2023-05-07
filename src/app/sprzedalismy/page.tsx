import { SoldPage } from "@/components/pages/SoldPage/SoldPage";
import { getBrandsOfSoldOffers } from "@/queries/getBrandsOfSoldOffers";

export const metadata = {
  title: "sprzedaliśmy",
};

export default async function Page() {
  const brands = await getBrandsOfSoldOffers();

  return <SoldPage brands={brands.data.brands} />;
}
