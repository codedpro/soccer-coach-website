import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Soccer Coaching | Professional Training & Development",
  description: "Transform your soccer skills with personalized coaching from experienced professionals. Book your session today and take your game to the next level.",
  keywords: "soccer coach, football training, personal coaching, soccer skills, professional training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
