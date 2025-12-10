import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const LearnTenQiratOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Master Ten Qirat Online: Quran Recitation Certification Course",
    link: "/",
  };

  
  return (
    <>
      <head>
        <title>Ten Qirat Online Course | Quran Recitation Styles Certification</title>
        <meta 
          name="description" 
          content="Master all 10 authentic Qirat styles with certified Quran scholars. Learn pronunciation variations, Tajweed rules & historical context through personalized online classes. Free trial available." 
        />
        <meta 
          name="keywords" 
          content="Ten Qirat course online, Quran recitation styles, Qira'at certification, Learn Hafs and Warsh, Tajweed rules for Qirat, Islamic recitation methods, Quranic pronunciation course" 
        />
        <link rel="canonical" href="https://ilmulquran.com/learn-ten-qirat-online/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Ten Qirat Certification Course Online" />
        <meta property="og:description" content="Master 10 authentic Quran recitation styles with Ijazah-certified instructors. Flexible scheduling & comprehensive curriculum." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulquran.com/learn-ten-qirat-online/" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Learn-ten-qirat.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certified Ten Qirat Course Online - Learn Quranic Recitation" />
        <meta name="twitter:description" content="Comprehensive program covering all 10 authentic recitation styles with Tajweed rules. Enroll today!" />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Learn-ten-qirat.webp" />
      </head>

      {/* Structured Data */}
      <Script
        id="ten-qirat-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Ten Qirat Mastery Certification Program",
            "description": "Comprehensive study of all 10 authentic Quran recitation methods with Ijazah certification",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "image": "https://ilmulquran.com/Images/Courses/Learn-ten-qirat.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P6M",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "ageRange": "15-70"
              },
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulquran.com/get-register"
              }
            },
            "educationalCredentialAwarded": "Ijazah in Ten Qirat"
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
              <h1 id="overview" className="text-center mb-10 text-[#003366] font-bold text-3xl md:text-4xl">
                Master the 10 Authentic Quran Recitation Styles
              </h1>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <p className="text-base font-medium">
                    Our comprehensive <Link href="/online-ijazah-course" className="text-blue-600">Ijazah program</Link> covers all Ten Qirat through structured modules. Perfect for:
                  </p>
                  <ul className="list-disc ml-8 space-y-2 mt-4">
                    <li>Advanced Quran students</li>
                    <li>Aspiring Quran teachers</li>
                    <li>Islamic studies scholars</li>
                    <li><Link href="/memorize-quran-online" className="text-blue-600">Hafiz graduates</Link> enhancing skills</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Program Highlights
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 pt-3">
                    <li>Certification from <Link href="/our-teachers" className="text-blue-600">Ijazah-holding scholars</Link></li>
                    <li>Comparative analysis of recitation styles</li>
                    <li>Historical context of each Qira'ah</li>
                    <li>Practical application in prayers</li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/Learn-ten-qirat.webp"
                    alt="Quran scholar demonstrating different recitation styles"
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>

              <div id="curriculum" className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Core Curriculum</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Historical development of Qira'at</li>
                    <li>Comparative Tajweed analysis</li>
                    <li>Narration chains (Sanad) verification</li>
                    <li>Practical recitation sessions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 id="styles" className="text-2xl font-bold text-[#003366]">Key Recitation Styles</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Hafs 'an 'Asim</li>
                    <li>Warsh 'an Nafi'</li>
                    <li>Qalun 'an Nafi'</li>
                    <li>Al-Duri 'an Abu Amr</li>
                  </ul>
                </div>
              </div>

              {/* Historical Context Section */}
              <div id="history" className="mt-8">
                <h3 className="text-2xl font-bold text-[#003366]">Historical Foundation</h3>
                <p className="text-base font-medium mt-4">
                  The Ten Qirat originate from the seven Ahruf revealed to Prophet Muhammad (PBUH). Our course covers:
                </p>
                <ul className="list-disc ml-8 space-y-2 mt-3">
                  <li>Preservation through <Link href="/companions-of-prophet-muhammad" className="text-blue-600">Sahaba</Link></li>
                  <li>Standardization by Quranic scholars</li>
                  <li>Modern verification processes</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                  How the Ten Qirat Evolved
                </h3>
                <p className="text-base font-medium pt-3">
                  At the time of the Quran's revelation, Angel Jibril (AS) recited the Quran to the Prophet Muhammad (PBUH) in one dialect. Prophet Muhammad (PBUH) requested Jibril (AS) to increase the dialects, and he did until seven dialects were completed. All these were the same in meaning but differed in pronunciation.
                </p>
              </div>

              {/* Learning Methodology */}
              <div id="methodology" className="mt-8">
                <h3 className="text-2xl font-bold text-[#003366]">Learning Approach</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a73e8]">Theoretical Study</h4>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Historical manuscripts analysis</li>
                      <li>Comparative text studies</li>
                      <li>Scholarly debates review</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#1a73e8]">Practical Training</h4>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Daily recitation practice</li>
                      <li>Style comparison exercises</li>
                      <li>Certification recitations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#003366]">Ten Qirat Styles of Recitation</h3>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  <li>
                    <span className="font-bold">Hafs An Aasim:</span> The most popular recitation style, widely used.
                  </li>
                  <li>
                    <span className="font-bold">Qalun An Nafi:</span> A style characterized by its unique pronunciation.
                  </li>
                  <li>
                    <span className="font-bold">Al-Duri An Abu Amr:</span> Known for its distinctive recitation patterns.
                  </li>
                  <li>
                    <span className="font-bold">Al-Kisai:</span> Features its own special rules and patterns.
                  </li>
                  <li>
                    <span className="font-bold">Al-Susi:</span> Another unique recitation style among the ten.
                  </li>
                </ul>
              </div>

              <div id="testimonials" className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                  Student Testimonials
                </h3>
                <div className="pt-3">
    <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />                </div>
              </div>

              <div id="related" className="mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold text-[#003366]">Related Programs</h3>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                  <li>
                    <Link href="/learn-tajweed-online" className="text-blue-600">
                      Advanced Tajweed Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/quranic-arabic-course" className="text-blue-600">
                      Quranic Arabic Mastery
                    </Link>
                  </li>
                  <li>
                    <Link href="/islamic-history" className="text-blue-600">
                      Islamic Scriptural History
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>

    </>
  );
};

export default LearnTenQiratOnline;