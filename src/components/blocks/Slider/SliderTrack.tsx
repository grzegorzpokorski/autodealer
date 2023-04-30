import {
  type ReactNode,
  type TouchEvent,
  type MouseEvent,
  forwardRef,
} from "react";
import { ArrowButton } from "./ArrowButton";
import { FaAngleLeft } from "react-icons/fa";

type Props = {
  children: ReactNode[];
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
};

export const SliderTrack = forwardRef<HTMLUListElement, Props>(
  (
    {
      children,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      nextSlide,
      prevSlide,
    },
    ref,
  ) => (
    <>
      <ul
        className="overflow-hidden flex flex-row gap-4 scroll-smooth snap-x"
        ref={ref}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {children}
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
    </>
  ),
);

SliderTrack.displayName = "SliderTrack";
