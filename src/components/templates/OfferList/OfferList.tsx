import Link from "next/link";
import { Offer } from "@/components/blocks/Offer/Offer";
import type { GetOffersQuery } from "@/generated/graphql";

type Props = {
  offers: GetOffersQuery["offers"];
  // offers: {
  //   id: string;
  //   sold: boolean;
  //   invoice: boolean;
  //   title: string;
  //   features: {
  //     label: string;
  //     value: string;
  //   }[];
  //   price: number;
  //   gallery: {
  //     src: string;
  //     width: number;
  //     height: number;
  //     alt: string;
  //   }[];
  // }[];
};

export const OfferList = ({ offers }: Props) => (
  <>
    {offers.map((offer) => (
      <Offer key={offer.title}>
        {offer.invoice && <Offer.Invoice />}
        <Link href={`/oferta/${offer.slug}`}>
          <Offer.Image image={offer.gallery[0]} />
        </Link>
        <Offer.Header href={`/oferta/${offer.slug}`} title={offer.title} />
        {offer.features && (
          <Offer.FeaturesList>
            <Offer.FeaturesList.Item key={offer.features.rocznik}>
              {offer.features.rocznik}
            </Offer.FeaturesList.Item>
            <Offer.FeaturesList.Item key={offer.features.moc}>
              {offer.features.moc}
            </Offer.FeaturesList.Item>
            <Offer.FeaturesList.Item key={offer.features.przebieg}>
              {offer.features.przebieg}
            </Offer.FeaturesList.Item>
            <Offer.FeaturesList.Item key={offer.features.pojemnoscSilnika}>
              {offer.features.pojemnoscSilnika}
            </Offer.FeaturesList.Item>
            <Offer.FeaturesList.Item key={offer.features.kolor}>
              {offer.features.kolor}
            </Offer.FeaturesList.Item>
            <Offer.FeaturesList.Item key={offer.features.typ}>
              {offer.features.typ}
            </Offer.FeaturesList.Item>
          </Offer.FeaturesList>
        )}
        <Offer.Footer>
          <Offer.Footer.PriceTag price={offer.price} type="brutto" />
          <Offer.Footer.Link href={`/oferta/${offer.slug}`} />
        </Offer.Footer>
      </Offer>
    ))}
  </>
);
