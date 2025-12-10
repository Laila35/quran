import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm"; // Import the form component



const CompanionsCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "The Companions of Prophet Muhammad (PBUH) Course - Learn About the Sahaba",
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
    href="/Images/Courses/Companions-of-muhammad.webp"
    fetchPriority="high"
  />

  <title>Study the Lives of Prophet's Companions In-Depth Sahaba Course</title>
  <meta
    name="description"
    content="Explore the biographies of 40+ Sahaba with certified scholars. Analyze their contributions to Islam, leadership lessons, and legacy preservation. Flexible online classes with certification."
  />
  <meta
    name="keywords"
    content="Sahaba biography course, Companions of Prophet Muhammad, Islamic history course, Rightly Guided Caliphs study, Asharah Mubasharah course, Sahabiyat classes online, Islamic leadership lessons, Early Muslim community history, Hadith narrators study, Islamic golden age education"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/companions-of-prophet-muhammad-pbuh/" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Comprehensive Sahaba Studies - Master Islamic History Online | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Detailed analysis of Prophet's Companions including Abu Bakr, Umar, Khadija, and Ali (RA). Study their roles in Islamic civilization with authentic sources and scholarly guidance."
  />
  <meta property="og:url" content="https://ilmulquran.com/companions-of-prophet-muhammad-pbuh/" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Companions-of-muhammad.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Islamic scholar teaching about Sahaba's lives" />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Online Sahaba Studies - Learn Islamic History from Experts"
  />
  <meta
    name="twitter:description"
    content="Interactive course covering 40+ prominent Companions. Weekly assignments, historical analysis, and certification. Start free trial today!"
  />
  <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Companions-of-muhammad.webp" />

  {/* Structured Data */}
  <Script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Comprehensive Sahaba Studies Certification Program",
        "description": "In-depth examination of Prophet Muhammad's (PBUH) companions including their biographies, historical contributions, and lessons for modern Muslims. Covers Asharah Mubasharah, Sahabiyat, and major narrators of Hadith.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "ilmulQuran",
          "sameAs": "https://ilmulquran.com"
        },
        "url": "https://ilmulquran.com/companions-of-prophet-muhammad-pbuh/",
        "image": "https://ilmulquran.com/Images/Courses/Companions-of-muhammad.webp",
        "educationalLevel": "Intermediate to Advanced",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "one-on-one"],
          "duration": "P4M",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student",
            "ageRange": "16-65"
          },
          "offers": {
            "@type": "Offer",
            "category": "free trial",
            "url": "https://ilmulquran.com/get-register"
          }
        },
        "coursePrerequisites": "Basic knowledge of Islamic history",
        "educationalCredentialAwarded": "Certificate in Sahaba Studies",
        "courseWorkload": "Weekly 2 hours of lectures + assignments"
      })
    }}
  />
</head>


  
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">


   {/* Main Content Column */}
        <div className="w-full lg:w-2/3 order-last lg:order-none">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
           Companions of Prophet Muhammad (PBUH) Course
          </h2>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium">
                Our Companions of Prophet Muhammad (PBUH) Course is designed to help you learn about the lives and contributions of the Sahaba (Companions of the Prophet). This course covers the biographies, significant events, and teachings of the Sahaba. With the guidance of experienced tutors, you will gain a deeper understanding of the Sahaba’s role in the spread of Islam.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                Why Choose Our Companions of Prophet Muhammad (PBUH) Course?
              </h3>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>
                  <span className="font-bold text-[#1a73e8]">Personal Guidance:</span> One-on-one sessions with expert tutors.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Flexible Learning:</span> Online classes that fit your schedule.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Complete Curriculum:</span> Covers all significant aspects of the Sahaba’s lives.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
            <Image
            src="/Images/Courses/Companions-of-muhammad.webp"
            width={600}
            height={600}
            alt="Companions of the Prophet"
            style={{ borderRadius: "25px" }}
             />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Course Objectives
          </h3>
          <ul className="list-disc ml-8 space-y-2 pt-3">
            <li>Learn the Sahaba’s Biographies: Understand the lives of the Companions of the Prophet.</li>
            <li>Study Their Contributions: Gain insights into the contributions of the Sahaba to Islam.</li>
            <li>Understand Their Teachings: Learn about the teachings and practices of the Sahaba.</li>
            <li>Improve Application: Apply the lessons from the Sahaba’s lives in your daily life.</li>
            <li>Gain Insight: Understand the historical context of the Sahaba’s time.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Course Syllabus
          </h3>
          <ul className="list-disc ml-8 space-y-2 pt-3">
            <li>Introduction to the Sahaba: Overview of the Companions of the Prophet.</li>
            <li>Early Converts: Understanding the early converts to Islam.</li>
            <li>Major Events: Key events involving the Sahaba.</li>
            <li>Contributions to Islam: Study the contributions of the Sahaba to the spread of Islam.</li>
            <li>Teachings of the Sahaba: Learn about the teachings and practices of the Sahaba.</li>
            <li>Historical Context: Understanding the historical context of the Sahaba’s time.</li>
            <li>Legacy of the Sahaba: Study the lasting impact of the Sahaba on Islam.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Call to Action
          </h3>
          <p className="text-base font-medium pt-4">
            Ready to learn about the Sahaba?{" "}
            <Link href="/get-register" className="text-blue-600 no-underline">
              Enroll in our Companions of Prophet Muhammad (PBUH) Course today!
            </Link>
          </p>



                   <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>


        </div>




      </div>

 <div className="w-full lg:w-1/3 order-first lg:order-none lg:sticky top-4 h-fit">
          <div className="bg-white p-4 sm:p-6 rounded-xl ">
            <StickyForm 
              courseName="Companions of Prophet Muhammad (PBUH) Course" 
           
            />
          </div>
</div>

      </div>




      </>
  );
};

export default CompanionsCourse;
