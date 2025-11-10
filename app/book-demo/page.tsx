import { CTASection } from "@/components/ui";
import { ARK_META } from "@/constants";
import { DemoHero, DemoVideo, DemoBookingSection } from "@/features/book-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | ARK",
  description: ARK_META.description,
};

export default function BookDemoPage() {
  return (
    <>
      <DemoHero />
      <DemoVideo />
      <DemoBookingSection />
      <CTASection />
    </>
  );
}
