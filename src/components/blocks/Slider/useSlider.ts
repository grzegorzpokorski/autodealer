import { useOnKeydown } from "@/hooks/useOnKeydown";
import type { MouseEvent, TouchEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

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

  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1)),
    [slidesCount],
  );

  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1)),
    [slidesCount],
  );

  const setSlide = (slide: number) => setCurrentSlide(slide);

  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.children;
      const current = slides[currentSlide];

      if (current instanceof HTMLLIElement)
        sliderRef.current.scrollTo(current.offsetLeft, 0);
    }
  }, [currentSlide]);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
    document.body.classList.add("overflow-hidden");
    document.body.querySelector("#page-root")?.setAttribute("inert", "true");
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.classList.remove("overflow-hidden");
    document.body.querySelector("#page-root")?.removeAttribute("inert");
  }, []);

  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragEnd = useRef<{ x: number; y: number } | null>(null);
  const minXSwipeDistance = 50;
  const minYSwipeDistance = 100;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    dragStart.current = null;
    dragStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    dragStart.current = null;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    dragEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    dragEnd.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragStart.current || !dragEnd.current) return;

    const xDistance = dragStart.current.x - dragEnd.current.x;
    const isLeftSwipe = xDistance > minXSwipeDistance;
    const isRightSwipe = xDistance < -minXSwipeDistance;

    const yDistance = dragStart.current.y - dragEnd.current.y;
    const isUpSwipe =
      yDistance > minYSwipeDistance && 2 * yDistance > xDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    if (isUpSwipe) closeLightbox();

    dragEnd.current = null;
    dragStart.current = null;
  }, [closeLightbox, dragEnd, dragStart, nextSlide, prevSlide]);

  useOnKeydown(
    "Escape",
    useCallback(() => {
      closeLightbox();
    }, [closeLightbox]),
  );

  useOnKeydown(
    "ArrowLeft",
    useCallback(() => {
      if (isLightboxOpen) prevSlide();
    }, [isLightboxOpen, prevSlide]),
  );

  useOnKeydown(
    "ArrowRight",
    useCallback(() => {
      if (isLightboxOpen) nextSlide();
    }, [isLightboxOpen, nextSlide]),
  );

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
    currentSlide,
    openLightbox,
    closeLightbox,
    isLightboxOpen,
  };
};
