import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Banner from "@/components/Banner";
import { FaMedal, FaCheckCircle, FaCertificate } from "react-icons/fa";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm"; // Import the form component


const CertificateOfAppraisal = () => {
  const breadcrumbData = {
    id: 1,
    name: "Certificate of Appraisal | ilmulQuran Online Academy",
    link: "/",
  };

  
  
  return (
    <>

 <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/certificate-of-appraisal" />

  

  {/* Page Title */}
  <title>Certificate of Appraisal | ilmulQuran Online Academy</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Explore ilmulQuran's Certificate of Appraisal — a symbol of excellence and achievement in Quranic studies. Recognizing dedicated learners with certified honor."
  />

  {/* SEO Keywords */}
  <meta
    name="keywords"
    content="Certificate of Appraisal, ilmulQuran, Quran Certificate, Online Quran Course Certificate, Student Recognition, Islamic Education Certification"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/certificate-of-appraisal" />
  <meta property="og:title" content="Certificate of Appraisal | ilmulQuran Online Academy" />
  <meta property="og:description" content="Recognizing and honoring Quran learners with an official Certificate of Appraisal. Join ilmulQuran and celebrate your learning journey." />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="ilmulQuran Certificate of Appraisal" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Certificate of Appraisal | ilmulQuran Academy" />
  <meta name="twitter:description" content="Join ilmulQuran Academy and receive a certified appraisal for your Quranic learning. Recognition that matters." />

  {/* Structured Data (JSON-LD) */}
  <Script
    id="certificate-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: "Certificate of Appraisal - ilmulQuran Academy",
        educationalProgramMode: "online",
        provider: {
          "@type": "Organization",
          name: "ilmulQuran Online Academy",
          url: "https://ilmulQuran.com"
        },
        description: "ilmulQuran Online Academy offers a Certificate of Appraisal to honor and recognize students who successfully complete Quranic education programs.",
        url: "https://ilmulQuran.com/certificate-of-appraisal"
      })
    }}
  />

  {/* Additional Tags */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Team" />
  <meta name="theme-color" content="#2A593F" />
  <meta name="apple-mobile-web-app-title" content="ilmulQuran Academy" />
</head>
 

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">

      <div className="w-full lg:w-2/3 order-last lg:order-none">
          <div className="bg-white  rounded-lg p-10">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#003366] mb-4">
              <FaMedal className="inline-block text-teal-500 mb-2" /> Certificate of Appraisal
            </h1>
            <h2 className="text-xl text-gray-700 mb-6">
              Recognizing and honoring your achievements at <span className="font-semibold">ilmulQuran Online Academy</span>
            </h2>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-8">
              At ilmulQuran Online Academy, we believe in recognizing the dedication and proficiency of our students. Our Certificate of Appraisal is a mark of excellence for those who demonstrate outstanding commitment to Quranic studies.
            </p>

            <div className="my-8">
              <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-2">
                <FaCheckCircle className="text-teal-500" /> Eligibility for Certificate
              </h2>
              <ul className="mt-4 space-y-3 list-disc list-inside pl-4">
                <li>Complete your course with exceptional performance.</li>
                <li>Demonstrate proficiency in Quranic recitation, Tajweed, or Islamic studies.</li>
                <li>Participate actively in classes and complete all assignments.</li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-2">
                <FaCertificate className="text-teal-500" /> How to Receive Your Certificate
              </h2>
              <p className="mt-4">
                After successfully completing your course, instructors will assess your performance and recommend you for the Certificate of Appraisal. You will receive an official certificate recognizing your hard work and achievements.
              </p>
            </div>

            <div className="my-8 text-center">
              <h2 className="text-2xl font-bold text-[#003366]">
                Ready to Achieve Excellence?
              </h2>
              <p className="mt-4">
                Strive for excellence in your studies and earn your Certificate of Appraisal. Enroll in a course today!
              </p>
          
            </div>
          </div>
                   <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

        
        </div>
                </div>

      {/* Form Column - Mobile First Position */}
        <div className="w-full lg:w-1/3 order-first lg:order-none lg:sticky top-4 h-fit">
          <div className="bg-white p-4 sm:p-6 rounded-xl">
            <StickyForm 
              courseName="Certificate of Appraisal" 
            />
          </div>
        </div>

      </div>
    </>
  );
};
export default CertificateOfAppraisal;
