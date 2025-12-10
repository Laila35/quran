import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { FaCheckCircle, FaChalkboardTeacher, FaBook, FaUserCheck, FaComments } from "react-icons/fa";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";



const QualityAssurance = () => {
  const breadcrumbData = {
    id: 1,
    name: "Quality Assurance | ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/quality-assurance" />

  {/* Preload critical assets */}

  {/* Optimized Title (60 characters) */}
  <title>Quality Assurance | ilmulQuran Online Quran Academy</title>

  {/* Enhanced Meta Description (150 characters) */}
  <meta 
    name="description" 
    content="ilmulQuran ensures top-tier online Quran education through certified teachers, regular evaluations, and a strict quality assurance process." 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="ilmulQuran Quality Standards, Online Quran Teaching Quality, Quran Academy Quality Assurance, Verified Quran Teachers, eLearning QA Policies" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/quality-assurance" />
  <meta property="og:title" content="🌟 Quality Assurance | Trusted Quran Learning Standards" />
  <meta property="og:description" content="Learn about our high standards in Quran teaching. Teacher certifications, student feedback, and continuous training ensure quality learning for all." />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Quality assurance badge for ilmulQuran online academy" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="✅ Quality Assurance at ilmulQuran – Learn with Confidence" />
  <meta name="twitter:description" content="We prioritize your learning by maintaining high-quality Quran instruction. Read about our quality policies and commitment to excellence." />

  {/* Structured Data */}
  <Script
    id="quality-assurance-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Quality Assurance – ilmulQuran",
        description: "Discover how ilmulQuran ensures educational quality through certified teachers, feedback mechanisms, and ongoing evaluations.",
        url: "https://ilmulQuran.com/quality-assurance",
        publisher: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        }
      })
    }}
  />

  {/* Additional SEO Enhancements */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />

  {/* Mobile Optimization */}
  <meta name="apple-mobile-web-app-title" content="ilmulQuran QA" />
  <meta name="theme-color" content="#2A593F" />
</head>

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full md:w-4/5 lg:w-4/5 xl:w-full mx-auto px-3 mt-10 py-3">
        <div className="bg-gray-100 rounded-lg border border-teal-600 p-8">
          <h2 className="text-4xl font-extrabold text-center text-[#003366] mb-5">
            Committed to Excellence in Islamic Education
          </h2>
          <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
            At ilmulQuran Online Academy, we are committed to maintaining the highest standards of quality in our educational programs. Our quality assurance measures ensure that our courses, teaching methods, and support services meet the highest levels of excellence.
          </p>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center flex items-center justify-center gap-2">
              <FaChalkboardTeacher className="text-teal-500" /> Educated and Trained Teachers
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              We implement rigorous quality assurance measures, including:
            </p>
            <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
              <li><FaUserCheck className="inline-block mr-2 text-teal-500" /> <span className="font-semibold text-[#1a73e8]">Qualified Instructors:</span> All our teachers are highly qualified and experienced in Quranic studies.</li>
              <li><FaBook className="inline-block mr-2 text-teal-500" /> <span className="font-semibold text-[#1a73e8]">Comprehensive Curriculum:</span> Our courses are designed to provide a thorough understanding of Islamic teachings.</li>
              <li><FaCheckCircle className="inline-block mr-2 text-teal-500" /> <span className="font-semibold text-[#1a73e8]">Continuous Improvement:</span> Regular reviews and updates to our curriculum and teaching methods to ensure the best learning experience.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center flex items-center justify-center gap-2">
              <FaComments className="text-teal-500" /> Feedback and Improvement
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              We value feedback from our students and continuously strive to improve our programs based on your suggestions and needs.
            </p>
          </section>

          <section className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-[#003366]">
              Call to Action
            </h3>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Join ilmulQuran Online Academy and experience the highest quality in Quranic education. Explore our courses today!
            </p>
            <div className="mt-6">
              <a href="/courses"  aria-label="View Courses" className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition-all">
                View Courses
              </a>
              <a href="/contact-us"  aria-label="Contact us" className="ml-4 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all">
                Contact Us
              </a>
            </div>
          </section>
                   <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
                      <BonusIslamicLearning />
      
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

        </div>
      </div>
    </>
  );
};

export default QualityAssurance;
