import { LinkButton } from "@/components/ui/link-button";

export const Hero = () => {
  return (
    <section className="w-full mt-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%]">
          Smart Inventory Management Solutions for Growing Businesses
        </h1>

        <p className="font-normal text-xl text-center my-8 opacity-80">
          ARK's all-in-one inventory application provides comprehensive inventory management, replacing spreadsheets with real-time visibility, seamless procurement, and fulfillment tracking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton
            href="#"
            className="h-12.5"
          >
            Book a Demo
          </LinkButton>
          <LinkButton
            href="#"
            variant="outline"
            className="h-12.5"
          >
            Get started
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
