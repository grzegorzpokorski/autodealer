import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import { getOfferBySlug } from "@/queries/getOfferBySlug";
import { getOffersSlugs } from "@/queries/getOffersSlugs";
import { getOffersBySlugs } from "@/queries/getOffersBySlugs";
import { shuffleArray } from "@/utils/shuffleArray";

export const dynamicParams = true;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const offer = await getOfferBySlug({ slug });

  if (!offer) return notFound();

  const promoString = `${offer.title || ""} - ${offer.features?.typ || ""} - ${
    offer.features?.rocznik || ""
  } - ${offer.price || 0} zł`;

  return {
    title: promoString,
    description: `${promoString}. Zapytaj o szczegóły oferty lub umów się na jazdę testową oraz spotkanie. AutoDealer`,
    alternates: {
      canonical: `/oferta/${slug}`,
    },
    openGraph: offer.gallery[0]
      ? {
          images: [
            {
              url: offer.gallery[0].url,
              width: offer.gallery[0].width || 800,
              height: offer.gallery[0].height || 600,
              alt: offer.gallery[0].alt || "",
            },
          ],
        }
      : {
          images: [
            {
              url: `/api/og?width=1200&height=630`,
              width: 1200,
              height: 630,
              alt: "",
            },
          ],
        },
  };
}

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
