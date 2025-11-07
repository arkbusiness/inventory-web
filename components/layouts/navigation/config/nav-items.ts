import { NavItem } from "../types";
import { APP_ROUTES } from "@/constants";

export const NAV_ITEMS: NavItem[] = [
  { label: "Solutions", href: APP_ROUTES.solutions() },
  { label: "Features", href: APP_ROUTES.features() },
  { label: "Pricing", href: APP_ROUTES.pricing() },
  { label: "Resources", href: APP_ROUTES.resources() },
  { label: "About us", href: APP_ROUTES.about() },
  { label: "Contact us", href: APP_ROUTES.contact() },
];
