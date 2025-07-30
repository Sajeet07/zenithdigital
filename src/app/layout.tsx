import type React from "react"
import Script from "next/script"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zenith Digital Solution Pvt Ltd - Digital Transformation Experts",
  description:
    "Leading digital transformation company specializing in AI, cloud solutions, mobile development, and enterprise software. Transform your business with cutting-edge technology.",
  keywords:
    "digital transformation, AI development, cloud solutions, mobile apps, web development, cybersecurity, data analytics, enterprise software",
  authors: [{ name: "Zenith Digital Solution Pvt Ltd" }],
  creator: "Zenith Digital Solution Pvt Ltd",
  publisher: "Zenith Digital Solution Pvt Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenithdigital.com",
    siteName: "Zenith Digital Solution",
    title: "Zenith Digital Solution - Digital Transformation Experts",
    description: "Transform your business with cutting-edge technology solutions from industry experts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zenith Digital Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Digital Solution - Digital Transformation Experts",
    description: "Transform your business with cutting-edge technology solutions from industry experts.",
    images: ["/twitter-image.jpg"],
    creator: "@zenithdigital",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://zenithdigital.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={inter.className}>
        {children}
        {/* Analytics Scripts */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXXXXX-X', 'auto');
              ga('send', 'pageview');
            `
          }}
        />
      </body>
    </html>
  )
}
