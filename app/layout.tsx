import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/src/marketing/shopic/marketing-base.css";
import "@/src/marketing/shopic/shopic.css";

// Shopic's brand face is Graphik (a neutral geometric grotesque, licensed).
// Inter is the closest free Google-font analog; exposed as --shopic-font.
const brandFont = Inter({
  subsets: ["latin"],
  variable: "--shopic-font",
  display: "swap",
});

// Shopic pairs Graphik with Moderat-Mono for its computer-vision HUD labels.
// JetBrains Mono is the closest free analog; drives the detection labels.
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--shopic-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-shopic.vercel.app"),
  title: "Bar Moshe, for Shopic",
  description:
    "Shopic Vision reads every item on the shelf. I build the AI and full-stack software behind vision like that. A one-page pitch, in Shopic's own brand.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1a0930",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${brandFont.variable} ${monoFont.variable}`}
    >
      <body>
    <Script
      src="https://bar-for-companies.vercel.app/track.js"
      data-bar-for-id="shopic"
      strategy="afterInteractive"
    />
{children}</body>
    </html>
  );
}
