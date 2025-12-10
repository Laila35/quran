import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const OnlineQuranAcademy = () => {
  const breadcrumbData = {
    id: 4,
    name: "Online Quran Academy – Learn the Quran with Expert Guidance",
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
    href="/Images/Courses/online-quran-academy.png"
    fetchPriority="high"
  />

  <title>Online Quran Academy | One-on-One Quran Classes </title>
  <meta
    name="description"
    content="Join our trusted online Quran academy for kids, adults, and reverts. Learn with Tajweed, Translation, Hifz, and Islamic studies under qualified male & female teachers."
  />
  <meta
    name="keywords"
    content="Online Quran Academy, Quran Classes Online, Tajweed Lessons, Hifz Program, Islamic Courses, Female Quran Teachers"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulQuran.com/online-quran-academy" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Academy | Learn Quran with Certified Male & Female Teachers"
  />
  <meta
    property="og:description"
    content="Enroll in personalized online Quran classes with Tajweed, Hifz, Tafsir, and Islamic studies. Perfect for kids, adults & reverts. Certified male & female tutors available."
  />
  <meta property="og:url" content="https://ilmulQuran.com/online-quran-academy" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulQuran.com/Images/Courses/online-quran-academy.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Online Quran teacher guiding student via video call"
  />
  <meta property="og:image:type" content="image/png" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Learn Quran Online – One-on-One Academy with Certified Teachers"
  />
  <meta
    name="twitter:description"
    content="Trusted online Quran academy for kids, adults & reverts. Study Tajweed, Hifz & more with expert male & female teachers. Enroll for a free trial today!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulQuran.com/Images/Courses/online-quran-academy.png"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-quran-academy"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "ilmulQuran - Online Quran Academy",
        description:
          "ilmulQuran is a trusted online Quran academy offering personalized classes in Tajweed, Hifz, Tafsir, and Islamic studies for kids, adults, and reverts with certified teachers.",
        url: "https://ilmulQuran.com/online-quran-academy",
        logo: "https://ilmulQuran.com/logo.png",
        sameAs: ["https://www.facebook.com/imqonline", "https://www.youtube.com/@imqonline"],
        image: "https://ilmulQuran.com/Images/Courses/online-quran-academy.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US"
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          availableLanguage: ["English", "Arabic", "Urdu"]
        }
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
            Online Quran Academy – Learn the Quran with Expert Guidance
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Looking for a professional and spiritual online Quran academy to support your Islamic learning journey?
                At ilmulQuran.com, we offer a full-service academy built on the foundations of authentic Islamic knowledge,
                Tajweed, and one-on-one teaching – all while respecting your privacy, culture, and schedule.
                Whether you're a child learning the Quran for the first time, a parent revising your recitation, or a revert
                starting your Islamic journey, we’re here to guide you step by step.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-academy.png"
                alt="Online Quran Academy"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Makes IlmulQuran Academy Special?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">One-on-One Online Classes:</span> Private sessions tailored to your pace and goals.</li>
            <li><span className="font-semibold text-[#1a73e8]">Male & Female Certified Teachers:</span> Qualified Hafiz/Aalim teachers trained in online education.</li>
            <li><span className="font-semibold text-[#1a73e8]">Structured Programs:</span> All levels, from beginners to advanced Hifz and Tafseer.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Programs Offered at Our Online Quran Academy
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><span className="font-semibold text-[#1a73e8]">Noorani Qaida:</span> Learn Arabic reading for kids and reverts.</li>
            <li><span className="font-semibold text-[#1a73e8]">Quran Reading with Tajweed:</span> Step-by-step Tajweed training for correct pronunciation.</li>
            <li><span className="font-semibold text-[#1a73e8]">Memorize Quran (Hifz):</span> Structured Hifz course with tracking and support.</li>
            <li><span className="font-semibold text-[#1a73e8]">Tafseer & Translation:</span> Understand the Quran’s message in English.</li>
            <li><span className="font-semibold text-[#1a73e8]">Islamic Studies & Duas:</span> Aqeedah, fiqh, manners, and daily duas.</li>
            <li><span className="font-semibold text-[#1a73e8]">Revert Support Program:</span> Tailored classes to help new Muslims start strong.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Who Is This For?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Young children (4+ years)</li>
            <li>Teenagers & Adults</li>
            <li>Sisters & Moms (with female teachers)</li>
            <li>Reverts and non-Arabic speakers</li>
            <li>Parents looking for Islamic foundation for their family</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Flexible Learning Environment
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Morning, evening, and weekend slots available</li>
            <li>Live sessions via Zoom, Skype, or Google Meet</li>
            <li>Easy rescheduling for missed classes</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Our Students Learn From
          </h2>
          <p className="text-base text-gray-700 pt-3">
            🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇸🇬 Singapore | 🇿🇦 South Africa | 🇦🇪 UAE
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Supervised and Tracked Learning
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Monthly reports shared with parents</li>
            <li>Supervisor session monitoring</li>
            <li>WhatsApp support & reminders</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Digital Certification
          </h2>
          <p className="text-base text-gray-700 pt-3">
            Students who complete their program can request a signed digital certificate from IlmulQuran Academy.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Related Pages
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/online-quran-institute">Online Quran Institute</Link></li>
            <li><Link href="/quran-courses-online">Quran Courses Online</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam</Link></li>
            <li><Link href="/learn-islamic-studies-online">Learn Islamic Studies Online</Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Our Students Say
          </h2>
          <div className="pt-3">
                   <BonusIslamicLearning/>                                                               
            
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Get Started Today
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📞 Message us on WhatsApp or{" "}
            <Link href="/get-register" className="text-blue-600 underline">
              fill out the trial form
            </Link>{" "}
            to start your Quran learning journey with a certified online Quran academy.
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default OnlineQuranAcademy;
