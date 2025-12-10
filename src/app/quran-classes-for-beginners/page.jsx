import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const QuranClassesForBeginners = () => {
  const breadcrumbData = {
    id: 6,
    name: "Quran Classes for Beginners – Learn the Quran Step by Step",
    link: "/",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/quran-classes-for-beginners" />

  {/* Preload critical assets */}
  <link 
    rel="preload" 
    as="image" 
    href="/Images/Courses/quran-classes-for-beginners.png"
    fetchPriority="high"
    imagesrcset="
      /Images/Courses/quran-classes-for-beginners.png 480w,
      /Images/Courses/quran-classes-for-beginners.png 800w
    "
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Optimized Title (60 characters) */}
  <title>Quran Classes for Beginners | Learn Quran Step-by-Step</title>

  {/* Enhanced Meta Description (150 characters) */}
  <meta 
    name="description" 
    content="Join our Quran classes for beginners. Learn Noorani Qaida, Tajweed, and recitation from expert teachers in a structured and easy-to-follow format." 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="Quran Classes for Beginners, Learn Quran Step-by-Step, Online Noorani Qaida, Beginner Tajweed Course, Quran for Kids, Online Quran Classes for Adults, Basic Quran Reading" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/quran-classes-for-beginners" />
  <meta property="og:title" content="📘 Beginner Quran Classes – Learn to Read Quran Online" />
  <meta property="og:description" content="Step-by-step online Quran classes for beginners. Learn Qaida, Tajweed, and recitation from expert teachers. Free trial available!" />
  <meta property="og:image" content="/Images/Courses/quran-classes-for-beginners.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Student learning Quran basics online with teacher" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="📖 Learn Quran from Scratch – Beginner Online Classes" />
  <meta name="twitter:description" content="Perfect for beginners! Learn Noorani Qaida, Tajweed, and Quran recitation in simple, personalized classes. Free trial available." />
  <meta name="twitter:image" content="/Images/Courses/quran-classes-for-beginners.png" />

  {/* Structured Data */}
  <Script
    id="quran-beginners-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Beginner Quran Learning Course",
        description: "Introductory Quran course for absolute beginners. Learn Noorani Qaida, pronunciation, and Quran recitation with certified teachers online.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P2M",
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register"
          }
        },
        educationalCredentialAwarded: "Certificate of Participation",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1625",
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
  <meta name="apple-mobile-web-app-title" content="Quran for Beginners" />
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
            Quran Classes for Beginners – Learn the Quran Step by Step
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Just starting your journey with the Quran? Whether you’re a child, adult, or a new Muslim,
                our beginner-friendly Quran classes are specially designed to teach you from the very basics,
                following Islamic adab and ease. At ilmulQuran.com, we offer one-on-one online classes with
                experienced male and female teachers who guide you gently from recognizing Arabic letters
                to reading the Quran fluently with Tajweed.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/quran-classes-for-beginners.png"
                alt="Quran Classes for Beginners"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What You'll Learn as a Beginner:
          </h2>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📘 Phase 1: Noorani Qaida (Arabic Alphabet)</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Recognize Arabic letters</li>
            <li>Correct pronunciation (Makharij)</li>
            <li>Practice basic letter combinations</li>
            <li>Understand vowels and signs</li>
          </ul>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📗 Phase 2: Basic Quran Reading</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Join letters to form words</li>
            <li>Understand how to pause and continue</li>
            <li>Read short surahs with fluency</li>
          </ul>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📕 Phase 3: Tajweed Foundations</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Simple Tajweed rules (Ikhfa, Qalqala, Ghunna, etc.)</li>
            <li>Practice in Surah Al-Fatiha and small Surahs</li>
            <li>Build confidence in reciting with clarity and beauty</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Why Beginners Choose IlmulQuran:
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>📍 Easy-to-understand method</li>
            <li>🧑‍🏫 Patient, supportive teachers</li>
            <li>🧕 Female teachers available for sisters and girls</li>
            <li>🕒 Flexible class timings across time zones</li>
            <li>🔁 Option to repeat lessons as needed</li>
            <li>📈 Progress tracking & feedback</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Who Can Join?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Kids (Age 4 and up)</li>
            <li>Teenagers and adults with no prior knowledge</li>
            <li>New Muslims (Reverts)</li>
            <li>Anyone who wants to revise or correct their basics</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Available Worldwide
          </h2>
          <p className="text-base text-gray-700 pt-3">
            We welcome students globally from:
            🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇿🇦 South Africa | 🇦🇪 UAE
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Certificate of Participation
          </h2>
          <p className="text-base text-gray-700 pt-3">
            Upon completing beginner-level milestones, students receive a Certificate of Participation
            with their teacher's remarks and feedback.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Pages
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/learn-noorani-qaida-online">Learn Noorani Qaida Online</Link></li>
            <li><Link href="/online-quran-classes">Online Quran Classes</Link></li>
            <li><Link href="/quran-reading-with-tajweed">Quran Reading with Tajweed</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam</Link></li>
          </ul>

     

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Ready to Begin?
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📲 Book a <Link href="/get-register" className="text-blue-600 underline">Free Trial Class</Link> now and learn from the comfort of your home! No prior knowledge required.
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

export default QuranClassesForBeginners;
