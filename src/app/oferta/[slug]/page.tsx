import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import { getOfferBySlug } from "@/queries/getOfferBySlug";
import { getOffersSlugs } from "@/queries/getOffersSlugs";
import { getOffersBySlugs } from "@/queries/getOffersBySlugs";
import { notFound } from "next/navigation";
import { shuffleArray } from "@/utils/shuffleArray";
import type { Metadata } from "next";

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

  const image = offer.gallery[0]
    ? {
        url: offer.gallery[0].url,
        thumbnail: offer.gallery[0].thumbnail,
        width: offer.gallery[0].width || 800,
        height: offer.gallery[0].height || 600,
        alt: offer.gallery[0].alt || "",
      }
    : null;

  return {
    title: promoString,
    description: `${promoString}. Zapytaj o szczegóły oferty lub umów się na jazdę testową oraz spotkanie. AutoDealer`,
    alternates: {
      canonical: `/oferta/${slug}`,
    },
    openGraph: image
      ? {
          images: [
            {
              url: image.url,
              width: image.width,
              height: image.height,
              alt: image.alt,
            },
          ],
        }
      : null,
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
