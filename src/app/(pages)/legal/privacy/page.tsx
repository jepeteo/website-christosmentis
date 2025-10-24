import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for christosmentis.com",
};

export default function PrivacyPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline">
              Privacy Policy
            </h1>
            <p className="mb-8 text-sm text-cm-muted">
              Last updated: {lastUpdated}
            </p>

            <div className="prose-cm space-y-6">
              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Introduction
                </h2>
                <p className="text-cm-body">
                  Christos Mentis ("we," "our," or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, and safeguard your personal information when you
                  visit our website or subscribe to our newsletter.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Information We Collect
                </h2>
                <p className="text-cm-body">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Newsletter Subscription:</strong> Email address and
                    optionally your first name
                  </li>
                  <li>
                    <strong>Contact Form:</strong> Name, email address, subject,
                    and message content
                  </li>
                  <li>
                    <strong>Analytics Data:</strong> Anonymous usage data via
                    Google Analytics (only with your consent)
                  </li>
                  <li>
                    <strong>Cookies:</strong> See our{" "}
                    <a
                      href="/legal/cookies"
                      className="text-cm-primary hover:underline"
                    >
                      Cookie Policy
                    </a>{" "}
                    for details
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Legal Basis for Processing (GDPR)
                </h2>
                <p className="text-cm-body">
                  We process your personal data based on the following legal
                  grounds:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Consent:</strong> Newsletter subscriptions and
                    analytics cookies (GDPR Art. 6(1)(a))
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> Responding to contact
                    form inquiries (GDPR Art. 6(1)(f))
                  </li>
                  <li>
                    <strong>Contract Performance:</strong> Delivering requested
                    content or services
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  How We Use Your Information
                </h2>
                <p className="text-cm-body">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    Send you newsletter updates about new books and content
                  </li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Data Sharing and International Transfers
                </h2>
                <p className="text-cm-body">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Email Service Provider (Resend):</strong> For
                    newsletter delivery
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> For website analytics
                    (with your consent, data processed in USA)
                  </li>
                  <li>
                    <strong>Vercel:</strong> Website hosting provider (data
                    processed in USA and EU)
                  </li>
                </ul>
                <p className="mt-3 text-cm-body">
                  <strong>International Data Transfers:</strong> Some of our
                  service providers are based in the United States. We ensure
                  appropriate safeguards are in place for international data
                  transfers, including Standard Contractual Clauses (SCCs) where
                  required.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Data Retention
                </h2>
                <p className="text-cm-body">
                  We retain your personal data for the following periods:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Newsletter Subscribers:</strong> Until you
                    unsubscribe
                  </li>
                  <li>
                    <strong>Contact Form Messages:</strong> Up to 3 years for
                    correspondence records
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Up to 26 months (Google
                    Analytics default)
                  </li>
                  <li>
                    <strong>Cookie Consent Preferences:</strong> Stored locally
                    until cleared or updated
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Your Rights Under GDPR
                </h2>
                <p className="text-cm-body">
                  If you are located in the European Economic Area (EEA), you
                  have the following rights:
                </p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>
                    <strong>Right to Access:</strong> Request a copy of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction
                    of inaccurate data
                  </li>
                  <li>
                    <strong>Right to Erasure ("Right to be Forgotten"):</strong>{" "}
                    Request deletion of your data
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Limit how we
                    use your data
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Receive your
                    data in a portable format
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing based
                    on legitimate interests
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent
                    for newsletter or cookies at any time
                  </li>
                  <li>
                    <strong>Right to Lodge a Complaint:</strong> File a
                    complaint with your local data protection authority
                  </li>
                </ul>
                <p className="mt-3 text-cm-body">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:hello@christosmentis.com"
                    className="text-cm-primary hover:underline"
                  >
                    hello@christosmentis.com
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Cookies and Tracking
                </h2>
                <p className="text-cm-body">
                  We use cookies and similar technologies to enhance your
                  browsing experience. You can control cookie preferences
                  through our cookie consent banner or the cookie settings
                  button (bottom-right corner of the page).
                </p>
                <p className="mt-3 text-cm-body">
                  For detailed information about the cookies we use, please read
                  our{" "}
                  <a
                    href="/legal/cookies"
                    className="text-cm-primary hover:underline"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Contact Us
                </h2>
                <p className="text-cm-body">
                  If you have any questions about this Privacy Policy, please
                  contact us through the contact information provided on our
                  website.
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
