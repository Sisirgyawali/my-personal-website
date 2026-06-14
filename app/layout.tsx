import type { Metadata } from "next";
import { Space_Mono, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${lora.variable} font-body antialiased`}>
        <Nav />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
