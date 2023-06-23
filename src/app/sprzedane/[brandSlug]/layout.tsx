import type { ReactNode } from "react";
import { DefaultBanner } from "@/components/sections/DefaultBanner/DefaultBanner";
import { HeaderSection } from "@/components/templates/HeaderSection/HeaderSection";
import { Main } from "@/components/blocks/Main/Main";
import { getBrandNameBySlug } from "@/queries/getBrandNameBySlug";

type Props = {
  children: ReactNode;
  params: { brandSlug: string };
};

export default async function Layout({
  children,
  params: { brandSlug },
}: Props) {
  const brandName = await getBrandNameBySlug({ slug: brandSlug });
  return (
    <>
      <HeaderSection title={`Sprzedane: ${brandName || brandSlug}`} />
      <Main>
        {children}
        <DefaultBanner />
      </Main>
    </>
  );
}
