import { SpringLeftSVG, SpringRightSVG } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/link-button";

export const CTASection = () => {
  return (
    <section
      className="w-full pt-[4.44rem] pb-35 relative overflow-hidden bg-cta z-5"
      aria-labelledby="cta-heading"
    >
      <div className="absolute bottom-0 left-0 z-2" aria-hidden="true">
        <SpringLeftSVG />
      </div>

      <div
        className="absolute top-0 right-0 z-2 opacity-20 lg:opacity-100"
        aria-hidden="true"
      >
        <SpringRightSVG />
      </div>

      <div className="max-w-234 mx-auto text-center relative z-5">
        <h2
          id="cta-heading"
          className="text-black font-medium text-[clamp(1.5rem,6vw,3.8rem)] font-montserrat leading-[110%] mb-8"
        >
          You didn&apos;t start your business to manage spreadsheets.
        </h2>

        <div className="flex items-center justify-center max-w-[160px] mx-auto">
          <LinkButton href="#" className="rounded-full h-12">
            Get started
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
