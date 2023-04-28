import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Counter = ({ children }: Props) => {
  return (
    <output className="bg-secondary text-white px-4 py-2">{children}</output>
  );
};
