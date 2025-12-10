import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const OnlineHifzClasses = () => {
  const breadcrumbData = {
    id: 7,
    name: "Online Hifz Classes – Memorize the Quran with Discipline and Barakah",
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
    href="/Images/Courses/online-hifz-classes.png"
    fetchPriority="high"
  />

  <title>Online Hifz Classes | Memorize Quran Online with Certified Huffaz</title>
  <meta
    name="description"
    content="Join our one-on-one online Hifz classes to memorize the Quran at your pace. Personalized plans for kids and adults with expert male & female Quran teachers."
  />
  <meta
    name="keywords"
    content="Online Hifz Classes, Memorize Quran Online, Certified Huffaz, Hifz Course for Kids, Quran Memorization Classes"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-hifz-classes" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Hifz Classes | Personalized Quran Memorization with Certified Tutors"
  />
  <meta
    property="og:description"
    content="One-on-one online Hifz classes for children and adults with certified male and female Quran tutors. Flexible plans, trial available. Start memorizing today!"
  />
  <meta property="og:url" content="https://ilmulquran.com/online-hifz-classes" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-hifz-classes.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Student memorizing Quran with online teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Memorize Quran Online | Certified Hifz Tutors | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Join our personalized online Hifz program. Kids & adults welcome. Certified male & female teachers. Free trial included!"
  />
  <meta
    name="twitter:image"
    content="/Images/Courses/online-hifz-classes.png"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-hifz-course"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Hifz Classes – Quran Memorization Program",
        description:
          "Structured and personalized online Hifz program for kids and adults with certified male and female Huffaz. Flexible timings and one-on-one sessions.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "Online Islamic education platform offering Quran memorization, Tajweed, Tafsir, and Islamic Studies courses."
        },
        url: "https://ilmulquran.com/online-hifz-classes",
        image: "https://ilmulquran.com/Images/Courses/online-hifz-classes.pngg",
        educationalLevel: "beginner, intermediate, advanced",
        typicalAgeRange: "7+",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P6M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            ageRange: "7-60"
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register"
          }
        },
        coursePrerequisites: "Basic Quran reading skills",
        educationalCredentialAwarded: "Certificate of Quran Memorization"
      })
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
            Online Hifz Classes – Memorize the Quran with Discipline and Barakah
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Memorizing the Quran is one of the greatest blessings a Muslim can achieve. At ilmulQuran.com, our Online Hifz Classes provide the ideal environment for children and adults to memorize the Quran step-by-step — with love, focus, and Islamic adab.
                Whether your goal is to memorize Juz Amma, selected Surahs, or the entire Quran, we have a customized Hifz plan for every student, taught by experienced Huffaz.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-hifz-classes.png"
                alt="Online Hifz Classes"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What’s Included in Our Hifz Classes:
          </h2>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📦 1. Personalized Memorization Plan</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Set your own pace – full Quran or selected parts</li>
            <li>Daily/weekly targets</li>
            <li>Revision strategies to retain long-term memory</li>
          </ul>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📦 2. Professional Male & Female Teachers</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Certified Huffaz with Ijazah in Tajweed</li>
            <li>Experienced with children and adult learners</li>
            <li>Fluent in English, Urdu, and Arabic (on request)</li>
          </ul>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📦 3. Regular Revision & Supervision</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>Daily Sabaq, Sabaqi, and Manzil routine</li>
            <li>Monthly testing</li>
            <li>Parent/supervisor reports for kids</li>
          </ul>

          <h3 className="text-xl font-semibold pt-4 text-[#1a73e8]">📦 4. Flexibility & Ease</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-2">
            <li>One-on-one live Zoom/Skype sessions</li>
            <li>Timings adjusted to student’s schedule</li>
            <li>Weekend-only options available</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Who Can Join?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Children aged 6+ ready for disciplined Hifz</li>
            <li>Adults who wish to memorize the Quran</li>
            <li>Reverts seeking to memorize selected Surahs</li>
            <li>Students preparing for Islamic exams or Ijazah</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Global Availability
          </h2>
          <p className="text-base text-gray-700 pt-3">
            Our students memorize the Quran from: 🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇦🇪 UAE | 🇿🇦 South Africa
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Makes Us Different?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>One-on-one classes</li>
            <li>Certified and practicing Huffaz</li>
            <li>Islamic supervision and discipline</li>
            <li>Focus on adab, memory retention, and pronunciation</li>
            <li>Optional Tafsir overview alongside memorization</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Certification
          </h2>
          <p className="text-base text-gray-700 pt-3">
            Students receive a Digital Hifz Certificate upon completion of 1 Juz, 5 Ajza, or Full Quran.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Pages
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/memorize-selected-surahs">Memorize Selected Surahs</Link></li>
            <li><Link href="/quran-reading-with-tajweed">Quran Reading with Tajweed</Link></li>
            <li><Link href="/online-quran-institute">Online Quran Institute</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam</Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Our Students Say
          </h2>
          <div className="pt-3">
                               <BonusIslamicLearning/>                                                               

            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Start Memorizing Today
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📲 Book your <Link href="/get-register" className="text-blue-600 underline">Free Trial Class</Link> or message us on WhatsApp to get started. Begin your Hifz journey now — one verse at a time.
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default OnlineHifzClasses;
