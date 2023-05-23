import type { OfferContentFragment } from "@/generated/graphql";
import { formatMileage } from "@/utils/formatMileage";

type Props = {
  features: NonNullable<OfferContentFragment["features"]>;
};

export const FeaturesTable = ({ features }: Props) => {
  return (
    <table className="m-0">
      <thead className="sr-only">
        <tr>
          <th>parametr</th>
          <th>wartośc</th>
        </tr>
      </thead>
      <tbody>
        <tr key={features.kolor} className="pb-10">
          <td>Kolor</td>
          <td>{features.kolor}</td>
        </tr>
        <tr key={features.moc} className="pb-10">
          <td>Moc</td>
          <td>{features.moc} KM</td>
        </tr>
        <tr key={features.pojemnoscSilnika} className="pb-10">
          <td>Pojemność silnika</td>
          <td>{features.pojemnoscSilnika}</td>
        </tr>
        <tr key={features.przebieg} className="pb-10">
          <td>Przebieg</td>
          <td>{formatMileage(parseInt(features.przebieg))} km</td>
        </tr>
        <tr key={features.rocznik} className="pb-10">
          <td>Rocznik</td>
          <td>{features.rocznik}</td>
        </tr>
        <tr key={features.typ} className="pb-10">
          <td>Typ</td>
          <td>{features.typ}</td>
        </tr>
      </tbody>
    </table>
  );
};
