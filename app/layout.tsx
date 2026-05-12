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
  title: "Aaftab Mohammad — Embedded Performance & Power Optimization Engineer",
  description:
    "Embedded Performance & Power Optimization Engineer with 3+ years of experience designing and optimizing real-time embedded systems. Specializes in firmware performance, DRAM/NVMe power optimization, and automotive ECU development using C/C++, RTOS, and AUTOSAR.",
  generator: "Next.js",
  applicationName: "Aaftab Mohammad",
  keywords: [
    "embedded systems engineer",
    "firmware engineer",
    "power optimization",
    "performance optimization",
    "embedded software",
    "C",
    "C++",
    "RTOS",
    "FreeRTOS",
    "AUTOSAR",
    "DDR5",
    "LPDDR",
    "NVMe",
    "NAND flash",
    "Micron Technology",
    "Infineon Technologies",
    "AURIX",
    "TriCore",
    "embedded firmware",
    "memory subsystem",
    "automotive ECU",
    "real-time systems",
    "nyu",
    "computer engineering",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Aaftab Mohammad — Embedded Performance & Power Optimization Engineer",
    description:
      "Embedded Performance & Power Optimization Engineer with 3+ years of experience designing and optimizing real-time embedded systems. Specializes in firmware performance, DRAM/NVMe power optimization, and automotive ECU development.",
    url: "https://aaftabmohammad.com/",
    siteName: "aaftabmohammad.com",
    images: [
      {
        url: "https://aaftabmohammad.com/profile.webp",
        width: 1200,
        height: 630,
        alt: "Aaftab Mohammad — Embedded Performance & Power Optimization Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaftab Mohammad — Embedded Performance & Power Optimization Engineer",
    description:
      "Embedded Performance & Power Optimization Engineer with 3+ years of experience designing and optimizing real-time embedded systems. Specializes in firmware performance, DRAM/NVMe power optimization, and automotive ECU development.",
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
