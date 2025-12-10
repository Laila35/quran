import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
import Banner from "@/components/Banner";
import { breadcrumbData } from "@/lib/Data";


export default function QuranicArabicBeginners() {
    const breadcrumbData = {
    id: 2,
    name: "Quranic Arabic for Beginners – Understand the Quran Word by Word| ilmulQuran",
    link: "/quranic-arabic-for-beginners",
  };


  return (
    <>
   <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/courses/quranic-arabic-beginners.webp"
    fetchPriority="high"
  />

  <title>Quranic Arabic for Beginners Learn the Language of the Quran</title>
  <meta
    name="description"
    content="Learn Quranic Arabic online from scratch. Understand key vocabulary, grammar, and verses used in the Quran. One-on-one classes with certified teachers in easy English."
  />
  <meta
    name="keywords"
    content="Quranic Arabic for Beginners, Learn Quranic Arabic, Arabic Grammar Online, Understand the Quran, Arabic Language for Quran, Quran Vocabulary, Arabic with Tajweed, Online Quranic Arabic Course"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/quranic-arabic-for-beginners"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Quranic Arabic for Beginners | Online Course | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Master Quranic Arabic step-by-step with our expert tutors. Learn Arabic vocabulary and grammar used in the Quran. Get a free trial class today!"
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/quranic-arabic-for-beginners"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/courses/quranic-arabic-beginners.webp"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Student learning Quranic Arabic online"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Learn Quranic Arabic for Beginners – ilmulQuran Online Academy"
  />
  <meta
    name="twitter:description"
    content="One-on-one classes for learning Quranic Arabic with grammar and vocabulary from the Quran. Start with a free trial today!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/OG/quranic-arabic-beginners.webp"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-quranic-arabic"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Quranic Arabic for Beginners",
        description:
          "Learn Quranic Arabic online from scratch. Understand key vocabulary, grammar, and verses used in the Quran. One-on-one classes with certified teachers in easy English.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "Online Islamic education platform specializing in Quranic Arabic language courses.",
        },
        url: "https://ilmulquran.com/quranic-arabic-for-beginners",
        image: "https://ilmulquran.com/Images/courses/quranic-arabic-beginners.webp",
        educationalLevel: ["beginner"],
        typicalAgeRange: "10-65",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P3M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            ageRange: "10-65",
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register",
          },
        },
        coursePrerequisites: "None",
        educationalCredentialAwarded: "Certificate of Completion",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Quranic Arabic for Beginners – Understand the Quran Word by Word
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-6">
            <p>
              Would you like to understand the Quran directly in Arabic, the language in which it was revealed?
              Our Quranic Arabic for Beginners course is designed for non-Arabic speakers who want to begin their journey of understanding the Quran word by word. We teach you basic grammar, vocabulary, and common expressions from the Quran – in a simple and structured way.
              Ideal for adults, students, and reverts, this course helps you connect deeply with the words of Allah ﷻ.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-2">📚 What You'll Learn in This Course:</h2>

              <h3 className="font-semibold mt-4">🧠 Module 1: Foundations of Quranic Arabic</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Arabic alphabet refresher</li>
                <li>Basic word patterns and sentence structure</li>
                <li>Understanding root letters and word families</li>
              </ul>

              <h3 className="font-semibold mt-4">📖 Module 2: Common Quranic Vocabulary</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Top 300–500 Quranic words</li>
                <li>Verbs, nouns, prepositions often used in the Quran</li>
                <li>Practice with short Surahs and verses</li>
              </ul>

              <h3 className="font-semibold mt-4">📝 Module 3: Easy Grammar Rules (Nahw & Sarf Basics)</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Subject-verb-object arrangement</li>
                <li>Gender, singular/plural, past/present/future</li>
                <li>Common grammatical constructs in the Quran</li>
              </ul>

              <h3 className="font-semibold mt-4">🔄 Module 4: Word-by-Word Quran Practice</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Breakdown of selected verses</li>
                <li>Application of learned grammar & vocabulary</li>
                <li>Memorization + Tafsir-lite approach</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">🧕 Who Can Join?</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Adults & teens (14+)</li>
                <li>Non-Arabic speakers who read Quran but don’t understand it</li>
                <li>New Muslims (Reverts)</li>
                <li>Students of Tafsir or Islamic Studies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">📆 Duration & Format:</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Course Duration: 3–6 Months</li>
                <li>Format: One-on-One Online Classes</li>
                <li>Platform: Zoom, Skype, or Google Meet</li>
                <li>Language of Instruction: English (with Urdu support if needed)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">👩‍🏫 Teachers:</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Qualified Ustadhs & Ustadhas</li>
                <li>Trained in Arabic, Tajweed, and Islamic instruction</li>
                <li>Supportive & friendly approach for beginners</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">🏆 Certification:</h2>
              <p>
                At the end of the course, students will receive a Digital Certificate of Completion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">🌐 Available Worldwide:</h2>
              <p>🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇿🇦 South Africa</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">🔗 Related Courses:</h2>
              <ul className="list-disc list-inside ml-4">
                <li><a href="/learn-arabic-online" className="text-blue-600 underline">Learn Arabic Online</a></li>
                <li><a href="/learn-tafsir-online" className="text-blue-600 underline">Learn Tafsir Online</a></li>
                <li><a href="/revert-to-islam" className="text-blue-600 underline">Revert to Islam</a></li>
                <li><a href="/online-quran-classes" className="text-blue-600 underline">Online Quran Classes</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">✅ Start Learning Quranic Arabic</h2>
              <p>
                Take your understanding of the Quran to the next level.
                📲 Book a Free Trial Class today and begin your journey in Quranic Arabic – with ease and purpose.
              </p>
              <a
                href="/free-trial"
                className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
              >
                Book Free Trial →
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full flex items-start justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/Images/Courses/quranic-arabic-course.png"
                alt="Quranic Arabic for Beginners"
                width={500}
                height={500}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>


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
    </>
  );
}
