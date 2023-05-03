import Image from "next/image";

type Props = {
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
};

export const SliderLightboxItem = ({ image }: Props) => (
  <li
    key={image.src}
    className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center"
  >
    <div className="max-w-[95dvw] md:max-w-[80dvw] w-[95dvw] md:w-[80dvw] :max-h-[95dvh] h-auto mx-[2.5dvw] md:mx-[10dvw]">
      <Image
        src={image.src}
        alt={image.alt}
        height={image.height}
        width={image.width}
        className="m-auto w-auto h-auto max-h-full"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </li>
);
