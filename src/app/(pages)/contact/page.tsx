import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Christos Mentis for inquiries, media requests, or general questions about his work.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-xl text-cm-muted">I'd love to hear from you</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="rounded-lg border border-cm-divider bg-cm-surface p-6">
                  <div className="mb-4 flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-cm-primary" />
                    <h2 className="font-display text-xl font-semibold text-cm-headline">
                      Email Me Directly
                    </h2>
                  </div>
                  <p className="mb-4 text-sm text-cm-body">
                    For media inquiries, speaking engagements, or general
                    questions:
                  </p>
                  <a
                    href="mailto:hello@christosmentis.com"
                    className="inline-flex items-center text-lg font-medium text-cm-primary transition-colors hover:text-cm-primary/80"
                  >
                    hello@christosmentis.com
                  </a>
                </div>

                <div className="rounded-lg border border-cm-divider bg-cm-surface p-6">
                  <div className="mb-4 flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-cm-primary" />
                    <h2 className="font-display text-xl font-semibold text-cm-headline">
                      Use the Form
                    </h2>
                  </div>
                  <p className="text-sm text-cm-body">
                    Fill out the contact form and I'll get back to you as soon
                    as possible. You'll receive a confirmation email once your
                    message is sent.
                  </p>
                </div>

                <div className="rounded-lg border border-cm-divider bg-cm-surface p-6">
                  <h2 className="mb-4 font-display text-xl font-semibold text-cm-headline">
                    What to Expect
                  </h2>
                  <ul className="space-y-2 text-sm text-cm-body">
                    <li className="flex items-start">
                      <span className="mr-2 text-cm-primary">•</span>
                      <span>Response within 1-3 business days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cm-primary">•</span>
                      <span>Confirmation email upon message receipt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-cm-primary">•</span>
                      <span>Direct reply to your email address</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg border border-cm-divider bg-cm-surface p-8">
                <h2 className="mb-6 font-display text-2xl font-semibold text-cm-headline">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
