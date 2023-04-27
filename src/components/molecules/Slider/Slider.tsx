"use client";

import Image from "next/image";
import { MouseEvent, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import { useSlider } from "./useSlider";
import FsLightbox from "fslightbox-react";

type Props = {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
};

export const Slider = ({ images }: Props) => {
  const {
    sliderRef,
    setSlide,
    prevSlide,
    nextSlide,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
    handleMouseMove,
    handleDragEnd,
  } = useSlider({ images });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (event: MouseEvent, number: number) => {
    event.preventDefault();
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
    setSlide(number - 1);
  };

  return (
    <div className="relative group">
      <ul
        className="overflow-hidden flex flex-row gap-4 scroll-smooth snap-x"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
      >
        {images.map((image, idx) => (
          <li
            key={image.src}
            className="min-w-[100%] md:min-w-[60%] lg:min-w-[calc(40%)] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden snap-start relative"
          >
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openLightboxOnSlide(e, idx + 1)}
              draggable={false}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover object-center hover:scale-105 transition-[transform]"
                sizes="(max-width: 720px) 100vw, 40vw"
                fill
                draggable={false}
              />
            </a>
          </li>
        ))}
      </ul>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
          "absolute top-1/2 -translate-y-1/2 left-4 xl:-left-5",
          "disabled:bg-gray-400",
          "opacity-80 hover:opacity-100 focus:opacity-100",
        )}
        onClick={prevSlide}
      >
        <FaAngleLeft />
        <span className="sr-only">poprzednie zdjęcie</span>
      </button>
      <button
        className={twMerge(
          "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
          "absolute top-1/2 -translate-y-1/2 right-4 xl:-right-5",
          "disabled:bg-gray-400",
          "opacity-80 hover:opacity-100 focus:opacity-100",
        )}
        onClick={nextSlide}
      >
        <FaAngleLeft className="rotate-180" />
        <span className="sr-only">następne zdjęcie</span>
      </button>
      {createPortal(
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images.map((image) => image.src)}
          slide={lightboxController.slide}
        />,
        document.body,
      )}
    </div>
  );
};
