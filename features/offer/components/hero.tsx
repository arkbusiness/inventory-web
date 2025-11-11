import { Container } from "@/components/layouts/container";
import { RulerSVG2 } from "@/components/ui";

export const FeaturesHero = () => {
  return (
    <section className="w-full relative bg-highlight overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative w-full mx-auto">
            <span className="inline-block">ARK inventory</span>
            <span className="relative inline-block mx-6">
              management
              <span className="hidden md:flex absolute right-0 -bottom-5 w-[clamp(200px,30vw,400px)]">
                <RulerSVG2 />
              </span>
            </span>
            <span className="inline-block lg:mt-7">solution</span>
          </h1>

          <p className="font-normal text-xl text-center my-8">
            This application offers various features that will address inventory
            challenges:
          </p>
        </div>
      </Container>
    </section>
  );
};
