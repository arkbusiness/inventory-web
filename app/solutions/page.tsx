import { CTASection } from "@/features/landing";
import { SolutionsHero, SolutionFeatures } from "@/features/solutions";

export default function Home() {
  return (
    <>
      <SolutionsHero />
      <SolutionFeatures />
      <CTASection />
    </>
  );
}
