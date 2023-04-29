import Image from "next/image";
import { twMerge } from "tailwind-merge";
import type { MouseEvent } from "react";

type Props = {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  isCurrent: boolean;
  onClick: (e: MouseEvent) => void;
};

export const SliderItem = ({ image, isCurrent, onClick }: Props) => (
  <li
    key={image.src}
    className={twMerge(
      "min-w-[100%] md:min-w-[60%] lg:min-w-[calc(40%)] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden snap-start relative",
      "md:border-4 transition-[border]",
      isCurrent ? "border-primary" : "border-none",
    )}
  >
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      draggable={false}
      className="relative w-full h-full"
    >
      <Image
        src={image.src}
        alt={image.alt}
        className={twMerge(
          "object-cover object-center hover:scale-105 transition-[transform]",
        )}
        sizes="(max-width: 720px) 100vw, 40vw"
        fill
        draggable={false}
      />
    </a>
  </li>
);
