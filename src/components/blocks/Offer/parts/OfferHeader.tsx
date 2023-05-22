import { Heading } from "@/components/blocks/Heading/Heading";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

export const OfferHeader = ({ href, title }: Props) => (
  <header className="px-4">
    <Link href={href} className="hover:underline focus:underline">
      <Heading as="h3" size="base">
        {title}
      </Heading>
    </Link>
  </header>
);

const Skeleton = () => (
  <div className="px-4 flex flex-col gap-1">
    <div className="h-6 w-[90%] rounded bg-gray-200"></div>
    <div className="h-6 w-[30%] rounded bg-gray-200"></div>
  </div>
);

OfferHeader.Skeleton = Skeleton;
