import Image from "next/image";
import type { ImageFragment } from "@/generated/graphql";
import { getPlaiceholder } from "plaiceholder";
import defaultOgImage from "publicDir/default-og.png";

type Props = {
  image: ImageFragment;
};

export const OfferImage = async ({ image }: Props) => {
  if (image) {
    const { base64: plaiceholder } = await getPlaiceholder(image.url);
    return (
      <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md bg-primary">
        <Image
          src={image.url}
          alt={image.alt || ""}
          width={image.width || 600}
          height={image.height || 300}
          className="object-cover object-center w-full h-full motion-safe:hover:scale-105 transition-all motion-reduce:transition-none"
          sizes="(max-width: 720px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={plaiceholder}
        />
      </picture>
    );
  }

  return (
    <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md bg-primary">
      <Image
        src={defaultOgImage}
        alt={""}
        fill
        className="object-cover object-center w-full h-full"
        sizes="(max-width: 720px) 100vw, 50vw"
        placeholder="blur"
      />
    </picture>
  );
};
