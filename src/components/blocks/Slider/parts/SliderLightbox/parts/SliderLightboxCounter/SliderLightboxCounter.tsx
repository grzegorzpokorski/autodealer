import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SliderLightboxCounter = ({ children }: Props) => (
  <span className="absolute top-4 left-4 text-white text-base h-10 flex flex-col items-center justify-center">
    {children}
  </span>
);
