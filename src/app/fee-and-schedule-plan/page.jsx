  import DiscountBanner from "@/components/DiscountBanner";
import FeePlan from "@/components/landingPage/FeePlans";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { feePlanData } from "@/lib/Data";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";
import Script from "next/script";

const breadcrumbData = {
  id: 1,
  name: "Fee and Schedule Plan",
  link: "/",
};

const LearningFees = () => {
  return (
    <>
<head>
<title>ilmulQuran | Learning fee and prices</title>
<meta
name="description"
content="Discover the affordable fees for our Quran learning programs at ilmulQuran Online Academy. Our courses offer high-quality education with transparent pricing. Find out more about our tuition fees and payment options today!"
/>
<meta
name="keywords"
content="Fee and Schedule Plan, Quran Learning Fees, Quran Classes Pricing, Tuition Fees, ilmulQuran Payment Options"
/>
<link rel="canonical" href="https://ilmulQuran.com/fee-and-schedule-plan" />

{/* Open Graph Meta Tags */}
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta
property="og:title"
content="ilmulQuran | Affordable Quran Learning Fees and Payment Options"
/>
<meta
property="og:description"
content="Explore transparent and affordable tuition fees for Quran courses at ilmulQuran Online Academy. Flexible payment plans and quality education for all ages."
/>
<meta property="og:url" content="https://ilmulQuran.com/fee-and-schedule-plan" />
<meta property="og:site_name" content="ilmulQuran" />

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta
property="og:image:alt"
content="ilmulQuran fee and schedule plan banner"
/>
<meta property="og:image:type" content="image/png" />

{/* Twitter Meta Tags */}
<meta name="twitter:card" content="summary_large_image" />
<meta
name="twitter:title"
content="ilmulQuran | Quran Learning Fees & Payment Plans"
/>
<meta
name="twitter:description"
content="Find out about our competitive Quran learning fees and easy payment options at ilmulQuran Online Academy."
/>


{/* Enhanced Schema Markup */}
<Script
id="jsonld-fee-schedule"
type="application/ld+json"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Quran Learning Programs",
    description:
      "Affordable Quran learning programs with high-quality education and transparent tuition fees at ilmulQuran Online Academy.",
    provider: {
      "@type": "EducationalOrganization",
      name: "ilmulQuran Online Academy",
      sameAs: "https://ilmulquran.com",
      description:
        "Online Islamic education platform specializing in Quran and Hadith courses.",
    },
    url: "https://ilmulquran.com/fee-and-schedule-plan",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "Beginner Quran Course",
        description: "Basic Quran reading and tajweed for beginners.",
        courseMode: ["online"],
        startDate: "2025-06-01",
        endDate: "2025-12-31",
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "USD",
          url: "https://ilmulquran.com/fee-and-schedule-plan",
          validFrom: "2025-05-01",
        },
      },
      {
        "@type": "CourseInstance",
        name: "Advanced Quran Tajweed Course",
        description: "Advanced Tajweed rules and Quran memorization.",
        courseMode: ["online"],
        startDate: "2025-07-01",
        endDate: "2026-01-31",
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "USD",
          url: "https://ilmulquran.com/fee-and-schedule-plan",
          validFrom: "2025-05-01",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  }),
}}
/>
</head>
      {/* Mobile Form - Top of page (non-sticky) */}
      <div className="block lg:hidden">
        <StickyForm 
          courseName="Companions of Prophet Muhammad (PBUH) Course" 
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* <Banner breadcrumbData={breadcrumbData} /> */}

          <div className="w-full mx-auto px-6 py-10 mt-12">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-teal-400 rounded-t-2xl"></div>
              
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Start Your Quran Learning Journey
              </h2>
              
              <p className="text-gray-600 text-center mb-8">
                Select a schedule that works best for you, or request a custom class time. Whether you prefer weekday or weekend classes, we offer flexible options to suit your needs.
              </p>
              
              <p className="text-gray-600 text-center mb-8">
                We are now accepting payments in multiple currencies. If your currency is not listed, feel free to ask us about other available options.
              </p>
              
              <p className="font-bold text-lg text-teal-600 text-center">
                Each class lasts 30 minutes. A 1-hour session option is available upon request.
              </p>
            </div>
          </div>

          <DiscountBanner />

          <FeePlan feePlanData={feePlanData} />

          <div className="container mx-auto w-full px-4 py-12">
            <div className="bg-white  rounded-lg p-8">
              <h2 className="text-3xl font-bold text-teal-700 mb-4 text-center">
                <span className="font-arabic text-4xl"></span> Quran Learning Fees Information
              </h2>
              
              <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                The charges listed above are for a 30-minute class duration. If you prefer a 1-hour session, the fees will be double. If your country is not mentioned in the list above, please contact us for detailed fee information.
              </p>

              <div className="mb-6 p-4 bg-teal-50 border-l-4 border-teal-600 rounded-md">
                <p className="font-semibold text-lg text-teal-600">
                  If you have a customized plan for your classes, please let us know, and we will make it possible for you, Insha'Allah.
                </p>
              </div>

              <p className="mb-6 text-lg text-gray-800 leading-relaxed">
                Affordable Quran learning fees are charged on a monthly basis, including public holidays (not weekly). Low-income families are offered a special 10% discount. Fees are due in advance every month. Available payment methods include 2Checkout, PayPal, and Credit/Debit card.
              </p>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-md">
                <p className="text-lg text-teal-600">
                  Eid holidays are included in the monthly fees of the students and are non-refundable as they occur twice a year.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  <em>May Allah bless your learning journey!</em>
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>
        </div>

        {/* Desktop Form Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <StickyForm 
              courseName="Companions of Prophet Muhammad (PBUH) Course" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningFees;