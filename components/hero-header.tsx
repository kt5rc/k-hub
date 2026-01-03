import Image from "next/image";
import Link from "next/link";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  rightHref?: string;
  rightLabel?: string;
};

export function HeroHeader({
  kicker = "LOCAL HUB",
  title,
  subtitle = "Links to my local-first small apps. Everything stays simple.",
  rightHref = "/about",
  rightLabel = "About",
}: Props) {
  return (
    <header className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-[0.35em] text-muted-foreground">
          {kicker}
        </p>
        <Link
          href={rightHref}
          className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
        >
          {rightLabel}
        </Link>
      </div>

      <div className="mb-1 h-px w-28 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-foreground/30" />

      <div className="flex items-center gap-2">
        <h1
          className="text-4xl font-semibold tracking-tight md:text-5xl"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "0.02em",
            textShadow:
              "0 2px 14px rgba(15, 23, 42, 0.2), 0 -3px 16px rgba(255, 255, 255, 0.95), 0 0 24px rgba(148, 163, 184, 0.35)",
          }}
        >
          {title}
        </h1>
        <Image
          src="/kadomatsu-svgrepo-com.svg"
          alt="Kadomatsu"
          width={64}
          height={64}
          className="size-16 opacity-80"
        />
      </div>
      <div className="-mt-5 h-px w-28 rounded-full bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent" />

      <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
    </header>
  );
}
