import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RootJsonLd } from "@/components/json-ld";
import {
  siteConfig,
  pageSEO,
  keywords,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/seo-config";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${pageSEO.home.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageSEO.home.description,
  keywords: [...keywords.brand, ...keywords.services, ...keywords.realEstate, ...keywords.automotive, ...keywords.ecommerce],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: `${pageSEO.home.title} | ${siteConfig.name}`,
    description: pageSEO.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Web Design Company in Bangalore`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageSEO.home.title} | ${siteConfig.name}`,
    description: pageSEO.home.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@nexawaves",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NLD5XEN8P9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NLD5XEN8P9');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${outfit.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <RootJsonLd
          organization={generateOrganizationSchema()}
          localBusiness={generateLocalBusinessSchema()}
          website={generateWebsiteSchema()}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
