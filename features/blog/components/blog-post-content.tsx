"use client";

import { FC, ReactNode } from "react";
import "./blog-post-content.css";

interface BlogPostContentProps {
  content: ReactNode;
}

export const BlogPostContent: FC<BlogPostContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="blog-content">{content}</div>
    </div>
  );
};
