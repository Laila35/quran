// src/app/blog/all/page.jsx
import { getAllBlogData } from "@/lib/blog-helpers.js";
import BlogPageClient from "@/components/blog/BlogPage";
export const revalidate = 0;

export const metadata = {
  title: "All Blog Posts",
  description: "Browse all blog posts",
};

export default async function AllPostsPage() {
  try {
    // Fetch data on the server
    const { categories, posts } = await getAllBlogData();
    
    if (!categories || !posts) {
      throw new Error("Failed to fetch blog data");
    }

    return <BlogPageClient categories={categories} posts={posts} />;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    
    return (
      <div className="min-h-screen py-10 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">
            Error Loading Blog Posts
          </h1>
          <p className="text-gray-600">
            We encountered an issue loading the blog posts. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}