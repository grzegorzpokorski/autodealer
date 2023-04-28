import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

export const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      createPortal(children, document.querySelector("#portal-root")!)
    : null;
};
