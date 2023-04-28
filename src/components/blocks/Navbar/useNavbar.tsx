import { useState, useCallback, useMemo } from "react";

export const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(false);
  }, []);

  const openMobileMenu = useCallback(() => {
    document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(true);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [closeMobileMenu, isMobileMenuOpen, openMobileMenu]);

  return useMemo(
    () => ({
      closeMobileMenu,
      openMobileMenu,
      isMobileMenuOpen,
      toggleMobileMenu,
    }),
    [closeMobileMenu, isMobileMenuOpen, openMobileMenu, toggleMobileMenu],
  );
};
