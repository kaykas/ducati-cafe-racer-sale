import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2017 Ducati Scrambler Café Racer - Pristine Low Miles | For Sale",
  description: "Stunning 2017 Ducati Scrambler Café Racer with under 1,000 miles. Customized, pristine condition, barely ridden. 803cc L-twin, 75hp, race-inspired design. Bay Area, CA.",
  keywords: "Ducati Scrambler, Café Racer, 2017 Ducati, motorcycle for sale, low miles, Ducati 803, custom Ducati, pristine motorcycle, Bay Area motorcycle",
  openGraph: {
    title: "2017 Ducati Scrambler Café Racer - Under 1,000 Miles",
    description: "Pristine 2017 Ducati Scrambler Café Racer with custom upgrades. Less than 1,000 miles. A true collector's piece.",
    type: "website",
    images: [
      {
        url: "/images/ducati-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "2017 Ducati Scrambler Café Racer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2017 Ducati Scrambler Café Racer - Pristine Low Miles",
    description: "Stunning custom Ducati with under 1,000 miles. Bay Area, CA.",
    images: ["/images/ducati-hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
