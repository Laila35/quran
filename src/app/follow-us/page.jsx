

// pages/follow-us.js
import Head from 'next/head';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from 'react-icons/fa';
import StickyForm from "@/components/StickyForm"; // ✅ Import added

export default function FollowUsPage() {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com/imqonline' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/imqonline' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@imqonline' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://tiktok.com/@imqonline' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/company/imqonline' },
  ];

  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ilmulQuran.com",
    "url": "https://ilmulquran.com",
    "sameAs": [
      "https://facebook.com/imqonline",
      "https://instagram.com/imqonline",
      "https://youtube.com/@imqonline",
      "https://tiktok.com/@imqonline",
      "https://linkedin.com/company/imqonline"
    ]
  };
  return (
    <>

    <head>
  <title>Follow ilmulQuran.com – Stay Connected on Facebook, YouTube & More</title>
  <meta name="description" content="Follow ilmulQuran.com on Facebook, YouTube, Instagram, TikTok & more. Stay updated with online Quran classes, Islamic parenting tips & course promotions." />
  <link rel="canonical" href="https://ilmulquran.com/follow-us" />
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
</head>


      <main className="bg-white min-h-screen px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="w-full lg:w-3/4">

            {/* StickyForm for mobile - top placement */}
            <div className="block lg:hidden mb-10">
              <StickyForm courseName="Social Media Engagement" />
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-teal-700 mb-4">
                Follow ilmulQuran.com on Social Media
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Stay connected with us and be part of a global community of learners.
              </p>
              <p className="text-base text-gray-600 mb-4">
                ilmulQuran.com is now on all major social platforms! We regularly share:
              </p>
              <ul className="list-disc list-inside text-left text-gray-700 mb-8">
                <li>📖 Quranic reminders & tips</li>
                <li>🎓 Student success stories</li>
                <li>🤲 Daily duas & Hadith posts</li>
                <li>📹 Short reels & course updates</li>
                <li>🧕 Parenting advice & Islamic values</li>
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                🌐 Where to Find Us Online
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link, i) => (
                  <Link href={link.url} key={i} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-16 flex items-center justify-center text-white bg-teal-600 rounded-full text-2xl shadow-md group-hover:bg-teal-800 transition duration-300">
                        {link.icon}
                      </div>
                      <span className="mt-2 text-sm text-gray-700">{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📲 What You’ll See on Our Socials
              </h2>
              <ul className="list-disc list-inside text-left text-gray-700 mb-10">
                <li>🎥 Weekly videos: Duas, Tajweed tips, and parenting reminders</li>
                <li>💬 Parent reviews and feedback</li>
                <li>📅 Upcoming course promotions</li>
                <li>🧒 Engaging content for kids & young learners</li>
                <li>📚 Short Islamic lessons in reels</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Want to Join Us?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/get-register" className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition">
                  👉 Enroll in a Free Trial Class
                </Link>
                <Link href="/courses" className="bg-gray-200 text-teal-700 px-6 py-3 rounded-md hover:bg-gray-300 transition">
                  👉 Explore Our Courses
                </Link>
              </div>
            </div>

            <footer className="text-center mt-12">
              <p className="text-sm text-gray-500 mt-4">
                📢 Follow us for Quran reminders & course updates:
                {' '}
                <a href="https://facebook.com/imqonline" className="text-teal-600 hover:underline">Facebook</a> |
                <a href="https://instagram.com/imqonline" className="text-teal-600 hover:underline"> Instagram</a> |
                <a href="https://youtube.com/@imqonline" className="text-teal-600 hover:underline"> YouTube</a> |
                <a href="https://tiktok.com/@imqonline" className="text-teal-600 hover:underline"> TikTok</a> |
                <a href="https://linkedin.com/company/imqonline" className="text-teal-600 hover:underline"> LinkedIn</a>
              </p>
            </footer>
          </div>

          {/* RIGHT COLUMN - Sticky Form for desktop */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-6">
              <StickyForm courseName="Social Media Engagement" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
