import type { TouchEvent, ReactNode, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode[];
  currentSlide: number;
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: () => void;
};

export const SliderLightboxTrack = ({
  children,
  currentSlide,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: Props) => (
  <ul
    className={twMerge(
      "list-none ovevflow-hidden flex flex-row transition-[transform] duration-[500ms]",
    )}
    style={{ transform: `translateX(calc(-${currentSlide}*100dvw))` }}
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
  >
    {children}
  </ul>
);
