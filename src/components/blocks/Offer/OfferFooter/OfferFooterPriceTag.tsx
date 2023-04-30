import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  price: number;
  type: "netto" | "brutto";
};

export const OfferFooterPriceTag = ({ price, type }: Props) => (
  <p className="flex flex-row md:flex-col gap-2 md:gap-0 items-center md:items-start font-bold">
    {formatCurrency(price)}
    <span className="font-normal text-secondary/80 text-sm">{type}</span>
  </p>
);
