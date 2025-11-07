import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { SocialLink } from "../types";

export const socialLinks: SocialLink[] = [
  { icon: <Instagram className="w-5 h-5" />, href: "#instagram", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#twitter", label: "Twitter" },
  { icon: <Facebook className="w-5 h-5" />, href: "#facebook", label: "Facebook" },
];
