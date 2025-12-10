import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
import Head from "next/head";

const RaisingLittleMumins = () => {
  const breadcrumbData = {
    id: 2,
    name: "Islamic Character Building for Kids 4-7 | ilmulQuran",
    link: "/raising-little-mumins",
  };

  return (
    <>
      {/* Head metadata */}
      <Head>
        <title>Islamic Character Building for Kids 4-7 | ilmulQuran</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Certified online Islamic tarbiyah course for ages 4-7: Quran basics, Salah training, Islamic manners & prophet's stories with expert teachers. Free trial available." />
        <meta name="keywords" content="Islamic kids course, Muslim children education, Quran for kindergarten, Islamic manners class, Prophet stories for kids, Muslim parenting course" />
        <link rel="canonical" href="https://ilmulquran.com/raising-little-mumins" />
        <link rel="preload" as="image" href="/Images/Courses/little-mumins-course.png" fetchPriority="high" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Islamic Character Program for Kids 4-7 | ilmulQuran" />
        <meta property="og:description" content="Online Islamic upbringing course: Quran basics, Salah training, Islamic manners & prophet stories with certified teachers. Start free trial!" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/little-mumins-course.png" />
        <meta property="og:url" content="https://ilmulquran.com/raising-little-mumins" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Islamic Training for Kids 4-7 | ilmulQuran" />
        <meta name="twitter:description" content="Certified Islamic character building course with Quran, Salah & manners lessons. 1-on-1 online classes available. Free trial!" />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/little-mumins-course.png" />
      </Head>

      {/* Schema Markup */}
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Islamic Character Building Program",
            description: "Online Islamic upbringing course for children aged 4-7 covering Quran basics, Salah training, Islamic manners and prophet stories",
            provider: {
              "@type": "Organization",
              name: "ilmulQuran",
              sameAs: "https://ilmulquran.com"
            },
            educationalLevel: "Beginner",
            typicalAgeRange: "4-7",
            offers: {
              "@type": "Offer",
              url: "https://ilmulquran.com/raising-little-mumins",
              priceCurrency: "USD",
              availability: "OnlineOnly"
            }
          })
        }}
      />

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Sticky Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm courseName={breadcrumbData.name.split("–")[0].trim()} />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h1 className="text-[#003366] mb-10 text-center font-bold text-3xl md:text-4xl">
                Islamic Character Building Program (Ages 4-7)
              </h1>

              {/* Course Highlights */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full lg:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold text-[#1a73e8]">Course Highlights</h2>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>25+ Essential Islamic Concepts</li>
                    <li>Interactive Quran & Dua Learning</li>
                    <li>Practical Manners Training</li>
                    <li>Prophet Muhammad's ﷺ Stories</li>
                    <li>Weekly Progress Reports</li>
                  </ul>
                  <Link 
                    href="/get-register" 
                    className="inline-block bg-[#003366] text-white px-8 py-3 rounded-lg hover:bg-[#002244] transition-colors"
                  >
                    Start Free Trial
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/little-mumins-course.png"
                    alt="Kids Islamic character building course"
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Curriculum & Features */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold text-[#003366] mb-4">Curriculum Overview</h2>
                  <ul className="space-y-3">
                    <li><strong>Quran Foundations:</strong> Short surahs with basic tajweed</li>
                    <li><strong>Salah Training:</strong> Step-by-step prayer guidance</li>
                    <li><strong>Islamic Manners:</strong> 40+ daily life scenarios</li>
                    <li><strong>Prophet Stories:</strong> 12 inspirational seerah lessons</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold text-[#003366] mb-4">Course Features</h2>
                  <ul className="space-y-3">
                    <li>🏆 Certified Islamic Teachers</li>
                    <li>🎮 Interactive Learning Games</li>
                    <li>📅 Flexible Class Times</li>
                    <li>🌍 Available Worldwide</li>
                  </ul>
                </div>
              </div>

              {/* Detailed Curriculum */}
              <h2 className="text-2xl font-bold text-[#003366] mt-12 mb-6">Detailed Curriculum</h2>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1a73e8]">Islamic Basics</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Allah's 99 Names (Simplified)</li>
                    <li>5 Pillars of Islam for Kids</li>
                    <li>Basic Aqeedah Concepts</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1a73e8]">Quran Studies</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Short Surahs Memorization</li>
                    <li>Basic Arabic Recognition</li>
                    <li>Quranic Stories Simplified</li>
                  </ul>
                </div>
              </div>

              {/* What Your Child Will Learn */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">What Your Child Will Learn</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li><span className="font-semibold text-[#1a73e8]">Islamic Beliefs (Aqeedah Basics):</span> Who is Allah? Tawheed and the Pillars of Islam, Introduction to Prophet Muhammad ﷺ</li>
                <li><span className="font-semibold text-[#1a73e8]">Quran Learning:</span> Short Surahs (Ikhlas, Falaq, Naas, Kawthar), Word-by-word basic meanings, Tajweed introduction for kids</li>
                <li><span className="font-semibold text-[#1a73e8]">Dua Learning:</span> Before sleeping, waking, eating, entering/leaving, With actions and real-life examples, Weekly memorization & practice</li>
                <li><span className="font-semibold text-[#1a73e8]">Salah Basics:</span> Names & timings of 5 daily prayers, Step-by-step Salah introduction, Wudu awareness and cleanliness</li>
                <li><span className="font-semibold text-[#1a73e8]">Akhlaaq & Adaab:</span> Saying Salaam, thanking, seeking permission, Respecting parents, guests, teachers, Helping others & table manners</li>
                <li><span className="font-semibold text-[#1a73e8]">Teachings of Prophet Muhammad ﷺ:</span> Stories of kindness, honesty, and love, Simple Seerah moments for kids, Practice Sunnah in daily actions</li>
                <li><span className="font-semibold text-[#1a73e8]">Hadith for Kids:</span> 1 short Hadith per week, With meaning and action plan, "Live the Hadith" activity each week</li>
                <li><span className="font-semibold text-[#1a73e8]">Islamic History (Basics):</span> Makkah & Madinah, Important moments: Hijrah, first revelation, Sahaba examples: Abu Bakr (RA), Umar (RA)</li>
                <li><span className="font-semibold text-[#1a73e8]">Pillars of Worship:</span> What is fasting? What is charity? Simple intro to Hajj & Zakat</li>
                <li><span className="font-semibold text-[#1a73e8]">Islamic Calendar Awareness:</span> 12 Islamic months, Special months: Ramadan, Dhul Hijjah, Muharram, Eid & Islamic events</li>
              </ul>

              {/* Who Can Join */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Who Can Join?</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Muslim children aged 4-7 years old</li>
                <li>Families wanting to establish Islamic foundations early</li>
                <li>Parents seeking structured Islamic education for young kids</li>
              </ul>

              {/* Teachers */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Our Teachers</h3>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Qualified male & female Islamic educators</li>
                <li>Experienced with children aged 4-7</li>
                <li>Fluent in English and Urdu</li>
                <li>Gentle, patient, and adab-focused</li>
              </ul>

              {/* Course Format */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Course Format</h3>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Duration: Depends On Student</li>
                <li>Frequency: 2-3 sessions/week</li>
                <li>Class Type: One-on-One or Small Group</li>
                <li>Platform: Zoom / Skype / Google Meet</li>
                <li>Materials: Worksheets, posters, parent checklists</li>
              </ul>

              {/* Certification */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Certification</h3>
              <p className="text-base text-gray-700 leading-relaxed pt-3">Children receive a Digital Certificate of Completion at the end of the course.</p>

              {/* Global Access */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Global Access</h3>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Serving families worldwide: 🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇦🇪 UAE | 🇸🇬 Singapore | 🇿🇦 South Africa
              </p>

              {/* Explore More Courses */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Explore More Courses</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li><Link href="/islamic-classes-for-kids" className="text-blue-600">Islamic Classes for Kids (3-12)</Link></li>
                <li><Link href="/learn-noorani-qaida-online" className="text-blue-600">Learn Noorani Qaida Online</Link></li>
                <li><Link href="/taleem-ul-islam" className="text-blue-600">Taleem ul Islam</Link></li>
              </ul>

              {/* Special Enrollment Offer */}
              <div className="mt-12 bg-[#003366] text-white p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4">Special Enrollment Offer</h2>
                <p className="mb-6">Join now and receive:</p>
                <ul className="space-y-2 mb-6">
                  <li>✅ Free Islamic Activity Kit</li>
                  <li>✅ Parent's Guide to Islamic Parenting</li>
                  <li>✅ Digital Progress Tracker</li>
                </ul>
                <Link href="/get-register" className="bg-white text-[#003366] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                  Enroll Now - 50% Off First Month
                </Link>
              </div>

              {/* Parent Testimonials */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Parent Testimonials</h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>

              {/* Call to Action */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Start Your Child's Islamic Journey</h2>
              <p className="text-base text-gray-700 leading-relaxed pt-4">
                Give your child the gift of Islamic knowledge and manners. <Link href="/get-register" className="text-blue-600 no-underline">📲 Book your free trial class and begin their Tarbiyah journey today.</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaisingLittleMumins;
