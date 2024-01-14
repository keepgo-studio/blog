import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lemon, Noto_Sans_KR, Inter } from "next/font/google";

const mainFont = Lemon({
  subsets: ["latin"],
  weight: ["400"],
});

const noto = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const fontClassName = [noto, inter].reduce(
  (prev, curr) => prev + " " + curr.variable,
  mainFont.className
);

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
      <body className={fontClassName + " " + "flex flex-col min-w-[100vw] min-h-[100vh]"}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
