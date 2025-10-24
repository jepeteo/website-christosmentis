"use client";

import { useState, useEffect } from "react";
import { X, Settings, Shield, BarChart } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load existing preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize analytics if consent was given
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
    }

    // Listen for the open cookie settings event
    const handleOpenSettings = () => {
      setShowSettings(true);
      setShowBanner(false);
    };

    window.addEventListener(
      "openCookieSettings",
      handleOpenSettings as EventListener
    );

    return () => {
      window.removeEventListener(
        "openCookieSettings",
        handleOpenSettings as EventListener
      );
    };
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== "undefined") {
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Initialize or disable analytics based on consent
    if (prefs.analytics) {
      initializeAnalytics();
      // Reload to apply analytics
      window.location.reload();
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
          <div className="mx-auto max-w-4xl rounded-lg border border-cm-divider bg-cm-surface/95 p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cm-primary" />
                  <h3 className="font-display text-lg font-semibold text-cm-headline">
                    Cookie Preferences
                  </h3>
                </div>
                <p className="mb-4 text-sm text-cm-body">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. You can choose which
                  cookies you want to accept.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={acceptAll} size="sm">
                    Accept All
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="secondary"
                    size="sm"
                  >
                    Necessary Only
                  </Button>
                  <Button
                    onClick={() => {
                      setShowBanner(false);
                      setShowSettings(true);
                    }}
                    variant="ghost"
                    size="sm"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Customize
                  </Button>
                </div>
              </div>
              <button
                onClick={acceptNecessary}
                className="text-cm-muted hover:text-cm-headline"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-lg border border-cm-divider bg-cm-surface p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-cm-headline">
                Cookie Settings
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-cm-muted hover:text-cm-headline"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between gap-4 rounded-lg border border-cm-divider bg-cm-bg p-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cm-primary" />
                    <h4 className="font-semibold text-cm-headline">
                      Necessary Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-cm-muted">
                    Essential for the website to function properly. These cannot
                    be disabled.
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-cm-primary">Always Active</span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4 rounded-lg border border-cm-divider bg-cm-bg p-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-cm-primary" />
                    <h4 className="font-semibold text-cm-headline">
                      Analytics Cookies
                    </h4>
                  </div>
                  <p className="text-sm text-cm-muted">
                    Help us understand how visitors interact with our website
                    (Google Analytics). No personal data is collected.
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        analytics: e.target.checked,
                      })
                    }
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-cm-divider after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-cm-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cm-primary"></div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 rounded-lg border border-cm-divider bg-cm-bg p-4 opacity-50">
                <div className="flex-1">
                  <h4 className="mb-2 font-semibold text-cm-headline">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-cm-muted">
                    Not currently used. Reserved for future advertising
                    features.
                  </p>
                </div>
                <label className="relative inline-flex cursor-not-allowed items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    disabled
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-cm-divider after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-['']"></div>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={saveCustomPreferences} className="flex-1">
                Save Preferences
              </Button>
              <Button onClick={acceptAll} variant="secondary">
                Accept All
              </Button>
            </div>

            <p className="mt-4 text-xs text-cm-muted">
              For more information, read our{" "}
              <a
                href="/legal/privacy"
                className="text-cm-primary hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/legal/cookies"
                className="text-cm-primary hover:underline"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}
