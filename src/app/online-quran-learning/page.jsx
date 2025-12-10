import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranLearning = () => {
  const breadcrumbData = {
    id: 2,
    name: "Online Quran Learning Made Easy for Kids & Adults",
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
    href="/Images/courses/online-quran-learning.webp"
    fetchPriority="high"
  />

  <title>
    Online Quran Learning Tajweed, Hifz, Tafseer & Quran Classes
  </title>
  <meta
    name="description"
    content="Join our online Quran learning program for kids and adults. Learn with certified male & female Quran teachers – Tajweed, memorization, and more from home."
  />
  <meta
    name="keywords"
    content="Online Quran Learning, Tajweed Classes, Hifz Program, Quran Tafsir Online, Learn Quran with Teachers"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-learning" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Learning with Certified Teachers | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Enroll in online Quran classes for Tajweed, Hifz, Tafseer, and one-on-one Quran learning. Male & female tutors. Flexible schedule. Free trial available!"
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-learning"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/courses/online-quran-learning.webp"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Student learning Quran online with teacher on laptop"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Online Quran Classes with Tajweed, Hifz & Tafseer | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Learn Quran online from certified teachers. Classes for kids & adults. Tajweed, memorization, Tafsir – start your free trial today!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/courses/online-quran-learning.webp"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-quran-learning"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Quran Learning Program",
        description:
          "Online Quran classes for children and adults with qualified male and female teachers. Covering Tajweed, Hifz, Tafseer, and personalized one-on-one sessions.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "Online Islamic learning platform offering Quran, Tajweed, and Tafseer courses globally with certified tutors.",
        },
        url: "https://ilmulquran.com/online-quran-learning",
        image: "https://ilmulquran.com/Images/courses/online-quran-learning.webp",
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
        educationalCredentialAwarded: "Certificate of Quranic Studies",
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
            Online Quran Learning Made Easy for Kids & Adults
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                ilmulQuran.com provides a trusted environment for online Quran learning,
                guided by certified male and female Quran teachers. We offer a personalized
                experience with live one-on-one classes that respect your privacy, schedule,
                and Islamic values.
              </p>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Whether you're starting from Noorani Qaida or advancing to Tafseer and Hifz,
                we have a course and teacher tailored for you.
              </p>
            </div>

            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-learning.png"
                alt="Online Quran Learning"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Courses We Offer for Online Quran Learning
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">Learn Noorani Qaida Online:</span> Perfect for beginners and children.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran with Tajweed:</span> Learn to recite beautifully and correctly.</li>
            <li><span className="font-semibold text-[#1a73e8]">Hifz ul Quran Program:</span> Memorize the Quran with weekly targets.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran with Translation & Tafsir:</span> Understand the meanings deeply.</li>
            <li><span className="font-semibold text-[#1a73e8]">Daily Duas, Salah & Islamic Studies:</span> Build your Islamic foundation.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Who Is It For?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Young kids (4+ years)</li>
            <li>Teens and Adults (male & female)</li>
            <li>New Muslims (Reverts)</li>
            <li>Working professionals who want flexible class timings</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Why Our Online Quran Learning Stands Out
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">100% Online:</span> Learn from anywhere in the world.</li>
            <li><span className="font-semibold text-[#1a73e8]">Flexible Schedule:</span> Morning, evening, or weekend classes.</li>
            <li><span className="font-semibold text-[#1a73e8]">Female Teachers:</span> For sisters and daughters.</li>
            <li><span className="font-semibold text-[#1a73e8]">Supervised Progress:</span> Regular assessments and reports.</li>
            <li><span className="font-semibold text-[#1a73e8]">Certified Teachers:</span> With years of experience in Tajweed & Hifz.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Available in All Countries
          </h2>
          <p className="text-base text-gray-700 leading-relaxed pt-3">
            🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇦🇪 UAE | 🇿🇦 South Africa and more.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Courses
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/online-quran-academy">Online Quran Academy</Link></li>
            <li><Link href="/learn-quran-online">Learn Quran Online</Link></li>
            <li><Link href="/memorize-quran-online">Memorize Quran Online</Link></li>
            <li><Link href="/taleem-ul-islam">Taleem ul Islam Course</Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Student Testimonials
          </h2>
          <div className="pt-3">
                                  <BonusIslamicLearning />
            
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Begin Your Online Quran Learning Journey Today
          </h2>
          <p className="text-base text-gray-700 leading-relaxed pt-4">
            🟢 Free Trial Available – Limited slots! <br />
            📞{" "}
            <Link href="/get-register" className="text-blue-600 no-underline">
              WhatsApp us or fill out the registration form to get started.
            </Link>
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default OnlineQuranLearning;
