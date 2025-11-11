import { Container } from "@/components/layouts/container";
import { DemoBookingForm } from "./demo-booking-form";

export const DemoBookingSection = () => {
  return (
    <section className="w-full py-16 bg-[#F6F3F3]">
      <Container>
        <div className="max-w-[676px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,4vw,2.2rem)] font-semibold text-black mb-6">
              Set up a live demo booking with us
            </h2>
            <p className="text-xl text-foreground">
              Do you have more questions or insight, please drop it using the
              form below
            </p>
          </div>

          {/* Demo Booking Form */}
          <DemoBookingForm />
        </div>
      </Container>
    </section>
  );
};
