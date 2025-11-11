import { CTASection } from "@/components/ui";
import { ARK_META } from "@/constants";
import {
  ContactHero,
  ContactMessageSection,
  ContactInfo,
} from "@/features/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ARK",
  description: ARK_META.description,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMessageSection />
      <ContactInfo />
      <CTASection />
    </>
  );
}
