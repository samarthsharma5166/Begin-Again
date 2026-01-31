import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Begin Again – Healing & Connection After Divorce or Breakup | New Delhi",
  description:
    "A safe, one-day guided experience for adults 30–45 healing from divorce, separation, or painful breakups. Gentle inner work, creative healing, and pressure-free connection. Facilitated by Dr. Meera Iyer. Jan 31, 2026 – Limited seats.",
  keywords: [
    "healing after divorce",
    "breakup recovery workshop",
    "relationship healing event",
    "emotional healing New Delhi",
    "divorce support group",
    "begin again workshop",
    "Dr. Meera Iyer psychologist",
  ],
  openGraph: {
    title: "Begin Again – Pause, Heal, Reconnect Safely",
    description:
      "One-day guided experience in New Delhi for divorced, separated, or recently single adults (30–45) seeking emotional safety, growth, and genuine connection — no pressure, no speed-dating.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Begin Again",
    images: [
      {
        url: "/og-image.jpg", // Add your own OG image (e.g., calming group circle or event poster)
        width: 1200,
        height: 630,
        alt: "Begin Again healing event – safe space for emotional recovery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Begin Again – Healing After Heartbreak",
    description: "Gentle one-day workshop in New Delhi. Heal at your pace. Jan 31, 2026.",
    // images: ["/twitter-image.jpg"], // optional
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};    

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code - Facebook tracking for ads & conversions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '870285145914746');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Noscript fallback for Pixel */}
        <noscript>
          {/* <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=870285145914746&ev=PageView&noscript=1"
            alt=""
          /> */}
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
