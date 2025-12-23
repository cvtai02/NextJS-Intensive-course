import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Preloader from "./components/Preloader";

export const metadata: Metadata = {
  title: "Abstract - News Blog",
  description: "A modern news website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body id="top" suppressHydrationWarning>
        {children}
        
        <Preloader />

        <Script src="/js/jquery-2.1.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/modernizr.js" strategy="beforeInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/pace.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
