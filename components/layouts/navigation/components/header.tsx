import { LinkButton } from "@/components/ui/link-button";
import { Container } from "@/components/layouts/container";
import { NAV_ITEMS } from "../config/nav-items";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b  py-[1.18rem] bg-background">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLinks items={NAV_ITEMS} />
          <LinkButton
            href="#"
            variant="outline"
            className="rounded-full h-12"
          >
            Sign up
          </LinkButton>
          <LinkButton
            href="#"
            className="rounded-full h-12"
          >
            Book a Demo
          </LinkButton>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden flex gap-6 items-center">
          <MobileMenu items={NAV_ITEMS} />
          <div className="hidden xs:flex">
          <LinkButton
            href="#"
            className="rounded-full h-12"
          >
            Book a Demo
          </LinkButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
