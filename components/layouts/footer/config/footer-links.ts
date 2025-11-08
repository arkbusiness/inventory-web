import { APP_ROUTES } from "@/constants";
import { FooterSection } from "../types";

export const footerSections: FooterSection[] = [
  {
    title: "FEATURES",
    links: [
      { label: "Inventory Management Application", href: "#", target: "_blank" },
      { label: "Gopher (B2B event hub)", href: "#", target: "_blank" }
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Solutions", href: APP_ROUTES.solutions(), target: "_self" },
      { label: "About us", href: APP_ROUTES.about(), target: "_self" },
      { label: "Testimonials", href: "#" }
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "FAQs", href: APP_ROUTES.faq(), target: "_self" },
      { label: "Contact Us", href: APP_ROUTES.contact(), target: "_self" },
      { label: "Blog", href: APP_ROUTES.blog(), target: "_self" }
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: APP_ROUTES.privacy(), target: "_self" },
      { label: "Terms of Service", href: APP_ROUTES.terms(), target: "_self" },
    ],
  },
];
