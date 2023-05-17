import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const MetricsLink = ({ children, href, ...rest }: Props) => {
  const isInternal = href
    ? href.startsWith("#") || href.startsWith("/")
    : false;

  return isInternal ? (
    <Link {...rest} href={href} className="hover:underline focus:underline">
      {children}
    </Link>
  ) : (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
