"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faPinterest,
  faThreads,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  PhoneIcon,
  HomeIcon,
  BookOpenIcon,
  ClipboardListIcon,
  UserGroupIcon,
  InformationCircleIcon,
  SupportIcon,
  ChevronDownIcon,
  DocumentTextIcon
} from "@heroicons/react/solid";
import MobileMenu from "./MobileMenu";
import { useCountry } from "@/app/context/CountryContext";
import Image from 'next/image';


export default function Navbar() {
  const { country } = useCountry();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const timeoutRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);


// Course data - Updated paths based on your directory structure
  const regularCourses = [
    { id: 1, courseName: "Learn Noorani Qaida Online", link: "/learn-noorani-qaida-online" },
    { id: 2, courseName: "Quran Reading With Tajweed", link: "/quran-reading-with-tajweed" },
    { id: 3, courseName: "Quran translation Course", link: "/quran-translation-course" },
    { id: 4, courseName: "Memorize Quran Online", link: "/memorize-quran-online" },
    { id: 5, courseName: "Learn Tafsir Online", link: "/learn-tafsir-online" },
    { id: 6, courseName: "Learn Islamic Studies Online", link: "/learn-islamic-studies-online" },
    { id: 7, courseName: "Learn Arabic Online", link: "/learn-arabic-online" },
    { id: 8, courseName: "Taleem Ul Islam", link: "/taleem-ul-islam" },
    { id: 9, courseName: "Online Ijazah Course", link: "/online-ijazah-course" },
    { id: 10, courseName: "Quranic Arabic Course", link: "/quantic-arabic-course" }, // Fixed path
  ];

  const shortCourses = [
    { id: 1, courseName: "Memorization of Selected Surahs", link: "/memorization-of-selected-surahs" },
    { id: 2, courseName: "Learn Daily Supplication Online", link: "/learn-daily-supplication-online" },
    { id: 3, courseName: "Pillars of Islam", link: "/pillars-of-islam" },
    { id: 4, courseName: "Revert to islam", link: "/revert-to-islam-course" },
    { id: 5, courseName: "Seerah (Life of Prophet Muhammad)", link: "/seerah-life-of-prophet-muhammad" },
    { id: 6, courseName: "Aqeedah (Islamic Beliefs)", link: "/aqeedah-islamic-beliefs" },
    { id: 7, courseName: "Islamic History", link: "/islamic-history" },
    { id: 8, courseName: "Ramadan Special Courses", link: "/ramadan-special-courses" },
    { id: 9, courseName: "The Companions of Prophet Muhammad (PBUH)", link: "/companions-of-prophet-muhammad" },
    { id: 10, courseName: "Stories of the Prophets", link: "/stories-of-the-prophets" },
    { id: 11, courseName: "Islamic Classes for Kids (Ages 3–6)", link: "/islamic-classes-for-kids" },
    { id: 12, courseName: "Raising Little Mumins", link: "/raising-little-mumins" }
  ];

  const helpSupportLinks = [
    { id: 1, name: "Quality Assurance", link: "/quality-assurance" },
    { id: 2, name: "Customer Service", link: "/customer-service" },
    { id: 3, name: "Terms of Service", link: "/terms-of-service" },
    { id: 4, name: "Refund Policy", link: "/refund-policy" },
    { id: 5, name: "Certificate of Appraisal", link: "/certificate-of-appraisal" },
    { id: 6, name: "Privacy Policy", link: "/privacy-policy" },
    { id: 7, name: "Downloads", link: "/downloads" }
  ];

  const socialLinks = [
    { href: "https://twitter.com/imqonline/", icon: faXTwitter, label: "Twitter" },
    { href: "https://www.facebook.com/imqonline/", icon: faFacebook, label: "Facebook" },
    { href: "https://www.pinterest.co.uk/imqonline/", icon: faPinterest, label: "Pinterest" },
    { href: "https://www.linkedin.com/company/imqonline/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/imqonline/", icon: faInstagram, label: "Instagram" },
    { href: "https://www.youtube.com/@imqonline", icon: faYoutube, label: "YouTube" },
    { href: "https://www.threads.net/@imqonline", icon: faThreads, label: "Threads" },
  ];

  const menuItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: HomeIcon,
    dropdown: null
  },
  {
    id: 'regular-courses',
    label: 'Regular Courses',
    href: '/regular-courses',
    icon: BookOpenIcon,
    dropdown: {
      items: regularCourses,
      className: 'w-56'
    }
  },
  {
    id: 'short-courses',
    label: 'Short Courses',
    href: '/short-courses',
    icon: ClipboardListIcon,
    dropdown: {
      items: shortCourses,
      className: 'w-56'
    }
  },
  {
    id: 'teachers',
    label: 'Teachers',
    href: '/quran-teachers',
    icon: UserGroupIcon,
    dropdown: {
      items: [
        { id: 'male-teachers', label: 'Male Quran Teacher', href: '/male-quran-teacher' },
        { id: 'female-teachers', label: 'Female Quran Teacher', href: '/female-quran-teacher' }
      ],
      className: 'w-48'
    }
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    icon: DocumentTextIcon,
    dropdown: null
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about-us',
    icon: InformationCircleIcon,
    dropdown: null
  },
  {
    id: 'register',
    label: 'Register Now',
    href: '/get-register',
    icon: ClipboardListIcon,
    dropdown: null
  },
  {
    id: 'help',
    label: 'Help & Support',
    href: '/help-support',
    icon: SupportIcon,
    dropdown: {
      items: helpSupportLinks,
      className: 'w-48'
    }
  }
];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) { // Only for desktop
        setIsNavSticky(window.scrollY > 100); // Adjust this value as needed
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = '';
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Phone number based on country
  const getPhoneNumber = () => {
    if (country === 'United States of America' || country === 'Canada') {
      return { number: '+19142791693', url: 'https://wa.me/19142791693' };
    } else if (country === 'Australia' || country === 'New Zealand') {
      return { number: '+61480050048', url: 'https://wa.me/61480050048' };
    }
    return { number: '+447862067920', url: 'https://wa.me/447862067920' };
  };

  const phoneInfo = getPhoneNumber();

  return (
   <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto border-b border-gray-200">
        <div className="px-4 py-3 md:px-6 lg:px-8">
          
          {/* Desktop Header */}
          <div
            className={`hidden lg:flex items-center justify-between transition-all duration-300 ${
              scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Images/Logo/updated-logo.webp"
                  alt="Ilmulquran"
                  width={120}
                  height={80}
                  className="w-24 h-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Contact / Register / Login */}
            <div className="flex items-center space-x-6">
              <Link 
                href={phoneInfo.url} 
                aria-label="Contact via WhatsApp"
                className="hover:bg-teal-100 transition-colors duration-200 text-teal-600 flex items-center gap-2 p-2 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <PhoneIcon className="h-4 w-4 text-teal-600" />
                <span className="text-teal-600">{phoneInfo.number}</span>
              </Link>

              <Link
                href="/get-register"
                aria-label="Get Register For class"
                className="text-teal-600 p-2 rounded-full flex items-center justify-center gap-2 hover:text-teal-800 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faUserPlus} className="text-sm w-5 h-5 text-teal-600" />
                Register Now
              </Link>

              <Link
                href="https://cp.ilmulQuran.com/"
                aria-label="Ilmulquran panel"
                className="text-teal-600 p-2 rounded-full flex items-center justify-center gap-2 hover:text-teal-800 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="w-5 text-teal-600 h-5" />
                Student Login
              </Link>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map(({ href, icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group"
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={icon}
                    className="text-teal-600 group-hover:text-black transition-colors duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden relative">
            {/* Logo (Left) */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/Logo/updated-logo.webp"
                alt="Ilmulquran"
                width={100}
                height={40}
                className="object-contain w-24 h-auto"
              />
            </Link>

            {/* Phone Number (Centered) */}
            <Link
              href={phoneInfo.url}
              target="_blank"
              className="absolute left-1/2 -translate-x-1/2 text-teal-600 hover:text-teal-800 flex items-center gap-1 text-sm"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>{phoneInfo.number}</span>
            </Link>

            {/* Hamburger Menu (Right) */}
            <button 
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="p-2 rounded-md text-teal-600 hover:text-teal-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Sticky when scrolled */}
      <nav className={`hidden lg:flex justify-center py-3 bg-teal-600 text-white font-sans shadow-md transition-all duration-300 ${isNavSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="flex items-center space-x-6 px-4">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
              onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
            >
              {/* Always render as Link for click navigation */}
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className="hover:text-teal-200 font-medium text-sm flex items-center space-x-2 transition duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDownIcon className="w-3 h-3 ml-1" />}
                </Link>
              </div>
              
              {/* Dropdown menu (shows on hover) */}
              {item.dropdown && activeDropdown === item.id && (
                <div 
                  className={`absolute z-20 bg-teal-400 text-white rounded-lg shadow-lg mt-2 ${item.dropdown.className}`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-1 text-sm">
                    {item.dropdown.items.map((dropdownItem) => (
                      <li key={dropdownItem.id || dropdownItem.name}>
                        <Link 
                          href={dropdownItem.href || dropdownItem.link}
                          className="block px-4 py-2 hover:bg-teal-500 transition duration-200"
                          onClick={closeMenu}
                        >
                          {dropdownItem.label || dropdownItem.name || dropdownItem.courseName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        regularCourses={regularCourses}
        shortCourses={shortCourses}
        helpSupportLinks={helpSupportLinks}
        phoneInfo={phoneInfo}
      />
    </header>
  );
}