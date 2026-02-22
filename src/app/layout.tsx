import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import { MSWProvider } from "@/shared/providers/MSWProvider";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "장운서 | Frontend Developer",
  description:
    "4년차 프론트엔드 개발자 장운서의 포트폴리오입니다. Next.js, TypeScript, Vue.js 기반의 프로젝트 경험과 실무 이력을 확인하세요.",
  keywords: [
    "프론트엔드 개발자",
    "Frontend Developer",
    "장운서",
    "Unseo Jang",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "포트폴리오",
    "Portfolio",
  ],
  authors: [{ name: "장운서", url: "https://github.com/unseoJang" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://unseo-portfoilo.vercel.app",
    siteName: "장운서 포트폴리오",
    title: "장운서 | Frontend Developer",
    description:
      "4년차 프론트엔드 개발자 장운서의 포트폴리오. Next.js · TypeScript · Vue.js 기반 프로젝트 이력을 담았습니다.",
    images: [
      {
        url: "/now-portfolio.png",
        width: 1200,
        height: 630,
        alt: "장운서 포트폴리오 미리보기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "장운서 | Frontend Developer",
    description:
      "4년차 프론트엔드 개발자 장운서의 포트폴리오. Next.js · TypeScript · Vue.js 기반 프로젝트 이력을 담았습니다.",
    images: ["/now-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable}`}
      >
        <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
