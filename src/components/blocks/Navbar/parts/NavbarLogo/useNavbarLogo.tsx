import { usePathname } from "next/navigation";

export const useNavbarLogo = () => {
  const pathname = usePathname();
  const isHome = pathname === "/" ? true : false;

  return { isHome };
};
