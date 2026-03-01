import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans_JP } from "next/font/google";
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
  title: "Thushar Sreenivas | Cover Letter for Crunchyroll",
  description:
    "An interactive cover letter for Crunchyroll's Concepts Lab, built as a Next.js prototype with anime-inspired design.",
  openGraph: {
    title: "Thushar Sreenivas | Cover Letter for Crunchyroll",
    description:
      "An interactive cover letter for Crunchyroll's Concepts Lab — Senior Software Engineer",
    type: "website",
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
      </body>
    </html>
  );
}
