import { SalesContact } from "@/components/ui";
import { Testimonials } from "@/components/ui/testimonials";
import { ARK_META } from "@/constants";
import { ResourcesHero } from "@/features/resources";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | ARK",
  description: ARK_META.description,
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <Testimonials />
      <SalesContact />
    </>
  );
}
