import { LinkButton } from "@/components/ui/link-button";
import { APP_ROUTES } from "@/constants";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <LinkButton href={APP_ROUTES.blog()}>Back to Blog</LinkButton>
      </div>
    </div>
  );
}
