import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora | Futuristic Web & App Development Agency",
  description: "Innovative digital solutions for the next generation of businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        <BackgroundGrid />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
