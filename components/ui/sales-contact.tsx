import { Container } from "@/components/layouts/container";
import { LinkButton } from "@/components/ui/link-button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants";

interface SalesContactProps {
  className?: string;
}

export const SalesContact = ({ className }: SalesContactProps) => {
  return (
    <section
      className={cn("w-full py-16 relative overflow-hidden bg-warm", className)}
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-12 lg:gap-6.5 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative sm:w-[70%] h-[70%] lg:w-[514px] mx-auto lg:h-full rounded-3xl overflow-hidden">
            <Image
              src="/cta-bg.png"
              alt="Customer support representative"
              width={514}
              height={634}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-black font-semibold text-[clamp(1.5rem,4vw,2.25rem)] font-montserrat leading-[120%] mb-6 text-center">
              Not sure about what plan to choose?
            </h2>

            <p className="text-foreground text-base my-8 text-center max-w-[420px] mx-auto">
              We have a price to suit your needs. Contact our sales team for
              details. Based on your preference.
            </p>

            <div className="flex items-center justify-center">
              <LinkButton href={APP_ROUTES.contact()}>
                Contact our sales team
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
