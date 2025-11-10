import { Container } from "@/components/layouts/container";
import { LinkButton, RulerSVG2 } from "@/components/ui";
import { APP_ROUTES } from "@/constants";

export const PricingHero = () => {
  return (
    <section className="w-full relative bg-highlight overflow-hidden">
      <Container>
        <div className="max-w-7xl mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative w-full mx-auto">
            <span className="inline-block">Affordable and</span>
            <span className="relative inline-block mx-3 md:mx-6">
              Flexible
              <span className="hidden md:flex absolute right-0 -bottom-4 w-[clamp(200px,20vw,220px)]">
                <RulerSVG2 />
              </span>
            </span>
            <span className="inline-block lg:mt-7">Pricing</span>
          </h1>

          <div className="flex justify-center mt-10">
            <LinkButton href={APP_ROUTES.app()} className="rounded-full h-12">
              Get Started
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
};
