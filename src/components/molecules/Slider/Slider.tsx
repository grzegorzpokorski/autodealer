import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
};

export const Slider = ({ images }: Props) => {
  return (
    <div className="relative">
      <ul className="overflow-x-scroll flex flex-row gap-4 scroll-smooth snap-mandatory snap-x">
        {images.map((image) => (
          <li
            key={image.src}
            className="min-w-[100%] md:min-w-[40%] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden object-cover object-center snap-x snap-start"
            data-role="slide"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="scale-105"
            />
          </li>
        ))}
      </ul>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-colors",
          "absolute top-1/2 -translate-y-1/2 left-4 md:-left-5",
        )}
      >
        <FaAngleLeft />
        <span className="sr-only">poprzednie zdjęcie</span>
      </button>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-colors",
          "absolute top-1/2 -translate-y-1/2 right-4 md:-right-5",
        )}
      >
        <FaAngleLeft className="rotate-180" />
        <span className="sr-only">następne zdjęcie</span>
      </button>
    </div>
  );
};
