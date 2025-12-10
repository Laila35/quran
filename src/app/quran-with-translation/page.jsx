import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


  

const QuranTranslationCourse = () => {
    const breadcrumbData = {
        id: 1,
        name: "Quran Translation Course - Understand the Quran in Your Language",
        link: "/",
    };

    return (
        <>

  <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <link rel="canonical" href="https://ilmulquran.com/quran-with-translation" />
  
  {/* Preload critical assets */}
  <link 
    rel="preload" 
    as="image" 
    href="/Images/Courses/quran-translation-course.webp "
    fetchPriority="high"
    imagesrcset="
      /Images/Courses/quran-translation-course.webp 480w,
      /Images/Courses/quran-translation-course.webp 800w
    "
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Optimized Title */}
  <title>Quran Translation Course: Understand Meanings Online</title>

  {/* Enhanced Meta Tags */}
  <meta name="description" content="Master Quran translation with certified scholars: Word-by-word exegesis, 40+ key concepts, and practical application. Start with a free trial class!" />
  <meta name="keywords" content="Quran Translation Course, Quran Tafsir Classes, Understand Quran Meanings, Online Quran Study, Quranic Exegesis Course, Islamic Translation Certification" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />

  {/* Open Graph Enhancements */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulquran.com/quran-with-translation" />
  <meta property="og:title" content="🔍 Quran Translation Mastery: Understand Every Word | ilmulQuran" />
  <meta property="og:description" content="3-Level Certification Program: From basic translation to deep tafsir analysis. 98% Student Satisfaction Rate. Enroll Now!" />
  <meta property="og:image" content="/Images/Courses/quran-translation-course.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Student analyzing Quran text with teacher guidance" />
  <meta property="og:site_name" content="ilmulQuran" />

  {/* Twitter Card Optimization */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:creator" content="@quran_translate" />
  <meta name="twitter:title" content="🚀 Quran Translation Course: From Basics to Advanced Tafsir" />
  <meta name="twitter:description" content="Join 10,000+ students worldwide in our structured Quran translation program. Free placement test & certification included!" />
  <meta name="twitter:image" content="/Images/Courses/quran-translation-course.webp" />

  {/* Structured Data */}
  <Script
    id="quran-translation-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Quran Translation Certification Program",
        description: "Comprehensive 6-month program covering Quranic vocabulary, grammatical analysis, and contextual interpretation",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one", "group"],
          duration: "P6M",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "149"
          }
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.95",
          ratingCount: "1242",
          bestRating: "5"
        }
      })
    }}
  />

  {/* iOS Optimization */}
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Quran Translation" />

  {/* PWA Manifest */}
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#1a472a" />
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
                <div className="bg-gray-100 rounded-lg shadow-lg p-8">
                    <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
                        Quran Translation Course - Understand the Quran in Your Language
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <p className="text-base font-medium">
                                Our Quran Translation Course is designed to help you understand the meanings of the Quran in your language. This course will guide you through the translation of Quranic text, providing a deeper understanding of Allah's messages. With the help of experienced tutors, you will learn to comprehend the Quran's teachings effectively.
                            </p>
                            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                                Why Choose Our Quran Translation Course?
                            </h2>
                            <p className="text-base font-medium pt-2">
                                Our course offers several benefits:
                            </p>

                            <ul className="list-disc ml-8 space-y-1 pt-3">
                                <li><span className="font-bold">Personal Guidance:</span> One-on-one sessions with expert tutors.</li>
                                <li><span className="font-bold">Flexible Learning:</span> Online classes that fit your schedule.</li>
                                <li><span className="font-bold">Complete Curriculum:</span> Covers all aspects of Quran translation, from basics to advanced levels.</li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2 order-first lg:order-last">
                            <Image
                                width={600}
                                height={600}
                                src="/Images/Courses/quran-translation-course.webp"
                                alt="Quran Translation Course"
                                style={{ borderRadius: '25px' }}
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                        Course Objectives
                    </h2>

                    <ul className="list-disc ml-8 space-y-1 pt-3">
                        <li><span className="font-bold">Learn Basic Arabic Grammar:</span> Understand the fundamental rules of Arabic grammar.</li>
                        <li><span className="font-bold">Develop Vocabulary:</span> Build a strong vocabulary for Quranic translation.</li>
                        <li><span className="font-bold">Practice Translation:</span> Learn to translate Quranic verses accurately.</li>
                        <li><span className="font-bold">Improve Comprehension:</span> Enhance your understanding of the Quranic text.</li>
                        <li><span className="font-bold">Understand Context:</span> Gain insights into the historical and cultural context of the Quran.</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                        Course Syllabus
                    </h3>

                    <p className="text-base font-medium pt-3">
                        The Quran Translation Course includes:
                    </p>
                    <ul className="list-disc ml-8 space-y-1 pt-3">
                        <li><span className="font-bold">Introduction to Quranic Arabic:</span> Basics of Arabic alphabet and pronunciation.</li>
                        <li><span className="font-bold">Basic Grammar:</span> Understanding nouns, verbs, and sentence structure in Arabic.</li>
                        <li><span className="font-bold">Building Vocabulary:</span> Common words and phrases in the Quran.</li>
                        <li><span className="font-bold">Translation Practice:</span> Techniques for translating Quranic verses.</li>
                        <li><span className="font-bold">Intermediate Grammar:</span> Advanced grammar rules for accurate translation.</li>
                        <li><span className="font-bold">Contextual Understanding:</span> Historical context of Quranic revelations.</li>
                        <li><span className="font-bold">Advanced Translation:</span> Complex texts and advanced translation skills.</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                        Call to Action
                    </h2>

                    <p className="text-base font-medium pt-3">
                        Ready to understand the Quran in your language? Enroll in our Quran Translation Course today!
                    </p>

                    <div className="flex justify-center pt-6">
                        <button aria-label=" Enroll Now" className="bg-blue-600 text-white px-6 py-3 rounded-full">
                            Enroll Now
                        </button>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                        Student Testimonials
                    </h3>

                    <div className="pt-3">
          <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />                    </div>

                    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                        Call to Action
                    </h2>

                    <p className="text-base font-medium pt-4">
                        Ready to understand the Quran in your language? <Link href="/get-register" className="text-blue-600 no-underline">Enroll in our Quran Translation Course today!</Link>
                    </p>
                </div>

                 <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>


            </div>
            </div>
            </div>
        </>
    );
};

export default QuranTranslationCourse;