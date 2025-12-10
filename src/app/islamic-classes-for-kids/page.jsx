import Banner from "@/components/Banner";
import React from "react";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

const KidsIslamicClasses = () => {
  const breadcrumbData = {
    id: 2,
    name: "Islamic Classes for Kids (Ages 3–6)",
    link: "/",
  };

  return (
    <>
      <head>
        <title>Online Islamic Classes for Kids (3-12) Quran Basics</title>
        <meta
          name="description"
          content="Engaging online Islamic classes for kids 3-12 years. Learn Quran basics, Arabic letters, Prophetic manners & daily duas with certified teachers. Free trial available!"
        />
        <meta
          name="keywords"
          content="Islamic Classes for Kids, Online Quran for Children, Preschool Islamic Education, Prophet Muhammad Stories, Muslim Kids Curriculum, Islamic Manners for Children"
        />
        <link rel="canonical" href="https://ilmulquran.com/islamic-classes-for-kids" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Kids Islamic Classes Online (3-12 Yrs) | Quran & Sunnah Basics"
        />
        <meta
          property="og:description"
          content="Interactive Islamic education for children: Arabic basics, prayer learning & Prophetic manners. Certified teachers & safe online environment."
        />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/Courses/islamic-classes-for-kids.png"
        />

        {/* Twitter Cards */}
        <meta
          name="twitter:title"
          content="Online Islamic School for Kids | Quran & Akhlaq Learning"
        />
        <meta
          name="twitter:description"
          content="Fun Islamic classes for ages 3-12. Learn Arabic, Quran basics & Prophet's stories. Start free trial today!"
        />

        {/* Schema Markup */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Islamic Foundation Course for Children",
              description:
                "Comprehensive Islamic education program for kids covering Quranic basics, Arabic literacy, and Prophetic values",
              provider: {
                "@type": "Organization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com",
              },
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                ageRange: "3-12",
              },
            }),
          }}
        />
      </head>

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full xl:w-full mx-auto px-3 mt-10 py-3 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Main Content */}
          <div className="w-full lg:w-3/4">
            {/* StickyForm for mobile */}
            <div className="block lg:hidden mb-10">
              <StickyForm courseName="Islamic Classes for Kids" />
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
                Islamic Classes for Kids (3–12 Years) – Quran Basics & Prophetic Values
              </h1>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Are you looking for a loving way to introduce Islam to your child?</strong>{" "}
                    Our{" "}
                    <Link
                      href="/"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      ilmulQuran Online academy
                    </Link>{" "}
                    offers a complete and engaging program for kids aged 3 to 12 years. It’s designed to help children learn about Islam in a simple, fun, and age-appropriate way from the comfort of your home.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed mt-4">
                    Children begin their journey with{" "}
                    <Link
                      href="/learn-noorani-qaida-online"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Quran basics
                    </Link>
                    , starting with Noorani Qaida to learn Arabic letters and proper Quran recitation. They also enjoy learning from{" "}
                    <Link
                      href="/stories-of-the-prophets"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Prophet’s stories
                    </Link>
                    , which teach valuable lessons and Islamic morals in an easy-to-understand way.
                  </p>

                  <p className="text-base text-gray-700 leading-relaxed mt-4">
                    Give your child a strong foundation in Islamic knowledge, love for the Quran, and good character—join us today and start this beautiful journey together.
                  </p>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/islamic-classes-for-kids.png"
                    alt="Islamic Classes for Kids"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              {/* Curriculum Highlights */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">📚 Curriculum Highlights</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-4">
                <li>
                  <Link href="/learn-arabic-online" className="text-blue-600">
                    Arabic Alphabets
                  </Link>{" "}
                  through interactive games
                </li>
                <li>
                  <Link href="/learn-daily-supplication-online" className="text-blue-600">
                    Daily Duas
                  </Link>{" "}
                  & Kalimahs with meanings
                </li>
                <li>
                  <Link href="/learn-pillars-of-islam" className="text-blue-600">
                    Salah basics
                  </Link>{" "}
                  & Wudu steps
                </li>
                <li>
                  Islamic manners from{" "}
                  <Link href="/40-short-hadiths-for-kids" className="text-blue-600">
                    Hadith for kids
                  </Link>
                </li>
              </ul>

              {/* Teaching Team */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">👩🏫 Teaching Team</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-4">
                <li>
                  Certified{" "}
                  <Link href="/female-quran-teacher" className="text-blue-600">
                    female teachers
                  </Link>{" "}
                  for young students
                </li>
                <li>
                  <Link href="/male-quran-teacher" className="text-blue-600">
                    Male instructors
                  </Link>{" "}
                  for older boys
                </li>
                <li>
                  Specialists in{" "}
                  <Link href="/raising-little-mumins" className="text-blue-600">
                    child Islamic education
                  </Link>
                </li>
              </ul>

              {/* Our Teachers */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">👩‍🏫 Our Teachers</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-4">
                <li>
                  Qualified{" "}
                  <Link href="/quran-teachers" className="text-blue-600 hover:underline">
                    male and female teachers
                  </Link>{" "}
                  with experience in early childhood Islamic education
                </li>
                <li>Patient, caring, and respectful of Islamic guidelines</li>
                <li>Fluent in English with Urdu language support if needed</li>
              </ul>

              {/* Course Details */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">🗓️ Course Details</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-4">
                <li><strong>Duration:</strong> Depends on Student</li>
                <li><strong>Schedule:</strong> 3 Days a Week or 5 Days a Week</li>
                <li><strong>Class Time:</strong> 20–30 Minutes</li>
                <li><strong>Format:</strong> One-on-One or Small Group</li>
                <li><strong>Platform:</strong> Zoom / Skype / Google Meet</li>
              </ul>

              {/* Availability */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">🌍 Available Worldwide</h2>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺 Australia | 🇳🇿 New Zealand | 🇦🇪 UAE | 🇸🇬 Singapore | 🇿🇦 South Africa
              </p>

              {/* Certificate */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">🎓 Certificate</h2>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Each child will receive a Certificate of Participation at the end of the course along with a small gift (digital Dua cards or poster).
              </p>

              {/* Related Programs */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">🔗 Related Programs</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-3">
                <li>
                  <Link href="/40-short-hadiths-for-kids" className="text-blue-600">
                    Hadith Memorization for Kids
                  </Link>
                </li>
                <li>
                  <Link href="/stories-of-the-prophets" className="text-blue-600">
                    Prophets Stories Course
                  </Link>
                </li>
                <li>
                  <Link href="/raising-little-mumins" className="text-blue-600">
                    Islamic Parenting Resources
                  </Link>
                </li>
              </ul>

              {/* Related Courses */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">🔗 Related Courses</h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-3 pt-3">
                <li>
                  <Link href="/learn-noorani-qaida-online" className="text-blue-600 hover:underline">
                    Learn Noorani Qaida Online
                  </Link>
                </li>
                <li>
                  <Link href="/taleem-ul-islam" className="text-blue-600 hover:underline">
                    Taleem ul Islam
                  </Link>
                </li>
                <li>
                  <Link href="/quran-classes-for-beginners" className="text-blue-600 hover:underline">
                    Quran Classes for Beginners
                  </Link>
                </li>
              </ul>

              {/* Enroll CTA */}
              <h2 className="text-2xl md:text-3xl pt-10 font-bold text-[#003366]">✅ Enroll Your Child Today</h2>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Help your child love Islam from an early age.{" "}
                <Link href="/get-register" className="text-blue-600 font-semibold no-underline">
                  📲 Book a Free Trial Class now
                </Link>{" "}
                and give your child a joyful Islamic learning experience — full of love, manners, and the Sunnah of Prophet Muhammad (SAW).
              </p>

              {/* Testimonials */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-10">What Parents Say</h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Form for Desktop */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-6">
              <StickyForm courseName="Islamic Classes for Kids" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KidsIslamicClasses;
