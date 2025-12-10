import { getPostsByCategory } from "@/lib/blog-helpers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  // For "all", use generic metadata
  if (resolvedParams.slug === "all") {
    return {
      title: "All Posts - Blog Category",
      description: "Showing all articles from our blog",
      openGraph: {
        title: "All Posts - Blog Category",
        description: "Showing all articles from our blog",
        type: "website",
      },
    };
  }

  try {
    const { category } = await getPostsByCategory(resolvedParams.slug);

    return {
      title: `${category.data.name} - Blog Category`,
      description:
        category.data.description?.[0]?.text || `Browse ${category.data.name} articles`,
      openGraph: {
        title: `${category.data.name} - Blog Category`,
        description: category.data.description?.[0]?.text || `Browse ${category.data.name} articles`,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;

  let categoryData;
  try {
    categoryData = await getPostsByCategory(resolvedParams.slug);
  } catch (error) {
    notFound();
  }

  const { category, posts, isAll } = categoryData;

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="text-[#0f7f76] font-semibold mb-5 inline-block hover:underline"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="text-4xl font-bold text-[#054d3b] mb-6 text-center">
          {category.data.name}
        </h1>

        {!isAll &&
          !category.data.name.toLowerCase().includes("math") &&
          category.data.description?.[0]?.text && (
            <div className="max-w-3xl mx-auto text-gray-700 text-lg mb-8 text-center">
              {category.data.description[0].text}
            </div>
          )}

        {posts.length === 0 && (
          <p className="text-center text-gray-600 text-lg">
            No posts found in this category.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.uid}
              href={`/blog/${post.uid}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 block group"
            >
              <div className="h-56 overflow-hidden rounded-t-lg">
                <Image
                  src={post.data.featured_image?.url || "/Images/placeholder.jpg"}
                  alt={post.data.title || "Blog post image"}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-[#054d3b] mb-3 group-hover:text-[#0f7f76] transition-colors">
                  {post.data.title}
                </h2>
                <span className="inline-block bg-[#0f7f76] text-white px-4 py-2 rounded-md font-medium group-hover:bg-[#0c5f58] transition-all">
                  Read More »
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
