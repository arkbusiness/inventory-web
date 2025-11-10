import { Container } from "@/components/layouts/container";
import { ResourceSVG } from "@/components/ui";

export const ResourcesHero = () => {
  return (
    <section className="w-full relative bg-cta overflow-hidden">
      <div className="absolute bottom-0 right-0 z-2">
        <ResourceSVG />
      </div>
      <Container>
        <div className="max-w-216 mx-auto px-4 text-center py-35 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative max-w-120 w-full mx-auto">
            <span className="inline-block">Our Resource</span>
          </h1>
        </div>
      </Container>
    </section>
  );
};
