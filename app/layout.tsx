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
  title: "No-Code SEO Platform - Automate Your SEO Workflows",
  description: "Build powerful SEO workflows with drag-and-drop automation. Access viral templates from top creators. Start ranking higher today. $49/mo - Free during beta.",
  keywords: ["no-code seo", "seo automation", "workflow automation", "seo templates", "keyword research", "content optimization", "link building"],
  authors: [{ name: "No-Code SEO Platform" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nocode-seo-platform.vercel.app",
    siteName: "No-Code SEO Platform",
    title: "No-Code SEO Platform - Automate Your SEO Workflows",
    description: "Build powerful SEO workflows with drag-and-drop automation. Access viral templates from top creators. Start ranking higher today.",
    images: [
      {
        url: "https://nocode-seo-platform.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "No-Code SEO Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No-Code SEO Platform - Automate Your SEO Workflows",
    description: "Build powerful SEO workflows with drag-and-drop automation. $49/mo - Free during beta.",
    images: ["https://nocode-seo-platform.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
