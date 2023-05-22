"use client";

import type { MouseEvent } from "react";
import { useSlider } from "./useSlider";
import { SliderLightboxItem } from "./parts/SliderLightbox/parts/SliderLightboxItem/SliderLightboxItem";
import { SliderLightbox } from "./parts/SliderLightbox/SliderLightbox";
import { SliderLightboxTrack } from "./parts/SliderLightbox/parts/SliderLightboxTrack/SliderLightboxTrack";
import { SliderContainer } from "./parts/SliderContainer/SliderContainer";
import { SliderTrack } from "./parts/SliderTrack/SliderTrack";
import { SliderItem } from "./parts/SliderItem/SliderItem";
import type { ImageFragment } from "@/generated/graphql";

type Props = {
  images: (ImageFragment & { plaiceholder: string })[];
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
            key={image.url}
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
            <SliderLightboxItem key={image.url} image={image} />
          ))}
        </SliderLightboxTrack>
      </SliderLightbox>
    </SliderContainer>
  );
};
