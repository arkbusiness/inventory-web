import { CTASection } from "@/components/ui";
import { ARK_META } from "@/constants";
import { BlogHero, BlogList } from "@/features/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | ARK",
  description: ARK_META.description,
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <CTASection />
    </>
  );
}
