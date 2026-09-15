"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useNavigation } from "./NavigationContext";

type NavLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export default function NavLink({ href, children, onClick, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const { startNavigating } = useNavigation();

  return (
    <Link
      href={href}
      onClick={(e) => {
        const targetPath = href.toString().split("#")[0] || "/";
        if (targetPath !== pathname) startNavigating();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
