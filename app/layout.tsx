import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ossconnect.india"),
  title: "OSS Connect | Empowering India's Open Source Ecosystem",
  description: "The definitive hub for Indian developers to access resources, connect with mentors, and make meaningful contributions to global open-source projects.",
  keywords: ["Open Source", "India", "Developers", "Mentorship", "Contributions", "GSoC", "LFX", "CNCF", "Community"],
  authors: [{ name: "OSS Connect" }],
  openGraph: {
    title: "OSS Connect | Empowering India's Open Source Ecosystem",
    description: "The definitive hub for Indian developers to access resources, connect with mentors, and make meaningful contributions to global open-source projects.",
    url: "https://ossconnect.india", 
    siteName: "OSS Connect",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OSS Connect Open Graph Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSS Connect | Empowering India's Open Source Ecosystem",
    description: "The definitive hub for Indian developers to access resources, connect with mentors, and make meaningful contributions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/oss-connect-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
