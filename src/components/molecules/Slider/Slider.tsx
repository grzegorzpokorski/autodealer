"use client";

import Image from "next/image";
import type { MouseEvent, TouchEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
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
  const slidesCount = images.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.children;
      const current = slides[currentSlide];

      if (current instanceof HTMLLIElement)
        sliderRef.current.scrollTo(current.offsetLeft, 0);
    }
  }, [currentSlide]);

  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: TouchEvent) => {
    setDragEnd(null);
    setDragStart(e.targetTouches[0].clientX);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setDragEnd(null);
    setDragStart(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) =>
    setDragEnd(e.targetTouches[0].clientX);

  const handleMouseMove = (e: MouseEvent) => setDragEnd(e.clientX);

  const handleDragEnd = () => {
    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
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
            data-role="slide"
            data-slide={idx}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover object-center hover:scale-105 transition-[transform]"
              sizes="(max-width: 720px) 100vw, 40vw"
              draggable={false}
              fill
            />
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
        // disabled={currentSlide === 0}
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
        // disabled={currentSlide === slidesCount - 1}
        onClick={nextSlide}
      >
        <FaAngleLeft className="rotate-180" />
        <span className="sr-only">następne zdjęcie</span>
      </button>
    </div>
  );
};
