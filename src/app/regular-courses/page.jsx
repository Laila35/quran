// app/regular-courses/page.jsx
import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import CoursesComp from "@/components/landingPage/OnlineCourses";
import {
  regularCourses,
} from "@/lib/Data";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";

// Define metadata for SEO
export const metadata = {
  title: "Regular Islamic Courses | Learn Quran, Arabic & Islamic Studies",
  description: "Join our regular Islamic courses online at ilmulQuran. Learn Quran recitation, Arabic, Tafsir, and Islamic studies from certified scholars. Flexible schedules and certification available.",
  keywords: "Regular Islamic Courses, Online Quran Learning, Arabic Language Classes, Tafsir Classes, Islamic Studies, ilmulQuran Courses",
  robots: "index, follow",
  canonical: "https://ilmulquran.com/regular-courses",
  
  // Open Graph Meta Tags
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Regular Islamic Courses - Quran, Arabic & More | ilmulQuran",
    description: "Comprehensive regular Islamic courses including Quran, Arabic, and Tafsir studies for children, teens, and adults. Enroll today and begin your Islamic learning journey.",
    url: "https://ilmulquran.com/regular-courses",
    siteName: "ilmulQuran",
    images: [
      {
        url: "/Images/courses/regular-courses-banner.png",
        width: 1200,
        height: 630,
        alt: "Students learning Quran and Arabic online with teacher",
        type: "image/webp",
      },
    ],
  },
  
  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Online Regular Islamic Courses – Quran, Arabic & Tafsir | ilmulQuran",
    description: "ilmulQuran offers structured online Islamic education including Quranic recitation, Arabic, and Tafsir. Certified tutors. Flexible schedules. Get started with a free trial.",
    images: ["/Images/courses/regular-courses-banner.png"],
  },
  
  // JSON-LD Schema Markup will be added in the component
};

const RegularCourses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Regular Islamic Courses - ilmulQuran Online Academy",
    link: "/",
  };

  // JSON-LD Schema Markup as a script
  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ilmulQuran Regular Islamic Courses",
    "description": "Structured online Islamic education covering Quran reading, Arabic language, Tafsir, and Islamic fundamentals for all age groups with certified tutors.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ilmulQuran",
      "sameAs": "https://ilmulquran.com",
      "description": "ilmulQuran provides online Quran and Islamic education for children, youth, and adults across the globe with qualified instructors."
    },
    "url": "https://ilmulquran.com/regular-courses",
    "image": "/Images/courses/regular-courses-banner.png",
    "educationalLevel": "beginner, intermediate, advanced",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["online", "structured", "1-on-1"],
      "duration": "P6M",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "ageRange": "7-60"
      },
      "offers": {
        "@type": "Offer",
        "category": "free trial",
        "url": "https://ilmulquran.com/get-register"
      }
    },
    "coursePrerequisites": "None",
    "educationalCredentialAwarded": "Certificate of Completion"
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        id="jsonld-regular-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdScript)
        }}
      />

      {/* Preload banner image */}
      <link
        rel="preload"
        as="image"
        href="/Images/courses/regular-courses-banner.png"
        fetchPriority="high"
      />

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto px-3 md:px-0 py-3">
        <h2 className="text-center text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
          Discover Our In-Depth Regular Courses
        </h2>

        <p className="text-base font-medium pt-3">
          Our regular Islamic courses are designed to provide a comprehensive understanding of various aspects of Islamic studies. These courses cover Quranic recitation, Arabic language, Tafsir, and more. With experienced tutors and flexible learning options, you can deepen your knowledge of Islam at your own pace.
        </p>

        <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
          Why Choose Our Regular Courses?
        </h2>
        <ul className="list-disc ml-8 space-y-1 pt-3">
          <li>
            <span className="font-bold">Expert Tutors:</span> Learn from qualified and experienced instructors.
          </li>
          <li>
            <span className="font-bold">Flexible Learning:</span> Online classes that fit your schedule.
          </li>
          <li>
            <span className="font-bold">Comprehensive Curriculum:</span> Courses covering a wide range of Islamic studies.
          </li>
          <li>
            <span className="font-bold">Interactive Learning:</span> Engaging lessons with multimedia resources, quizzes, and live sessions.
          </li>
          <li>
            <span className="font-bold">Community Support:</span> Join a supportive community of learners and educators.
          </li>
        </ul>

        <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
          <CoursesComp courses={regularCourses} />
        </div>

        <p className="text-base font-medium pt-3 mb-4">
          Ready to dive deeper into Islamic studies? <Link href="/get-register" className="text-teal-600 hover:text-teal-800 font-semibold"> Explore our regular courses</Link> and enroll today!
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
          Student Testimonials
        </h3>
      </div>

      <div className="pt-3">
        <BonusIslamicLearning />
        <TestimonialComponent testimonialsData={testimonialsData} />
      </div>
    </>
  );
};

export default RegularCourses;