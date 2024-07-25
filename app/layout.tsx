import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Code Stories",
  description:
    "Code Stories é um jogo de histórias de mistério geradas por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-600 container w-full h-lvh",
          fontSans.variable
        )}
      >
        <div className="flex flex-col gap-2 justify-center items-center content-center w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
