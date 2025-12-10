import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const LearnIslamicStudiesOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Comprehensive Online Islamic Studies Program",
    link: "/",
  };

  return (
    <>
      <head>
        <title>Islamic Studies Online Course | Aqeedah, Fiqh & History</title>
        <meta 
          name="description" 
          content="Master Islamic studies online: Aqeedah, Fiqh, Quranic sciences & Islamic history. Structured curriculum for all levels with certified scholars. Free trial available."
        />
        <meta 
          name="keywords" 
          content="Comprehensive Islamic Studies, Online Aqeedah Course, Fiqh Classes Online, Islamic History Program, Quranic Sciences Course, Islamic Certification, Muslim Beliefs Course, Islamic Theology Online" 
        />
        <link rel="canonical" href="https://www.ilmulquran.com/learn-islamic-studies-online" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Islamic Studies Program Online | ilmulQuran" />
        <meta property="og:description" content="Comprehensive Islamic education covering theology, law, history & Quranic studies. Earn certification with flexible online classes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ilmulquran.com/learn-islamic-studies-online" />
        <meta property="og:image" content="https://www.ilmulquran.com//Images/Courses/Learn-islamic-online.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certified Islamic Studies Course Online" />
        <meta name="twitter:description" content="Structured Islamic education program with certification. Enroll today for comprehensive learning!" />
        <meta name="twitter:image" content="https://www.ilmulquran.com/Images/Courses/Learn-islamic-online.webp" />
      </head>

      {/* Structured Data */}
      <Script
        id="islamic-studies-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Comprehensive Islamic Studies Program",
            "description": "Year-long curriculum covering Islamic theology, jurisprudence, history, and Quranic sciences",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://www.ilmulquran.com"
            },
            "image": "https://www.ilmulquran.com/Images/Courses/Learn-islamic-online.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P12M",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "ageRange": "15-65"
              },
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://www.ilmulquran.com/get-register"
              }
            },
            "educationalCredentialAwarded": "Certificate in Islamic Studies"
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
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
          <h1 className="text-center mb-10 text-[#003366] font-bold text-2xl md:text-3xl lg:text-4xl">
            Master Islamic Sciences: Aqeedah, Fiqh & History
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 pt-3">
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium">
                Our comprehensive <Link href="/learn-islamic-studies" className="text-blue-600">Islamic Studies program</Link> covers essential Islamic sciences through structured online learning. Suitable for students aged 15+, this course integrates:
              </p>
              
              <ul className="list-disc ml-8 space-y-2 mt-4">
                <li>
                  <Link href="/aqeedah-islamic-beliefs" className="text-blue-600">Islamic Theology (Aqeedah)</Link> from classical texts
                </li>
                <li>
                  <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">Jurisprudence (Fiqh)</Link> across major schools
                </li>
                <li>
                  <Link href="/islamic-history" className="text-blue-600">Islamic History</Link> from Prophet Muhammad (PBUH) to modern era
                </li>
                <li>Quranic Sciences & <Link href="/learn-tafsir-online" className="text-blue-600">Tafsir studies</Link></li>
              </ul>

              <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Program Highlights
              </h3>
              <ul className="list-disc ml-8 space-y-2 mt-4">
                <li>Weekly live sessions with <Link href="/our-teachers" className="text-blue-600">certified scholars</Link></li>
                <li>Interactive case studies & debates</li>
                <li>Access to digital Islamic library</li>
                <li>Monthly progress assessments</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={400}
                src="/Images/Courses/Learn-islamic-online.webp"
                alt="Online Islamic studies class with teacher and students"
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Curriculum Structure</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Foundations of Islamic Belief</li>
                <li>Comparative Fiqh Studies</li>
                <li>Hadith Authentication Methods</li>
                <li>Islamic Civilization Development</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Learning Outcomes</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Analyze classical Islamic texts</li>
                <li>Understand contemporary Islamic issues</li>
                <li>Develop critical thinking in Islamic law</li>
                <li>Present Islamic perspectives effectively</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-[#003366]">Related Programs</h3>
            <ul className="list-disc ml-8 space-y-2 mt-4">
              <li>
                <Link href="/quranic-arabic-course" className="text-blue-600">
                  Quranic Arabic Mastery
                </Link>
              </li>
              <li>
                <Link href="/40-short-hadiths-for-kids" className="text-blue-600">
                  Hadith Memorization Course
                </Link>
              </li>
              <li>
                <Link href="/seerah-life-of-prophet-muhammad" className="text-blue-600">
                  Prophetic Biography Program
                </Link>
              </li>
            </ul>
          </div>


          <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Comprehensive and Flexible Learning
          </h3>
          <p className="text-base font-medium pt-2">
            Our course is structured to accommodate learners of all levels. Whether you are a beginner or seeking advanced knowledge, our flexible schedule allows you to learn at your own pace. The course follows the Islamic Studies curriculum for the following grades:
          </p>

          <ul className="list-disc ml-8 space-y-1 pt-3">
            <li>Islamic Studies Grade 01</li>
            <li>Islamic Studies Grade 02</li>
            <li>Islamic Studies Grade 03</li>
            <li>Islamic Studies Grade 04</li>
            <li>Islamic Studies Grade 05</li>
            <li>Islamic Studies Grade 06</li>
            <li>Islamic Studies Grade 07</li>
            <li>Islamic Studies Grade 08</li>
            <li>Islamic Studies Grade 09</li>
            <li>Islamic Studies Grade 10</li>
            <li>Islamic Studies Grade 11</li>
            <li>Islamic Studies Grade 12</li>
          </ul>

       

          <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Why Choose ilmulQuran Online Academy?
          </h3>
          <ul className="list-disc ml-8 space-y-1 pt-3">
            <li>
              <span className="font-bold">Expert Tutors:</span> Learn from qualified scholars with extensive knowledge in Islamic studies.
            </li>
            <li>
              <span className="font-bold">Interactive Learning:</span> Engage in live sessions, discussions, and interactive activities.
            </li>
            <li>
              <span className="font-bold">Flexible Schedule:</span> Study at your convenience with our flexible online classes.
            </li>
            <li>
              <span className="font-bold">Comprehensive Curriculum:</span> Gain a well-rounded education covering all essential aspects of Islam.
            </li>
            <li>
              <span className="font-bold">Community Support:</span> Join a supportive online community of fellow learners.
            </li>
          </ul>

       
       
       
          <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            Simple and Convenient Learning Process
          </h3>
          <ul className="list-disc ml-8 space-y-1 pt-3">
            <li>
              <span className="font-bold">Enroll:</span> Choose the Islamic Studies course and complete the enrollment process.
            </li>
            <li>
              <span className="font-bold">Schedule:</span> Set your class schedule according to your convenience.
            </li>
            <li>
              <span className="font-bold">Learn:</span> Attend online classes and engage with tutors and peers.
            </li>
            <li>
              <span className="font-bold">Support:</span> Get continuous support from our tutors and community.
            </li>
          </ul>


   <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            What Our Students Say
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

export default LearnIslamicStudiesOnline;
