import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Mail, Bell, BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to receive exclusive updates, sneak previews, and behind-the-scenes insights from Christos Mentis.",
};

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <Mail className="mx-auto mb-6 h-16 w-16 text-cm-primary" />
              <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline md:text-5xl">
                Join the Inner Circle
              </h1>
              <p className="text-lg text-cm-muted">
                Get exclusive access to new releases, behind-the-scenes content,
                and insights into the creative process.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-12 space-y-6 rounded-lg border border-cm-divider bg-cm-surface p-8">
              <h2 className="mb-6 font-display text-2xl font-semibold text-cm-headline">
                What You'll Receive
              </h2>

              <div className="flex gap-4">
                <BookOpen className="h-6 w-6 flex-shrink-0 text-cm-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-cm-headline">
                    Early Access
                  </h3>
                  <p className="text-sm text-cm-muted">
                    Be the first to read excerpts from upcoming books before
                    they're published.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Bell className="h-6 w-6 flex-shrink-0 text-cm-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-cm-headline">
                    Release Updates
                  </h3>
                  <p className="text-sm text-cm-muted">
                    Stay informed about new book releases, events, and special
                    announcements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="h-6 w-6 flex-shrink-0 text-cm-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-cm-headline">
                    Behind the Scenes
                  </h3>
                  <p className="text-sm text-cm-muted">
                    Discover the inspiration, research, and creative process
                    behind each story.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <NewsletterForm />

            {/* Privacy Note */}
            <div className="mt-8 rounded-lg border border-cm-divider/50 bg-cm-bg p-6">
              <h3 className="mb-2 font-semibold text-cm-headline">
                Your Privacy Matters
              </h3>
              <p className="text-sm text-cm-muted">
                We respect your privacy and will never share your information
                with third parties. You can unsubscribe at any time with a
                single click. No spam, just meaningful updates about new books
                and exclusive content.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
