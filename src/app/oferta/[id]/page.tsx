import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import offersFromJSON from "@/data/offers.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return offersFromJSON.map((offer) => ({ id: offer.id }));
}

export default function Offer({ params: { id } }: { params: { id: string } }) {
  const offer = offersFromJSON.at(parseInt(id));
  if (offer)
    return (
      <SinglePage
        offer={offer}
        recommendedOffers={offersFromJSON.slice(0, 3)}
      />
    );
  return null;
}
