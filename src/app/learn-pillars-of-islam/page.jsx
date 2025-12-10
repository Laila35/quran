import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const PillarsOfIslam = () => {
  const breadcrumbData = {
    id: 1,
    name: "Five Pillars of Islam Mastery Course",
    link: "/",
  };

  return (
    <>
      <head>
        <title>Five Pillars of Islam Course | Shahada, Salah, Zakat, Sawm, Hajj</title>
        <meta 
          name="description" 
          content="Master the Five Pillars of Islam through detailed online classes. Learn prayer techniques, zakat calculation, hajj preparation & fasting rules with certified scholars." 
        />
        <meta 
          name="keywords" 
          content="Five Pillars of Islam, Salah prayer course, Zakat calculation online, Hajj preparation guide, Ramadan fasting rules, Shahada declaration, Islamic foundation course" 
        />
        <link rel="canonical" href="https://ilmulquran.com/learn-pillars-of-islam" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Comprehensive Five Pillars of Islam Course Online" />
        <meta property="og:description" content="Detailed study of Islamic fundamentals: Shahada, Salah, Zakat, Sawm & Hajj. Certification available. Start free trial today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulquran.com/learn-pillars-of-islam" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/five-pillars-of-islam.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Master the Five Pillars of Islam Online" />
        <meta name="twitter:description" content="Interactive course covering prayer, fasting, charity & pilgrimage. Learn with certified Islamic scholars." />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/five-pillars-of-islam.webp" />
      </head>

      {/* Structured Data */}
      <Script
        id="pillars-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Five Pillars of Islam Certification Program",
            "description": "Comprehensive study of Islamic fundamentals with practical implementation guidance",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "image": "https://ilmulquran.com/Images/Courses/five-pillars-of-islam.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P2M",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "ageRange": "12-70"
              },
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulquran.com/get-register"
              }
            },
            "educationalCredentialAwarded": "Certificate in Islamic Fundamentals"
          })
        }}
      />

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
          <h1 className="text-[#003366] mb-10 text-center font-bold text-3xl md:text-4xl">
            Master the Five Pillars of Islam - Foundation of Faith
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-base text-gray-700 leading-relaxed">
                Our comprehensive program covers both theoretical knowledge and practical implementation of Islam's core pillars. Essential for:
              </p>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 mt-4">
                <li>New Muslims learning fundamentals</li>
                <li>Parents teaching Islamic basics</li>
                <li>Students preparing for <Link href="/islamic-classes-for-kids" className="text-blue-600">Islamic exams</Link></li>
                <li>Anyone seeking deeper understanding</li>
              </ul>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Course Highlights
              </h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Step-by-step <Link href="/learn-prayer-online" className="text-blue-600">Salah demonstration videos</Link></li>
                <li>Interactive Zakat calculator tool</li>
                <li>Virtual Hajj simulation experience</li>
                <li>Fasting health guidelines from scholars</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={400}
                src="/Images/Courses/five-pillars-of-islam.webp"
                alt="Detailed infographic of Islam's Five Pillars with Quranic verses"
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Detailed Curriculum</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Shahada: Meaning & declaration process</li>
                <li>Salah: Times, positions & common mistakes</li>
                <li>Zakat: Calculation & distribution rules</li>
                <li>Sawm: Health guidelines & spiritual benefits</li>
                <li>Hajj: Step-by-step pilgrimage guide</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Learning Resources</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Interactive prayer timetable</li>
                <li>Zakat calculation worksheets</li>
                <li>Ramadan preparation checklist</li>
                <li>Hajj virtual reality tour</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-[#003366]">Related Courses</h3>
            <ul className="list-disc ml-8 space-y-2 mt-4">
              <li>
                <Link href="/aqeedah-islamic-beliefs" className="text-blue-600">
                  Islamic Beliefs (Aqeedah) Course
                </Link>
              </li>
              <li>
                <Link href="/ramadan-special-courses" className="text-blue-600">
                  Ramadan Preparation Program
                </Link>
              </li>
              <li>
                <Link href="/islamic-history" className="text-blue-600">
                  History of Hajj & Islamic Rituals
                </Link>
              </li>
            </ul>
          </div>
    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Course Objectives
    </h2>
    <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
      <li>
        <span className="font-semibold text-[#1a73e8]">Understand the Five Pillars:</span> Learn the significance of each pillar of Islam.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Practice Rituals:</span> Gain practical knowledge on performing each pillar.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Develop Understanding:</span> Understand the spiritual and practical aspects of the pillars.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Improve Application:</span> Learn how to incorporate the pillars into your daily life.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Gain Insight:</span> Understand the historical and cultural context of the pillars.
      </li>
    </ul>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Course Syllabus
    </h3>
    <p className="text-base text-gray-700 leading-relaxed pt-3">
      The Learn Pillars of Islam course includes:
    </p>
    <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
      <li>
        <span className="font-semibold text-[#1a73e8]">Introduction to the Five Pillars:</span> Overview of the pillars of Islam.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Shahada (Faith):</span> Understanding the declaration of faith.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Salah (Prayer):</span> Learning how to perform the five daily prayers.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Zakat (Charity):</span> Understanding the importance and calculation of Zakat.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Sawm (Fasting):</span> Learning the rules and benefits of fasting during Ramadan.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Hajj (Pilgrimage):</span> Preparing for and understanding the pilgrimage to Mecca.
      </li>
    </ul>

  

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Call to Action
    </h2>
    <p className="text-base text-gray-700 leading-relaxed pt-4">
      Ready to memorize key Quranic Surahs?{" "}
      <Link href="/get-register" className="text-blue-600 no-underline">
        Enroll in our Memorization of Selected Surahs course today!
      </Link>
    </p>


      <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
                         <BonusIslamicLearning/>                                                               

      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>
  </div>
</div>
</div>
</div>


    </>
  );
};

export default PillarsOfIslam;
