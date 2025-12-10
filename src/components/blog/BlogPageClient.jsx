"use client";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogUI from "./BlogUI";
import Pagination from "@/components/Pagination";

// Wrapper component that handles Suspense
export default function BlogPageClient({ categories, posts }) {
  return (
    <Suspense fallback={
      <div className="text-center py-10">
        <p className="text-gray-600">Loading blog posts...</p>
      </div>
    }>
      <BlogPageContent categories={categories} posts={posts} />
    </Suspense>
  );
}

// Inner component that uses useSearchParams
function BlogPageContent({ categories, posts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.data.category?.uid === selectedCategory);
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleCategoryChange = (categoryUid) => {
    setSelectedCategory(categoryUid);
    setCurrentPage(1); // Reset to first page when category changes
    // Update URL with query param (optional, for shareable URLs)
    const params = new URLSearchParams();
    if (categoryUid !== "all") {
      params.set("category", categoryUid);
    }
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#054d3b]">
          Categories
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {/* All Button */}
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-[#0f7f76] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {/* Category Buttons - filter out any 'all' category from Prismic */}
          {categories
            .filter((cat) => cat.uid !== "all")
            .map((category) => (
              <button
                key={category.uid}
                onClick={() => handleCategoryChange(category.uid)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.uid
                    ? "bg-[#0f7f76] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.data.name}
              </button>
            ))}
        </div>
      </div>
      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            No posts found in this category.
          </p>
        </div>
      ) : (
        <>
          <BlogUI posts={currentPosts} showCategories={false} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalPosts}
            itemsPerPage={postsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </>
  );
}
