import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";

type Props = {
  href: string;
};

export const OfferFooterLink = ({ href }: Props) => (
  <LinkAsButton href={href} linkStyle="primary">
    Przejdź do oferty
  </LinkAsButton>
);
