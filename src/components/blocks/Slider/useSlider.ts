import { useOnKeydown } from "@/hooks/useOnKeydown";
import {
  MouseEvent,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [dragEnd, setDragEnd] = useState<{ x: number; y: number } | null>(null);
  const minXSwipeDistance = 50;
  const minYSwipeDistance = 100;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setDragEnd(null);
    setDragStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setDragEnd(null);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    setDragEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setDragEnd({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragStart || !dragEnd) return;

    const xDistance = dragStart.x - dragEnd.x;
    const isLeftSwipe = xDistance > minXSwipeDistance;
    const isRightSwipe = xDistance < -minXSwipeDistance;

    const yDistance = dragStart.y - dragEnd.y;
    const isUpSwipe =
      yDistance > minYSwipeDistance && 2 * yDistance > xDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    if (isUpSwipe) closeLightbox();
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
