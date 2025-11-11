"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface RelatedPostsProps {
  articles: {
    id: string;
    slug: string;
    coverPhoto: string;
    title: string;
    short_desc: string;
    reading_time: number;
    posted_on: string;
  }[];
}

export const RelatedPosts: FC<RelatedPostsProps> = ({ articles }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Other Blog Posts</h3>
      <div className="space-y-6">
        {articles.map((item) => (
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
