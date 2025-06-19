import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "tomanhouse",
  description: "A collective built around @ music @ vibes @ fashion",
  openGraph: {
    title: "tomanhouse",
    description: "A collective built around @ music @ vibes @ fashion",
    url: "https://www.tomanhouse.app",
    siteName: "tomanhouse",
    images: [
      {
        url: "/previsu-lien.png",
        width: 1200,
        height: 630,
        alt: "TomanHouse 123",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tomanhouse",
    description: "A collective built around @ music @ vibes @ fashion",
    images: ["/previsu-lien.png"],
  },
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
        {children}
      </body>
    </html>
  );
}
