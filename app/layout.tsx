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
  title: "Aaftab Mohammad — Embedded Software & Firmware Engineer",
  description:
    "Embedded Software & Firmware Engineer with 3+ years of experience in real-time embedded systems, automotive ECU firmware, and IoT solutions. Skilled in C/C++, FreeRTOS, ARM Cortex-M, communication protocols, and cloud-connected embedded systems.",
  generator: "Next.js",
  applicationName: "Aaftab Mohammad",
  keywords: [
    "embedded software engineer",
    "firmware engineer",
    "embedded systems",
    "real-time embedded systems",
    "C",
    "C++",
    "Embedded C",
    "FreeRTOS",
    "AUTOSAR",
    "ARM Cortex-M",
    "STM32",
    "automotive ECU",
    "IoT firmware",
    "CAN",
    "SPI",
    "I2C",
    "UART",
    "KPIT Technologies",
    "eInfochips",
    "MISRA-C",
    "AWS IoT",
    "embedded Linux",
    "nyu",
    "computer engineering",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Aaftab Mohammad — Embedded Software & Firmware Engineer",
    description:
      "Embedded Software & Firmware Engineer with 3+ years of experience in real-time embedded systems, automotive ECU firmware, and IoT solutions. Skilled in C/C++, FreeRTOS, ARM Cortex-M, and communication protocols.",
    url: "https://aaftabmohammad.com/",
    siteName: "aaftabmohammad.com",
    images: [
      {
        url: "https://aaftabmohammad.com/profile.webp",
        width: 1200,
        height: 630,
        alt: "Aaftab Mohammad — Embedded Software & Firmware Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaftab Mohammad — Embedded Software & Firmware Engineer",
    description:
      "Embedded Software & Firmware Engineer with 3+ years of experience in real-time embedded systems, automotive ECU firmware, and IoT solutions. Skilled in C/C++, FreeRTOS, ARM Cortex-M, and communication protocols.",
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
