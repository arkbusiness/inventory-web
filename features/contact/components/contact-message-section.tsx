"use client";

import { Container } from "@/components/layouts/container";
import { StarLeftSVG, StarRightSVG } from "@/components/ui/icons";
import { ContactForm } from "./contact-form";

export const ContactMessageSection = () => {
  return (
    <section className="w-full py-20 bg-[#F6F3F3] relative overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute left-0 bottom-0 opacity-80 pointer-events-none">
        <StarLeftSVG />
      </div>
      <div className="absolute right-0 top-0 opacity-80 pointer-events-none">
        <StarRightSVG />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,4vw,2.2rem)] font-semibold text-black mb-6">
              Send us a message
            </h2>
            <p className="text-xl text-foreground">
              If you have any questions, please submit them using the form
              below.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
