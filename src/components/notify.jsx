
"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useCountry } from "@/app/context/CountryContext"
import {
  CheckCircle,
  MapPin,
  BookOpen,
  Calendar,
  X,
  Sparkles,
} from "lucide-react"

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]
const getTodayDate = () => new Date().toLocaleDateString()

const NotificationComponent = () => {
  const pathname = usePathname()
  const { country } = useCountry()

  const [currentNotification, setCurrentNotification] = useState({})
  const [showNotification, setShowNotification] = useState(false)
  const [fade, setFade] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const names = [
      "Ahmad Ali",
      "Fatima Yusuf",
      "Zainab Hassan",
      "Muhammad Iqbal",
      "Ayesha Khan",
      "Omar Farooq",
      "Ali Ahmad",
      "Hina Malik",
      "Bilal Khan",
      "Sara Ali",
      "Imran Qureshi",
      "Nadia Javed",
      "Saifullah Rahman",
      "Nora Siddiqui",
      "Yusuf Malik",
      "Layla Khan",
      "Owais Ahmed",
      "Zara Shah",
      "Hassan Raza",
      "Fatimah Syed",
      "Khalid Bashir",
      "Samira Noor",
      "Amina Tariq",
      "Zeeshan Ali",
      "Naseem Ahmed",
      "Asma Baig",
      "Sami Khan",
      "Rabia Zafar",
      "Bilqis Malik",
      "Junaid Anwar",
      "Faisal Khan",
      "Mariam Noor",
      "Rehan Siddiqui",
      "Tariq Ali",
      "Khadijah Nasir",
      "Shahid Malik",
      "Aqsa Rahman",
      "Sadia Hussain",
      "Nabil Raza",
      "Fariha Ahmad",
      "Anwar Malik",
      "Sana Khan",
      "Adnan Javed",
      "Nafisa Tariq",
      "Waqas Ali",
      "Farzana Iqbal",
      "Haris Siddiqui",
      "Meher Farooq",
      "Bilal Ali",
      "Saira Malik",
      "Tariq Hussain",
      "Hafsa Noor",
      "Usman Ahmed",
      "Dania Khan",
      "Zahid Raza",
      "Nazia Ali",
      "Imran Malik",
      "Saba Javed",
      "Fahad Anwar",
      "Shazia Khan",
      "Javeria Siddiqui",
      "Aliya Khan",
      "Salman Ahmed",
      "Ruqayya Iqbal",
      "Arif Rahman",
      "Zainab Ali",
      "Osman Farooq",
      "Hajra Malik",
      "Zeeshan Qureshi",
      "Naima Tariq",
      "Shazad Khan",
      "Ayesha Iqbal",
      "Mohsin Malik",
      "Nadia Rahman",
      "Yasmeen Noor",
      "Arham Raza",
      "Saadia Ali",
      "Hafiz Ahmed",
      "Zain Khan",
      "Sameer Javed",
      "Sumaiya Ali",
      "Sarmad Siddiqui",
      "Shaheer Khan",
      "Dilshad Malik",
      "Rania Noor",
      "Amani Tariq",
      "Nabilah Iqbal",
      "Owais Ali",
      "Zahra Khan",
      "Rizwan Siddiqui",
      "Nisar Ahmed",
      "Asad Malik",
      "Razia Bibi",
      "Kareem Ali",
      "Lubna Khan",
      "Aliya Farooq",
      "Sufyan Iqbal",
      "Nashmia Javed",
      "Bilal Farooq",
      "Raheel Khan",
      "Tania Hussain",
      "Firoz Ahmad",
      "Muneeb Ali",
      "Hania Malik",
      "Yasir Raza",
      "Noor Javed",
      "Khadeeja Rahman",
      "Mohtashim Khan",
      "Rameez Ali",
      "Shirin Noor",
      "Hira Hussain",
      "Talha Iqbal",
      "Inaya Ali",
      "Rana Malik",
      "Umair Siddiqui",
      "Areej Khan",
      "Hadiya Ahmed",
      "Samia Noor",
      "Shazmin Raza",
      "Hafeez Ali",
      "Bashir Malik",
      "Kinza Javed",
      "Farid Ahmed",
      "Tazeen Khan",
      "Umer Iqbal",
      "Meher Javed",
      "Shahida Malik",
      "Arwa Noor",
      "Zahid Khan",
      "Samreen Ali",
      "Mohammad Farooq",
      "Kainat Iqbal",
      "Awais Ali",
      "Saman Raza",
      "Rabia Malik",
      "Zarish Khan",
      "Irshad Siddiqui",
      "Nashit Ahmed",
      "Tasneem Ali",
      "Saira Noor",
      "Hassan Khan",
      "Rizwana Javed",
      "Talat Iqbal",
      "Zain Hussain",
      "Reema Malik",
      "Jibran Farooq",
      "Sana Iqbal",
      "Nazia Raza",
      "Kareem Siddiqui",
      "Alina Khan",
      "Zeeshan Ali",
      "Sahira Ahmed",
      "Sukaina Noor",
      "Furqan Malik",
      "Amna Tariq",
      "Uzair Khan",
      "Dilara Rahman",
      "Rehan Ali",
      "Fawad Siddiqui",
      "Jahanara Iqbal",
      "Sadiya Khan",
      "Omair Raza",
    ]

    const cities = [
      "London",
      "Manchester",
      "Birmingham",
      "Liverpool",
      "Glasgow",
      "Bristol",
      "Leeds",
      "Sheffield",
      "Newcastle",
      "Cardiff",
      "Edinburgh",
      "Nottingham",
      "Brighton",
      "Coventry",
      "Belfast",
      "Aberdeen",
      "Dundee",
      "Stoke-on-Trent",
      "Swansea",
      "Southampton",
      "Portsmouth",
      "Wolverhampton",
      "Bournemouth",
      "Luton",
      "Derby",
      "Milton Keynes",
      "Reading",
      "Bradford",
      "Belfast",
      "Sunderland",
      "Southend-on-Sea",
      "York",
      "Oxford",
      "Cambridge",
      "Bath",
      "Exeter",
      "Plymouth",
      "Peterborough",
      "Wolverhampton",
      "Doncaster",
      "Blackburn",
      "Bolton",
      "Middlesbrough",
      "Bury",
      "Wakefield",
      "Rochdale",
      "Telford",
      "Luton",
      "Maidstone",
      "Dartford",
      "Hastings",
      "Aberystwyth",
      "Northampton",
      "Salisbury",
      "Gloucester",
      "Wrexham",
      "St Albans",
      "Milton Keynes",
      "Woking",
      "Slough",
      "Brentwood",
      "Chelmsford",

      "New York",
      "California",
      "Texas",
      "Florida",
      "Illinois",
      "Pennsylvania",
      "Ohio",
      "Georgia",
      "North Carolina",
      "Michigan",
      "New Jersey",
      "Virginia",
      "Washington",
      "Arizona",
      "Massachusetts",
      "Tennessee",
      "Indiana",
      "Missouri",
      "Maryland",
      "Wisconsin",
      "Colorado",
      "Minnesota",
      "South Carolina",
      "Alabama",
      "Louisiana",
      "Kentucky",
      "Oregon",
      "Oklahoma",
      "Connecticut",
      "Iowa",
      "Mississippi",
      "Arkansas",
      "Utah",
      "Kansas",
      "Nevada",
      "New Mexico",
      "West Virginia",
      "Nebraska",
      "Idaho",
      "Hawaii",
      "Maine",
      "New Hampshire",
      "Rhode Island",
      "Delaware",
      "Montana",
      "South Dakota",
      "North Dakota",
      "Alaska",
      "Vermont",
      "Wyoming",
      "District of Columbia",
    ]

    const courses = [
      "40 Short Hadiths for Kids",
      "Aqeedah (Islamic Beliefs)",
      "Companions of Prophet Muhammad",
      "Fiqh (Islamic Jurisprudence)",
      "Learn Arabic Online",
      "Learn Daily Supplication Online",
      "Learn Islamic Studies Online",
      "Learn Noorani Qaida Online",
      "Learn Pillars of Islam",
      "Learn Quran Online",
      "Learn Tafsir Online",
      "Learn Ten Qirat Online",
      "Memorization of Selected Surahs",
      "Memorize Quran Online",
      "Online Ijazah Course",
      "Quran Reading with Tajweed",
      "Quran Translation Course",
      "Quranic Arabic Course",
      "Quranic Arabic for Beginners",
      "Raising Little Mumins",
      "Ramadan Special Courses",
      "Revert to Islam Course",
      "Seerah (Life of Prophet Muhammad)",
      "Stories of the Prophets",
      "Taleem ul Islam",
      "Islamic History",
      "Islamic Classes for Kids",
      "Online Hifz Classes",
      "Female Quran Teacher Course",
      "Male Quran Teacher Course",
      "One-on-One Quran Classes",
      "Quran Classes for Beginners",
      "Quran with Translation",
    ]

    const showRandomNotification = () => {
      const randomName = getRandomElement(names)
      const randomCity = getRandomElement(cities)
      const randomCourse = getRandomElement(courses)
      const randomDate = getTodayDate()

      setCurrentNotification({
        name: randomName,
        city: randomCity,
        course: randomCourse,
        date: randomDate,
      })
      setFade(true)
      setShowNotification(true)
      setProgress(100)

      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(progressInterval)
            return 0
          }
          return prev - 100 / 60 // 60 intervals over 6 seconds
        })
      }, 100)

      // Hide the notification after 6 seconds
      setTimeout(() => {
        setFade(false)
        setTimeout(() => {
          setShowNotification(false)
          clearInterval(progressInterval)
        }, 300)
      }, 6000)
    }

    showRandomNotification()
    const interval = setInterval(showRandomNotification, 60000)

    return () => clearInterval(interval)
  }, [])

  const handleNotificationClick = () => {
    setFade(false)
    setTimeout(() => {
      setShowNotification(false)
    }, 300)
  }

  const handleCloseClick = (e) => {
    e.stopPropagation()
    handleNotificationClick()
  }

  return (
    <div>
      {showNotification && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out z-50 w-[92vw] max-w-[600px] md:max-w-[700px] ${
            fade
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div
            className="relative bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-lg px-3 py-2 pr-10 flex items-center gap-3 hover:shadow-2xl transition-all cursor-pointer"
            onClick={handleNotificationClick}
          >
            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all rounded-t-lg"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Close Button */}
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="w-3.5 h-3.5 text-gray-600" />
            </button>

            {/* Icon */}
            <div className="relative flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
              <CheckCircle className="w-4 h-4 text-white" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse flex items-center justify-center">
                <Sparkles className="w-1.5 h-1.5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Name & Location */}
              <div className="flex items-center justify-between text-sm">
                <div className="text-emerald-700 font-semibold truncate">
                  {currentNotification.name}
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-xs">
                  <MapPin className="w-3 h-3 text-teal-500" />
                  <span>{currentNotification.city}</span>
                </div>
              </div>

              {/* Course */}
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-600 truncate">
                <BookOpen className="w-3 h-3 text-emerald-500" />
                <span className="truncate">
                  Enrolled in{" "}
                  <strong className="text-emerald-700">
                    {currentNotification.course}
                  </strong>
                </span>
              </div>

              {/* Date */}
              <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-500" />
                  <span>Today</span>
                </div>
                <span className="text-emerald-600 font-medium">Join now →</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationComponent
