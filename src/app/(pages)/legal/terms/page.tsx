import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for christosmentis.com",
};

export default function TermsPage() {
  const lastUpdated = "October 24, 2025";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline">
              Terms of Service
            </h1>
            <p className="mb-8 text-sm text-cm-muted">
              Last updated: {lastUpdated}
            </p>

            <div className="prose-cm space-y-6">
              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Acceptance of Terms
                </h2>
                <p className="text-cm-body">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement. If you
                  do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Use License
                </h2>
                <p className="text-cm-body">
                  Permission is granted to temporarily view the content on this
                  website for personal, non-commercial use only. This is the
                  grant of a license, not a transfer of title.
                </p>
                <p className="text-cm-body">Under this license, you may not:</p>
                <ul className="list-disc pl-6 text-cm-body">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software on
                    this website
                  </li>
                  <li>
                    Remove any copyright or proprietary notations from the
                    materials
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Intellectual Property
                </h2>
                <p className="text-cm-body">
                  All content on this website, including but not limited to
                  text, images, graphics, logos, and book excerpts, is the
                  property of Christos Mentis and protected by copyright laws.
                  Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Disclaimer
                </h2>
                <p className="text-cm-body">
                  The materials on this website are provided on an 'as is'
                  basis. Christos Mentis makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or
                  conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other
                  violation of rights.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Links
                </h2>
                <p className="text-cm-body">
                  This website may contain links to third-party websites. These
                  links are provided for your convenience only. We have no
                  control over the content of these sites and accept no
                  responsibility for them.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Modifications
                </h2>
                <p className="text-cm-body">
                  We may revise these terms of service at any time without
                  notice. By using this website, you are agreeing to be bound by
                  the current version of these terms.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Contact
                </h2>
                <p className="text-cm-body">
                  If you have any questions about these Terms of Service, please
                  contact us at{" "}
                  <a
                    href="mailto:hello@christosmentis.com"
                    className="text-cm-primary hover:underline"
                  >
                    hello@christosmentis.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Newsletter Terms
                </h2>
                <p className="text-cm-body">
                  By subscribing to our newsletter, you agree to receive
                  periodic emails about new books, updates, and related content.
                  You can unsubscribe at any time by clicking the unsubscribe
                  link in any email or by contacting us directly. We will not
                  share your email address with third parties for marketing
                  purposes.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Cookie Usage
                </h2>
                <p className="text-cm-body">
                  By using this website, you acknowledge that we use cookies as
                  described in our{" "}
                  <a
                    href="/legal/cookies"
                    className="text-cm-primary hover:underline"
                  >
                    Cookie Policy
                  </a>
                  . You can manage your cookie preferences at any time using the
                  cookie settings button on our website.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  Governing Law
                </h2>
                <p className="text-cm-body">
                  These terms shall be governed by and construed in accordance
                  with the laws of Greece, without regard to its conflict of law
                  provisions. Any disputes arising under these terms shall be
                  subject to the exclusive jurisdiction of the courts of Greece.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-2xl font-semibold text-cm-headline">
                  User-Generated Content
                </h2>
                <p className="text-cm-body">
                  If you submit any content through our contact form or other
                  communication channels, you grant us the right to use,
                  reproduce, and display that content for the purpose of
                  responding to your inquiry and improving our services. We will
                  not publicly display your personal messages without your
                  explicit consent.
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
