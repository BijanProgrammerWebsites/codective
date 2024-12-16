import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

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
    <html
      lang="fa"
      dir="rtl"
      prefix="og: http://ogp.me/ns#"
      className={vazirmatn.className}
    >
      <body>{children}</body>
    </html>
  );
}
