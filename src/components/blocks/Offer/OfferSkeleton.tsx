import { OfferHeaderSkeleton } from "./parts/OfferHeader/OfferHeaderSkeleton";
import { OfferImageSkeleton } from "./parts/OfferImage/OfferImageSkeleton";

export const OfferSkeleton = () => (
  <div className="shadow-md rounded-md bg-white border-2 border-skeleton/80">
    <div className="flex flex-col gap-4 pb-4 min-h-full items-between relative">
      <OfferImageSkeleton />
      <OfferHeaderSkeleton />
    </div>
  </div>
);
