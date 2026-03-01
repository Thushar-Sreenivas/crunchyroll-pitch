import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans_JP } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-jp",
  weight: ["400", "900"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Thushar – Concepts Lab Cover Letter",
  applicationName: "Senior Software Engineer, Concepts Lab – Thushar Sreenivas",
  description:
    "Cover letter for Crunchyroll’s Senior Software Engineer, Concepts Lab role.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    "max-image-preview": "none",
    "max-snippet": 0,
    "max-video-preview": 0,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      nocache: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
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
        className={`${inter.variable} ${bebasNeue.variable} ${notoSansJP.variable}`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
