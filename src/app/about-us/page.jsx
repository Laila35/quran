import Banner from "@/components/Banner";
import Steps from "@/components/landingPage/Steps";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { stepsData } from "@/lib/Data";
import Link from "next/link";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";

// ---- Metadata for Next.js 16 (App Router) ----
export const metadata = {
  title: "About Us | ilmulQuran Online Academy – Trusted Islamic Learning",
  description: "Discover the mission, values, and team behind ilmulQuran Online Academy. Learn how we provide top-quality online Islamic education for all ages worldwide.",
  keywords: "About ilmulQuran, ilmulQuran Online Academy, Learn Islam Online, Online Quran Education, Islamic Courses, Trusted Islamic Academy",
  openGraph: {
    title: "About ilmulQuran Online Academy | Learn Islam & Quran Online",
    description: "Learn about ilmulQuran Academy's mission and how we're shaping the future of online Islamic learning. Trusted by 10,000+ students.",
    url: "https://ilmulQuran.com/about-us",
    siteName: "ilmulQuran",
    images: [
      {
        url: "/Images/Logo/updated-logo.webp",
        width: 1200,
        height: 630,
        alt: "ilmulQuran Online Academy team and students",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – ilmulQuran Online Academy",
    description: "Get to know ilmulQuran Academy: Our goals, courses, and dedication to delivering quality Islamic education online.",
    images: ["/Images/Logo/updated-logo.webp"],
  },
  alternates: {
    canonical: "https://ilmulQuran.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  authors: [{ name: "ilmulQuran Team" }],
  themeColor: "#2A593F",
  appleWebApp: {
    title: "ilmulQuran Academy",
  },
};

const AboutUs = () => {
  const breadcrumbData = {
    id: 1,
    name: "About Us - ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
      {/* Structured Data with JSON-LD */}
      <Script
        id="about-us-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ilmulQuran Online Academy",
            url: "https://ilmulQuran.com",
            description: "ilmulQuran Online Academy offers trusted and structured Islamic education for children and adults globally. Explore our mission, courses, and commitment to quality.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Global"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "info@ilmulQuran.com"
            }
          })
        }}
      />

      {/* Content */}
      {/* <Banner breadcrumbData={breadcrumbData} /> */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
        {/* Main Content Column */}
        <div className="w-full lg:w-2/3 order-last lg:order-none">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-[#006666] mb-5 text-center font-bold text-3xl">
              Welcome to ilmulQuran Online Academy
            </h2>
            <p className="text-md text-gray-700 leading-relaxed pt-3 text-center">
              ilmulQuran Online Academy is dedicated to providing high-quality Islamic education through our comprehensive online courses. Our mission is to make Quranic and Islamic studies accessible to everyone, regardless of location. We offer a range of courses designed to cater to learners of all levels, from beginners to advanced scholars.
            </p>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Our Mission and Vision
              </h3>
              <p className="mt-4 text-md text-gray-700 leading-relaxed text-center">
                Our mission is to spread the knowledge of Islam and the teachings of the Quran to people worldwide. We strive to provide an interactive and engaging learning experience that fosters a deeper understanding of Islamic principles and practices. Our vision is to be the leading online platform for Islamic education, recognized for our commitment to excellence and authenticity.
              </p>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Why Choose ilmulQuran Online Academy?
              </h3>
              <ul className="mt-6 list-disc text-gray-700 text-left space-y-2 max-w-md mx-auto">
                <li><span className="font-semibold text-[#1a73e8]">Expert Tutors:</span> Our courses are taught by highly qualified and experienced instructors.</li>
                <li><span className="font-semibold text-[#1a73e8]">Flexible Learning:</span> Online classes that fit your schedule, allowing you to learn at your own pace.</li>
                <li><span className="font-semibold text-[#1a73e8]">Comprehensive Curriculum:</span> A wide range of courses covering various aspects of Islamic studies.</li>
                <li><span className="font-semibold text-[#1a73e8]">Interactive Learning:</span> Engaging lessons with multimedia resources, quizzes, and live sessions.</li>
                <li><span className="font-semibold text-[#1a73e8]">Community Support:</span> Join a supportive community of learners and educators.</li>
              </ul>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Our Courses
              </h3>
              <p className="mt-4 text-md text-gray-700 text-center">
                We offer a variety of courses to meet your learning needs:
              </p>
              <h4 className="text-lg font-semibold text-teal-800 text-center pt-3">
                Regular Courses
              </h4>
              <ul className="mt-4 list-disc text-gray-700 text-left space-y-2 max-w-md mx-auto">
                <li>Learn Noorani Qaida Online</li>
                <li>Quran Reading with Tajweed</li>
                <li>Memorize Quran Online</li>
                <li>Learn Tafsir Online</li>
                <li>Learn Arabic Online</li>
                <li>Learn Islamic Studies Online</li>
                <li>Taleem ul Islam</li>
                <li>Online Ijazah Course</li>
                <li>Learn Ten Qirat Online</li>
              </ul>

              <h4 className="text-lg font-semibold text-teal-800 text-center pt-3">
                Short Courses
              </h4>
              <ul className="mt-4 list-disc text-gray-700 text-left space-y-2 max-w-md mx-auto">
                <li>Quran Translation Course</li>
                <li>Memorization of Selected Surahs</li>
                <li>Learn Daily Supplication Online</li>
                <li>Learn Pillars of Islam</li>
                <li>Fiqh (Islamic Jurisprudence)</li>
                <li>Seerah (Life of Prophet Muhammad PBUH)</li>
                <li>Aqeedah (Islamic Beliefs)</li>
                <li>Islamic History</li>
                <li>Ramadan Special Courses</li>
                <li>The Companions of Prophet Muhammad (PBUH)</li>
                <li>Stories of the Prophets</li>
              </ul>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Our Approach
              </h3>
              <p className="mt-4 text-md text-gray-700 text-center leading-relaxed">
                At ilmulQuran, we believe in a holistic approach to Islamic education. Our courses are designed to provide a comprehensive understanding of Islamic teachings, blending traditional knowledge with modern educational methods. We emphasize the importance of understanding the context and application of Islamic principles in everyday life.
              </p>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Join Our Community
              </h3>
              <p className="mt-4 text-md text-gray-700 text-center leading-relaxed">
                We invite you to join our growing community of learners. Whether you are seeking to enhance your knowledge, improve your Quranic recitation, or gain a deeper understanding of Islamic history and jurisprudence, ilmulQuran Online Academy has a course for you.
              </p>
            </section>

            <section className="mt-10">
              <h3 className="text-xl font-semibold text-[#006666] text-center">
                Call to Action
              </h3>
              <p className="mt-4 text-md text-gray-700 text-center leading-relaxed">
                Ready to learn from the best? <Link href="/get-register" className="text-teal-600">Enroll now</Link> and start your journey with ilmulQuran Online Academy!
              </p>
            </section>
          </div>
        </div>

        {/* Form Column - Mobile First Position */}
        <div className="w-full lg:w-1/3 order-first lg:order-none lg:sticky top-4 h-fit">
          <div className="bg-white p-4 sm:p-6 rounded-xl">
            <StickyForm 
              courseName="General Inquiry" 
            />
          </div>
        </div>
      </div>

      <Steps stepsData={stepsData} />

      <h3 className="text-xl md:text-2xl text-center font-bold text-[#003366] pt-6">
        Student Testimonials
      </h3>
      <div className="pt-3 ">
        <TestimonialComponent testimonialsData={testimonialsData} />
      </div>
    </>
  );
};

export default AboutUs;