import { CTASection } from "@/components/ui";
import { Testimonials } from "@/components/ui/testimonials";
import { ARK_META } from "@/constants";
import { AboutHero, CompanyValues } from "@/features/about/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | ARK",
  description: ARK_META.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyValues />
      <Testimonials />
      <CTASection />
    </>
  );
}
