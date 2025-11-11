import { Container } from "@/components/layouts/container";
import { MessageSVG, PinSVG, PhoneSVG } from "@/components/ui/icons";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section className="w-full py-16 bg-white">
      <Container>
        <div className="max-w-[900px] mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <MessageSVG />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Email
              </h3>
              <p className="font-normal mb-5">
                Our friendly team is here to help.
              </p>
              <a
                href="mailto:info@storeatark.com"
                className="text-base font-semibold hover:text-primary transition-colors"
              >
                info@storeatark.com
              </a>
            </div>

            {/* Office Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <PinSVG />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Office
              </h3>
              <p className="text-sm text-foreground mb-5">
                Come say hello at our HQ office.
              </p>
              <p className="text-base font-semibold">
                Alfred Rewane Road, Ikoyi,
              </p>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <PhoneSVG />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Phone
              </h3>
              <p className="text-sm text-foreground mb-5">
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                href="tel:+2347087320050"
                className="text-base font-semibold  hover:text-primary transition-colors"
              >
                07087320050
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center justify-center flex-col sm:flex-row gap-4 mt-16">
            <p className="text-xl font-semibold text-black">
              You can follow us on social media
            </p>
            <div className="flex  items-center gap-4">
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/storeatark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/storeatark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
