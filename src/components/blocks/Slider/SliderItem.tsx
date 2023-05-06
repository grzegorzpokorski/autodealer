import Image from "next/image";
import { twMerge } from "tailwind-merge";
import type { MouseEvent } from "react";
import type { GetOfferBySlugQuery } from "@/generated/graphql";

type Props = {
  image: NonNullable<GetOfferBySlugQuery["offer"]>["gallery"][number];
  isCurrent: boolean;
  onClick: (e: MouseEvent) => void;
};

export const SliderItem = ({ image, isCurrent, onClick }: Props) => (
  <li
    key={image.url}
    className={twMerge(
      "min-w-[100%] md:min-w-[60%] lg:min-w-[calc(40%)] min-h-[300px] bg-blue-500 h-64 flex flex-col items-center justify-center text-white font-bold text-2xl overflow-hidden snap-start relative",
      "md:border-4 transition-[border]",
      isCurrent ? "border-primary" : "border-none",
      "rounded md:rounded-lg",
    )}
  >
    <a
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      draggable={false}
      className="relative w-full h-full rounded"
    >
      <Image
        src={image.url}
        alt={image.alt || ""}
        className={twMerge(
          "object-cover object-center hover:scale-105 transition-[transform]",
        )}
        sizes="(max-width: 720px) 100vw, 40vw"
        fill
        draggable={false}
      />
    </a>
  </li>
);
