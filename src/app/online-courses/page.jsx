import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const OnlineQuranCourses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Online Quran Courses",
    link: "/",
  };

  return (
    <>
<head>
  <title>ilmulQuran | Online Courses</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Explore ilmulQuran's online Quran courses, including Noorani Qaida, Tajweed, Hifz, Tafsir, and Islamic Studies. Start learning with expert male and female tutors."
  />
  <meta
    name="keywords"
    content="online Quran courses, Quran classes, Noorani Qaida, Tajweed, Hifz, Tafsir, Islamic studies, Quran memorization, one-on-one Quran classes, male Quran teacher, female Quran teacher, Quran for kids, adult Quran classes"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://ilmulquran.com/online-courses/" />

  <meta property="og:title" content="ilmulQuran | Online Courses" />
  <meta
    property="og:description"
    content="Explore our wide range of online Quran and Islamic courses. Learn Noorani Qaida, Tajweed, Tafsir, Hifz, and more with certified male and female tutors."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulquran.com/online-courses/" />

  <meta property="og:site_name" content="ilmulQuran" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ilmulQuran | Online Courses" />
  <meta
    name="twitter:description"
    content="Start your Quranic journey with ilmulQuran's expert-led online courses in Tajweed, Noorani Qaida, Tafsir, and more."
  />

<Script
  id="jsonld-online-courses"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "ilmulQuran Online Courses",
      description:
        "Explore our range of Quran and Islamic studies courses including Noorani Qaida, Tajweed, Hifz, Tafsir, and Islamic Studies.",
      url: "https://ilmulquran.com/online-courses/",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "Course",
          position: 1,
          name: "Noorani Qaida Course",
          description:
            "Learn Noorani Qaida online with expert tutors to build the foundation of Quranic reading.",
          url: "https://ilmulquran.com/noorani-qaida-course"
        },
        {
          "@type": "Course",
          position: 2,
          name: "Tajweed Course",
          description:
            "Master the rules of Tajweed for proper Quran recitation under certified teachers.",
          url: "https://ilmulquran.com/quran-tajweed-course"
        },
        {
          "@type": "Course",
          position: 3,
          name: "Hifz (Memorization) Course",
          description:
            "Memorize the Holy Quran with structured plans and one-on-one support from experienced tutors.",
          url: "https://ilmulquran.com/quran-memorization-course"
        },
        {
          "@type": "Course",
          position: 4,
          name: "Tafsir and Translation Course",
          description:
            "Understand the meanings of the Quran through detailed Tafsir and translation sessions.",
          url: "https://ilmulquran.com/tafseer-course"
        },
        {
          "@type": "Course",
          position: 5,
          name: "Islamic Studies Course",
          description:
            "Comprehensive Islamic studies covering Fiqh, Hadith, Seerah, and more for children and adults.",
          url: "https://ilmulquran.com/islamic-studies-course"
        }
      ]
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
          <h1 className="text-center text-3xl font-bold text-[#003366] mb-6">
            Online Quran Courses at ilmulQuran
          </h1>
          <p className="text-base font-medium mb-4">
            At ilmulQuran Online Academy, we offer a wide range of Quran courses designed to meet the needs of both beginners and advanced learners. Whether you're looking to master Quranic recitation, memorize the Quran, or dive deep into Islamic studies, our one-on-one online classes are designed for personalized attention. Our male and female teachers ensure high-quality instruction 24/7, making it easy for you to learn at your own pace.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Regular Courses</h2>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Learn Noorani Qaida Online:</strong> Start reading the Quran correctly by mastering the basic Arabic alphabets and pronunciation rules. <Link href="/noorani-qaida">Learn More</Link></li>
            <li className="mb-2"><strong>Quran Reading with Tajweed:</strong> Learn the rules of Tajweed for accurate Quran recitation and improve your pronunciation. <Link href="/tajweed-course">Learn More</Link></li>
            <li className="mb-2"><strong>Memorize Quran Online:</strong> Memorize the Quran with structured guidance from expert teachers at your own pace. <Link href="/hifz-course">Learn More</Link></li>
            <li className="mb-2"><strong>Learn Tafsir Online:</strong> Understand the meanings and context behind Quranic verses with our detailed Tafsir course. <Link href="/tafsir-course">Learn More</Link></li>
            <li className="mb-2"><strong>Learn Arabic Online:</strong> Master classical Arabic to deepen your comprehension of the Quran and other Islamic texts. <Link href="/arabic-course">Learn More</Link></li>
            <li className="mb-2"><strong>Learn Islamic Studies Online:</strong> Explore Islamic teachings in a structured and comprehensive manner. <Link href="/islamic-studies-course">Learn More</Link></li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Short Courses</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Memorization of Selected Surahs:</strong> Focus on memorizing key Surahs from the Quran under expert guidance. <Link href="/memorization-course">Learn More</Link></li>
            <li className="mb-2"><strong>Learn Daily Supplication Online:</strong> Master essential daily Islamic supplications (Duas) for spiritual growth. <Link href="/dua-course">Learn More</Link></li>
            <li className="mb-2"><strong>Learn Pillars of Islam:</strong> Gain an in-depth understanding of the five pillars of Islam and their significance in daily life. <Link href="/pillars-course">Learn More</Link></li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>24/7 Flexible Scheduling:</strong> Study at your own pace with a schedule that suits your lifestyle.</li>
            <li className="mb-2"><strong>Experienced Teachers:</strong> Learn from highly qualified male and female instructors who are experts in Quranic studies.</li>
            <li className="mb-2"><strong>One-on-One Classes:</strong> Get personalized attention with individual classes that cater to your specific needs.</li>
            <li className="mb-2"><strong>Affordable Fees:</strong> We offer flexible pricing plans to make quality Islamic education accessible to all.</li>
            <li className="mb-2"><strong>Global Accessibility:</strong> Join from anywhere in the world and start learning today.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">Enroll Today!</h2>
          <p className="text-base font-medium mb-4">
            Join thousands of students who have transformed their Quranic learning experience with ilmulQuran. Book your free trial today and begin your journey towards mastering the Quran.
          </p>
          <p className="text-base font-medium mb-4">
            <Link href="/get-register" className="text-blue-600 no-underline">
              Register Now
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

export default OnlineQuranCourses;
