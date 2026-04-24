import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TargetCursor from "@/components/TargetCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Decant - Premium Alcohol Packaging Design",
  description: "Decant is a curated platform showcasing the finest alcohol packaging designs from around the world. Discover innovative spirits, wines, and beverages packaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TargetCursor />
        {children}
      </body>
    </html>
  );
}
