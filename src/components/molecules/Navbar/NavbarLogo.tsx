"use client";

import Link from "next/link";
import { useNavbarLogo } from "./useNavbarLogo";

export const NavbarLogo = () => {
  const { isHome } = useNavbarLogo();

  if (isHome) {
    return (
      <Link href="#">
        <h1 className="font-bold text-xl text-primary-dark">
          Auto<span className="text-secondary">Dealer</span>
        </h1>
      </Link>
    );
  }

  return (
    <Link href="/">
      <p className="font-bold text-xl text-primary-dark">
        Auto<span className="text-secondary">Dealer</span>
      </p>
    </Link>
  );
};
