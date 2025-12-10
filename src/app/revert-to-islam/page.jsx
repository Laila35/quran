import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const RevertToIslam = () => {
  const breadcrumbData = {
    id: 2,
    name: "Revert to Islam – Guided Online Program for New Muslims",
    link: "/revert-to-islam",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/revert-to-islam.webp"
    fetchPriority="high"
  />

  <title>Revert to Islam Course Guided Conversion Program for New Muslim</title>
  <meta
    name="description"
    content="Step-by-step online program for reverts to learn Islam fundamentals, Quran basics, and Muslim lifestyle. Certified male & female teachers, flexible schedules, and 24/7 support. Start free trial!"
  />
  <meta
    name="keywords"
    content="Convert to Islam Online, New Muslim Course, Revert to Islam Program, Learn Islam Basics, Muslim Conversion Support, Islamic Foundation Course"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/revert-to-islam/" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Revert to Islam Course | Guided Conversion Program for New Muslims - ilmulQuran"
  />
  <meta
    property="og:description"
    content="Comprehensive online program for new Muslims with certified teachers. Learn Shahada, Prayer, Quran basics, and Islamic lifestyle in supportive environment."
  />
  <meta property="og:url" content="https://ilmulquran.com/revert-to-islam/" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta property="og:image" content="https://ilmulquran.com/Images/Courses/revert-to-islam.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Revert to Islam Course | Guided Conversion Program for New Muslims - ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Step-by-step Islamic conversion program with certified teachers. Learn Shahada, Prayer & Quran basics. Start your spiritual journey today!"
  />
  <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/revert-to-islam.webp" />

  {/* Schema Markup */}
  <Script
    id="jsonld-revert-course"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Revert to Islam - Guided Conversion Program",
        "description": "Comprehensive online program for new Muslims to learn Islamic fundamentals and practices",
        "educationalLevel": "Beginner",
        "provider": {
          "@type": "Organization",
          "name": "ilmulQuran",
          "sameAs": "https://ilmulquran.com"
        },
        "url": "https://ilmulquran.com/revert-to-islam/",
        "image": "https://ilmulquran.com/Images/Courses/revert-to-islam.webp",
        "coursePrerequisites": "None",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "one-on-one"],
          "instructor": {
            "@type": "OrganizationRole",
            "roleName": "Certified Islamic Scholars"
          }
        }
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
        <div className="border rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-teal-700 mb-4">
              Revert to Islam – A Guided Online Course for New Muslims
            </h1>
            <p className="text-lg text-gray-700">
              Structured program combining <Link href="/learn-islamic-studies" className="text-teal-600 underline">Islamic studies</Link>, 
              practical worship training, and community support for confident Muslim living.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-teal-700 mb-2">Your Spiritual Journey Starts Here</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to your new spiritual family at <Link href="/about-us" className="text-teal-600 underline">Ilm ul Quran</Link>! 
                Our specially designed program helps reverts build a strong foundation in:
              </p>
              <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700">
                <li>Core Islamic beliefs (<Link href="/aqeedah-islamic-beliefs" className="text-teal-600 underline">Aqeedah</Link>)</li>
                <li>Essential worship practices (<Link href="/pillars-of-islam" className="text-teal-600 underline">Arkan al-Islam</Link>)</li>
                <li>Quranic literacy (<Link href="/learn-noorani-qaida-online" className="text-teal-600 underline">Beginner Arabic</Link>)</li>
                <li>Islamic lifestyle integration</li>
              </ul>
            </div>
            <div>
              <Image
                width={600}
                height={600}
                src="/Images/Courses/revert-to-islam.webp"
                alt="New Muslim learning Quran with teacher"
                className="rounded-xl shadow-md"
              />              
            </div>
          </div>

          {/* Enhanced Course Modules with Links */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">Comprehensive Curriculum</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Islamic Foundations",
                  items: [
                    <><Link href="/pillars-of-islam" className="text-teal-600 underline">Five Pillars of Islam</Link> deep dive</>,
                    "Understanding Tawhid (Divine Unity)",
                    "Prophets in Islam through Stories of the Prophets"
                  ],
                },
                {
                  title: "Worship Essentials",
                  items: [
                    "Step-by-step Salah guidance",
                    "Wudhu mastery & mosque etiquette",
                    "Islamic calendar & Ramadan practices"
                  ],
                },
                {
                  title: "Quranic Studies",
                  items: [
                    "Arabic alphabet through Noorani Qaida",
                    "Key surahs with basic Tajweed",
                    "Quranic values & daily supplications Duas"
                  ],
                },
                {
                  title: "Islamic Lifestyle",
                  items: [
                    "Halal/Haram guidelines in Fiqh",
                    "Prophetic manners Seerah based",
                    "Building Muslim relationships"
                  ],
                },
                {
                  title: "Community Connection",
                  items: [
                    "Finding local mosques & Muslim communities",
                    "Handling family relationships",
                    "Islamic parenting basics Raising Muslims"
                  ],
                },
                {
                  title: "Advanced Support",
                  items: [
                    `Quran Ijazah preparation`,
                    "Islamic history through historical studies",
                    "Ongoing mentorship program"
                  ],
                },
              ].map((module, index) => (
                <div key={index} className="bg-white border border-teal-100 rounded-lg p-5 shadow hover:shadow-md transition duration-300 ease-in-out">
                  <h3 className="text-xl font-bold text-teal-700 mb-3">{module.title}</h3>
                  <ul className="list-disc ml-5 space-y-1 text-gray-700">
                    {module.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Support Sections */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-teal-800 mb-3">Personalized Learning Support</h2>
              <p className="text-gray-700 mb-4">
                Our <Link href="/our-teachers" className="text-teal-600 underline">certified teachers</Link> provide:
              </p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Dual-gender instructor options</li>
                <li>Multilingual support (English/Urashi/Arabic)</li>
                <li>24/7 access to <Link href="/downloads" className="text-teal-600 underline">learning resources</Link></li>
                <li>Regular progress tracking</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-amber-800 mb-3">Community Integration</h2>
              <p className="text-gray-700 mb-4">
                Connect with our global network through:
              </p>
              <ul className="list-disc ml-5 space-y-2">
                <li>Monthly virtual meetups</li>
                <li><Link href="/companions-of-prophet-muhammad" className="text-teal-600 underline">Sahabah stories</Link> discussion groups</li>
                <li>Peer support network</li>
                <li>Local community matching</li>
              </ul>
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">Essential Guidance for New Muslims</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">How do I start praying?</h3>
                <p className="mt-2 text-gray-700">
                  We provide prayer kits with <Link href="/downloads" className="text-teal-600 underline">illustrated guides</Link>, 
                  video demonstrations, and real-time correction sessions.
                </p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">What if I make mistakes?</h3>
                <p className="mt-2 text-gray-700">
                  Our teachers emphasize Allah's mercy - learn about 
                  <Link href="/taleem-ul-islam" className="text-teal-600 underline"> Islamic forgiveness concepts</Link> and 
                  practical error correction.
                </p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Need immediate help?</h3>
                <p className="mt-2 text-gray-700">
                  Access our <Link href="/help-support" className="text-teal-600 underline">24/7 support team</Link> via chat, 
                  email, or scheduled <Link href="/one-on-one-quran-classes" className="text-teal-600 underline">one-on-one sessions</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Global Access Section */}
          <div className="mt-12 bg-slate-100 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Worldwide Learning Access</h2>
            <p className="text-gray-700 mb-6">
              Join from anywhere with optimized programs for:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Link href="/online-quran-classes-usa" className="p-3 bg-white rounded-lg shadow hover:shadow-md transition">USA Students</Link>
              <Link href="/online-quran-classes-uk" className="p-3 bg-white rounded-lg shadow hover:shadow-md transition">UK Muslims</Link>
              <Link href="/online-quran-classes-canada" className="p-3 bg-white rounded-lg shadow hover:shadow-md transition">Canada</Link>
              <Link href="/online-quran-classes-australia" className="p-3 bg-white rounded-lg shadow hover:shadow-md transition">Australia/NZ</Link>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-teal-700 to-teal-900 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Start Your Islamic Journey with Confidence
            </h2>
            <p className="text-lg mb-6">
              Get free access to our <Link href="/downloads" className="text-amber-300 underline">New Muslim Starter Kit</Link> 
              &nbsp;+ 1-week trial classes
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/get-register"
                className="bg-white text-teal-800 font-bold py-3 px-8 rounded-full hover:bg-teal-100 transition"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-teal-800 transition"
              >
                Ask Questions
              </Link>
            </div>
          </div>

          {/* Comprehensive Internal Linking */}
          <div className="mt-10 text-sm text-center text-gray-600 space-y-3">
            <p>
              Explore more: 
              <Link href="/islamic-classes-for-kids" className="text-teal-600 mx-2 underline">Kids Islamic Classes</Link> •
              <Link href="/female-quran-teacher" className="text-teal-600 mx-2 underline">Female Teachers</Link> •
              <Link href="/male-quran-teacher" className="text-teal-600 mx-2 underline">Male Instructors</Link> •
              <Link href="/quran-translation-course" className="text-teal-600 mx-2 underline">Quran Translation</Link>
            </p>
            <p>
              Resources: 
              <Link href="/blog" className="text-teal-600 mx-2 underline">Islamic Blog</Link> •
              <Link href="/feedback" className="text-teal-600 mx-2 underline">Student Feedback</Link> •
              <Link href="/certificate-of-appraisal" className="text-teal-600 mx-2 underline">Certification</Link> •
              <Link href="/fee-and-schedule-plan" className="text-teal-600 mx-2 underline">Pricing Plans</Link>
            </p>
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
      </div>
    </>
  );
};

export default RevertToIslam;