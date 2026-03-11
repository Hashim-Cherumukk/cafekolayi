import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kolayi | Advanced Cafe Culture",
  description: "A premium modern cafe blending minimalistic design, precision roasting, and exceptional taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-base">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-base`}>
        <div className="bg-noise" />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
