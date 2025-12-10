import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Banner from "@/components/Banner";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";

// ---- Metadata for Next.js 16 (App Router) ----
export const metadata = {
  title: "Help & Support | ilmulQuran Online Academy",
  description: "Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues. Reach out to us for any inquiries and learn how we can assist you!",
  keywords: "Help and Support, ilmulQuran Assistance, Online Quran Support, Enrollment Help, Technical Support ilmulQuran, Quran Course FAQs",
  openGraph: {
    title: "Help & Support | ilmulQuran Online Academy",
    description: "Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues. Reach out to us for any inquiries and learn how we can assist you!",
    url: "https://ilmulQuran.com/help-support",
    siteName: "ilmulQuran",
    images: [
      {
        url: "/Images/Logo/updated-logo.webp", // Add a relevant image
        width: 1200,
        height: 630,
        alt: "Customer support helping a student online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help & Support | ilmulQuran Online Academy",
    description: "Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues.",
    images: ["/Images/Logo/updated-logo.webp"],
  },
  alternates: {
    canonical: "https://ilmulQuran.com/help-support",
  },
};

const HelpSupport = () => {
  const breadcrumbData = {
    id: 1,
    name: "Help & Support | ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="jsonld-help-support"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Help & Support",
            "description": "Find answers to your questions about enrollment, courses, and technical issues at ilmulQuran Online Academy's Help & Support page.",
            "url": "https://ilmulQuran.com/help-support",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I enroll in a course?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can enroll by registering on our website and selecting your desired course."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What payment options are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept multiple payment methods including credit card, PayPal, and bank transfer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who do I contact for technical support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach our support team via the contact form or email admin@ilmulquran.com."
                  }
                }
              ]
            }
          }),
        }}
      />
      
      {/* Content Section */}
      {/* <Banner breadcrumbData={breadcrumbData} /> */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Main Content */}
          <div className="w-full lg:w-3/4">
            {/* StickyForm for mobile */}
            <div className="block lg:hidden mb-10">
              <StickyForm courseName="Help & Support" />
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-4xl font-extrabold text-center text-[#003366]">
                Help & Support
              </h2>
              <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
                Welcome to ilmulQuran Online Academy's Help & Support page.
                We are here to assist you with any questions or issues you may have.
                Our team is dedicated to providing excellent customer service to ensure
                your learning experience is smooth and enjoyable.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>
          {/* RIGHT: Sticky Form (Desktop only) */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-6">
              <StickyForm courseName="Help & Support" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupport;