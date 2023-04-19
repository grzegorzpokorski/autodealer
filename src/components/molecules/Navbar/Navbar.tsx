"use client";

import { useId } from "react";
import { Container } from "@/components/atoms/Container/Container";
import { NavbarMenu } from "./NavbarMenu/NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarToggler } from "./NavbarToggler";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const menuID = `menu-${useId()}`;
  const { isMobileMenuOpen, toggleMobileMenu } = useNavbar();

  return (
    <nav className="h-20 flex flex-col justify-center relative z-10">
      <Container>
        <div className="flex flex-row justify-between">
          <Navbar.Logo />
          <Navbar.Toggler
            menuID={menuID}
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
          <Navbar.Menu id={menuID} isMobileMenuOpen={isMobileMenuOpen}>
            <Navbar.Menu.Item label="O nas" href="/o-nas" />
            <Navbar.Menu.Item label="Finansowanie" href="/finansowanie" />
            <Navbar.Menu.Item label="Gwarancja" href="/gwarancja" />
            <Navbar.Menu.Item label="Oferta" href="/oferta" />
            <Navbar.Menu.Item label="Sprzedaliśmy" href="/sprzedalismy" />
            <Navbar.Menu.Item label="Kontakt" href="/kontakt" />
          </Navbar.Menu>
        </div>
      </Container>
    </nav>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.Menu = NavbarMenu;
Navbar.Toggler = NavbarToggler;
