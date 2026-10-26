import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2017 Ducati Scrambler Café Racer | Under 1,000 Miles | Bay Area, CA",
  description:
    "Collector-grade 2017 Ducati Scrambler Café Racer in factory Black Coffee livery with gold 10-spoke wheels, dual Termignoni exhaust, wrapped headers, custom diamond-stitched tan leather seat, and under 1,000 miles. $8,495 in Oakland / Piedmont, CA.",
  keywords:
    "2017 Ducati Scrambler Cafe Racer, Ducati Scrambler Cafe Racer for sale, Black Coffee Ducati Cafe Racer, low mileage Ducati Bay Area, Termignoni exhaust Ducati Scrambler, Oakland motorcycle for sale",
  alternates: {
    canonical: "https://ducati-cafe-racer-sale.vercel.app",
  },
  openGraph: {
    title: "2017 Ducati Scrambler Café Racer | <1,000 Miles | $8,495",
    description:
      "First-year Black Coffee launch edition with 17-inch gold wheels, Termignoni dual slip-on exhaust, wrapped headers, custom diamond-quilted tan leather saddle, and under 1,000 original miles. Located in Oakland / Piedmont, CA.",
    type: "website",
    url: "https://ducati-cafe-racer-sale.vercel.app",
    images: [
      {
        url: "/images/ducati-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "2017 Ducati Scrambler Café Racer in Black Coffee livery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2017 Ducati Scrambler Café Racer | <1,000 Miles | $8,495",
    description:
      "Under 1,000 miles. Black Coffee launch livery, Termignoni dual exhaust, diamond-stitched tan leather seat, gold 17-inch wheels. Bay Area, CA.",
    images: ["/images/ducati-hero.jpeg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Product", "Motorcycle"],
      name: "2017 Ducati Scrambler Café Racer (Black Coffee Launch Edition)",
      brand: {
        "@type": "Brand",
        name: "Ducati",
      },
      model: "Scrambler Café Racer",
      vehicleModelDate: "2017",
      color: "Black Coffee with Red Tank Pinstripe & Gold Wheels",
      mileageFromOdometer: {
        "@type": "QuantitativeValue",
        value: 950,
        unitCode: "SMI",
      },
      vehicleEngine: {
        "@type": "EngineSpecification",
        name: "803cc Air/Oil-Cooled Desmodromic L-Twin (75 HP @ 8,250 RPM)",
      },
      description:
        "2017 Ducati Scrambler Café Racer with under 1,000 miles in Black Coffee launch livery. Equipped with Termignoni dual slip-on exhaust, wrapped headers, custom diamond-stitched tan leather café seat, tail tidy with flush LED taillight, Brembo M4.32 monoblock front brake, and 17-inch gold 10-spoke wheels.",
      image: [
        "https://ducati-cafe-racer-sale.vercel.app/images/ducati-hero.jpeg",
        "https://ducati-cafe-racer-sale.vercel.app/images/ducati-full.jpeg",
        "https://ducati-cafe-racer-sale.vercel.app/images/ducati-garage.jpeg",
        "https://ducati-cafe-racer-sale.vercel.app/images/ducati-tail.jpeg",
        "https://ducati-cafe-racer-sale.vercel.app/images/ducati-front.jpeg",
      ],
      offers: {
        "@type": "Offer",
        price: "8495",
        priceCurrency: "USD",
        itemCondition: "https://schema.org/UsedCondition",
        availability: "https://schema.org/InStock",
        url: "https://ducati-cafe-racer-sale.vercel.app",
        seller: {
          "@type": "Person",
          name: "Private Owner (Oakland / Piedmont, CA)",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
