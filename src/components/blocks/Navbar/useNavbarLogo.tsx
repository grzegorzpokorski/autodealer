import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useNavbarLogo = () => {
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  return { isHome };
};
