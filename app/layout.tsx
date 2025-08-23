import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aaftab Mohammad — Software Engineer",
  description:
    "Computer Engineering MS Student at NYU specializing in backend services, ML serving, and data pipelines. Building scalable systems with Python, Java, FastAPI, and PyTorch.",
  generator: "Next.js",
  applicationName: "Aaftab Mohammad",
  keywords: [
    "computer engineering",
    "machine learning",
    "backend developer",
    "data engineer",
    "ML engineer",
    "python",
    "java",
    "fastapi",
    "pytorch",
    "spark",
    "kubernetes",
    "aws",
    "gcp",
    "nyu",
    "graduate student",
    "portfolio",
    "software engineer",
    "data pipelines",
    "ML serving",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Aaftab Mohammad — Computer Engineering Student",
    description:
      "Computer Engineering MS Student at NYU specializing in backend services, ML serving, and data pipelines. Building scalable systems with Python, Java, FastAPI, and PyTorch.",
    url: "https://aaftabmohammad.com/",
    siteName: "aaftabmohammad.com",
    images: [
      {
        url: "https://aaftabmohammad.com/profile.webp",
        width: 1200,
        height: 630,
        alt: "Aaftab Mohammad — Computer Engineering Student",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaftab Mohammad — Computer Engineering Student",
    description:
      "Computer Engineering MS Student at NYU specializing in backend services, ML serving, and data pipelines. Building scalable systems with Python, Java, FastAPI, and PyTorch.",
    creator: "aaftabmohammad",
    creatorId: "1243720976552144897",
    images: [
      "https://aaftabmohammad.com/profile.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
