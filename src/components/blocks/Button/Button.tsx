import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles =
  "inline-flex border-2 text-center disabled:cursor-not-allowed items-center justify-center gap-1.5 rounded transition-colors motion-reduce:transition-none";

type Variants = "white";

const variants = {
  white: twMerge("bg-white hover:bg-slate-100 text-gray-800 border-white"),
} as const;

const sizes = {
  small: "px-3.5 py-1.5 text-sm",
  default: "px-5 py-2 text-base",
  "default-square": "p-2 px-4 text-base aspect-square",
  large: "px-8 py-4 text-xl",
} as const;

type Props = {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "default" | "large" | "default-square";
  variant?: Variants;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">;

export const Button = ({
  children,
  onClick,
  size = "default",
  variant = "white",
}: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(defaultStyles, sizes[size], variants[variant])}
    >
      {children}
    </button>
  );
};
