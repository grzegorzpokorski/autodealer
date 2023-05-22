import { Main } from "@/components/blocks/Main/Main";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { HedaerSection } from "@/components/templates/HeaderSection/HeaderSection";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HedaerSection title="Oferta" />
      <Main>
        {children}
        <DefaultBanner />
      </Main>
    </>
  );
}
