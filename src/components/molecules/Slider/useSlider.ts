import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";

type Args = {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
};
export const useSlider = ({ images }: Args) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const slidesCount = images.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));

  const setSlide = (slide: number) => setCurrentSlide(slide);

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

  return {
    sliderRef,
    setSlide,
    prevSlide,
    nextSlide,
    handleTouchStart,
    handleTouchMove,
    handleMouseDown,
    handleMouseMove,
    handleDragEnd,
  };
};
