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
  title: "2026 skysh",
  description:
    "서울대·고려대·연세대·성균관대·한양대 연합 개발 대회. 후원사와 함께 실전 개발과 멘토링 경험을 제공합니다.",
  openGraph: {
    title: "2026 skysh",
    description:
      "서울대·고려대·연세대·성균관대·한양대 연합 개발 대회. 후원사와 함께 실전 개발과 멘토링 경험을 제공합니다.",
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
