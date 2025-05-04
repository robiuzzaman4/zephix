import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

const fontSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zephix",
  description: "Zephix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
