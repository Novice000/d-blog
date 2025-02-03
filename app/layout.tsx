import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";

const integral: NextFont = Oswald({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "d-blog",
  description: "d-blog homepage",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${integral.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
