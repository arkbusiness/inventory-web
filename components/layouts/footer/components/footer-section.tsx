import Link from "next/link";
import { FooterSection as FooterSectionType } from "../types";

interface FooterSectionProps {
  section: FooterSectionType;
}

export const FooterSection = ({ section }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="font-semibold text-base mb-4 uppercase">
        {section.title}
      </h3>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-medium text-white/77 hover:opacity-75 transition-opacity"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
