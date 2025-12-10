"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';


const BlogSection = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/blog/fetch");
        const result = await response.json();
        setData(result.blogs);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBlogClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  // Get the latest 3 blogs
  const latestBlogs = data.slice(0, 3);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-7">
            Latest Blog
          </h2>
          {error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestBlogs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow cursor-pointer"
                    onClick={() => handleBlogClick(item["slug"])}
                  >
                  <Image
  src={item["image"] || "/default-image.jpg"}
  alt={item["image_alt_text"] || "Blog Image"}
  width={800} // Customize as needed
  height={192} // h-48 = 12rem = 192px
  className="w-full h-48 object-cover"
/>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>

                      <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-gray-500">
                          {item.author || "Unknown"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(item["createdAt"])}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <button aria-label="view all"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-teal-700 hover:to-teal-500"
                  onClick={() => router.push("/blog")}
                >
                  View All
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
