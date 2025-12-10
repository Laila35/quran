import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
const LearnTafsirOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Quranic (Tafsir )Exegesis Mastery Program - Online Tafsir Certification",
    link: "/",
  };
  return (
    <>
      <head>
        <title>Online Tafsir Course | Quranic Exegesis Certification</title>
        <meta 
          name="description" 
          content="Master Quranic interpretation with certified scholars. Comprehensive Tafsir program covering linguistic analysis, historical context & Islamic jurisprudence. Free trial available." 
        />
        <meta 
          name="keywords" 
          content="Quranic exegesis course, Online Tafsir certification, Islamic scripture interpretation, Quranic linguistics, Asbab al-Nuzul studies, Tafsir ibn Kathir course, Quranic hermeneutics, Islamic scholarship program" 
        />
        <link rel="canonical" href="https://ilmulquran.com/learn-tafsir-online/" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Tafsir Certification Program Online" />
        <meta property="og:description" content="Advanced Quranic exegesis course with Ijazah certification. Study under qualified Islamic scholars with flexible scheduling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulquran.com/learn-tafsir-online/" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Learn-tafsir-online.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Tafsir Studies Online - Quran Interpretation Certification" />
        <meta name="twitter:description" content="Master classical and modern Tafsir methodologies with expert guidance. Enroll today!" />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Learn-tafsir-online.webp" />
      </head>
      {/* Structured Data */}
      <Script
        id="tafsir-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Comprehensive Quranic Exegesis Program",
            "description": "In-depth study of classical and contemporary Tafsir methodologies with Ijazah certification",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "image": "https://ilmulquran.com/Images/Courses/Learn-tafsir-online.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P12M",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "ageRange": "18-70"
              },
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulquran.com/get-register"
              }
            },
            "educationalCredentialAwarded": "Ijazah in Quranic Exegesis"
          })
        }}
      />
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
<div className="bd-gray-100 rounded-lg shadow-lg p-8 lg:w-2/3 order-2 lg:order-1">
            <h1 className="text-center text-[#003366] mb-10 font-bold text-3xl md:text-4xl">
              Master Quranic Exegesis (Tafsir): Classical & Modern Tafsir Studies
            </h1>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <p className="text-base font-medium">
                  Our comprehensive <Link href="/learn-islamic-studies" className="text-blue-600">Islamic Studies program</Link> includes in-depth Tafsir education covering:
                </p>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                  <li>Traditional <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">Fiqh-based</Link> interpretation</li>
                  <li>Linguistic analysis of Quranic Arabic</li>
                  <li>Historical context (Asbab al-Nuzul)</li>
                  <li>Comparative study of classical Tafsir works</li>
                </ul>
                <h2 id="program-highlights" className="text-[#003366] font-bold text-2xl md:text-3xl pt-6 scroll-mt-24">
                  Program Highlights
                </h2>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  <li>Weekly sessions with <Link href="/our-teachers" className="text-blue-600">Ijazah-certified scholars</Link></li>
                  <li>Access to digital Tafsir libraries</li>
                  <li>Case studies of contemporary issues</li>
                  <li>Certification recognized internationally</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 order-first lg:order-last">
                <Image
                  width={600}
                  height={400}
                  src="/Images/Courses/Learn-tafsir-online.webp"
                  alt="Scholar analyzing Quranic text during online Tafsir class"
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div id="core-curriculum" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-[#003366]">Core Curriculum</h3>
                <ul className="list-disc ml-6 space-y-2 mt-4">
                  <li>Tafsir bi'l-Ma'thur (Traditional)</li>
                  <li>Tafsir bi'l-Ra'y (Analytical)</li>
                  <li>Quranic hermeneutics principles</li>
                  <li>Critical analysis of major Tafsir works</li>
                </ul>
              </div>
              <div id="learning-outcomes" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-[#003366]">Key Learning Outcomes</h3>
                <ul className="list-disc ml-6 space-y-2 mt-4">
                  <li>Interpret Quranic text contextually</li>
                  <li>Analyze classical commentary texts</li>
                  <li>Apply Usul al-Tafsir methodology</li>
                  <li>Resolve apparent textual contradictions</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <h3 className="text-2xl font-bold text-[#003366]">Related Programs</h3>
              <ul className="list-disc ml-8 space-y-2 mt-4">
                <li>
                  <Link href="/quranic-arabic-course" className="text-blue-600">
                    Advanced Quranic Arabic
                  </Link>
                </li>
                <li>
                  <Link href="/islamic-history" className="text-blue-600">
                    Islamic Historical Studies
                  </Link>
                </li>
                <li>
                  <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">
                    Islamic Jurisprudence Program
                  </Link>
                </li>
              </ul>
            </div>
            {/* Methodology Section */}
            <div id="methodology" className="mt-8 scroll-mt-24">
              <h3 className="text-2xl font-bold text-[#003366]">Learning Methodology</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-xl font-semibold text-[#1a73e8]">Textual Analysis</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Verse-by-verse exegesis</li>
                    <li>Comparative commentary study</li>
                    <li>Contextual linguistic analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1a73e8]">Practical Application</h4>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Contemporary issue resolution</li>
                    <li>Sermon preparation techniques</li>
                    <li>Fatwa derivation exercises</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 id="online-classes" className="text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl pt-6 scroll-mt-24">
              Quran Tafsir Online Classes
            </h2>
            <p className="text-base font-medium pt-1">
              In this Learn Tafsir Online course, you will gain knowledge of basic Arabic grammar, Usul-al-Tafsir, and Ilmul Balagah. The following objectives are covered in the course:
            </p>
            <ul className="list-disc ml-8 space-y-2 pt-3">
              <li>
                <span className="font-bold">Meaning of Verses:</span> Understanding the meanings of Quranic verses.
              </li>
              <li>
                <span className="font-bold">Basic Arabic Grammar:</span> Fundamental Arabic grammar to aid in comprehension.
              </li>
              <li>
                <span className="font-bold">Shaan-e-Nuzool:</span> Context and circumstances of revelation.
              </li>
              <li>
                <span className="font-bold">Rabt b/t Surah:</span> Connections between Surahs.
              </li>
              <li>
                <span className="font-bold">Understanding of Ahkaam:</span> Knowledge of Islamic rulings.
              </li>
              <li>
                <span className="font-bold">Application of Ahkaam:</span> Practical application of Islamic rulings.
              </li>
              <li>
                <span className="font-bold">Ethics & Tajweed:</span> Proper pronunciation and recitation of the Quran.
              </li>
              <li>
                <span className="font-bold">Qirat and Relation:</span> Relationship between recitation and meanings.
              </li>
              <li>
                <span className="font-bold">Ilmul Balagah:</span> Rhetorical aspects of the Quran.
              </li>
              <li>
                <span className="font-bold">Usul Tafsir:</span> Principles of Quranic exegesis.
              </li>
              <li>
                <span className="font-bold">Hadith:</span> Use of Hadith in understanding the Quran.
              </li>
            </ul>
            <h3 id="course-syllabus" className="text-xl md:text-2xl font-bold text-[#003366] pt-6 scroll-mt-24">
              Course Syllabus
            </h3>
            <p className="text-base font-medium pt-1">
              The Tafsir course is structured to provide a comprehensive understanding of the Quran. It includes both Tafsir (outer meanings) and Tawil (inner meanings). The course ensures that students understand the following important facts about any Mufassir:
            </p>
            <ul className="list-disc ml-8 space-y-2 pt-3">
              <li>
                <span className="font-bold">Sound Aqeedah:</span> Firm belief in Islamic principles.
              </li>
              <li>
                <span className="font-bold">Knowledge of Arabic:</span> Proficiency in Arabic and its grammatical rules.
              </li>
              <li>
                <span className="font-bold">Related Sciences:</span> Knowledge of other sciences related to the Quran.
              </li>
              <li>
                <span className="font-bold">Precise Awareness:</span> Ability to interpret with accuracy.
              </li>
              <li>
                <span className="font-bold">Avoiding Mere Opinion:</span> Based on authentic sources and scholarly consensus.
              </li>
              <li>
                <span className="font-bold">Quranic Tafsir:</span> Starting with the Quran itself.
              </li>
              <li>
                <span className="font-bold">Prophet's Explanations:</span> Guidance from Prophet Muhammad (P.B.U.H).
              </li>
              <li>
                <span className="font-bold">Sahaba's Statements:</span> Referring to the companions' interpretations.
              </li>
              <li>
                <span className="font-bold">Tabi'un's Statements:</span> Considering the views of the successors.
              </li>
              <li>
                <span className="font-bold">Scholarly Opinions:</span> Consulting other renowned scholars.
              </li>
            </ul>
            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
              Call to Action
            </h2>
            <p className="text-base font-medium pt-4">
              Ready to deepen your understanding of the Quran? <Link href="/get-register" className="text-blue-600 no-underline">Enroll in our Learn Tafsir Online course today!</Link>
            </p>
            <div id="testimonials" className="mt-8 scroll-mt-24">
              <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>
          </div>
          </div>
    </>
  );
};

export default LearnTafsirOnline;