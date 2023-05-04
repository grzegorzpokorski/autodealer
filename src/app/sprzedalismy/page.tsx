import { SoldPage } from "@/components/pages/SoldPage/SoldPage";
import type { GetBrandsOfSoldOffersQuery } from "@/generated/graphql";
import { GetBrandsOfSoldOffersDocument } from "@/generated/graphql";
import { client } from "@/lib/apollo";

export const metadata = {
  title: "sprzedaliśmy",
};

export const generateStaticParams = async () => {
  const brands = await client.query<GetBrandsOfSoldOffersQuery>({
    query: GetBrandsOfSoldOffersDocument,
  });

  return brands.data.brands.map((brand) => ({
    brand: brand.slug,
  }));
};

export default async function Page() {
  const brands = await client.query<GetBrandsOfSoldOffersQuery>({
    query: GetBrandsOfSoldOffersDocument,
  });

  return <SoldPage brands={brands.data.brands} />;
}
