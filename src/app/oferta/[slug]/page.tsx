import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import { getOfferBySlug } from "@/queries/getOfferBySlug";
import { getOffersSlugs } from "@/queries/getOffersSlugs";
import { getOffersBySlugs } from "@/queries/getOffersBySlugs";
import { notFound } from "next/navigation";
import { shuffleArray } from "@/utils/shuffleArray";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getOffersSlugs({
    sold: false,
  });

  return slugs.map((slug) => ({ slug }));
}

export default async function Offer({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const offer = await getOfferBySlug({ slug });
  const slugsOfAvailableOffers = await getOffersSlugs({ sold: false });
  const slugsOfAvailableOffersWithoutCurrent = slugsOfAvailableOffers.filter(
    (item) => item !== slug,
  );
  const shuffled = shuffleArray({
    unshuffled: slugsOfAvailableOffersWithoutCurrent,
  });
  const numberOfRecomendedOffers = 3;

  const recommendedOffers = await getOffersBySlugs({
    first: numberOfRecomendedOffers,
    skip: 0,
    limitCountOfImages: 1,
    sold: false,
    slugs: shuffled.slice(0, numberOfRecomendedOffers),
  });

  if (!offer) return notFound();

  return <SinglePage offer={offer} recommendedOffers={recommendedOffers} />;
}
