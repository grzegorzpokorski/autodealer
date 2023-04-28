import { type MouseEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  onClick: (e: MouseEvent) => void;
};

export const CloseButton = ({ onClick }: Props) => {
  return (
    <button
      className={twMerge(
        "absolute top-4 right-4 text-white",
        "w-10 h-10 bg-primary hover:bg-primary-dark focus:bg-primary-dark text-white flex flex-col items-center justify-center rounded-full transition-all",
        "opacity-80 hover:opacity-100 focus:opacity-100",
      )}
      onClick={onClick}
    >
      <span className="sr-only">zamknij galerię</span>
      <FaPlus className="rotate-45" />
    </button>
  );
};
