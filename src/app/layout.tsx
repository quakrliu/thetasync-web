import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThetaSync — AI-Powered Theta Healing Companion",
  description:
    "Transform your beliefs, transform your life. ThetaSync guides you through AI-powered belief digging, 7th Plane meditation, and daily belief downloads.",
  keywords: [
    "theta healing",
    "meditation",
    "belief work",
    "spiritual growth",
    "AI coaching",
    "希塔療癒",
    "冥想",
    "信念轉化",
  ],
  openGraph: {
    title: "ThetaSync — AI-Powered Theta Healing Companion",
    description:
      "Transform your beliefs, transform your life. AI-powered belief digging, 7th Plane meditation, and daily downloads.",
    type: "website",
    url: "https://thetasync.quakr.dev",
    siteName: "ThetaSync",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThetaSync — AI-Powered Theta Healing Companion",
    description:
      "Transform your beliefs, transform your life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
