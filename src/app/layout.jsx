import "./globals.css";
import ClientLayout from "@/app/ClientLayout";

// ---- Global SEO Meta (Next.js 16) ----
export const metadataBase = new URL("https://ilmulquran.com");

export const metadata = {
  title: {
    default: "Ilmul Quran - Online Quran Learning",
    template: "%s | Ilmul Quran",
  },
  description: "Learn Quran online with qualified teachers. One-on-one classes for kids and adults.",
  keywords: "Quran learning, online Quran classes, Islamic studies, Arabic learning, Tajweed",
  authors: [{ name: "Ilmul Quran" }],
  creator: "Ilmul Quran",
  publisher: "Ilmul Quran",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ilmul Quran - Online Quran Learning",
    description: "Learn Quran online with qualified teachers. One-on-one classes for kids and adults.",
    siteName: "Ilmul Quran",
    images: [
      {
        url: "/Images/Logo/updated-logo.webp",
        width: 1200,
        height: 630,
        alt: "Ilmul Quran - Online Quran Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilmul Quran - Online Quran Learning",
    description: "Learn Quran online with qualified teachers. One-on-one classes for kids and adults.",
    images: ["/Images/Logo/updated-logo.webp"],
    creator: "@ilmulquran",
  },
  verification: {},
  category: "education",
};

// **Separate exports for viewport and themeColor**
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const themeColor = "#0d9488"; // teal color

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload course images */}
        <link rel="preload" as="image" href="/Images/Courses/Quran-reading-tajweed.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/Images/Courses/quran-translation-course.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/Images/Courses/memorize-quran.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/Images/Courses/learn-noorani-qaidah.webp" fetchPriority="high" />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}