import { Container } from "@/components/layouts/container";

export const ContactHero = () => {
  return (
    <section className="w-full relative bg-background overflow-hidden">
      <Container>
        <div className="max-w-216 mx-auto px-4 text-center py-16 relative z-3">
          <h1 className="text-[clamp(1.5rem,6vw,4rem)] text-secondary font-semibold font-montserrat leading-[110%] relative max-w-120 w-full mx-auto">
            Get in touch
          </h1>
          <p className="font-normal text-xl text-center mt-5">
            Thank you for considering ARK for your inventory management and
            event-driven commerce solution needs! We`re here to help and answer
            any questions you may have. Please feel free to reach out to us
            using the form below, and a member of our team will get back to you
            as soon as possible.
          </p>
        </div>
      </Container>
    </section>
  );
};
