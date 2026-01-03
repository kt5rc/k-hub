import Link from "next/link";

import { HeroHeader } from "@/components/hero-header";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-10">
        <HeroHeader
          kicker="ABOUT"
          title="K-Hub"
          subtitle="A quiet place for small, local-first tools."
          rightHref="/"
          rightLabel="Back"
        />

        <section className="space-y-4">
          <div className="text-sm">
            <span className="text-muted-foreground">GitHub</span>
            <div>
              <Link
                className="underline underline-offset-4 hover:text-foreground"
                href="https://github.com/kt5rc"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/kt5rc
              </Link>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            UI / local-first / static-first
          </div>
        </section>

        <footer>
          <Link
            className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
            href="/"
          >
            Back to Hub
          </Link>
        </footer>
      </div>
    </main>
  );
}
