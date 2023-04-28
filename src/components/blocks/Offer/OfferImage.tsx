import Image from "next/image";

type Props = {
  image: {
    src: string;
    height: number;
    width: number;
    alt: string;
  };
};

export const OfferImage = ({ image }: Props) => (
  <picture className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="object-cover object-center w-full h-full hover:scale-105 transition-all"
      sizes="(max-width: 720px) 100vw, 50vw"
    />
  </picture>
);
