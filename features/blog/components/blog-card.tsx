import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  coverPhoto: string;
  title: string;
  short_desc: string;
  posted_on: string;
  reading_time: number;
  slug: string;
}

export const BlogCard = ({
  coverPhoto,
  title,
  short_desc,
  posted_on,
  reading_time,
  slug,
}: BlogCardProps) => {
  return (
    <div className="bg-white border rounded-lg hover:shadow-md transition-shadow duration-300 mx-auto">
      <Link href={`/blog/${slug}`}>
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={coverPhoto}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span>{posted_on}</span>
          <span>•</span>
          <span>{reading_time} min read</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors line-clamp-2">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
          {short_desc}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/30 transition-colors"
        >
          Read more
          <ArrowRight className="w-3.5 h-3.5 ms-2" />
        </Link>
      </div>
    </div>
  );
};
