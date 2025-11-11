import { Container } from "@/components/layouts/container";
import { CTASection } from "@/components/ui";
import { ARK_META } from "@/constants";
import { blogData } from "@/constants";
import {
  BlogPostContent,
  BlogPostHeader,
  BlogPostTitle,
  RelatedPosts,
} from "@/features/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | ARK",
      description: ARK_META.description,
    };
  }

  return {
    title: `${post.title} | ARK Blog`,
    description: post.short_desc,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="w-full py-8">
        <Container>
          <div className="max-w-8xl mx-auto px-4">
            <BlogPostHeader thumbnail={post.coverPhoto} title={post.title} />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-16 mt-8">
              {/* Main Content */}
              <div>
                <BlogPostTitle
                  title={post.title}
                  postedOn={post.posted_on}
                  readingTime={post.reading_time}
                />
                <BlogPostContent content={post.long_desc} />
              </div>

              {/* Sidebar */}
              <div>
                <RelatedPosts articles={relatedPosts} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
