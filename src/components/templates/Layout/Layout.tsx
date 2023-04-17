import { SkipLink } from "@/components/atoms/SkipLink/SkipLink";
import { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <SkipLink />
    {children}
  </>
);
