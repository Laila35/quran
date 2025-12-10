"use client";
import { useEffect, useState } from "react";
import { CountryProvider } from "./context/CountryContext";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./common/auth-context";
import { ToastProvider } from "@/components/ToastProvider";
import Script from "next/script";

// Dynamic Imports with loading states (client-only)
const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-16 bg-white" />,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
  loading: () => null,
});
const NotificationComponent = dynamic(() => import("@/components/notify"), {
  ssr: false,
  loading: () => null,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100" />,
});
const TawkChat = dynamic(() => import("@/components/TawkChat"), {
  ssr: false,
  loading: () => null,
});

const EXCLUDED_PATHS = ["/online-classes", "/online-quran-classes-au"];

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isExcludedPath = EXCLUDED_PATHS.includes(pathname);
  const [showTawk, setShowTawk] = useState(false);

  useEffect(() => {
    // Load Tawk.to after delay
    const timer = setTimeout(() => {
      setShowTawk(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXVFQN5');
          `}
        </Script>
      </head>
      <body>
        <CountryProvider>
          <AuthProvider>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KXVFQN5"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>

            {/* Conditionally render Navbar & StickyNavbar */}
            {!isExcludedPath && (
              <>
                <Navbar />
                {/* <StickyNavbar /> */}
              </>
            )}

            {children}
            <ToastProvider />
            <WhatsAppButton />
            {showTawk && <TawkChat />}
            <NotificationComponent />

            {/* Footer */}
            <Footer />
          </AuthProvider>
        </CountryProvider>
      </body>
    </>
  );
}