import { Container } from "@/components/blocks/Container/Container";
import { memo } from "react";

export const Footer = memo(() => {
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
