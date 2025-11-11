"use client";

import { FC } from "react";

interface BlogPostTitleProps {
  title: string;
  postedOn: string;
  readingTime: number;
}

export const BlogPostTitle: FC<BlogPostTitleProps> = ({
  title,
  postedOn,
  readingTime,
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <div className="flex items-center gap-2 text-gray-500">
        <span className="text-base">{postedOn}</span>
        <span>•</span>
        <span className="text-base font-semibold">{readingTime} min read</span>
      </div>
    </div>
  );
};
