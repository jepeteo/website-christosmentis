import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Christos Mentis, Greek author exploring the depths of the human psyche through psychological crime fiction.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline md:text-5xl">
                About the Author
              </h1>
              <p className="text-xl text-cm-muted">
                Exploring the depths of the human psyche
              </p>
            </div>

            {/* Portrait - Placeholder */}
            <div className="mb-12">
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-lg bg-cm-surface">
                {/* Replace with actual portrait when available */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-cm-muted">Portrait Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="prose-cm space-y-6">
              <p className="text-lg text-cm-body leading-relaxed">
                Christos Mentis is a Greek author whose writing delves into the
                depths of the human psyche, exploring the fragile balance
                between darkness and redemption. With years of experience in the
                private sector, Christos brings a keen understanding of people,
                motives, and emotion into every story he writes—crafting worlds
                that feel both intimate and unsettlingly real.
              </p>

              <p className="text-lg text-cm-body leading-relaxed">
                Born into a family of storytellers, Christos grew up surrounded
                by creativity and quiet passion for the written word. His
                father, an aspiring sci-fi author, passed away before completing
                his final manuscripts—his dream of literary recognition left
                unfinished but deeply inspiring to his son. His mother, a poet
                who still writes today, nurtured Christos's sensitivity to
                rhythm, language, and the power of human emotion. Their
                influence echoes through his work, shaping his unique voice as a
                modern psychological writer.
              </p>

              <p className="text-lg text-cm-body leading-relaxed">
                His latest novel, <em>Fragments of a Killer Mind</em>, marks the
                beginning of a bold new series that dissects the fractured mind
                of a killer and the relentless pursuit of those who dare to
                understand him. Combining literary depth with psychological
                suspense, Christos draws readers into a haunting world where
                every thought and shadow has meaning.
              </p>

              <p className="text-lg text-cm-body leading-relaxed">
                Away from his writing desk, Christos lives a fulfilling life
                with his wife—the woman he calls his life—their beloved
                daughter, and their loyal dog, Marvis. Whether walking the
                countryside, reflecting on human behavior, or sketching the next
                story that will test the limits of morality, Christos continues
                to explore one question above all:{" "}
                <strong>what truly defines the human soul?</strong>
              </p>
            </div>

            {/* Writing Philosophy */}
            <div className="mt-16 rounded-lg border border-cm-divider bg-cm-surface p-8">
              <h2 className="mb-4 font-display text-2xl font-semibold text-cm-headline">
                Writing Philosophy
              </h2>
              <blockquote className="border-l-4 border-cm-primary pl-6 italic text-cm-body">
                "I write to understand what I don't understand about
                people—including myself. Every character is a question, every
                story an exploration. The human mind is the most complex
                landscape I know, and I'm drawn to its darkest corners not out
                of fascination with evil, but out of curiosity about what makes
                us human."
              </blockquote>
            </div>
          </div>
        </div>

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
