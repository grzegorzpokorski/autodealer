import { SkipLink } from "@/components/atoms/SkipLink/SkipLink";
import { Footer } from "@/components/molecules/Footer/Footer";
import { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <SkipLink />
    {children}
    <Footer />
  </>
);
