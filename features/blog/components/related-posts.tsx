"use client";

import { blogData } from "@/constants";
import shuffle from "lodash.shuffle";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo } from "react";

interface RelatedPostsProps {
  slug: string;
}

export const RelatedPosts: FC<RelatedPostsProps> = ({ slug }) => {
  const relatedPosts = useMemo(() => {
    const filtered = blogData.filter((item) => item.slug !== slug);
    return shuffle(filtered).slice(0, 3);
  }, [slug]);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Other Blog Posts</h3>
      <div className="space-y-6">
        {relatedPosts.map((item) => (
          <Link
            key={item.id}
            href={`/blog/${item.slug}`}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image
                src={item.coverPhoto}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{item.posted_on}</span>
                <span>•</span>
                <span className="font-semibold">
                  {item.reading_time} min read
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
