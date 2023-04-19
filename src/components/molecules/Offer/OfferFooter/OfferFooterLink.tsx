import { Link } from "@/components/atoms/Link/Link";

type Props = {
  href: string;
};

export const OfferFooterLink = ({ href }: Props) => (
  <Link href={href} buttonStyle="primary">
    Przejdź do oferty
  </Link>
);
