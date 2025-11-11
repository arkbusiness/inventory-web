"use client";

import { Container } from "@/components/layouts/container";
import { blogData } from "@/constants";
import { useMemo, useState } from "react";
import { BlogCard } from "./blog-card";
import { Pagination } from "@/components/ui/pagination";

const perPage = 8;

export const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    // Scroll to top of blog list
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage;
    const lastPageIndex = firstPageIndex + perPage;
    return blogData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <section className="w-full py-16 bg-gray-50">
      <Container>
        <div className="w-full max-w-9xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-x-4 gap-y-6 justify-center">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {/* Pagination */}
          {blogData.length > perPage && (
            <div className="mt-12">
              <Pagination
                total={blogData.length}
                page={currentPage}
                handlePageClick={handlePageClick}
              />
            </div>
          )}

          {/* No posts message */}
          {blogData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No blog posts available at the moment.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
