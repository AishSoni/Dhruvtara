import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adamLight = localFont({
  src: "../fonts/Adam-Light.ttf",
  variable: "--font-adam-light",
});

export const metadata: Metadata = {
  title: "Dhruvtara Farms",
  description: "The official website for Dhruvtara Farms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${adamLight.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
