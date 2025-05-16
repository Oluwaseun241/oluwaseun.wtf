import "./global.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "highlight.js/styles/github-dark.css";
import { ThemeProvider } from "./context/ThemeContext";

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
  metadataBase: new URL("https://oluwaseun.wtf"),
  icons: {
    icon: "/icon.png",
  },
  title: "Oluwaseun Tanimola | Portfolio",
  description: "Backend Engineer and developer showcasing projects and skills",
  applicationName: "Portfolio",
  authors: [{ name: "Oluwaseun Tanimola", url: "https://oluwaseun.wtf" }],
  keywords: [
    "Portfolio",
    "Backend Engineer",
    "Development",
    "Python",
    "Django",
    "FastAPI",
    "Projects",
  ],
  creator: "Oluwaseun Tanimola",
  publisher: "Oluwaseun Tanimola",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://oluwaseun.wtf",
    title: "Oluwaseun Tanimola | Portfolio",
    siteName: "Oluwaseun Tanimola Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oluwaseun Tanimola Portfolio",
      },
    ],
  },
  twitter: {
    site: "@tanimola_jnr",
    creator: "@tanimola_jnr",
    title: "Oluwaseun Tanimola | Portfolio",
    description:
      "Backend Engineer and developer showcasing projects and skills",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
