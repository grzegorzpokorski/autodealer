import { useState, useCallback, useMemo, useRef } from "react";
import { useIsAboveBreakpoint } from "@/hooks/useIsAboveBreakpoint";
import { useOnKeydown } from "@/hooks/useOnKeydown";

export const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAboveBreakpoint = useIsAboveBreakpoint({ breakpoint: 1024 });
  const disableFocusLock = !isMobileMenuOpen || isAboveBreakpoint;
  const mobileMenuTogglerRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
      setIsMobileMenuOpen(false);
    }
    if (mobileMenuTogglerRef.current) mobileMenuTogglerRef.current.focus();
  }, [isMobileMenuOpen]);

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

  useOnKeydown(
    "Escape",
    useCallback(() => {
      closeMobileMenu();
    }, [closeMobileMenu]),
  );

  return useMemo(
    () => ({
      closeMobileMenu,
      openMobileMenu,
      isMobileMenuOpen,
      toggleMobileMenu,
      disableFocusLock,
      mobileMenuTogglerRef,
    }),
    [
      closeMobileMenu,
      disableFocusLock,
      isMobileMenuOpen,
      openMobileMenu,
      toggleMobileMenu,
    ],
  );
};
