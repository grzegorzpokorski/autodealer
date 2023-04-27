"use client";

import Image from "next/image";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useSlider } from "./useSlider";
import { Portal } from "@/components/atoms/Portal/Portal";

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
    prevSlide,
    nextSlide,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
    handleMouseMove,
    handleDragEnd,
    currentSlide,
    openLightbox,
    closeLightbox,
    isLightboxOpen,
  } = useSlider({ images });

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
            className={twMerge(
              "min-w-[100%] md:min-w-[60%] lg:min-w-[calc(40%)] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden snap-start relative",
              "md:border-4 transition-[border]",
              currentSlide === idx ? "border-primary" : "border-none",
            )}
          >
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openLightbox}
              draggable={false}
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
      <Portal>
        <div
          className={twMerge(
            "fixed bg-black/90 z-50 transition-all duration-300",
            isLightboxOpen ? "opacity-100 inset-0" : "opacity-0 -top-[100vh]",
          )}
          onClick={closeLightbox}
          role="dialog"
        >
          <ul
            className={twMerge(
              "list-none ovevflow-hidden flex flex-row transition-[transform] duration-[500ms]",
            )}
            style={{ transform: `translateX(calc(-${currentSlide}*100dvw))` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
          >
            {images.map((image) => (
              <li
                key={image.src}
                className="w-screen h-screen flex flex-col items-center justify-center"
              >
                <div className="max-w-[80dvw] w-[80dvw] max-h-[95dvh] h-auto mx-[10dvw]">
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
            ))}
          </ul>
          <button
            className={twMerge(
              "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
              "absolute top-1/2 -translate-y-1/2 left-4",
              "disabled:bg-gray-400",
              "opacity-80 hover:opacity-100 focus:opacity-100",
            )}
            onClick={(e) => {
              prevSlide();
              e.stopPropagation();
            }}
          >
            <FaAngleLeft />
            <span className="sr-only">poprzednie zdjęcie</span>
          </button>
          <button
            className={twMerge(
              "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
              "absolute top-1/2 -translate-y-1/2 right-4",
              "disabled:bg-gray-400",
              "opacity-80 hover:opacity-100 focus:opacity-100",
            )}
            onClick={(e) => {
              nextSlide();
              e.stopPropagation();
            }}
          >
            <FaAngleLeft className="rotate-180" />
            <span className="sr-only">następne zdjęcie</span>
          </button>
          <button
            className={twMerge(
              "absolute top-4 right-4 text-white",
              "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
              "opacity-80 hover:opacity-100 focus:opacity-100",
            )}
            onClick={closeLightbox}
          >
            <span className="sr-only">zamknij galerię</span>
            <FaPlus className="rotate-45" />
          </button>
        </div>
      </Portal>
    </div>
  );
};
