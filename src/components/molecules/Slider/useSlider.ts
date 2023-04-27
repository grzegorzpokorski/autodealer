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

  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setDragEnd(null);
    setDragStart(e.targetTouches[0].clientX);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setDragEnd(null);
    setDragStart(e.clientX);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => setDragEnd(e.targetTouches[0].clientX),
    [],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => setDragEnd(e.clientX),
    [],
  );

  const handleDragEnd = useCallback(() => {
    if (!dragStart || !dragEnd) return;

    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  }, [dragEnd, dragStart, nextSlide, prevSlide]);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setIsLightboxOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  useOnKeydown(
    "Escape",
    useCallback(() => {
      closeLightbox();
    }, []),
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
