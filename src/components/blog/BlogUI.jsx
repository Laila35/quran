'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogUI({ categories, posts, showCategories = true }) {
  return (
    <div>
      {/* Only show category links if showCategories is true */}
      {showCategories && categories && (
        <>
          <h1 className="text-4xl font-bold text-center mb-8 text-[#054d3b]">
            Our Blog
          </h1>
          <h2 className="text-3xl font-bold text-center mb-10 text-[#054d3b]">
            Categories
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {categories.map((category) => (
              <Link
                key={category.uid}
                href={`/blog/category/${category.uid}`}
                className="px-6 py-2 rounded-full font-semibold transition-all bg-[#0f7f76] text-white hover:bg-[#0c5f58]"
              >
                {category.data.name}
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.uid}
              href={`/blog/${post.uid}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 group block"
            >
              <div className="h-56 overflow-hidden rounded-t-lg relative">
                <Image
                  src={post.data.featured_image?.url || "/Images/placeholder.jpg"}
                  alt={post.data.title || "Blog post image"}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-t-lg"></div>
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

        <style jsx>{`
          @keyframes scroll-x {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll-x {
            animation: scroll-x 25s linear infinite;
          }
        `}</style>
      </div>
    )
  }