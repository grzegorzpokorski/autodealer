"use client";

import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { NavbarMenu } from "./NavbarMenu/NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarToggler } from "./NavbarToggler";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const menuID = `menu-${useId()}`;
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar();

  return (
    <nav className="h-20 flex flex-col justify-center relative z-10 bg-white">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <Navbar.Logo />
          <Navbar.Toggler
            menuID={menuID}
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
          <Navbar.Menu id={menuID} isMobileMenuOpen={isMobileMenuOpen}>
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="O nas"
              href="/"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Finansowanie"
              href="/finansowanie"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Gwarancja"
              href="/gwarancja"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Oferta"
              href="/oferta"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Sprzedaliśmy"
              href="/sprzedalismy"
            />
            <Navbar.Menu.Item
              onClick={closeMobileMenu}
              label="Kontakt"
              href="/kontakt"
            />
            <Navbar.Menu.Item
              label="+48 123 456 789"
              href="tel:+48123456789"
              button
              onClick={() => null}
            />
          </Navbar.Menu>
        </div>
      </Container>
    </nav>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Toggler = NavbarToggler;
