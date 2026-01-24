import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Nexawaves | Technology That Brings Customers",
  description: "We build discoverable, secure, beautiful, and scalable digital experiences for real estate, automotive, and e-commerce businesses.",
  keywords: ["web development", "digital agency", "Next.js", "real estate websites", "automotive websites", "e-commerce", "Shopify"],
  authors: [{ name: "Nexawaves" }],
  creator: "Nexawaves",
  openGraph: {
    title: "Nexawaves | Technology That Brings Customers",
    description: "We build discoverable, secure, beautiful, and scalable digital experiences.",
    url: "https://nexawaves.com",
    siteName: "Nexawaves",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexawaves | Technology That Brings Customers",
    description: "We build discoverable, secure, beautiful, and scalable digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
