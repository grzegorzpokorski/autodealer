import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const MetricsLink = ({ children, ...rest }: Props) => {
  return (
    <Link {...rest} className="hover:underline focus:underline">
      {children}
    </Link>
  );
};
