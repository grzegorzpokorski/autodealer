import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  label: string;
  onClick: () => void;
  button?: boolean;
};

export const NavbarMenuItem = ({ label, href, button, onClick }: Props) => {
  const pathname = usePathname();

  if (button) {
    return (
      <li className="lg:ms-8">
        <LinkAsButton
          href={href}
          buttonStyle="secondary"
          size="default"
          onClick={onClick}
        >
          {label}
        </LinkAsButton>
      </li>
    );
  }

  return (
    <li>
      <NextLink
        href={href}
        className={twMerge(
          "text-secondary/60 hover:text-secondary focus:text-secondary transition-colors",
          pathname === href && "text-secondary",
        )}
        onClick={onClick}
      >
        {label}
      </NextLink>
    </li>
  );
};
