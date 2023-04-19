import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/components/atoms/Link/Link";
import { formatCurrency } from "@/utils/formatCurrency";
import { twMerge } from "tailwind-merge";

type ItemProps = {
  invoice: boolean;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  features: string[];
  price: number;
  link: string;
};

type OfferListProps = {
  offers: ItemProps[];
  withMarginAbove: boolean;
};

export const OfferList = ({ offers, withMarginAbove }: OfferListProps) => {
  return (
    <ul
      className={twMerge(
        "list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8",
        withMarginAbove && "mt-16",
      )}
      role="list"
    >
      {offers.map((props) => (
        <Item key={props.title} {...props} />
      ))}
    </ul>
  );
};

const Item = ({ invoice, image, title, features, price, link }: ItemProps) => (
  <li className="shadow-md rounded-md bg-white">
    <article className="flex flex-col gap-4 pb-4 min-h-full relative">
      {invoice && (
        <span className="absolute z-10 bg-secondary text-white text-xs px-3 py-1.5 top-2 left-2">
          Faktura VAT
        </span>
      )}
      <NextLink href="/">
        <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover object-center w-full h-full hover:scale-105 transition-all"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </picture>
      </NextLink>
      <header className="px-4">
        <NextLink href={link}>
          <h3 className="font-bold text-xl hover:underline focus:underline">
            {title}
          </h3>
        </NextLink>
      </header>
      <ul
        className="list-none px-4 flex flex-row flex-wrap gap-2 text-secondary/80"
        role="list"
      >
        {features.map((item) => (
          <li
            key={item}
            className="relative after:absolute after:content-[''] after:w-1 after:h-1 after:bg-secondary after:top-1/2 after:-right-3 me-3 after:-translate-y-1/2 last:after:hidden"
          >
            {item}
          </li>
        ))}
      </ul>
      <footer className="flex flex-row justify-between items-center px-4">
        <p className="flex flex-col font-bold">
          {formatCurrency(price)}
          <span className="font-normal text-secondary/80 text-sm">brutto</span>
        </p>
        <Link href={link} buttonStyle="primary">
          Przejdź do oferty
        </Link>
      </footer>
    </article>
  </li>
);
