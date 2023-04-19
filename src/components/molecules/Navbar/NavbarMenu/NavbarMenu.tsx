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
      "list-none hidden lg:flex lg:static",
      isMobileMenuOpen &&
        "fixed inset-0 flex flex-col bg-white items-center justify-center z-20",
    )}
  >
    <ul
      className={twMerge(
        "list-none flex flex-col lg:flex-row gap-4 py-10 lg:py-0 overflow-y-auto w-full lg:w-auto text-center",
      )}
      role="list"
      id={id}
    >
      {children}
    </ul>
  </div>
);

NavbarMenu.Item = NavbarMenuItem;
