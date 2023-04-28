import type { ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariants = "primary" | "secondary" | "white";

const baseButtonStyles =
  "inline-flex transition-colors border-2 text-center disabled:cursor-not-allowed items-center justify-center gap-1.5";

const buttonVariants = {
  primary: twMerge(
    baseButtonStyles,
    "bg-primary-dark hover:bg-primary focus:bg-primary text-white border-primary-dark",
  ),
  secondary: twMerge(
    baseButtonStyles,
    "bg-secondary hover:bg-secondary/90 text-white border-secondary",
  ),
  white: twMerge(
    baseButtonStyles,
    "bg-white hover:bg-slate-100 text-gray-800 border-white",
  ),
  "white-outline": twMerge(
    baseButtonStyles,
    "bg-transparent hover:bg-white text-white hover:text-gray-800 border-white",
  ),
} as const;

const sizes = {
  default: "px-5 py-2 text-base",
  large: "px-8 py-4 text-xl",
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  tabIndex?: number;
  onClick?: () => void;
  buttonStyle?: ButtonVariants;
  "aria-hidden"?: string;
  size?: "default" | "large";
};

export const LinkAsButton = ({
  href,
  onClick,
  buttonStyle,
  size = "default",
  tabIndex,
  children,
}: LinkProps) => {
  const isInternal = ["#", "/", "tel:", "email:"].some((item) =>
    href.startsWith(item),
  )
    ? true
    : false;

  return isInternal ? (
    <LinkNext
      href={href}
      onClick={onClick}
      className={twMerge(
        buttonStyle && buttonVariants[buttonStyle],
        sizes[size],
      )}
      tabIndex={tabIndex}
    >
      {children}
    </LinkNext>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      tabIndex={tabIndex}
      onClick={onClick}
      className={twMerge(
        buttonStyle && buttonVariants[buttonStyle],
        sizes[size],
      )}
    >
      {children}
    </a>
  );
};
