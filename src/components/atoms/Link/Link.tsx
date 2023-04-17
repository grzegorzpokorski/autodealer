import { AnchorHTMLAttributes, ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariants = "primary" | "secondary" | "white";

const baseButtonStyles =
  "inline-flex transition-colors border-2 px-6 py-2 text-base text-center disabled:cursor-not-allowed items-center justify-center gap-1.5";

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

export type LinkProps = {
  href: string;
  children: ReactNode;
  tabIndex?: number;
  onClick?: () => void;
  buttonStyle?: ButtonVariants;
  "aria-hidden"?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  const isInternal = props.href
    ? props.href.startsWith("#") || props.href.startsWith("/")
    : false;

  return isInternal ? (
    <LinkNext
      href={props.href}
      onClick={props.onClick}
      className={twMerge(
        props.buttonStyle && buttonVariants[props.buttonStyle],
      )}
      tabIndex={props.tabIndex}
      aria-hidden={props["aria-hidden"]}
    >
      {props.children}
    </LinkNext>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      className={twMerge(
        props.buttonStyle && buttonVariants[props.buttonStyle],
      )}
    >
      {props.children}
    </a>
  );
};
