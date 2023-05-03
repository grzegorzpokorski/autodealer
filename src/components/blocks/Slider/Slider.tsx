"use client";

import type { MouseEvent } from "react";
import { useSlider } from "./useSlider";
import { SliderLightboxItem } from "./SliderLightboxItem";
import { SliderLightbox } from "./SliderLightbox";
import { SliderLightboxTrack } from "./SliderLightboxTrack";
import { SliderContainer } from "./SliderContainer";
import { SliderTrack } from "./SliderTrack";
import { SliderItem } from "./SliderItem";

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
    <SliderContainer>
      <SliderTrack
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      >
        {images.map((image, idx) => (
          <SliderItem
            key={image.src}
            image={image}
            isCurrent={currentSlide === idx}
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              setSlide(idx);
              openLightbox();
            }}
          />
        ))}
      </SliderTrack>
      <SliderLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        slidesCount={images.length}
      >
        <SliderLightboxTrack
          currentSlide={currentSlide}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
        >
          {images.map((image) => (
            <SliderLightboxItem key={image.src} image={image} />
          ))}
        </SliderLightboxTrack>
      </SliderLightbox>
    </SliderContainer>
  );
};
