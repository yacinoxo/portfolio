import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yacinoxo",
  description: `Hi, I’m Yassine El Kamali – Web Developer and Digital Creator
                Welcome to my portfolio! With over 2 years of experience in web development, I specialize in designing and building responsive, user-friendly websites and web applications. I focus on creating visually stunning designs paired with seamless functionality.
                Explore my latest projects to see how I bring creativity and technical expertise together. Whether you’re looking for a professional to build a custom web application or enhance your online presence, I’m here to help. Don’t hesitate to say hello—I’m always happy to connect!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
