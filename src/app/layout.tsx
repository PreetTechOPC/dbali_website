// E:\Dbali website\src\app\layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dbali Real Estate | D. Bali Infrastructures & Developers Ltd.",
  description: "Kashipur's premier real estate developer since 2007. Specializing in high-quality residential villas, builder floors, and housing communities in Udham Singh Nagar, Uttarakhand.",
  keywords: "Dbali, Dbali Real Estate, D. Bali Infrastructures, Kashipur Real Estate, Palm Groove Villa, White House Kashipur, Rosedale Housing, Uttarakhand Developer",
  authors: [{ name: "D. Bali Infrastructures & Developers Ltd." }],
  openGraph: {
    title: "Dbali Real Estate | Premium Developers in Kashipur",
    description: "Delivering trust, quality, and timeless architecture since 2007.",
    url: "https://dbali.in",
    siteName: "Dbali Real Estate",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Dbali Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import PopupInquiry from "@/components/PopupInquiry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <PopupInquiry />
      </body>
    </html>
  );
}
