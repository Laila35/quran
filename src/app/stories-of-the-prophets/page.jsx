import React from "react";
import Head from "next/head";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

const StoriesOfTheProphets = () => {
  const breadcrumbData = {
    id: 2,
    name: "Stories of the Prophets Course - Islamic History Lessons",
    link: "/stories-of-the-prophets",
  };

  return (
    <>
      <Head>
        <title>Stories of the Prophets Course | Islamic History Lessons Online</title>
        <meta
          name="description"
          content="Explore 25+ prophets' stories through structured online classes. Learn Quranic narratives with certified tutors. Enroll now for authentic Islamic history education."
        />
        <meta
          name="keywords"
          content="Islamic prophets course, Quranic stories online, Prophets history class, Online Islamic education, Prophet narratives learning"
        />
        <link rel="canonical" href="https://ilmulquran.com/stories-of-the-prophets/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Online Stories of the Prophets Course | ilmulQuran" />
        <meta
          property="og:description"
          content="Comprehensive study of 25+ prophets from Adam to Muhammad (PBUH). Join our certified Islamic history program today."
        />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/stories-of-prophets.png" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Stories of the Prophets - Online Islamic Course" />
        <meta
          name="twitter:description"
          content="Learn prophets' stories from Quran & authentic sources. Flexible classes for all ages. Start free trial!"
        />
        {/* Schema Markup */}
        <Script
          id="course-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Stories of the Prophets - Comprehensive Islamic History Course",
              "description": "Detailed study of prophets from Adam to Muhammad (PBUH) based on Quran and authentic sources",
              "provider": {
                "@type": "Organization",
                "name": "ilmulQuran",
                "sameAs": "https://ilmulquran.com"
              }
            })
          }}
        />
      </Head>

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm 
              courseName={breadcrumbData.name.split("–")[0].trim()} 
            />
          </div>

          {/* Main Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-8">
                Stories of the Prophets - Quranic History Course
              </h1>

              {/* Top Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Journey through Islamic history with our comprehensive program covering 
                    25+ prophets mentioned in the <Link href="/quran-with-translation" className="text-blue-600 underline">Quran</Link>. 
                    Perfect for students aged 10+ and adult learners.
                  </p>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-teal-800 mb-4">Key Features</h2>
                    <ul className="list-disc ml-6 space-y-3">
                      <li>Chronological study from Adam to Muhammad (PBUH)</li>
                      <li>Interactive timeline with <Link href="/downloads" className="text-teal-600 underline">visual aids</Link></li>
                      <li>Weekly Q&A sessions with Islamic scholars</li>
                      <li>Certification upon completion</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/Images/Courses/stories-of-prophets.png"
                    alt="Islamic prophets timeline visualization"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Curriculum Highlights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-[#003366] mb-8">Curriculum Highlights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Creation & Early Prophets", content: "Adam, Nuh, Hud, Salih - First civilizations" },
                    { title: "Abrahamic Legacy", content: "Ibrahim, Ismail, Ishaq - Foundation of monotheism" },
                    { title: "Egyptian Era", content: "Yusuf, Musa - Lessons in patience and leadership" },
                    { title: "Arabian Prophets", content: "Shuayb, Saleh - Pre-Islamic messages" },
                    { title: "Moral Champions", content: "Yunus, Ayyub - Tests of faith and perseverance" },
                    { title: "Final Revelation", content: "Prophet Muhammad (PBUH) - Seal of the prophets" }
                  ].map((module, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
                      <h3 className="text-xl font-semibold text-teal-700 mb-3">{module.title}</h3>
                      <p className="text-gray-700">{module.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes */}
              <section className="bg-gray-50 p-8 rounded-xl mb-12">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Learning Outcomes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="list-disc ml-6 space-y-3">
                    <li>Understand Quranic context of prophetic stories</li>
                    <li>Analyze moral lessons from prophets' lives</li>
                    <li>Connect Islamic history with modern challenges</li>
                  </ul>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>Develop critical thinking through historical analysis</li>
                    <li>Strengthen faith through divine narratives</li>
                    <li>Improve <Link href="/learn-arabic-online" className="text-blue-600 underline">Arabic comprehension</Link> of Quranic texts</li>
                  </ul>
                </div>
              </section>

              {/* Gray Form Section: Why Choose, Objectives, Testimonials */}
              <div className="bg-gray-100 p-8 rounded-xl space-y-8">

                <h2 className="text-xl md:text-2xl font-bold text-[#003366]">
                  Why Choose Our Stories of the Prophets Course?
                </h2>
                <ul className="list-disc ml-8 space-y-2 pt-2">
                  <li><strong>Faith-Enriching Experience:</strong> Learn about the patience, wisdom, and courage of the Prophets through structured online learning.</li>
                  <li><strong>Interactive Sessions:</strong> Live discussions and multimedia presentations with qualified Islamic tutors.</li>
                  <li><strong>Flexible Schedules:</strong> Classes available 24/7 for global students.</li>
                  <li><strong>Ideal for All Ages:</strong> Our <em>Learn About the Prophets</em> program suits beginners and advanced learners alike.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-[#003366] pt-4">Course Objectives</h2>
                <p className="text-base font-medium pt-2">
                  This <strong>Prophets' Lives Course</strong> is designed to:
                </p>
                <ul className="list-disc ml-8 pt-2 space-y-1">
                  <li>Introduce learners to the major Prophets in Islam.</li>
                  <li>Understand the historical context and divine missions of each Prophet.</li>
                  <li>Help students apply Prophetic values to modern-day challenges.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-[#003366] pt-4">
                  What Our Students Say
                </h2>
                <div className="pt-3">
                  <BonusIslamicLearning />
                  <TestimonialComponent testimonialsData={testimonialsData} />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default StoriesOfTheProphets;
