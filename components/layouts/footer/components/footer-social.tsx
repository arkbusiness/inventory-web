import React from "react";
import Link from "next/link";
import { socialLinks } from "../config/social-links";

export const FooterSocial = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="text-white/80 hover:text-white transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
