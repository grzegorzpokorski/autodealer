import { SoldPage } from "@/components/templates/SoldPage/SoldPage";
import categoriesFromJSON from "@/data/categories.json";

export default function Page() {
  return <SoldPage soldByCategory={categoriesFromJSON} />;
}
