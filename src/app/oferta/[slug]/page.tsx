import { SinglePage } from "@/components/pages/SinglePage/SinglePage";
import type {
  GetOfferBySlugQuery,
  GetOfferBySlugQueryVariables,
  GetOfferSlugsQuery,
} from "@/generated/graphql";
import {
  GetOfferSlugsDocument,
  GetOfferBySlugDocument,
} from "@/generated/graphql";
import { client } from "@/lib/apollo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await client.query<GetOfferSlugsQuery>({
    query: GetOfferSlugsDocument,
  });
  return slugs.data.offers.map((offer) => ({ slug: offer.slug }));
}

export default async function Offer({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const offer = await client.query<
    GetOfferBySlugQuery,
    GetOfferBySlugQueryVariables
  >({
    query: GetOfferBySlugDocument,
    variables: { slug },
  });

  if (offer.data.offer)
    return (
      <SinglePage
        offer={offer.data.offer}
        // recommendedOffers={offersFromJSON.slice(0, 3)}
      />
    );
  return null;
}
