import React from "react";
import Head from "next/head";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

const RamadanSpecialCourses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Ramadan Special Courses - Enhance Your Ramadan Experience",
    link: "/ramadan-special-courses",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/Images/Courses/Ramadan-special.webp"
          fetchPriority="high"
        />
        <title>
          Ramadan Intensive Program: Fasting, Prayer & Quran Certification
        </title>
        <meta
          name="description"
          content="Master Ramadan rituals with certified scholars: Complete guide to fasting, Taraweeh prayers, Quran recitation, Zakat calculation & spiritual development. Free trial available!"
        />
        <meta
          name="keywords"
          content="Ramadan certification course, Online Taraweeh classes, Fasting rules Islam, Quran in Ramadan, Zakat calculation guide, Eid preparation course, Islamic spiritual development"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ilmulquran.com/ramadan-special-courses"
        />

        {/* Open Graph / Twitter / Schema */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Complete Ramadan Mastery Program - Certified Online Course"
        />
        <meta
          property="og:description"
          content="40-hour intensive training covering all aspects of Ramadan observance with Ijazah-certified instructors. Enroll now for spiritual transformation!"
        />
        <meta
          property="og:url"
          content="https://ilmulquran.com/ramadan-special-courses"
        />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/Courses/Ramadan-special.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Student learning Ramadan practices with online tutor"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ramadan Certification Course - 1-on-1 Online Classes"
        />
        <meta
          name="twitter:description"
          content="Learn Fiqh of Fasting, Night Prayers & Quran Memorization with Expert Teachers. Start Free Trial Today!"
        />
        <meta
          name="twitter:image"
          content="https://ilmulquran.com/Images/Courses/Ramadan-special.webp"
        />

        <Script
          id="jsonld-ramadan-course"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Ramadan Intensive Certification Program",
              description: "Comprehensive training in Islamic fasting rules, Taraweeh prayers, Quranic recitation techniques, Zakat calculation, and spiritual development strategies.",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com",
                description: "Accredited online Islamic education platform specializing in Ramadan studies"
              },
              url: "https://ilmulquran.com/ramadan-special-courses",
              image: "https://ilmulquran.com/Images/Courses/Ramadan-special.webp",
              educationalLevel: "Beginner to Advanced",
              typicalAgeRange: "13-65",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "one-on-one"],
                duration: "P1M",
                audience: {
                  "@type": "EducationalAudience",
                  educationalRole: "student",
                  ageRange: "13-65"
                },
                offers: {
                  "@type": "Offer",
                  category: "free trial",
                  url: "https://ilmulquran.com/get-register"
                }
              },
              coursePrerequisites: "Basic understanding of Islam",
              educationalCredentialAwarded: "Ramadan Practices Certification"
            })
          }}
        />
      </Head>

      {/* Main Page */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm 
              courseName={breadcrumbData.name.split("–")[0].trim()} 
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            {/* Gray Form Wrapper */}
            <div className="bg-gray-100 rounded-lg p-8">

              <h2 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
                Transform Your Ramadan in 4 Weeks
              </h2>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium">
                    Maximize your spiritual potential with our comprehensive Ramadan program, endorsed by scholars. This course combines essential Fiqh knowledge with practical spiritual development techniques. Perfect for both new Muslims and those looking to deepen their practice, our curriculum covers everything from <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">Fiqh of Fasting</Link> to advanced <Link href="/learn-tafsir-online" className="text-blue-600">Quran reflection methods</Link>.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Why This Ramadan Program Stands Out:
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 pt-3">
                    <li><span className="font-bold text-[#1a73e8]">Certified Instructors:</span> Learn from graduates with 10+ years experience</li>
                    <li><span className="font-bold text-[#1a73e8]">Flexible Scheduling:</span> 24/7 class availability across time zones</li>
                    <li><span className="font-bold text-[#1a73e8]">Practical Toolkit:</span> Includes Ramadan planner, dua booklet, and recipe guide</li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Ramadan-special.webp"
                    alt="Ramadan Special Courses"
                    className="rounded-2xl border-4 border-[#003366]"
                    priority
                  />
                </div>
              </div>

              {/* Curriculum */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li>✓ Daily 45-minute interactive sessions</li>
                    <li>✓ Weekly live Q&A with scholars</li>
                    <li>✓ Access to <Link href="/online-courses" className="text-blue-600">200+ Islamic courses</Link></li>
                    <li>✓ Personalized progress tracking</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">You'll Master</h3>
                  <ul className="space-y-2">
                    <li>• Correct fasting techniques and exemptions</li>
                    <li>• Leading Taraweeh prayers confidently</li>
                    <li>• Calculating and distributing <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">Zakat</Link> properly</li>
                    <li>• Quran memorization strategies for Ramadan</li>
                  </ul>
                </div>
              </div>

              {/* Weeks Curriculum */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Comprehensive Curriculum
              </h2>
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-lg text-[#1a73e8]">Week 1: Fasting Foundations</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Fiqh rulings from major schools of thought</li>
                    <li>Medical aspects of fasting</li>
                    <li>Common mistakes to avoid</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-lg text-[#1a73e8]">Week 2: Prayer & Quran</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Taraweeh etiquette and leadership</li>
                    <li><Link href="/quran-reading-with-tajweed" className="text-blue-600">Tajweed</Link> for night prayers</li>
                    <li>Quran memorization techniques</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-lg text-[#1a73e8]">Week 3: Spiritual Development</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Dua journaling methods</li>
                    <li>Overcoming spiritual obstacles</li>
                    <li>Charity management strategies</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-bold text-lg text-[#1a73e8]">Week 4: Eid Preparation</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Moon sighting protocols</li>
                    <li>Eid prayer guidelines</li>
                    <li>Post-Ramadan maintenance</li>
                  </ul>
                </div>
              </div>

              {/* Objectives and CTA */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Course Objectives</h2>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>Learn Fasting Rules: Understand the rules and benefits of fasting.</li>
                <li>Develop Understanding: Study the significance of Ramadan and its practices.</li>
                <li>Practice Devotion: Learn how to enhance your spiritual practices during Ramadan.</li>
                <li>Improve Application: Techniques to observe Ramadan effectively.</li>
                <li>Gain Insight: Understand the historical and cultural context of Ramadan.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Call to Action</h3>
              <p className="text-base font-medium pt-4">
                Ready to enhance your Ramadan experience?{" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  Enroll in our Ramadan Special Courses today!
                </Link>
              </p>

              <div className="mt-8 bg-[#003366] text-white p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
                <p className="mb-4">Enroll before Ramadan starts and get:</p>
                <ul className="space-y-2 mb-6">
                  <li>• 1-Year access to <Link href="/online-courses" className="text-yellow-300">All Islamic Courses</Link></li>
                  <li>• Priority access to <Link href="/our-teachers" className="text-yellow-300">Top Teachers</Link></li>
                </ul>
                <Link 
                  href="/get-register" 
                  className="bg-white text-[#003366] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
                >
                  Start Free Trial Now
                </Link>
              </div>

              {/* Testimonials */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Student Testimonials</h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>

            </div> {/* End Gray Form Wrapper */}
          </div> {/* End Content Column */}

        </div>
      </div>
    </>
  );
};

export default RamadanSpecialCourses;
