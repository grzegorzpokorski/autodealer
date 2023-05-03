import type { ReactNode } from "react";
import { SkipLink } from "@/components/blocks/SkipLink/SkipLink";
import { Footer } from "@/components/blocks/Footer/Footer";
import { Navbar } from "@/components/blocks/Navbar/Navbar";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <div id="page-root">
    <SkipLink />
    <Navbar />
    {children}
    <Footer />
  </div>
);
