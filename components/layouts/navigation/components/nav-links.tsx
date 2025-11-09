import Link from "next/link";
import { NavItem } from "../types";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
}

export function NavLinks({ items, className = "" }: NavLinksProps) {
  return (
    <nav className={`flex items-center gap-8 ${className}`} aria-label="Main navigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-semibold text-foreground transition-colors hover:text-primary hover:underline"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
