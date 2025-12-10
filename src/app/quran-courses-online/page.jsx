import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


  
const QuranCoursesOnline = () => {
  const breadcrumbData = {
    id: 5,
    name: "Quran Courses Online – All-in-One Quran Learning Programs",
    link: "/",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/quran-courses-online" />

  {/* Preload critical assets */}
  <link 
    rel="preload" 
    as="image" 
    href="/Images/Courses/quran-courses-online.png"
    fetchPriority="high"
    imagesrcset="
      /Images/Courses/quran-courses-online.png 480w,
      /Images/Courses/quran-courses-online.png 800w
    "
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Optimized Title (60 characters) */}
  <title>Quran Courses Online – Tajweed, Hifz, Tafseer & Qaida</title>

  {/* Enhanced Meta Description (150 characters) */}
  <meta 
    name="description" 
    content="Explore Quran courses online for kids & adults. Learn Qaida, Tajweed, Hifz, Tafseer & more with expert teachers. Free trial available!" 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="Quran Courses Online, Learn Quran Online, Tajweed Classes, Hifz Program, Online Tafseer, Quran Classes for Adults, Kids Quran Learning, Noorani Qaida Online, Female Quran Teachers" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/quran-courses-online" />
  <meta property="og:title" content="📘 Quran Courses Online – Tajweed, Hifz, Tafseer, Qaida & More" />
  <meta property="og:description" content="Certified online Quran courses for all ages. One-on-one sessions with expert male and female teachers. Try a free class today!" />
  <meta property="og:image" content="/Images/Courses/quran-courses-online.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Online Quran course with teacher and student on video call" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="🧕📖 Quran Courses Online for All Ages – Tajweed, Hifz, Qaida" />
  <meta name="twitter:description" content="Join thousands learning Quran online. 1-on-1 sessions in Tajweed, Hifz, Qaida, Tafseer & more. Get your free trial today!" />
  <meta name="twitter:image" content="/Images/Courses/quran-courses-online.png" />

  {/* Structured Data */}
  <Script
    id="quran-courses-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Quran Learning Program",
        description: "Flexible Quran courses covering Tajweed, Hifz, Qaida, Tafseer, and Islamic studies for kids and adults. 1-on-1 online classes with certified teachers.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P3M",
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register"
          }
        },
        educationalCredentialAwarded: "Completion Certificate",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.93",
          ratingCount: "1870",
          bestRating: "5"
        }
      })
    }}
  />

  {/* Additional SEO Enhancements */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />

  {/* Mobile Optimization */}
  <meta name="apple-mobile-web-app-title" content="Online Quran Courses" />
  <meta name="theme-color" content="#2A593F" />
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
            Quran Courses Online – All-in-One Quran Learning Programs
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Looking for the best Quran courses online for yourself or your children?
                At ilmulQuran.com, we offer structured one-on-one Quran courses for kids, adults, and new Muslims –
                designed to suit every learning level with full flexibility and Islamic guidance.
                Whether you are beginning from Qaida or aiming to complete your Hifz, we have the right teacher and
                program for you – all from the comfort of your home.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/quran-courses-online.png"
                alt="Quran Courses Online"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Our Online Quran Courses Include:
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">Noorani Qaida Online:</span> Arabic letters, correct pronunciation, basic reading rules.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran Reading with Tajweed:</span> Fluency in recitation with proper Tajweed rules.</li>
            <li><span className="font-semibold text-[#1a73e8]">Hifz ul Quran (Memorization):</span> Personalized memorization plan with daily revision.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran with Translation & Tafseer:</span> Understand the message and meaning of the Quran.</li>
            <li><span className="font-semibold text-[#1a73e8]">Revert to Islam Course:</span> For new Muslims – foundational beliefs, prayer, & Quran basics.</li>
            <li><span className="font-semibold text-[#1a73e8]">Taleem ul Islam & Duas:</span> Basic Islamic knowledge, etiquettes, and daily duas.</li>
            <li><span className="font-semibold text-[#1a73e8]">Ijazah Course:</span> For advanced students wishing to earn sanad in recitation.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Why Choose Our Online Quran Courses?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>One-on-one live sessions via Zoom/Skype</li>
            <li>Male & female teachers available</li>
            <li>Beginner to advanced level coverage</li>
            <li>Progress tracking & monthly reports</li>
            <li>Flexible timings and easy scheduling</li>
            <li>Support in English, Urdu, or Arabic</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Suitable For:
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Kids aged 4+</li>
            <li>Adult brothers & sisters</li>
            <li>Busy professionals</li>
            <li>New Muslims (Reverts)</li>
            <li>Families looking for complete Islamic education</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Learn From Anywhere
          </h2>
          <p className="text-base text-gray-700 pt-3">
            We serve students from all over the world including:
            🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇦🇪 UAE | 🇿🇦 South Africa
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Certification
          </h2>
          <p className="text-base text-gray-700 pt-3">
            A Certificate of Completion is issued upon successful completion of any course,
            signed by the academic head of ilmulQuran.com.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Pages
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/online-quran-classes">Online Quran Classes</Link></li>
            <li><Link href="/memorize-quran-online">Memorize Quran Online</Link></li>
            <li><Link href="/learn-tafseer-online">Learn Tafsir Online</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam Course</Link></li>
          </ul>

       
          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Start Learning Today
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📩 Book a <Link href="/get-register" className="text-blue-600 underline">Free Trial</Link> or message us via WhatsApp – your journey with the Quran begins now.
          </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
                <BonusIslamicLearning />
      
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default QuranCoursesOnline;
