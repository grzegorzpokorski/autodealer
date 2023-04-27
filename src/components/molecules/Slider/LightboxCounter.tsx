import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const LightboxCounter = ({ children }: Props) => (
  <span className="absolute top-4 left-4 text-white text-base">{children}</span>
);
