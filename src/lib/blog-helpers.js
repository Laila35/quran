import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

/**
 * Fetch all categories and blog posts with proper error handling
 * Used for main blog listing page
 */
export async function getAllBlogData() {
  try {
    const client = createClient();

    const [categories, posts] = await Promise.all([
      client.getAllByType("category", {
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
        // ADDED: Tags for webhook revalidation
        fetchOptions: { next: { tags: ["prismic"] } }
      }),
      client.getAllByType("blog_post", {
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
        // ADDED: Tags for webhook revalidation
        fetchOptions: { next: { tags: ["prismic"] } }
      }),
    ]);

    return { categories, posts };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { categories: [], posts: [] };
  }
}

/**
 * Fetch posts by category UID
 * Pass "all" for slug to get all posts
 */
export async function getPostsByCategory(slug) {
  try {
    const client = createClient();

    // Show all posts when slug = "all"
    if (slug === "all") {
      const posts = await client.getAllByType("blog_post", {
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
        // ADDED: Tags for webhook revalidation
        fetchOptions: { next: { tags: ["prismic"] } }
      });

      return {
        category: { data: { name: "All", description: [] } },
        posts,
        isAll: true,
      };
    }

    // Fetch specific category
    const category = await client.getByUID("category", slug, {
      // ADDED: Tags for webhook revalidation
      fetchOptions: { next: { tags: ["prismic"] } }
    });

    const posts = await client.getAllByType("blog_post", {
      filters: [prismic.filter.at("my.blog_post.category", category.id)],
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
      // ADDED: Tags for webhook revalidation
      fetchOptions: { next: { tags: ["prismic"] } }
    });

    return { category, posts, isAll: false };
  } catch (error) {
    console.error(`Error fetching posts for category ${slug}:`, error);
    throw error;
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getPostBySlug(slug) {
  try {
    const client = createClient();
    const post = await client.getByUID("blog_post", slug, {
      // ADDED: Tags for webhook revalidation
      fetchOptions: { next: { tags: ["prismic"] } }
    });
    return post;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    throw error;
  }
}

/**
 * Extract FAQ data from blog post slices
 */
export function extractFAQs(post) {
  if (!post?.data?.slices) return [];

  const faqSlice = post.data.slices.find(
    (slice) => slice.slice_type === "faq_section"
  );

  return faqSlice?.primary?.faqs || [];
}

/**
 * Check if content should be hidden (e.g., for restricted posts)
 */
export function shouldHideContent(post) {
  return (
    post?.data?.title &&
    post.data.title.toLowerCase().includes("mathematics")
  );
}

/**
 * Get excerpt from post content for metadata
 */
export function getPostExcerpt(post, maxLength = 160) {
  if (!post?.data?.content) return "";

  // Find first paragraph
  const firstParagraph = post.data.content.find(
    (item) => item.type === "paragraph" && item.text
  );

  if (!firstParagraph?.text) return "";

  // Truncate to maxLength
  const text = firstParagraph.text;
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength).trim() + "...";
}