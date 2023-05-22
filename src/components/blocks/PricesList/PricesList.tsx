import { twMerge } from "tailwind-merge";
import { formatCurrency } from "@/utils/formatCurrency";

type Props = {
  invoice: boolean;
  price: number;
};

export const PricesList = ({ invoice, price }: Props) => {
  return (
    <div
      className={twMerge(
        "divide-y-2 [&>p]:py-4 [&>p:first-child]:pt-0 [&>p:last-child]:pb-0",
        !invoice && "pb-4 border-b-2",
      )}
    >
      {invoice ? (
        <>
          <p className="flex flex-row justify-between">
            Cena brutto:{" "}
            <span className="font-bold">{formatCurrency(price)}</span>
          </p>
          <p className="flex flex-row justify-between">
            Cena netto:{" "}
            <span className="font-bold">{formatCurrency(price * 0.77)}</span>
          </p>
        </>
      ) : (
        <p className="flex flex-row justify-between">
          Cena:
          <span className="font-bold">{formatCurrency(price)}</span>
        </p>
      )}
    </div>
  );
};
