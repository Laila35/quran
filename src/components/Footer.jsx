import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram, Youtube } from "lucide-react"
import ContactForm from "./ContactForm"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Social media links with proper icons
  const socialLinks = [
    { name: "Twitter", icon: <Twitter size={16} />, href: "https://twitter.com/imqonline/" },
    { name: "Facebook", icon: <Facebook size={16} />, href: "https://www.facebook.com/imqonline/" },
    { name: "LinkedIn", icon: <Linkedin size={16} />, href: "https://www.linkedin.com/company/imqonline/" },
    { name: "Instagram", icon: <Instagram size={16} />, href: "https://www.instagram.com/imqonline/" },
    { name: "YouTube", icon: <Youtube size={16} />, href: "https://www.youtube.com/@imqonline" },
  ]

  return (
    <footer className="relative pt-20 pb-8 bg-white">
      {/* Islamic pattern top border */}
      <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=1000')] bg-repeat-x opacity-20"></div>
      </div>

 

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and contact info */}
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <Image
                  src="/Images/Logo/updated-logo.webp"
                  width={180}
                  height={120}
                  alt="ilmulQuran Academy Logo"
                  className="h-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-emerald-800 group">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-emerald-700" />
                </div>
                <span className="text-sm font-medium">admin@ilmulQuran.com</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-emerald-800 group">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-emerald-700" />
                </div>
                <Link
                  href="https://wa.me/447862067920"
                  className="text-sm font-medium hover:text-emerald-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +44 7862-067920
                </Link>
              </div>             
            </div>

            {/* Social media icons */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-emerald-600 hover:text-white text-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us Links */}
          <div className="relative">
            <h3 className="text-lg font-bold text-emerald-800 mb-5 pb-2 relative">
              About Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
              <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-emerald-200"></span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Customer Service", href: "/customer-service" },
                { name: "Register Now", href: "/get-register" },
                { name: "Fee and Schedule Plan", href: "/quran-learning-fee" },
                { name: "Online Courses", href: "/online-courses" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Certificate of Appraisal", href: "/certificate-of-appraisal" },
                { name: "Downloads", href: "/downloads" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-200 mr-2 group-hover:bg-emerald-500 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Courses */}
          <div className="relative">
            <h3 className="text-lg font-bold text-emerald-800 mb-5 pb-2 relative">
              Regular Courses
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
              <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-emerald-200"></span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Learn Noorani Qaida Online", href: "/learn-noorani-qaida-online" },
                { name: "Quran Reading with Tajweed", href: "/quran-reading-with-tajweed" },
                { name: "Memorize Quran Online", href: "/memorize-quran-online" },
                { name: "Learn Tafsir Online", href: "/learn-tafsir-online" },
                { name: "Learn Arabic Online", href: "/learn-arabic-online" },
                { name: "Learn Islamic Studies Online", href: "/learn-islamic-studies-online" },
                { name: "Taleem ul Islam", href: "/taleem-ul-islam" },
                { name: "Quran Translation Course", href: "/quran-translation-course" },
                { name: "Online Ijazah Course", href: "/online-ijazah-course" },
                { name: "Quranic Arabic Course", href: "/quranic-arabic-course" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-200 mr-2 group-hover:bg-emerald-500 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Short Courses */}
          <div className="relative">
            <h3 className="text-lg font-bold text-emerald-800 mb-5 pb-2 relative">
              Short Courses
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
              <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-emerald-200"></span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Memorization of Selected Surahs", href: "/memorization-of-selected-surahs" },
                { name: "Learn Daily Supplication Online", href: "/learn-daily-supplication-online" },
                { name: "Pillars of Islam", href: "/pillars-of-islam" },
                { name: "Revert to Islam", href: "/revert-to-islam-course" },
                { name: "Seerah (Life of Muhammad)", href: "/seerah-life-of-prophet-muhammad" },
                { name: "Aqeedah (Islamic Beliefs)", href: "/aqeedah-islamic-beliefs" },
                { name: "Islamic History", href: "/islamic-history" },
                { name: "Ramadan Special Courses", href: "/ramadan-special-courses" },
                { name: "The Companions of Muhammad", href: "/companions-of-prophet-muhammad" },
                { name: "Stories of the Prophets", href: "/stories-of-the-prophets" },
                { name: "Islamic Classes for Kids", href: "/islamic-classes-for-kids" },
                { name: "Raising Little Mumins", href: "/raising-little-mumins" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-200 mr-2 group-hover:bg-emerald-500 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <h3 className="text-lg font-bold text-emerald-800 mb-5 pb-2 relative">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-emerald-500"></span>
              <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-emerald-200"></span>
            </h3>
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-16 pt-8 border-t border-emerald-100">
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
            </div>
            <p className="text-emerald-800 font-medium">
              &copy; {currentYear} ilmulQuran Online Academy - Your Future Campus LTD
            </p>
            <p className="text-xs text-gray-600 max-w-2xl mx-auto">
              ilmulQuran Online Academy, Operated by Your Future Campus LTD, London, UK. All materials are protected by
              copyright.
            </p>
            <p className="text-xs text-gray-600 font-medium">YOUR FUTURE CAMPUS (SMC-PRIVATE) LIMITED</p>
          </div>
        </div>
      </div>

      {/* Islamic-inspired decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=1000')] bg-repeat-x opacity-20"></div>
      </div>
    </footer>
  )
}
