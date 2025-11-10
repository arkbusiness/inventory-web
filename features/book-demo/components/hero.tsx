import { Container } from "@/components/layouts/container";

export const DemoHero = () => {
  return (
    <section className="w-full relative bg-background overflow-hidden">
      <Container>
        <div className="max-w-216 mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative max-w-120 w-full mx-auto">
            Book a Demo
          </h1>
        </div>
      </Container>
    </section>
  );
};
