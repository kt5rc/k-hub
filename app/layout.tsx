import type { Metadata } from "next";
import { Geist, Geist_Mono, Teko } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "K-Hub",
  description:
    "A local-first hub for small apps. Simple tools, static sites, and shareable links.",
  applicationName: "K-Hub",
  metadataBase: new URL("https://YOUR-VERCEL-DOMAIN.vercel.app"),
  openGraph: {
    title: "K-Hub",
    description:
      "A local-first hub for small apps. Simple tools, static sites, and shareable links.",
    type: "website",
    url: "https://YOUR-VERCEL-DOMAIN.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "K-Hub",
    description:
      "A local-first hub for small apps. Simple tools, static sites, and shareable links.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${teko.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
