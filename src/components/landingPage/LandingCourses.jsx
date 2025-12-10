import Image from "next/image";
import Link from "next/link";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';

const LandingCourses = ({ courses }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {courses?.map((item) => (
            <div
              key={item?.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item?.courseImage}
                  alt={item?.title || item?.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <span className="bg-white text-teal-600 text-[10px] px-2 py-0.5 rounded shadow">
                    New
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 flex-1 flex flex-col">
              <h2 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-teal-600 transition line-clamp-2 sm:line-clamp-1">
  {item.title}
</h2>
                <div className="flex items-center space-x-1 mb-2">
                  <div className="h-1 w-5 bg-teal-500 rounded-full"></div>
                  <div className="h-1 w-2 bg-teal-300 rounded-full"></div>
                  <div className="h-1 w-1 bg-teal-200 rounded-full"></div>
                </div>

                {/* Hide description for Mathematics (or any title containing "math") */}
                {!(item?.title && item.title.toLowerCase().includes("math")) && (
                  <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                    {item?.description}
                  </p>
                )}

                <div className="mt-auto">
                  <Link
                    href="/get-register"
                    className="w-full flex items-center justify-center py-2 text-xs bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition"
                  >
                    Get Free Trial
                    <svg
                      className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCourses;
