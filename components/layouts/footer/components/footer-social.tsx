import Link from "next/link";
import { socialLinks } from "../config/social-links";

export const FooterSocial = () => {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="hover:opacity-75 transition-opacity"
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
