import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lemon, Noto_Sans_KR } from "next/font/google";

const lemon = Lemon({
  subsets: ["latin"],
  weight: ["400"]
});

const noto_kr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900",]
})

export const metadata: Metadata = {
  title: "Keepgo",
  description: "Personal blog, writer is Keepgo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lemon.className + " " + noto_kr.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 
