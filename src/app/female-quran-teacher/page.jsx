import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm"; // ✅ Add StickyForm import

const MaleTeacher = () => {
  const breadcrumbData = {
    id: 1,
    name: "Our Female Quran Teachers",
    link: "/",
  };

  return (
    <>
  
    <head>
    <title>Our Female Quran Teachers | ilmulQuran Online Academy</title>
    <meta
      name="description"
      content="Learn Quran with our experienced female Quran teachers. ilmulQuran offers personalized online instruction to help you master Quranic recitation and Islamic studies."
    />
    <meta
      name="keywords"
      content="Female Quran Teachers, Female Quran Tutors, Learn Quran with Female Teachers, Online Female Quran Teachers, ilmulQuran Female Teachers"
    />
    <link rel="canonical" href="https://ilmulQuran.com/female-quran-teacher" />
  
    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Our Female Quran Teachers | ilmulQuran Online Academy"
    />
    <meta
      property="og:description"
      content="Learn Quran with our experienced female Quran teachers through personalized online lessons. Join ilmulQuran for expert Quranic recitation and Islamic studies guidance."
    />
    <meta property="og:url" content="https://ilmulquran.com/female-quran-teacher" />
    <meta property="og:site_name" content="ilmulQuran" />
  
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Female Quran teacher teaching Quran online"
    />
    <meta property="og:image:type" content="image/png" />
  
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Our Female Quran Teachers | ilmulQuran Online Academy"
    />
    <meta
      name="twitter:description"
      content="Personalized online Quran lessons with experienced female teachers. Start learning Quran today at ilmulQuran."
    />
  
  
    {/* JSON-LD Structured Data */}
    <Script
      id="jsonld-female-teachers"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ilmulQuran",
          "url": "https://ilmulquran.com/female-quran-teacher",
          "description":
            "Learn Quran with our experienced female Quran teachers. ilmulQuran offers personalized online instruction to help you master Quranic recitation and Islamic studies.",
          "hasCourse": {
            "@type": "Course",
            "name": "Quran Learning with Female Teachers",
            "description": "Personalized online Quran lessons with expert female Quran teachers.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "url": "https://ilmulquran.com/female-quran-teacher"
          }
        }),
      }}
    />
  </head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full max-w-7xl mx-auto px-3 mt-10 py-3">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            {/* Mobile StickyForm on top */}
            <div className="block lg:hidden mb-6">
              <StickyForm courseName="Quran Classes with Female Teachers" />
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-[#003366] mb-6 text-center font-bold text-4xl">
                Experienced Female Quran Teachers for Comprehensive Learning
              </h2>
              <p className="text-base font-medium text-gray-700 leading-relaxed pt-4">
                At ilmulQuran Online Academy, our female Quran teachers are dedicated to providing high-quality Islamic education.
                With extensive experience and deep knowledge of Quranic recitation and Islamic studies, our female instructors offer
                personalized and effective online learning experiences.
              </p>

              <section className="mt-12">
                <h3 className="text-2xl font-bold text-[#003366]">
                  Why Choose Our Female Quran Teachers?
                </h3>
                <ul className="mt-6 list-disc text-gray-700 text-left space-y-3 ml-8">
                  <li>
                    <span className="font-semibold text-[#003366]">Expertise:</span> Deep knowledge and experience in Quranic recitation and Islamic studies.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Personalized Instruction:</span> Tailored one-on-one sessions to meet individual learning needs.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Interactive Learning:</span> Engaging lessons with multimedia resources and live feedback.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Flexible Scheduling:</span> Online classes that fit your schedule, allowing you to learn at your own pace.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Supportive Environment:</span> A nurturing and supportive learning environment.
                  </li>
                </ul>
              </section>

              <section className="mt-12">
                <h3 className="text-2xl font-bold text-[#003366]">
                  Our Teaching Approach
                </h3>
                <ul className="mt-6 list-disc text-gray-700 text-left space-y-3 ml-8">
                  <li>
                    <span className="font-semibold text-[#003366]">Quranic Recitation:</span> Mastery of Tajweed and correct pronunciation.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Islamic Studies:</span> Understanding of Islamic principles and practices.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Interactive Sessions:</span> Use of multimedia tools to enhance learning.
                  </li>
                  <li>
                    <span className="font-semibold text-[#003366]">Regular Assessments:</span> Continuous evaluation to track progress.
                  </li>
                </ul>
              </section>

              <section className="mt-12">
                <h3 className="text-2xl font-bold text-[#003366]">
                  Meet Our Female Quran Teachers
                </h3>
                <ul className="mt-6 list-disc text-gray-700 text-left space-y-3 ml-8">
                  <li>Qualified scholars with years of teaching experience.</li>
                  <li>Experts in Tajweed, Qirat, and Islamic studies.</li>
                  <li>Committed educators dedicated to student success.</li>
                </ul>
              </section>

              <section className="mt-12">
                <h3 className="text-2xl font-bold text-[#003366]">
                  Call to Action
                </h3>
                <p className="mt-6 text-base font-medium text-gray-700">
                  Ready to learn from our expert female Quran teachers?{" "}
                  <Link href="/get-register" className="text-blue-600 hover:underline">
                    Enroll now
                  </Link>{" "}
                  and start your journey with ilmulQuran!
                </p>
              </section>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>

          {/* Desktop Sticky Sidebar */}
          <div className="w-full lg:w-1/4 order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-6">
              <StickyForm courseName="Quran Classes with Female Teachers" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaleTeacher;
