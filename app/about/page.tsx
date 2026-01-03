import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-10">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-sm text-muted-foreground">
          GitHub:{" "}
          <Link
            className="underline underline-offset-4"
            href="https://github.com/kt5rc"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/
          </Link>
        </p>
        <Link className="text-sm underline underline-offset-4" href="/">
          Back to Hub
        </Link>
      </div>
    </main>
  );
}
