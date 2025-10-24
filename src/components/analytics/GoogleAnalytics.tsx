"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = "G-58X4HHF8BE";
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has given analytics consent
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      const preferences = JSON.parse(consent);
      setHasConsent(preferences.analytics);
    }
  }, []);

  // Don't load analytics if no consent
  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'granted'
          });
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
