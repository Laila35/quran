import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm"; // ✅ Import StickyForm

const FiqhCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "Fiqh (Islamic Jurisprudence) Course - Master Islamic Law",
    link: "/",
  };

  return (
    <>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/Courses/Fiqh-Islamic-Jurisprudence.webp"
      fetchPriority="high"
    />
  
    <title>Online Fiqh Course Master Islamic Jurisprudence</title>
    <meta
      name="description"
      content="Comprehensive Islamic Jurisprudence program covering Hanafi, Shafi'i, Maliki & Hanbali schools. Study usul al-fiqh, contemporary rulings, and fatwa derivation with certified scholars. Flexible online classes for adults."
    />
    <meta
      name="keywords"
      content="Fiqh certification course, Islamic law studies online, Madhab comparison course, Usul al-Fiqh program, Contemporary Islamic rulings, Halal-Haram jurisprudence, Islamic family law course, Prayer fiqh mastery, Zakat calculations online, Islamic inheritance laws"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/fiqh-islamic-jurisprudence" />
  
    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Professional Fiqh Studies - Islamic Jurisprudence Certification | ilmulQuran"
    />
    <meta
      property="og:description"
      content="Deep dive into classical and modern fiqh issues. Study with qualified jurists and receive Ijazah in Islamic legal principles. Enroll today!"
    />
    <meta property="og:url" content="https://ilmulquran.com/fiqh-islamic-jurisprudence" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Fiqh-Islamic-Jurisprudence.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Islamic scholar teaching jurisprudence concepts" />
    <meta property="og:image:type" content="image/webp" />
  
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Advanced Fiqh Course Online - Earn Islamic Law Certification"
    />
    <meta
      name="twitter:description"
      content="Master classical fiqh texts and modern applications. Study under expert fuqaha with flexible scheduling. Free trial available!"
    />
    <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Fiqh-Islamic-Jurisprudence.webp" />
  
    {/* Structured Data */}
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Comprehensive Islamic Jurisprudence Certification Program",
          "description": "In-depth study of classical fiqh methodologies and contemporary applications across all major madhahib. Includes practical case studies and fatwa derivation techniques.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "ilmulQuran",
            "sameAs": "https://ilmulquran.com"
          },
          "url": "https://ilmulquran.com/fiqh-islamic-jurisprudence",
          "image": "https://ilmulquran.com/Images/Courses/Fiqh-Islamic-Jurisprudence.webp",
          "educationalLevel": "Intermediate to Advanced",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["online", "one-on-one", "seminar"],
            "duration": "P8M",
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student",
              "ageRange": "18+"
            },
            "offers": {
              "@type": "Offer",
              "category": "free trial",
              "url": "https://ilmulquran.com/get-register"
            }
          },
          "coursePrerequisites": "Basic understanding of Islamic practices",
          "educationalCredentialAwarded": "Certificate in Islamic Jurisprudence",
          "teaches": [
            "Comparative fiqh",
            "Legal reasoning (Qiyas)",
            "Contemporary Islamic rulings",
            "Classical fiqh texts analysis"
          ]
        })
      }}
    />
  </head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full max-w-7xl mx-auto px-3 mt-10 py-3">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">

            {/* StickyForm for Mobile - top of main content */}
            <div className="block lg:hidden mb-6">
              <StickyForm courseName="Fiqh (Islamic Jurisprudence) Course" />
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
                Comprehensive Course on Islamic Jurisprudence
              </h2>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium">
                    Our <Link href="/learn-islamic-studies" className="text-blue-600">Islamic Studies</Link> program's Fiqh (Islamic Jurisprudence) Course...
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Why Choose Our Fiqh Course?
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 pt-3">
                    {/* List items */}
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Fiqh-Islamic-Jurisprudence.webp"
                    alt="Fiqh Islamic Jurisprudence"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              {/* Continue with course content... */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Course Objectives
              </h2>
              <p className="text-base font-medium pt-4">
                Learn Fiqh Principles: ...
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Course Syllabus
              </h3>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                {/* List items */}
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Call to Action
              </h3>
              <p className="text-base font-medium pt-4">
                Ready to master Islamic law? Explore our <Link href="/courses" className="text-blue-600">full course catalog</Link> or {" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  Enroll in our Fiqh (Islamic Jurisprudence) Course today!
                </Link>
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                  Related Courses
                </h3>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  {/* Related links */}
                </ul>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>

          {/* Sticky Sidebar Form for Desktop */}
          <div className="w-full lg:w-1/4 order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-6">
              <StickyForm courseName="Fiqh (Islamic Jurisprudence) Course" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiqhCourse;
