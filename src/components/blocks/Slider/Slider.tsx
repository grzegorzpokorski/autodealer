"use client";

import type { MouseEvent } from "react";
import { useEffect } from "react";
import { useSlider } from "./useSlider";
import { LightboxItem } from "./LightboxItem";
import { Lightbox } from "./Lightbox";
import { LightboxTrack } from "./LightboxTrack";
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

  useEffect(() => console.log("render slider"), []);

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
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        slidesCount={images.length}
      >
        <LightboxTrack
          currentSlide={currentSlide}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
        >
          {images.map((image) => (
            <LightboxItem key={image.src} image={image} />
          ))}
        </LightboxTrack>
      </Lightbox>
    </SliderContainer>
  );
};
