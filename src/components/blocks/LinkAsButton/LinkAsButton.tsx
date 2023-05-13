import type { AnchorHTMLAttributes, ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "white"
  | "white-outline"
  | "primary-white"
  | "contact";

const baseButtonStyles =
  "inline-flex transition-colors border-2 text-center disabled:cursor-not-allowed items-center justify-center gap-1.5 rounded";

const buttonVariants = {
  primary: twMerge(
    baseButtonStyles,
    "bg-primary-dark hover:bg-primary focus:bg-primary text-white border-primary-dark",
  ),
  "primary-white": twMerge(
    baseButtonStyles,
    "bg-transpatent hover:bg-primary hover:text-white focus:bg-primary focus:text-white text-primary border-primary-dark",
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
  contact: twMerge(
    baseButtonStyles,
    "bg-white hover:bg-slate-100 text-gray-800 border-white flex-1",
  ),
} as const;

const sizes = {
  small: "px-3.5 py-1.5 text-sm",
  default: "px-5 py-2 text-base",
  large: "px-8 py-4 text-xl",
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  tabIndex?: number;
  onClick?: () => void;
  buttonStyle?: ButtonVariants;
  size?: "small" | "default" | "large";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkAsButton = ({
  href,
  onClick,
  buttonStyle,
  size = "default",
  tabIndex,
  children,
  ...rest
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
      {...rest}
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
      {...rest}
    >
      {children}
    </a>
  );
};
