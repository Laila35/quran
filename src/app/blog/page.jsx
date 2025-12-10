import { Suspense } from 'react';
import { getAllBlogData } from "@/lib/blog-helpers";
import BlogPageClient from "@/components/blog/BlogPageClient";
export const dynamic = "force-dynamic";     // <-- ADD THIS
export const fetchCache = "force-no-store"; // <-- ADD THIS

export const revalidate = 60;
export const metadata = {
  title: "Our Blog - IlmulQuran",
  description:
    "Explore our latest articles on Quran learning, Islamic studies, and educational resources for students of all ages.",
  openGraph: {
    title: "Our Blog - IlmulQuran",
    description:
      "Explore our latest articles on Quran learning, Islamic studies, and educational resources.",
    type: "website",
  },
};

export default async function BlogPage() {
  const { categories, posts } = await getAllBlogData();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen py-10 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#054d3b] mb-4">Our Blog</h1>
          <p className="text-gray-600 text-lg">
            No blog posts available at the moment. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#054d3b]">
          The IlmulQuran Education Blog
        </h1>

        {/* YFCSOLUTION CAMPUS SEO-friendly line */}
        <p className="text-center text-gray-600 text-lg mb-8">
          YFCSolutions Campus offers quality online educational resources in Math, Science, and more,<br /> designed to support students, parents, and educators in achieving academic success.
        </p>
        {/* Wrap BlogPageClient in Suspense since it likely uses useSearchParams() */}
        <Suspense fallback={
          <div className="text-center py-10">
            <p className="text-gray-600">Loading blog content...</p>
          </div>
        }>
          <BlogPageClient categories={categories} posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
