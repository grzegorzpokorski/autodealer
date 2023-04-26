"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const sliderRef = useRef<HTMLUListElement>(null);

  const prevSlide = () => {
    console.log("prev");
  };

  const nextSlide = () => {
    console.log("next");
  };

  return (
    <div className="relative">
      <ul
        className="overflow-scroll flex flex-row gap-4 scroll-smooth snap-mandatory snap-x snap-start"
        ref={sliderRef}
      >
        {images.map((image, idx) => (
          <li
            key={image.src}
            className="min-w-[100%] md:min-w-[60%] lg:min-w-[40%] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden snap-x snap-start relative"
            data-role="slide"
            data-slide={idx}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover object-center"
              sizes="(max-width: 720px) 100vw, 40vw"
              draggable={false}
              fill
            />
          </li>
        ))}
      </ul>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-colors",
          "absolute top-1/2 -translate-y-1/2 left-4 xl:-left-5",
        )}
        onClick={prevSlide}
      >
        <FaAngleLeft />
        <span className="sr-only">poprzednie zdjęcie</span>
      </button>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-colors",
          "absolute top-1/2 -translate-y-1/2 right-4 xl:-right-5",
        )}
        onClick={nextSlide}
      >
        <FaAngleLeft className="rotate-180" />
        <span className="sr-only">następne zdjęcie</span>
      </button>
    </div>
  );
};
