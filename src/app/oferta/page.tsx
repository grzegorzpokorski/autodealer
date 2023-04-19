import { OfferPage } from "@/components/templates/OfferPage/OfferPage";
import offers from "@/data/offers.json";

export default function Page() {
  return <OfferPage offers={offers} />;
}
