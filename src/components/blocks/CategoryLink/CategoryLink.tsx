import type { ReactNode } from "react";
import Link from "next/link";
import { Counter } from "./Counter";

type Props = {
  children: ReactNode;
  href: string;
};

export const CategoryLink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex flex-row justify-between items-center bg-primary-light hover:bg-primary focus:bg-primary px-8 py-6 text-secondary text-lg font-bold transition-colors"
    >
      {children}
    </Link>
  );
};

CategoryLink.Counter = Counter;
