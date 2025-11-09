import { Container } from "@/components/layouts/container";
import { SolutionsSpringLeft, SolutionsSpringRight } from "@/components/ui";
import { RulerSVG } from "@/components/ui";

export const SolutionsHero = () => {
  return (
    <section className="w-full relative bg-highlight overflow-hidden">
      <div className="absolute right-0 -top-3 z-2 opacity-40 lg:opacity-100">
        <SolutionsSpringRight />
      </div>

      <div className="absolute left-0 -bottom-3 z-2">
        <SolutionsSpringLeft />
      </div>
      <Container>
        <div className="max-w-216 mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative max-w-120 w-full mx-auto">
            <span className="inline-block">Our</span>
            <span className="relative inline-block ml-6">
              Solutions
              <span className="flex absolute right-0 -bottom-5 w-[clamp(100px,30vw,270px)]">
                <RulerSVG />
              </span>
            </span>
          </h1>

          <p className="font-normal text-xl text-center my-8 opacity-80">
            Built to help businesses move beyond spreadsheets and legacy tools,
            ARK offers a suite of solutions tailored to every stage of inventory
            management.
          </p>
        </div>
      </Container>
    </section>
  );
};
