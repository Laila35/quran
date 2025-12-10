import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const MaleTeacher = () => {
  const breadcrumbData = {
    id: 1,
    name: "Our Male Quran Teachers",
    link: "/",
  };



  return (
    <>
      <head>
        <title>ilmulQuran | Male Quran Teacher</title>
        <meta
          name="description"
          content="Learn Quran with our experienced male Quran teachers. ilmulQuran offers personalized online instruction to help you master Quranic recitation and Islamic studies."
        />
        <meta
          name="keywords"
          content="Male Quran Teachers, Male Quran Tutors, Learn Quran with Male Teachers, Online Male Quran Teachers, ilmulQuran Male Teachers"
        />
        <link rel="canonical" href="https://ilmulquran.com/male-quran-teacher" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ilmulQuran | Male Quran Teacher"
        />
        <meta
          property="og:description"
          content="Learn Quran with our experienced male Quran teachers. ilmulQuran offers personalized online instruction to help you master Quranic recitation and Islamic studies."
        />
        <meta property="og:url" content="https://ilmulquran.com/male-quran-teacher" />
        <meta property="og:site_name" content="ilmulQuran" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Male Quran teacher teaching online Quran class"
        />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ilmulQuran | Male Quran Teacher"
        />
        <meta
          name="twitter:description"
          content="Learn Quran with our experienced male Quran teachers. ilmulQuran offers personalized online instruction to help you master Quranic recitation and Islamic studies."
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="jsonld-male-quran-teacher"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Male Quran Teacher Online",
              "description":
                "Personalized online Quran learning sessions with experienced male Quran teachers at ilmulQuran to help you master Quranic recitation and Islamic studies.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "ilmulQuran",
                "sameAs": "https://ilmulquran.com",
                "description":
                  "Online Islamic education platform specializing in Quranic and Islamic studies."
              },
              "url": "https://ilmulquran.com/male-quran-teacher",
              "educationalLevel": "all",
              "typicalAgeRange": "all",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": ["online", "one-on-one"],
                "duration": "P6M",
                "audience": {
                  "@type": "EducationalAudience",
                  "educationalRole": "student",
                  "ageRange": "all"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "url": "https://ilmulquran.com/get-register",
                  "availability": "https://schema.org/InStock"
                }
              },
              "coursePrerequisites": "Basic Quran reading skills recommended",
              "educationalCredentialAwarded": "Certificate of Quran Completion"
            }),
          }}
        />
      </head>

 {/* <Banner breadcrumbData={breadcrumbData} /> */}

  {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

{/* Form Column */}
<div className="w-full lg:w-1/3 order-1 lg:order-2">
  <StickyForm 
    courseName={breadcrumbData.name.split("–")[0].trim()} 
  />
</div>



<div className="w-full lg:w-2/3 order-2 lg:order-1">
              <h2 id="overview" className="text-3xl font-bold text-teal-700 mb-5 text-center">
                Experienced Male Quran Teachers for Comprehensive Learning
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed text-center">
                At ilmulQuran Online Academy, our male Quran teachers are dedicated to providing high-quality Islamic education. With extensive experience and deep knowledge of Quranic recitation and Islamic studies, our male instructors offer personalized and effective online learning experiences.
              </p>

              <section id="why-choose" className="mt-12">
                <h3 className="text-2xl font-bold text-teal-700 text-center">
                  Why Choose Our Male Quran Teachers?
                </h3>
                <ul className="mt-6 list-disc text-gray-700 space-y-3 max-w-lg mx-auto">
                  <li>
                    <span className="font-semibold text-teal-600">Expertise:</span> Deep knowledge and experience in Quranic recitation and Islamic studies.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Personalized Instruction:</span> Tailored one-on-one sessions to meet individual learning needs.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Interactive Learning:</span> Engaging lessons with multimedia resources and live feedback.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Flexible Scheduling:</span> Online classes that fit your schedule, allowing you to learn at your own pace.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Supportive Environment:</span> A nurturing and supportive learning environment.
                  </li>
                </ul>
              </section>

              <section id="approach" className="mt-12">
                <h3 className="text-2xl font-bold text-teal-700 text-center">
                  Our Teaching Approach
                </h3>
                <ul className="mt-6 list-disc text-gray-700 space-y-3 max-w-lg mx-auto">
                  <li>
                    <span className="font-semibold text-teal-600">Quranic Recitation:</span> Mastery of Tajweed and correct pronunciation.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Islamic Studies:</span> Understanding of Islamic principles and practices.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Interactive Sessions:</span> Use of multimedia tools to enhance learning.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-600">Regular Assessments:</span> Continuous evaluation to track progress.
                  </li>
                </ul>
              </section>

              <section id="meet-teachers" className="mt-12">
                <h3 className="text-2xl font-bold text-teal-700 text-center">
                  Meet Our Male Quran Teachers
                </h3>
                <ul className="mt-6 list-disc text-gray-700 space-y-3 max-w-lg mx-auto">
                  <li>Qualified scholars with years of teaching experience.</li>
                  <li>Experts in Tajweed, Qirat, and Islamic studies.</li>
                  <li>Committed educators dedicated to student success.</li>
                </ul>
              </section>

              <section className="mt-12">
                <h3 className="text-2xl font-bold text-teal-700 text-center">
                  Call to Action
                </h3>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
                  Ready to learn from our expert male Quran teachers?{" "}
                  <Link href="/get-register" className="text-teal-600 font-semibold no-underline hover:underline transition-colors duration-300">
                    Enroll now
                  </Link>{" "}
                  and start your journey with ilmulQuran!
                </p>
              </section>

              <section id="testimonials" className="mt-12">
                <h3 className="text-2xl font-bold text-teal-700 text-center">
                  Student Testimonials
                </h3>
                <div className="pt-6">
    <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />                </div>
              </section>
            </div>
          </div>
          </div>

    </>
  );
};

export default MaleTeacher;