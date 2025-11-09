import { ARK_META } from "@/constants";
import { CTASection } from "@/features/landing";
import { SolutionsHero, SolutionFeatures } from "@/features/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | ARK",
  description: ARK_META.description,
};

export default function Solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      <CTASection />
    </>
  );
}
