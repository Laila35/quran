import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import StickyForm from "@/components/StickyForm";  

// Define metadata for SEO
export const metadata = {
  title: "Certified Quran Teachers Online | ilmulQuran Academy",
  description: "Learn from 50+ certified Quran teachers (male & female) with 10+ years experience. 98% satisfaction rate, flexible scheduling & free trial lesson.",
  keywords: "Certified Quran Teachers, Online Tajweed Experts, Female Quran Instructors, Quran Recitation Tutors, Islamic Studies Mentors, Arabic Language Teachers, ilmulQuran Faculty",
  robots: "index, follow, max-image-preview:large",
  canonical: "https://ilmulquran.com/quran-teachers",
  author: "ilmulQuran Faculty Team",
  
  // Open Graph Tags
  openGraph: {
    type: "website",
    url: "https://ilmulquran.com/quran-teachers",
    title: "Meet Our Certified Quran Teaching Faculty | ilmulQuran",
    description: "50+ Expert Teachers | 100,000+ Lessons Taught | Learn Tajweed, Recitation & Islamic Studies with Qualified Instructors",
    siteName: "ilmulQuran",
    images: [
      {
        url: "/Images/courses/quran-teachers-banner.png", // Update with actual image path
        width: 1200,
        height: 630,
        alt: "ilmulQuran teaching team conducting online Quran classes",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ilmulquran",
    title: "🌟 Learn from Award-Winning Quran Teachers Online",
    description: "Join 15,000+ students taught by our certified instructors. Free trial lesson & satisfaction guarantee!",
    images: ["/Images/courses/quran-teachers-banner.png"], // Update with actual image path
  },
};

const Teachers = () => {
  const breadcrumbData = {
    id: 1,
    name: "Meet Our Online Quran Teachers",
    link: '/'
  }

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        name: "Dr. Ahmed Ali",
        jobTitle: "Senior Quran Instructor",
        experienceYears: "15",
        teaches: "Tajweed, Quran Recitation, Islamic Studies"
      }
    },{
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        name: "Sara Mohammad",
        jobTitle: "Female Quran Teacher",
        experienceYears: "10",
        teaches: "Quran Memorization, Arabic Grammar"
      }
    }]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        id="teachers-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="Global" />
      <meta name="copyright" content="ilmulQuran" />

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
            <h2 className="text-[#003366] text-center font-bold text-lg md:text-2xl lg:text-3xl pt-6">
              Experienced and Qualified Quran Teachers
            </h2>
            
            <p className="text-base font-medium pt-3">
              At ilmulQuran Online Academy, we pride ourselves on providing top-notch Islamic education through our team of experienced and qualified Quran teachers. Our instructors are dedicated to helping students of all ages and backgrounds achieve their Quranic learning goals. With personalized instruction and a commitment to excellence, our teachers ensure a comprehensive and engaging learning experience.
            </p>
            
            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Why Choose Our Quran Teachers?</h2>
            <ul className="list-disc ml-8 space-y-1 pt-3">
              <li><span className="font-bold">Expertise:</span> Highly qualified and experienced in Quranic recitation and Islamic studies.</li>
              <li><span className="font-bold">Personalized Instruction:</span> One-on-one sessions tailored to each student's needs.</li>
              <li><span className="font-bold">Interactive Learning:</span> Engaging lessons with multimedia resources and live feedback.</li>
              <li><span className="font-bold">Flexible Scheduling:</span> Online classes that fit your schedule, allowing you to learn at your own pace.</li>
              <li><span className="font-bold">Supportive Environment:</span> A nurturing and supportive learning environment.</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Our Teaching Approach</h2>
            <ul className="list-disc ml-8 space-y-1 pt-3">
              <li><span className="font-bold">Quranic Recitation:</span> Mastery of Tajweed and correct pronunciation.</li>
              <li><span className="font-bold">Islamic Studies:</span> Understanding of Islamic principles and practices.</li>
              <li><span className="font-bold">Interactive Sessions:</span> Use of multimedia tools to enhance learning.</li>
              <li><span className="font-bold">Regular Assessments:</span> Continuous evaluation to track progress.</li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Meet Our Teachers</h2>
            <ul className="list-disc ml-8 space-y-1 pt-3">
              <li>
                <Link href="/male-quran-teacher" className="font-medium no-underline text-teal-600 hover:text-teal-800">
                  Our Male Quran Teachers
                </Link>
              </li>
              <li>
                <Link href="/female-quran-teacher" className="font-medium no-underline text-teal-600 hover:text-teal-800">
                  Our Female Quran Teachers
                </Link>
              </li>
            </ul>
            
            <BonusIslamicLearning />
            <TestimonialComponent testimonialsData={testimonialsData} />                  
            
            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Call to Action</h2>
            <p className="text-base font-medium pt-4">
              Ready to learn from the best? <Link href="/get-register" className="text-teal-600 hover:text-teal-800 font-semibold no-underline">Enroll now</Link> and start your journey with our expert Quran teachers!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teachers;