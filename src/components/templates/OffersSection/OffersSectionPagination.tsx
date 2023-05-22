import { Pagination } from "@/components/blocks/Pagination/Pagination";

type Props = {
  pagination: {
    currentPage: number;
    totalPages: number;
    base: string;
    searchParams: string | null;
  };
};

export const OffersSectionPagination = ({ pagination }: Props) => (
  <div className="mt-8">
    <Pagination pagination={pagination} />
  </div>
);
