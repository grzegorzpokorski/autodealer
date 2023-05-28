"use client";

import Link from "next/link";
import { useNavbarLogo } from "./useNavbarLogo";
import { env } from "@/lib/env.mjs";

export const NavbarLogo = () => {
  const { isHome } = useNavbarLogo();

  if (isHome) {
    return (
      <Link href="#">
        <h1 className="font-bold text-xl text-primary-dark">
          {env.NEXT_PUBLIC_SITE_NAME_FIRST_PART}
          <span className="text-secondary">
            {env.NEXT_PUBLIC_SITE_NAME_SECOND_PART}
          </span>
        </h1>
      </Link>
    );
  }

  return (
    <Link href="/">
      <p className="font-bold text-xl text-primary-dark">
        {env.NEXT_PUBLIC_SITE_NAME_FIRST_PART}
        <span className="text-secondary">
          {env.NEXT_PUBLIC_SITE_NAME_SECOND_PART}
        </span>
      </p>
    </Link>
  );
};
