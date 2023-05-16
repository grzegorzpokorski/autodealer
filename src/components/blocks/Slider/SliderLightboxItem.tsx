import Image from "next/image";
import type { ImageFragment } from "@/generated/graphql";

type Props = {
  image: ImageFragment & { plaiceholder: string };
};

export const SliderLightboxItem = ({ image }: Props) => (
  <li
    key={image.url}
    className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center"
  >
    <div className="max-w-[95dvw] md:max-w-[80dvw] w-[95dvw] md:w-[80dvw] :max-h-[95dvh] h-auto mx-[2.5dvw] md:mx-[10dvw]">
      <Image
        src={image.url}
        alt={image.alt || ""}
        height={image.height || 0}
        width={image.width || 0}
        className="m-auto w-auto h-auto max-h-full"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        placeholder="blur"
        blurDataURL={image.plaiceholder}
      />
    </div>
  </li>
);
