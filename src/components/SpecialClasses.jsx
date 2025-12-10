import React from "react";import BonusIslamicLearning from './BonusIslamicLearning';
import Link from "next/link";

const SpecialClasses = () => {
  return (
    <div className="bg-white p-6 lg:p-8 w-full max-w-3xl mx-auto rounded-lg  flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Welcome to <span className="text-teal-600">ilmulQuran</span> Online
          Academy
        </h1>

        {/* Subtle Divider */}
        <div className="w-16 h-0.5 bg-teal-400 mx-auto mt-3 mb-4"></div>
      </div>

      {/* Subheader */}
      <h2 className="text-lg lg:text-xl font-medium text-center text-gray-700 mb-5">
        Your Gateway to Comprehensive Islamic Education
      </h2>

      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          ilmulQuran Online Academy offers high-quality Islamic education
          globally, making Quran and Islamic studies accessible, convenient, and
          effective through our online courses.
        </p>
      </div>

      {/* Beautiful Button */}
      <div className="mt-auto">
        <Link href="/online-classes">
          <button
            aria-label="get free trial"
            className="relative overflow-hidden group bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">Get Free Trial</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute top-0 left-0 w-full h-full border-2 border-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialClasses;

