import { type ReactNode, type MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  onClick: (e: MouseEvent) => void;
  position: "left" | "right";
  lightbox: boolean;
};

export const ArrowButton = ({
  children,
  onClick,
  position,
  lightbox,
}: Props) => {
  return (
    <button
      className={twMerge(
        "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
        "absolute top-1/2 -translate-y-1/2",
        position === "left" && "left-4",
        position === "right" && "right-4",
        !lightbox && position === "left" && "xl:-left-5",
        !lightbox && position === "right" && "xl:-right-5",
        "disabled:bg-gray-400",
        "opacity-80 hover:opacity-100 focus:opacity-100",
      )}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};
