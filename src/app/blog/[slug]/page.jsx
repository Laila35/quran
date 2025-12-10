import { Suspense } from 'react';
import { getPostBySlug, extractFAQs, shouldHideContent, getPostExcerpt } from "@/lib/blog-helpers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import richTextComponents from "@/components/PrismicRichTextComponents";
import StickyForm from "@/components/StickyForm";
import "../../styles/blog.css";
import "./singleBlog.module.css";
import FAQ from "@/components/FAQ";

export const revalidate = 60;

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const post = await getPostBySlug(resolvedParams.slug);
    const excerpt = getPostExcerpt(post);
    return {
      title: `${post.data.title} - IlmulQuran Blog`,
      description: shouldHideContent(post) ? "" : excerpt,
      openGraph: {
        title: post.data.title,
        description: excerpt,
        images: post.data.featured_image?.url
          ? [{ url: post.data.featured_image.url }]
          : [],
        type: "article",
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

// Main Blog Page Component - Wrapped in Suspense
export default function BlogPage({ params }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Loading blog post...</p>
        </div>
      </div>
    }>
      <BlogContent params={params} />
    </Suspense>
  );
}

// Move the async logic here
async function BlogContent({ params }) {
  const resolvedParams = await params;
  let post;
  
  try {
    post = await getPostBySlug(resolvedParams.slug);
  } catch (error) {
    notFound();
  }

  const hideContent = shouldHideContent(post);
  const faqData = extractFAQs(post);

  return (
    <div className="blog-page bg-[#f5f5f5] py-10 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Left Column: Blog Content + FAQ */}
        <div className="blog-content flex-1">
          {/* Back button */}
          <Link
            href="/blog"
            className="text-[#0f7f76] font-semibold mb-5 inline-block hover:underline"
          >
            &larr; Back to Blog
          </Link>
          {/* Title */}
          <h1 className="text-4xl font-bold text-[#054d3b] mb-6 text-center">
            {post.data.title}
          </h1>
          {/* Featured Image */}
          {post.data.featured_image?.url && (
            <div className="flex justify-center mb-8">
              <Image
                src={post.data.featured_image.url}
                alt={post.data.title || "Blog post image"}
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          )}
          {/* Blog Body */}
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            {!hideContent ? (
              post.data.content && post.data.content.length > 0 ? (
                <PrismicRichText 
                  field={post.data.content}
                  components={richTextComponents}
                />
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 italic">
                  This content is restricted. Please contact support for access.
                </p>
              </div>
            )}
          </div>
          {/* FAQ Section */}
          {faqData.length > 0 && (
            <div className="max-w-3xl mx-auto mt-10">
              <h2 className="text-3xl font-bold text-[#054d3b] mb-6">FAQs</h2>
              {faqData.map((item, index) => (
                <div key={index} className="mb-4">
                  <FAQ
                    question={item.question || "No question"}
                    answer={
                      <div className="text-base">
                        <PrismicRichText 
                          field={item.answer}
                          components={richTextComponents}
                        />
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Right Column: Sidebar */}
        <aside className="blog-sidebar w-full md:w-[380px] md:mt-10 lg:sticky top-20 h-fit self-start">
          <StickyForm />
        </aside>
      </div>
    </div>
  );
}