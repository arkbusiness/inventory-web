import { ARK_META } from "@/constants";
import { CTASection } from "@/features/landing";
import { FeaturesHero, OfferCards } from "@/features/offer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | ARK",
  description: ARK_META.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <OfferCards />
      <CTASection />
    </>
  );
}
