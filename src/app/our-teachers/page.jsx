import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


const Teachers = () => {
  const breadcrumbData = {
    id: 1,
    name: "Meet Our Online Quran Teachers",
    link: '/'
  }
  return (
    <>

<head>
  <title>Meet Our Qualified Online Quran Teachers </title>
  <meta
    name="description"
    content="Explore our experienced male and female Quran teachers at ilmulQuran. Learn from certified tutors in personalized online classes."
  />
  <meta
    name="keywords"
    content="Online Quran Teachers, Learn Quran Online, Quran Tutors, Islamic Teachers, Female Quran Tutors"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/our-teachers" />

  {/* <!-- Open Graph --> */}
  <meta
    property="og:title"
    content="Meet Our Experienced Quran Teachers - ilmulQuran Online Academy"
  />
  <meta
    property="og:description"
    content="Our qualified male and female teachers provide professional, personalized Quran learning for all levels. Start your journey with ilmulQuran today."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulquran.com/our-teachers" />
 
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="ilmulQuran Online Academy Logo" />
  <meta property="og:image:type" content="image/webp" />

  {/* <!-- Twitter Card --> */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet Our Expert Quran Teachers" />
  <meta
    name="twitter:description"
    content="Certified online Quran teachers ready to guide you in learning the Quran and Islamic knowledge effectively."
  />

  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-quran-teachers"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "ilmulQuran",
        "url": "https://ilmulquran.com",
        "sameAs": [
          "https://www.facebook.com/ilmulquran",
          "https://twitter.com/ilmulquran",
          "https://www.instagram.com/ilmulquran"
        ],
        "description":
          "ilmulQuran offers experienced male and female Quran teachers providing personalized online Quran learning for all levels.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "support@ilmulquran.com",
          "url": "https://ilmulquran.com/contact-us"
        },
        "hasCourse": {
          "@type": "Course",
          "name": "Online Quran Learning",
          "description":
            "Personalized Quran classes with qualified male and female teachers covering Tajweed, Hifz, and Islamic studies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "ilmulQuran",
            "sameAs": "https://ilmulquran.com"
          },
          "url": "https://ilmulquran.com/our-teachers"
        }
      }),
    }}
  />
</head>

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

        <h1 className="text-[#003366] text-center font-bold text-lg md:text-2xl lg:text-3xl pt-6">
          Experienced and Qualified Quran Teachers
        </h1>
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
          <li><Link href="/male-quran-teacher" className="font-medium no-underline">Our Male Quran Teachers</Link></li>
          <li><Link href="/female-quran-teacher" className="font-medium no-underline">Our Female Quran Teachers</Link></li>
        </ul>

        <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Call to Action</h2>
        <p className="text-base font-medium pt-4">
          Ready to learn from the best? <Link href="/get-register" className="text-blue-600 no-underline">Enroll now</Link> and start your journey with our expert Quran teachers!
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
      </div>
    </>
  )
}

export default Teachers