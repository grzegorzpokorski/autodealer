import { twMerge } from "tailwind-merge";
import { Heading } from "../Heading/Heading";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  as: ComponentProps<typeof Heading>["as"];
  hidden?: boolean;
};

export const ShadowBoxHeader = ({
  children,
  id,
  hidden = false,
  as,
}: Props) => {
  return (
    <header className={twMerge(hidden && "sr-only")}>
      <Heading as={as} size="base" id={id}>
        {children}
      </Heading>
    </header>
  );
};
