import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cm-divider bg-cm-surface">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-cm-headline">
              Christos Mentis
            </h3>
            <p className="mb-4 text-sm text-cm-muted">
              Greek author writing psychological crime fiction. Exploring the
              depths of the human psyche.
            </p>
            <a
              href="mailto:hello@christosmentis.com"
              className="inline-flex items-center space-x-2 text-sm text-cm-primary transition-colors hover:text-cm-primary/80"
            >
              <Mail className="h-4 w-4" />
              <span>hello@christosmentis.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-cm-headline">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/books"
                  className="text-cm-muted transition-colors hover:text-cm-primary"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cm-muted transition-colors hover:text-cm-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-cm-muted transition-colors hover:text-cm-primary"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed text-cm-muted/50">
                  Press (Coming Soon)
                </span>
              </li>
              <li>
                <span className="cursor-not-allowed text-cm-muted/50">
                  Release (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter CTA */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-cm-headline">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-cm-muted">
              Get exclusive updates, previews, and behind-the-scenes content.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center space-x-2 text-sm font-medium text-cm-primary transition-colors hover:text-cm-primary/80"
            >
              <Mail className="h-4 w-4" />
              <span>Subscribe to Newsletter</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-cm-divider pt-8 text-sm text-cm-muted md:flex-row">
          <p>© {currentYear} Christos Mentis. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="/legal/privacy"
              className="transition-colors hover:text-cm-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-cm-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
