import Image from "next/image";
import Link from "next/link";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';

const OnlineCourses = ({ courses }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {courses?.map((item) => (
          <div
            key={item?.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-teal-100"
          >
            {/* Card Image with Overlay */}
            <div className="relative h-40 overflow-hidden">
              <Image
                src={item?.courseImage}
                alt={item?.title || item.name}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-800/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Course Category Badge */}
              <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                {item?.category || 'Course'}
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-3">
              <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-teal-600 transition-colors duration-300">
                {item?.title}
              </h3>

              {/* Hide description for Mathematics (or any title containing "math") */}
              {!(item?.title && item.title.toLowerCase().includes("math")) && (
                <p className="text-gray-600 text-xs mb-2 line-clamp-2 h-8">
                  {item?.description}
                </p>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-1 mt-1">
                <Link
                  href={item?.link}
                  className="flex-1 px-2 py-1.5 text-center text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition-colors duration-300"
                >
                  Details
                </Link>
                <Link
  href="/get-register"
  className="flex-1 px-2 py-1.5 text-center text-xs font-medium bg-teal-700 hover:bg-teal-800 text-white rounded transition-colors duration-300"
>
  Register
</Link>

              </div>
            </div>
            
            {/* Hover Info Panel */}
            <div className="absolute inset-0 bg-gray-900 p-4 flex flex-col justify-center opacity-0 invisible group-hover:opacity-95 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="text-base font-bold text-white mb-2">{item?.title}</h3>
              {/* Hover panel: also hide description for Mathematics */}
              {!(item?.title && item.title.toLowerCase().includes("math")) && (
                <p className="text-teal-100 text-xs mb-3 line-clamp-3">
                  {item?.description}
                </p>
              )}
              <div className="mt-auto flex gap-2">
                <Link
                  href={item?.link}
                  className="flex-1 px-3 py-1.5 text-center text-xs font-medium bg-white/10 hover:bg-white/20 text-white rounded transition-all duration-300"
                >
                 Details
                </Link>
                <Link
                  href="/get-register"
                  className="flex-1 px-3 py-1.5 text-center text-xs font-medium bg-teal-400 hover:bg-teal-300 text-teal-900 rounded transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default OnlineCourses;
