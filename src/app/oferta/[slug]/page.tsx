import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import { getOfferBySlug } from "@/data/getOfferBySlig";
import { getOffersSlugs } from "@/data/getOffersSlugs";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getOffersSlugs();
  return slugs.data.offers.map((offer) => ({ slug: offer.slug }));
}

export default async function Offer({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const offer = await getOfferBySlug({ slug });

  if (offer.data.offer)
    return (
      <SinglePage
        offer={offer.data.offer}
        // recommendedOffers={offersFromJSON.slice(0, 3)}
      />
    );
  return null;
}
