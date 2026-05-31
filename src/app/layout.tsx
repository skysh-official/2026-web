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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://skysh-official.github.io/2026-web";
const title = "2026 SKYSH Hackathon";
const description =
  "서울대·고려대·연세대·성균관대·한양대 연합 개발 대회. 실전 개발과 멘토링을 함께 경험할 수 있습니다.";
const ogImage = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "SKYSH",
    "SKYSH Hackathon",
    "2026 SKYSH",
    "해커톤",
    "연합 개발 대회",
    "서울대학교",
    "고려대학교",
    "연세대학교",
    "성균관대학교",
    "한양대학교",
  ],
  authors: [{ name: "SKYSH" }],
  creator: "SKYSH",
  publisher: "SKYSH",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "SKYSH",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "2026 SKYSH Hackathon official logo",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
