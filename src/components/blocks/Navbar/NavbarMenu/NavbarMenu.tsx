import type { ReactNode } from "react";
import { NavbarMenuItem } from "./NavbarMenuItem";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  id: string;
  isMobileMenuOpen: boolean;
};

export const NavbarMenu = ({ children, id, isMobileMenuOpen }: Props) => (
  <div
    className={twMerge(
      "list-none lg:flex lg:static fixed inset-0 flex flex-col bg-white items-center justify-center z-20 -translate-y-full lg:translate-y-0 transition-[transform] duration-300",
      isMobileMenuOpen && "translate-y-0",
    )}
  >
    <ul
      className={twMerge(
        "list-none flex flex-col lg:flex-row gap-6 py-10 lg:py-0 overflow-y-auto w-full lg:w-auto text-center items-center",
      )}
      role="list"
      id={id}
    >
      {children}
    </ul>
  </div>
);

NavbarMenu.Item = NavbarMenuItem;
