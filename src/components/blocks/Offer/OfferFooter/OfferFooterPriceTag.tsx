import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  price: number;
  type: "netto" | "brutto";
};

export const OfferFooterPriceTag = ({ price, type }: Props) => (
  <p className="flex flex-col font-bold">
    {formatCurrency(price)}
    <span className="font-normal text-secondary/80 text-sm">{type}</span>
  </p>
);
