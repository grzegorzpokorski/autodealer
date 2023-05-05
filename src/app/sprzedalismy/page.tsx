import { SoldPage } from "@/components/pages/SoldPage/SoldPage";
import { getBrandsOfSoldOffers } from "@/data/getBrandsOfSoldOffers";

export const metadata = {
  title: "sprzedaliśmy",
};

export const generateStaticParams = async () => {
  const brands = await getBrandsOfSoldOffers();

  return brands.data.brands.map((brand) => ({
    brand: brand.slug,
  }));
};

export default async function Page() {
  const brands = await getBrandsOfSoldOffers();

  return <SoldPage brands={brands.data.brands} />;
}
