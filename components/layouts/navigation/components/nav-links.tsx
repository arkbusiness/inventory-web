"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "../types";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
}

export function NavLinks({ items, className = "" }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center gap-8", className)}
      aria-label="Main navigation"
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "font-semibold transition-colors hover:text-primary hover:underline",
              isActive ? "text-primary" : "text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
