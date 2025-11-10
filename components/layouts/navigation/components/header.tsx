import { LinkButton } from "@/components/ui/link-button";
import { Container } from "@/components/layouts/container";
import { NAV_ITEMS } from "../config/nav-items";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { APP_ROUTES } from "@/constants";

export function MainHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b  py-[1.18rem] bg-background"
      role="banner"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLinks items={NAV_ITEMS} />
          <LinkButton
            href={APP_ROUTES.app()}
            variant="outline"
            className="rounded-full h-12"
          >
            Sign up
          </LinkButton>
          <LinkButton
            href={APP_ROUTES.bookDemo()}
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
              href={APP_ROUTES.bookDemo()}
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
