import "./global.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.com"),
  icons: {
    icon: "/icon.png",
  },
  title: "Your Name | Portfolio",
  description:
    "Designer and developer portfolio showcasing projects and writing",
  applicationName: "Portfolio",
  authors: [{ name: "Your Name", url: "https://yourportfolio.com" }],
  keywords: ["Portfolio", "Design", "Development", "Projects", "Writing"],
  creator: "Your Name",
  publisher: "Your Name",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://yourportfolio.com",
    title: "Your Name | Portfolio",
    siteName: "Your Name Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio",
      },
    ],
  },
  twitter: {
    site: "@yourhandle",
    creator: "@yourhandle",
    title: "Your Name | Portfolio",
    description:
      "Designer and developer portfolio showcasing projects and writing",
    card: "summary_large_image",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
