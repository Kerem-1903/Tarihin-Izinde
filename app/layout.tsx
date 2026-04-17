import type { Metadata, Viewport } from "next";
import { Geist, Noto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Turk Devletleri ve Goc Yollari | Tarih Portali",
  description:
    "Orta Asya'dan Anadolu'ya uzanan Turk devletlerinin ve goc yollarinin hikayesi. Asya Hun'dan Buyuk Selcuklu'ya, tarihin destansi yolculugu.",
  keywords: [
    "Turk tarihi",
    "Goc yollari",
    "Hun Devleti",
    "Gokturk",
    "Uygur",
    "Selcuklu",
    "Karahanli",
    "Gazneli",
  ],
  authors: [{ name: "Tarih Portali" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Turk Devletleri ve Goc Yollari",
    description: "Orta Asya'dan Anadolu'ya uzanan destansi yolculuk",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5a2b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="bg-background">
      <body
        className={`${geistSans.variable} ${notoSerif.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
