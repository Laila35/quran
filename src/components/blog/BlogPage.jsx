"use client";

import { useState } from "react";
import BlogUI from "./BlogUI";
import Pagination from "@/components/Pagination";

/**
 * Legacy component - kept for backwards compatibility
 * New implementations should use BlogPageClient.jsx
 */
export default function BlogPage({ categories, posts }) {
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <BlogUI categories={categories} posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalPosts}
        itemsPerPage={postsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
