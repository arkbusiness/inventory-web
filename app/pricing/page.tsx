import { CTASection, SalesContact } from "@/components/ui";
import { ARK_META } from "@/constants";
import { PricingHero, PricingCards } from "@/features/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ARK",
  description: ARK_META.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <SalesContact className="bg-white" />
      <CTASection />
    </>
  );
}
