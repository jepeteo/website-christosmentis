import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for christosmentis.com",
};

export default function PrivacyPage() {
  const lastUpdated = "October 12, 2025";

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
                  <li>Email address (when you subscribe to our newsletter)</li>
                  <li>First name (optional, for personalization)</li>
                  <li>Usage data and analytics (via Vercel Analytics)</li>
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
                  Data Sharing
                </h2>
                <p className="text-cm-body">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with service
                  providers who assist us in operating our website and
                  conducting our business (e.g., email service providers), but
                  only to the extent necessary to perform these services.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Your Rights
                </h2>
                <p className="text-cm-body">You have the right to:</p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Unsubscribe from our newsletter at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Cookies and Analytics
                </h2>
                <p className="text-cm-body">
                  We use Vercel Analytics to understand how visitors interact
                  with our website. This service collects anonymous usage data
                  to help us improve the site. No personally identifiable
                  information is collected through analytics.
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
