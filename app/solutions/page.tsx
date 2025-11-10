import { ARK_META } from "@/constants";
import { CTASection } from "@/features/landing";
import { SolutionsHero, SolutionFeatures } from "@/features/solutions";
import { Testimonials } from "@/components/ui/testimonials";
import { Metadata } from "next";
import { testimonialsData } from "@/constants/testimonials";

export const metadata: Metadata = {
  title: "Solutions | ARK",
  description: ARK_META.description,
};

export default function Solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      <Testimonials testimonials={testimonialsData} />
      <CTASection />
    </>
  );
}
