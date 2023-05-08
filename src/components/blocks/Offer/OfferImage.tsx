import Image from "next/image";
import type { GetOffersQuery } from "@/generated/graphql";
import { base64 } from "@/utils/imagePlaiceholder";

type Props = {
  image: GetOffersQuery["offers"][number]["gallery"][number];
};

export const OfferImage = ({ image }: Props) => {
  return (
    <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md bg-primary">
      <Image
        src={image.url}
        alt={image.alt || ""}
        width={image.width || 0}
        height={image.height || 0}
        className="object-cover object-center w-full h-full hover:scale-105 transition-all"
        sizes="(max-width: 720px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={base64}
      />
    </picture>
  );
};
