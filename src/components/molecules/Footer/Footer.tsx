import { Container } from "@/components/atoms/Container/Container";
import { memo } from "react";

type FooterProps = {
  isHome?: boolean;
};

export const Footer = memo(({ isHome }: FooterProps) => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white text-center py-8">
      <Container>
        <p>Grzegorz Pokorski © {actualYear}</p>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
