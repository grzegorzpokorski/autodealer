import { ReactNode } from "react";
import { SkipLink } from "@/components/atoms/SkipLink/SkipLink";
import { Footer } from "@/components/molecules/Footer/Footer";
import { Navbar } from "@/components/molecules/Navbar/Navbar";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <SkipLink />
    <Navbar />
    {children}
    <Footer />
  </>
);
