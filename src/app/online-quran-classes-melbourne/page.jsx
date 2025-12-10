import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranMelbourne = () => {
  const breadcrumbData = {
    id: 10,
    name: "Online Quran Classes in Melbourne – One-on-One Learning for Children & Adults",
    link: "/online-quran-classes-melbourne",
  };

  return (
    <>
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/courses/quran-classes-melbourne.webp"
      fetchPriority="high"
    />

    <title>Online Quran Classes in Melbourne | 1-on-1 Zoom Lessons</title>
    <meta
      name="description"
      content="Join Melbourne's premier online Quran classes: Learn Tajweed, Hifz & Islamic studies with Australian-based certified tutors. Flexible scheduling, free trial. Start today!"
    />
    <meta
      name="keywords"
      content="Quran Classes Melbourne, Tajweed Lessons Victoria, Hifz Program Carlton, Islamic Studies for Kids, Quran Tutor Footscray, Muslim Convert Classes, Arabic Lessons CBD, Female Quran Teacher Melbourne"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-melbourne" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_AU" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Melbourne Quran Classes – 1-on-1 Online Learning with Local Tutors"
    />
    <meta
      property="og:description"
      content="Premium Quran education for Melburnians: Certified teachers, flexible Zoom classes for all ages. Free trial available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-melbourne" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-melbourne.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Melbourne family learning Quran online via Zoom with local teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes Melbourne – Victorian Certified Tutors"
    />
    <meta
      name="twitter:description"
      content="1-on-1 Quran lessons for Melbourne residents: Tajweed, Hifz & Islamic studies with Australian teachers. Start free trial today!"
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-melbourne.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-melbourne"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Melbourne Online Quran Program",
          description: "Comprehensive Quran education for Victorian residents featuring Tajweed mastery, Hifz program, and Islamic studies with Australian-certified tutors.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "Melbourne's trusted online Quran education platform since 2012"
          },
          url: "https://ilmulquran.com/online-quran-classes-melbourne",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-melbourne.png",
          educationalLevel: "Beginner to Advanced",
          typicalAgeRange: "5-65",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["online", "one-on-one"],
            duration: "P12M",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
              ageRange: "5-65"
            },
            offers: {
              "@type": "Offer",
              category: "free trial",
              url: "https://ilmulquran.com/get-register"
            }
          },
          coursePrerequisites: "Basic English understanding",
          educationalCredentialAwarded: "Certificate of Quranic Proficiency"
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
          <h1 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
            Online Quran Classes in Melbourne – One-on-One Learning for Children & Adults
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for trusted Quran classes in Melbourne, Australia?  
                At ilmulQuran.com, we provide live one-on-one online Quran classes for students in Melbourne and across Victoria.  
                Whether your child is starting Noorani Qaida or you're seeking advanced Tajweed or Hifz lessons — we have a teacher to suit your level, schedule, and learning style.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Courses Available:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Children & beginners</li>
                <li>✅ Quran Reading with Tajweed – Ages 6+</li>
                <li>✅ Hifz-ul-Quran – Dedicated students</li>
                <li>✅ Tafseer & Translation – Teens & adults</li>
                <li>✅ Islamic Manners & Duas – Kids aged 5–12</li>
                <li>✅ Revert Program – New Muslims in Melbourne</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Certified Teachers</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Male & female Quran tutors</li>
                <li>Fluent in English, patient with kids</li>
                <li>Familiar with Australian education culture</li>
                <li>Choose your preferred teacher and time</li>
                <li>One-on-one attention for every student</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Flexible Class Times for AEST</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Timings adjusted for Melbourne (AEST)</li>
                <li>Morning, after-school & evening slots</li>
                <li>Available 7 days a week</li>
                <li>Easy rescheduling supported</li>
                <li>Classes on Zoom, Skype, or Teams</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Areas We Serve in Melbourne:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>CBD</li>
                <li>Dandenong</li>
                <li>Broadmeadows</li>
                <li>Footscray</li>
                <li>Point Cook</li>
                <li>Werribee</li>
                <li>Glen Waverley & more</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Why Choose ilmulQuran.com?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ One-on-one teaching</li>
                <li>✅ Free printable materials (Qaida, Duas, Surahs)</li>
                <li>✅ Completion certificate</li>
                <li>✅ Monthly progress reports</li>
                <li>✅ WhatsApp support for parents</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 Melbourne Family Testimonials:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My daughter memorized Surah Al-Mulk with proper Tajweed in 2 months.” – Sister Amina (Dandenong)</li>
                <li>“I’m a new Muslim and the teacher helped me start Salah and Quran recitation properly.” – Brother Yusuf (Footscray)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲 <strong>Start with a Free Trial Class</strong><br />
                Join hundreds of families in Australia learning Quran online. Try your free 1-on-1 trial today:<br />
                👉{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Book Free Trial Now →
                </Link>
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-melbourne.png"
                alt="Online Quran Classes in Melbourne"
                style={{ borderRadius: "25px" }}
              />
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
};

export default OnlineQuranMelbourne;
