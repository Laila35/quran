import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const OnlineQuranInstitute = () => {
  const breadcrumbData = {
    id: 3,
    name: "Online Quran Institute – Learn the Quran with Confidence and Care",
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
    href="/Images/Courses/online-quran-institute.png  "
    fetchPriority="high"
  />

  <title>Online Quran Institute | Trusted Quran Learning for Kids & Adults</title>
  <meta
    name="description"
    content="Join our certified online Quran institute for one-on-one Quran learning with male and female teachers. Learn Tajweed, Hifz, and Tafseer at your own pace from anywhere in the world."
  />
  <meta
    name="keywords"
    content="Online Quran Institute, Learn Quran Online, Tajweed, Hifz, Tafseer, Quran Teachers for Kids, Female Quran Teachers"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-institute" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Institute – Learn with Certified Male & Female Tutors | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Flexible online Quran classes for kids & adults. Learn Tajweed, Hifz, and Tafseer with qualified male & female teachers. Free trial available!"
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-institute"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-institute.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Muslim student learning Quran online with teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Certified Online Quran Institute – Classes for Kids & Adults | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Learn Quran online from a trusted institute. One-on-one classes with male & female tutors. Tajweed, memorization, Tafseer & more. Free trial!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-institute.png"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-quran-institute"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Quran Institute – One-on-One Classes",
        description:
          "Join our certified online Quran institute for one-on-one learning in Tajweed, Hifz, and Tafseer with expert male and female teachers. Classes for all ages, flexible schedules, and certification available.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "ilmulQuran is a global online platform offering high-quality Islamic education including Quran, Hadith, and Tafseer for children and adults.",
        },
        url: "https://ilmulquran.com/online-quran-institute",
        image: "https://ilmulquran.com/Images/Courses/online-quran-institute.png",
        educationalLevel: ["beginner", "intermediate", "advanced"],
        typicalAgeRange: "5-60",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P6M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            ageRange: "5-60",
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register",
          },
        },
        coursePrerequisites: "None",
        educationalCredentialAwarded: "Certificate of Quranic Proficiency",
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
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
            Online Quran Institute – Learn the Quran with Confidence and Care
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Welcome to IlmulQuran.com, your trusted Online Quran Institute for children, adults, and reverts around the world.
                With a deep commitment to Islamic values, proper Tajweed, and compassionate teaching, we provide structured one-on-one Quran classes
                designed to help every Muslim build a strong relationship with the Book of Allah – from the comfort of home.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-institute.png"
                alt="Online Quran Institute"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Makes Our Online Institute Unique?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">One-on-One Personalized Teaching:</span> Learn at your pace with certified male or female teachers, trained in Tajweed and Islamic studies.</li>
            <li><span className="font-semibold text-[#1a73e8]">Structured Courses for All Levels:</span> Noorani Qaida, Tajweed, Tafseer, and Hifz.</li>
            <li><span className="font-semibold text-[#1a73e8]">Flexible Timings:</span> Global availability across all time zones (UK, USA, Canada, Australia, and more).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Courses Offered at Our Online Quran Institute
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">Learn Noorani Qaida Online:</span> Learn Arabic letters and pronunciation – perfect for kids and reverts.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran Reading with Tajweed:</span> Step-by-step recitation with proper Tajweed rules.</li>
            <li><span className="font-semibold text-[#1a73e8]">Memorize Quran (Hifz):</span> Weekly revision plan and structured memorization program.</li>
            <li><span className="font-semibold text-[#1a73e8]">Learn Tafsir & Translation:</span> Understand the meaning of Quranic verses.</li>
            <li><span className="font-semibold text-[#1a73e8]">Daily Duas & Islamic Studies:</span> Strengthen Islamic knowledge and practice.</li>
            <li><span className="font-semibold text-[#1a73e8]">Revert to Islam Course:</span> Welcoming and guided program for new Muslims (English supported).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Who Can Join?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Children aged 4+</li>
            <li>Adults of all levels</li>
            <li>Sisters – With female teachers</li>
            <li>Reverts & new Muslims</li>
            <li>Working professionals</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Serving Students Across the Globe
          </h2>
          <p className="text-base text-gray-700 pt-3">
            🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇦🇪 UAE | 🇿🇦 South Africa
            <br />
            Taught by native English-speaking instructors who respect cultural values.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Female Teachers for Sisters & Girls
          </h2>
          <p className="text-base text-gray-700 pt-3">
            We provide certified and modest female Quran teachers who ensure comfort, privacy, and professionalism during each session.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Progress Monitoring & Support
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Monthly report cards</li>
            <li>Supervisor check-ins</li>
            <li>Parental feedback & student reviews</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Certified Teachers
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Hafiz or Alim/Alimah certified</li>
            <li>Trained in online teaching and communication</li>
            <li>Fluent in English (some also fluent in Urdu & Arabic)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Certificate of Completion
          </h2>
          <p className="text-base text-gray-700 pt-3">
            Students can receive a digital certificate upon successful course completion, signed and stamped by our institute.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Courses
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/online-quran-academy">Online Quran Academy</Link></li>
            <li><Link href="/quran-reading-with-tajweed">Quran Reading with Tajweed</Link></li>
            <li><Link href="/memorize-quran-online">Memorize Quran Online</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam Course</Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Students Say About Us
          </h2>
          <div className="pt-3">
                                  <BonusIslamicLearning />
            
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Enroll Now – Start Learning the Quran Today
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📲 Book your <span className="font-semibold text-[#1a73e8]">Free Trial Class</span> now by{" "}
            <Link href="/get-register" className="text-blue-600 underline">filling out our registration form</Link>{" "}
            or messaging us directly on WhatsApp.
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default OnlineQuranInstitute;
