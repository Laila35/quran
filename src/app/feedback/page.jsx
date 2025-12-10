import Banner from "@/components/Banner";
import React from "react";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";


import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import StickyForm from "@/components/StickyForm";
import { testimonialsData } from "@/lib/Data";

const Feedback = () => {
  const breadcrumbData = {
    id: 1,
    name: "Feedback | ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
  <head>
  <title>Feedback | ilmulQuran Online Academy</title>
  <meta
  name="description"
  content="We value your feedback! Please share your thoughts and suggestions to help us improve your learning experience at ilmulQuran Online Academy."
  />
  <meta
  name="keywords"
  content="Feedback, Suggestions, Contact ilmulQuran, Learning Experience, Quran Academy Feedback, ilmulQuran Online Academy"
  />
  <link rel="canonical" href="https://ilmulquran.com/feedback" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
  property="og:title"
  content="Feedback | ilmulQuran Online Academy"
  />
  <meta
  property="og:description"
  content="We welcome your feedback and suggestions to enhance your experience at ilmulQuran Online Academy."
  />
  <meta property="og:url" content="https://ilmulquran.com/feedback" />
  <meta property="og:site_name" content="ilmulQuran" />
  
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
  property="og:image:alt"
  content="Students giving feedback to ilmulQuran Online Academy"
  />
  <meta property="og:image:type" content="image/png" />
  
  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
  name="twitter:title"
  content="Feedback | ilmulQuran Online Academy"
  />
  <meta
  name="twitter:description"
  content="Share your thoughts and suggestions to help us improve your Quran learning experience."
  />
  
  
  {/* JSON-LD Structured Data */}
  <Script
  id="jsonld-feedback-page"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
   __html: JSON.stringify({
     "@context": "https://schema.org",
     "@type": "WebPage",
     "name": "Feedback | ilmulQuran Online Academy",
     "url": "https://ilmulquran.com/feedback",
     "description":
       "We value your feedback! Please share your thoughts and suggestions to help us improve your learning experience at ilmulQuran Online Academy.",
     "publisher": {
       "@type": "Organization",
       "name": "ilmulQuran",
       "url": "https://ilmulquran.com",
       "logo": {
         "@type": "ImageObject",
       }
     }
   }),
  }}
  />
  </head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#003366] mb-5">
            Your Feedback Matters!
          </h1>
          <p className="text-lg text-center text-gray-700 mb-5">
            Please fill out the feedback form below to help us improve your experience. Your opinions and suggestions are important to us.
          </p>

          {/* Layout container: column on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4 order-2 lg:order-1">
              {/* Mobile-only StickyForm */}
              <div className="block lg:hidden mb-6">
                <StickyForm courseName="Companions of Prophet Muhammad (PBUH) Course" />
              </div>

              <div className="w-full justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfV5PXb1b-zG-D4dysvl7ja-WvFr6IzyBSsfOvtukvctqGBYg/viewform?embedded=true"
                  width="100%"
                  height="2250"
                  className="w-full  border-none"
                  style={{ minHeight: "700px" }}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>

            {/* Desktop Sidebar StickyForm */}
            <div className="w-full lg:w-1/4 order-1 lg:order-2 hidden lg:block">
              <div className="sticky top-6">
                <StickyForm courseName="Companions of Prophet Muhammad (PBUH) Course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
