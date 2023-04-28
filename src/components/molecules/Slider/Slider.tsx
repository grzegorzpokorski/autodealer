"use client";

import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useSlider } from "./useSlider";
import { Portal } from "@/components/atoms/Portal/Portal";
import { ArrowButton } from "./ArrowButton";
import { CloseButton } from "./CloseButton";
import { LightboxCounter } from "./LightboxCounter";

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
    setSlide,
  } = useSlider({ images });

  return (
    <div className="relative">
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
              onClick={(e) => {
                setSlide(idx);
                openLightbox(e);
              }}
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
      <ArrowButton onClick={prevSlide} position="left" lightbox={false}>
        <>
          <FaAngleLeft />
          <span className="sr-only">poprzednie zdjęcie</span>
        </>
      </ArrowButton>
      <ArrowButton onClick={nextSlide} position="right" lightbox={false}>
        <>
          <FaAngleLeft className="rotate-180" />
          <span className="sr-only">następne zdjęcie</span>
        </>
      </ArrowButton>
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
                className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center"
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
          <ArrowButton
            onClick={(e) => {
              prevSlide();
              e.stopPropagation();
            }}
            position="left"
            lightbox
          >
            <>
              <FaAngleLeft />
              <span className="sr-only">poprzednie zdjęcie</span>
            </>
          </ArrowButton>
          <ArrowButton
            onClick={(e) => {
              nextSlide();
              e.stopPropagation();
            }}
            position="right"
            lightbox
          >
            <>
              <FaAngleLeft className="rotate-180" />
              <span className="sr-only">następne zdjęcie</span>
            </>
          </ArrowButton>
          <CloseButton onClick={closeLightbox} />
          <LightboxCounter>
            {currentSlide + 1}/{images.length}
          </LightboxCounter>
        </div>
      </Portal>
    </div>
  );
};
