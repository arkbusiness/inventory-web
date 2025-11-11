"use client";

import Image from "next/image";
import { FC } from "react";

interface BlogPostHeaderProps {
  thumbnail: string;
  title: string;
}

export const BlogPostHeader: FC<BlogPostHeaderProps> = ({
  thumbnail,
  title,
}) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
