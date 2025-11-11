import { Testimonials } from "@/components/ui/testimonials";
import { ARK_META } from "@/constants";
import { CTASection } from "@/features/landing";
import { SolutionFeatures, SolutionsHero } from "@/features/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | ARK",
  description: ARK_META.description,
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      <Testimonials />
      <CTASection />
    </>
  );
}
