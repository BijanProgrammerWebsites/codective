import type { Metadata, Viewport } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";

import SubscribeComponent from "@/components/subscribe/subscribe.component";

import AmbientFilter from "@/filters/ambient.filter";

import "@/styles/background.css";
import "@/styles/button.css";
import "@/styles/palette.css";
import "@/styles/typography.css";

import "./globals.css";

const metadataTitle = "Codective";
const metadataDescription =
  "مجموعه‌ای متنوع از نکات، ترفندها و آموزش‌هایی که از سال‌ها تجربه‌ی شخصی جمع‌آوری شده و با زبانی ساده و گویا در اختیار شما قرار می‌گیره.";

export const metadata: Metadata = {
  metadataBase: new URL("https://codective.ir/"),
  title: metadataTitle,
  description: metadataDescription,
  robots: "index, follow",
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: "https://codective.ir/",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    title: metadataTitle,
    description: metadataDescription,
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" prefix="og: http://ogp.me/ns#">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <SubscribeComponent />
        {children}
        <AmbientFilter />
      </body>
      <GoogleAnalytics gaId="G-95NEST07R1" />
    </html>
  );
}
