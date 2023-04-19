"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  label: string;
};

export const NavbarMenuItem = ({ label, href }: Props) => {
  const pathname = usePathname();

  return (
    <li>
      <a
        href={href}
        className={twMerge(
          "text-secondary/60 hover:text-secondary focus:text-secondary transition-colors",
          pathname === href && "text-secondary",
        )}
      >
        {label}
      </a>
    </li>
  );
};
