import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for christosmentis.com",
};

export default function CookiePage() {
  const lastUpdated = "October 24, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline">
              Cookie Policy
            </h1>
            <p className="mb-8 text-sm text-cm-muted">
              Last updated: {lastUpdated}
            </p>

            <div className="prose-cm space-y-6">
              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  What Are Cookies?
                </h2>
                <p className="text-cm-body">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience and allow us to understand how our website is being used.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Types of Cookies We Use
                </h2>

                <div className="space-y-4">
                  <div className="rounded-lg border border-cm-divider bg-cm-surface p-4">
                    <h3 className="mb-2 font-semibold text-cm-headline">
                      1. Necessary Cookies
                    </h3>
                    <p className="text-sm text-cm-body">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
                    </p>
                    <p className="mt-2 text-xs text-cm-muted">
                      Examples: Session cookies, cookie consent preferences
                    </p>
                  </div>

                  <div className="rounded-lg border border-cm-divider bg-cm-surface p-4">
                    <h3 className="mb-2 font-semibold text-cm-headline">
                      2. Analytics Cookies
                    </h3>
                    <p className="text-sm text-cm-body">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics for this purpose.
                    </p>
                    <p className="mt-2 text-xs text-cm-muted">
                      Provider: Google Analytics
                      <br />
                      Purpose: Website usage statistics, visitor demographics (anonymous)
                      <br />
                      Duration: Up to 2 years
                      <br />
                      Data Processing: Google LLC (USA)
                    </p>
                  </div>

                  <div className="rounded-lg border border-cm-divider bg-cm-surface p-4 opacity-50">
                    <h3 className="mb-2 font-semibold text-cm-headline">
                      3. Marketing Cookies
                    </h3>
                    <p className="text-sm text-cm-body">
                      We do not currently use marketing or advertising cookies. This category is reserved for future use if we decide to implement targeted advertising.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Google Analytics
                </h2>
                <p className="text-cm-body">
                  We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information such as:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>Pages visited and time spent on site</li>
                  <li>Device type, browser, and screen resolution</li>
                  <li>Geographic location (country/city level only)</li>
                  <li>Referral source (how you found our site)</li>
                </ul>
                <p className="mt-3 text-cm-body">
                  <strong>IP Anonymization:</strong> We have enabled IP anonymization, which means your IP address is truncated before being stored by Google.
                </p>
                <p className="mt-3 text-cm-body">
                  <strong>Data Processing:</strong> Google processes this data in the United States. For more information, read{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cm-primary hover:underline"
                  >
                    Google's Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-cm-body">
                  You have full control over which cookies you accept:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Cookie Banner:</strong> When you first visit our site, you'll see a cookie consent banner where you can accept or reject non-essential cookies.
                  </li>
                  <li>
                    <strong>Cookie Settings Button:</strong> Click the cookie icon in the bottom-right corner of any page to change your preferences at any time.
                  </li>
                  <li>
                    <strong>Browser Settings:</strong> You can also control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  How to Delete Cookies
                </h2>
                <p className="text-cm-body">
                  You can delete cookies already stored on your device through your browser settings:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and security → Clear browsing data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Settings → Privacy & Security → Clear Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Third-Party Cookies
                </h2>
                <p className="text-cm-body">
                  We only use Google Analytics as a third-party service. We do not allow other third parties to set cookies through our website.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Changes to This Policy
                </h2>
                <p className="text-cm-body">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Contact Us
                </h2>
                <p className="text-cm-body">
                  If you have questions about our use of cookies, please contact us at{" "}
                  <a
                    href="mailto:hello@christosmentis.com"
                    className="text-cm-primary hover:underline"
                  >
                    hello@christosmentis.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
