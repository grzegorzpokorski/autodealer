import { SoldPage } from "@/components/pages/SoldPage/SoldPage";
import categoriesFromJSON from "@/data/categories.json";

export const metadata = {
  title: "sprzedaliśmy",
};

export default function Page() {
  return <SoldPage soldByCategory={categoriesFromJSON} />;
}
