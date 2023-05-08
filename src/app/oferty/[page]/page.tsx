import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";
import { getOffers } from "@/queries/getOffers";
import { getOffersCount } from "@/queries/getOffersCount";
import { offersPerPage } from "@/settings/consts";

export const dynamicParams = true;

export const metadata = {
  title: "oferta",
};

export const generateStaticParams = async () => {
  const offersCount = await getOffersCount({ sold: false });
  const totalPages = Math.ceil(offersCount / offersPerPage);

  return [...Array(totalPages).keys()].map((i) => ({ page: `${i + 1}` }));
};

export default async function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  const currentPage = parseInt(page);
  const offers = await getOffers({
    sold: false,
    first: offersPerPage,
    skip: (currentPage - 1) * offersPerPage,
  });

  const totalPages = Math.ceil(offers.offersCount / offersPerPage);

  return (
    <OfferPage>
      <OffersSection
        offers={offers.offers}
        title={`Obecnie dostępne modele, strona ${currentPage} z ${totalPages}`}
        pagination={{
          currentPage: currentPage,
          totalPages: totalPages,
          base: "/oferty",
        }}
      />
    </OfferPage>
  );
}
