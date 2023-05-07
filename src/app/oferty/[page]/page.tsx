import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";
import { getOffers } from "@/data/getOffers";
import { getOffersCount } from "@/data/getOffersCount";
import { offersPerPage } from "@/settings/consts";

export const dynamicParams = false;

export const metadata = {
  title: "oferta",
};

export const generateStaticParams = async () => {
  const offertCount = await getOffersCount({ sold: false });

  const totalOffersCount =
    offertCount.data.offersConnection.aggregate.count || 1;
  const totalPages = Math.ceil(totalOffersCount / offersPerPage);

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

  const totalOffersCount = offers.data.offersConnection.aggregate.count || 1;
  const totalPages = Math.ceil(totalOffersCount / offersPerPage);

  return (
    <OfferPage>
      <OffersSection
        offers={offers.data.offers}
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
