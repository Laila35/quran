import Register from "@/components/landingPage/Register";
import SpecialClasses from "@/components/landingPage/SpecialClasses";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";

// ---- Metadata for Next.js 16 (App Router) ----
export const metadata = {
  title: "Register for Free Trial Classes | ilmulQuran Online Academy",
  description: "Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!",
  keywords: "Free Trial Classes, Quran Classes Online, Register for Free Quran Trial, Online Quran Classes, Free Trial ilmulQuran",
  openGraph: {
    title: "Register for Free Trial Classes | ilmulQuran Online Academy",
    description: "Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!",
    url: "https://ilmulQuran.com/get-register",
    siteName: "ilmulQuran",
    images: [
      {
        url: "/Images/Logo/updated-logo.webp",
        width: 1200,
        height: 630,
        alt: "Student registering for free trial Quran class online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register for Free Trial Classes | ilmulQuran Online Academy",
    description: "Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!",
    images: ["/Images/Logo/updated-logo.webp"],
  },
  alternates: {
    canonical: "https://ilmulQuran.com/get-register",
  },
};

const GetRegister = () => {
  return (
    <>
      {/* JSON-LD Structured Data - Keep this Script component */}
      <Script
        id="jsonld-free-trial-register"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Free Trial Quran Classes Registration",
            "description": "Sign up for a free trial class at ilmulQuran Online Academy to experience high-quality Quranic and Islamic education with certified teachers.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulQuran.com",
            },
            "url": "https://ilmulQuran.com/get-register",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulQuran.com/get-register",
              },
            },
          }),
        }}
      />
      
      {/* Page Content */}
      <div className="flex flex-col lg:flex-row mt-10 gap-6 lg:gap-9 mx-4 xl:mx-32 2xl:mx-56">
        <div className="w-full lg:w-[40%] px-5">
          <SpecialClasses />
        </div>
        <div className="w-full lg:w-[60%] px-6 md:px-9 lg:px-[56px] py-2 lg:py-12">
          <Register />
        </div>
      </div>
      
      <h3 className="text-xl text-center md:text-2xl font-bold text-[#003366] pt-6">
        Student Testimonials
      </h3>
      <div className="pt-3">
        <TestimonialComponent testimonialsData={testimonialsData} />
      </div>
    </>
  );
};

export default GetRegister;