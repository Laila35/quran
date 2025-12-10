
import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { shortCourses, regularCourses } from "@/lib/Data";
import CoursesComp from "@/components/landingPage/OnlineCourses";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";
import Script from "next/script";

const Courses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Online Islamic Courses - ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>

  <head>
 <meta charSet="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />


 {/* Primary SEO Meta Tags */}
 <title>Online Islamic Courses | Learn Quran at ilmulQuran.com</title>
 <meta
  name="description"
  content="Explore a wide range of online Islamic courses at ilmulQuran Online Academy. Learn Quran, Arabic, Tafsir, Fiqh, and more with our expert tutors. Enroll now!"
 />
 <meta
  name="keywords"
  content="Online Islamic Courses, Islamic Studies Online, Quranic Courses, Learn Islam Online, ilmulQuran Courses"
 />
 <meta name="robots" content="index, follow" />
 <link rel="canonical" href="https:ilmulquran.com/online-islamic-courses" />

 {/* Open Graph Meta Tags */}
 <meta property="og:locale" content="en_US" />
 <meta property="og:type" content="website" />
 <meta
  property="og:title"
  content="Online Islamic Courses | Learn Quran, Tafsir, Fiqh & More | ilmulQuran"
 />
 <meta
  property="og:description"
  content="Join ilmulQuran.com for certified online Islamic courses. Master Quran recitation, Arabic, Hadith, Tafsir, Fiqh, and more with experienced tutors."
 />
 <meta
  property="og:url"
  content="https:ilmulquran.com/online-islamic-courses"
 />
 <meta property="og:site_name" content="ilmulQuran" />

 <meta property="og:image:width" content="1200" />
 <meta property="og:image:height" content="630" />
 <meta
  property="og:image:alt"
  content="Online Islamic courses with expert tutors at ilmulQuran"
 />
 <meta property="og:image:type" content="image/webp" />

 {/* Twitter Meta Tags */}
 <meta name="twitter:card" content="summary_large_image" />
 <meta
  name="twitter:title"
  content="Explore Online Islamic Courses with Certified Tutors | ilmulQuran"
 />
 <meta
  name="twitter:description"
  content="Comprehensive Islamic courses online including Quran, Arabic, Tafsir & more. Flexible scheduling & expert teachers. Enroll now!"
 />

 {/* Enhanced Schema Markup */}
 <Script
  id="jsonld-islamic-courses"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https:schema.org",
      "@type": "Course",
      name: "Online Islamic Courses",
      description:
        "Join ilmulQuran Online Academy for comprehensive Islamic education. Learn Quran, Tafsir, Fiqh, Arabic, and more from expert Islamic scholars.",
      provider: {
        "@type": "EducationalOrganization",
        name: "ilmulQuran",
        sameAs: "https:ilmulquran.com",
        description:
          "Online Islamic education platform offering Quran, Arabic, Tafsir, Hadith, and Fiqh courses for all ages.",
      },
      url: "https:ilmulquran.com/online-islamic-courses",
      educationalLevel: "beginner",
      typicalAgeRange: "7-60",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["online", "self-paced", "one-on-one"],
        duration: "P6M",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          ageRange: "7-60",
        },
        offers: {
          "@type": "Offer",
          category: "free trial",
          url: "https:ilmulquran.com/get-register",
        },
      },
      coursePrerequisites: "Basic interest in Islamic knowledge",
      educationalCredentialAwarded:
        "Certificate of Completion in Islamic Studies",
    }),
  }}
 />
</head>


      {/* Mobile Form - Top of page (non-sticky) */}
      <div className="block mx-auto lg:hidden">
        
        <StickyForm 
          courseName="Companions of Prophet Muhammad (PBUH) Course" 
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full mx-auto px-3 py-3 lg:grid lg:grid-cols-1 lg:gap-8">
        {/* Content Area */}
        <div className="lg:col-span-3">
          <h2 className="text-center text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl pt-6">
            Discover Our Comprehensive Online Islamic Courses
          </h2>

          <p className="text-base font-medium pt-3">
            At ilmulQuran Online Academy, we offer a diverse selection of online
            Islamic courses designed to cater to learners of all levels. Our
            courses cover various aspects of Islamic studies, including Quranic
            recitation, Arabic language, Tafsir, Fiqh, and more. With experienced
            tutors and flexible learning options, you can deepen your
            understanding of Islam from the comfort of your home.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Why Choose Our Courses?
          </h2>
          <ul className="list-disc ml-8 space-y-1 pt-3">
            <li>
              <span className="font-bold">Expert Tutors:</span> Learn from
              qualified and experienced instructors.
            </li>
            <li>
              <span className="font-bold">Flexible Learning:</span> Online classes
              that fit your schedule.
            </li>
            <li>
              <span className="font-bold">Comprehensive Curriculum:</span> Courses
              covering a wide range of Islamic studies.
            </li>
            <li>
              <span className="font-bold">Interactive Learning:</span> Engaging
              lessons with multimedia resources, quizzes, and live sessions.
            </li>
            <li>
              <span className="font-bold">Community Support:</span> Join a
              supportive community of learners and educators.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-blue-900 pt-3">
            Regular Courses
          </h3>

          <div className="flex flex-wrap gap-6 justify-center">
            <CoursesComp courses={regularCourses} />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-blue-900 pt-6">
            Short Courses
          </h3>

          <div className="flex flex-wrap gap-6 justify-center">
            <CoursesComp courses={shortCourses} />
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Call to Action
          </h2>
          <p className="text-base font-medium pt-3 mb-6">
            Ready to start your learning journey?{" "}
            <Link
              href="/get-register"
              className="text-blue-600 hover:text-blue-700"
            >
              Explore our courses
            </Link>{" "}
            and enroll today!
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Student Testimonials
          </h3>
          <div className="pt-3">
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;