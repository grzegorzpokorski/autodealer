import Link from "next/link";
import type { OfferContentFragment } from "@/generated/graphql";
import { Offer } from "@/components/blocks/Offer/Offer";
import { formatMileage } from "@/utils/formatMileage";

type Props = {
  offer: OfferContentFragment;
};

export const OfferCard = ({ offer }: Props) => (
  <Offer key={offer.title}>
    {offer.invoice && <Offer.Invoice />}
    <Link href={`/oferta/${offer.slug}`} tabIndex={-1}>
      <Offer.Image image={offer.gallery[0]} />
    </Link>
    <Offer.Header href={`/oferta/${offer.slug}`} title={offer.title} />
    {offer.features && (
      <Offer.FeaturesList>
        <Offer.FeaturesList.Item key={offer.features.rocznik}>
          {offer.features.rocznik}
        </Offer.FeaturesList.Item>
        <Offer.FeaturesList.Item key={offer.features.moc}>
          {offer.features.moc} KM
        </Offer.FeaturesList.Item>
        <Offer.FeaturesList.Item key={offer.features.przebieg}>
          {formatMileage(parseInt(offer.features.przebieg))} km
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
);
