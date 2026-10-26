"use client";

import Image from "next/image";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Gallery, { BIKE_PHOTOS } from "./components/Gallery";

const MARKET_COMPS = [
  {
    listing: "THIS BIKE: 2017 Ducati Scrambler Café Racer (Private Seller)",
    location: "Oakland / Piedmont, CA",
    livery: "2017 'Black Coffee' + Gold 10-Spoke Wheels",
    mileage: "< 1,000 mi",
    desmoStatus: "6,500+ mi remaining until 7,500-mi Desmo service",
    price: "$8,495",
    notes: "No dealer freight/doc fees; Termignoni dual exhaust, wrapped headers, custom tan diamond leather seat, tail tidy, tank bag",
    highlight: true,
  },
  {
    listing: "2019 Ducati Scrambler Café Racer (Specialty Motorsports)",
    location: "Sacramento, CA",
    livery: "Silver Ice Matte / Blue Frame",
    mileage: "298 mi",
    desmoStatus: "7,200 mi remaining",
    price: "$9,495",
    notes: "Dealer retail ask (+$1,000 higher before dealer prep, doc, and registration fees)",
    highlight: false,
  },
  {
    listing: "2019 Ducati Scrambler Café Racer (SF Moto)",
    location: "San Francisco, CA",
    livery: "Silver Ice Matte / Blue Frame",
    mileage: "8,382 mi",
    desmoStatus: "Past 7,500-mi Desmo threshold",
    price: "$9,396",
    notes: "8x the mileage across the Bay, priced $901 higher than this sub-1,000-mile bike",
    highlight: false,
  },
  {
    listing: "2017 Ducati Scrambler Café Racer (Tonkin / MotoCorsa)",
    location: "Portland, OR",
    livery: "2017 'Black Coffee' + Gold 10-Spoke Wheels",
    mileage: "3,200 mi",
    desmoStatus: "4,300 mi remaining",
    price: "$8,990",
    notes: "Same 2017 launch specification with 3x the mileage (+$500 higher plus out-of-state transport)",
    highlight: false,
  },
  {
    listing: "2019 Ducati Scrambler Café Racer (Bring a Trailer Lot #195779)",
    location: "Washington, UT (Auction Sold)",
    livery: "Silver Ice Matte / Blue Frame",
    mileage: "430 mi",
    desmoStatus: "7,070 mi remaining",
    price: "$8,050 Sold",
    notes: "$7,800 hammer + $250 BaT buyer fee (plus ~$750 enclosed shipping to Bay Area)",
    highlight: false,
  },
  {
    listing: "2017 Ducati Scrambler Café Racer (Motorado Consignment)",
    location: "Lakewood, CO (Sold)",
    livery: "2017 'Black Coffee' + Gold 10-Spoke Wheels",
    mileage: "10,510 mi",
    desmoStatus: "Past 7,500-mi threshold",
    price: "$7,495 Sold",
    notes: "Sold quickly at $7,495 despite having 10,510 miles (10x the mileage of this bike)",
    highlight: false,
  },
];

const UPGRADE_LEDGER = [
  {
    component: "Dual Black-Anodized Termignoni Racing Slip-On & Wrapped Headers",
    category: "Exhaust & Acoustics",
    detail:
      "Factory-spec black-anodized dual Termignoni slip-on silencer with brushed aluminum heat shield, paired with titanium/fiberglass thermal-wrapped 2-into-1 exhaust headers. Delivers the unmistakable air-cooled 90-degree Ducati L-twin note while reducing radiant heat at the rider's right boot.",
  },
  {
    component: "Custom Diamond-Stitched Tan Leather Café Saddle",
    category: "Ergonomics & Saddlery",
    detail:
      "Upgraded full-length diamond-quilted tan leather two-up café seat replacing the firmer stock dark-brown vinyl cover. Pairs classic 1960s Italian bespoke upholstery with supportive foam density for East Bay hills and Marin headlands rides.",
  },
  {
    component: "Fender Eliminator / Tail Tidy & Flush Crescent LED Taillight",
    category: "Rear Profile & Lighting",
    detail:
      "Removes the heavy factory swingarm-mounted license plate arm and protruding rear turn signal stalks. Tucks the California plate cleanly beneath the tail section with a flush-mounted crescent LED brake and running light.",
  },
  {
    component: "17-Inch Gold 10-Spoke Cast Alloy Wheels & Pirelli Diablo Rosso II",
    category: "Launch-Year Chassis Spec",
    detail:
      "Unlike the regular Scrambler Icon (18-inch front wheel) or the 2019+ Café Racer (wire-spoke wheels), the 2017 launch edition wears sportbike-sized 17x3.50 front and 17x5.50 rear cast gold alloy wheels shod in 120/70 ZR17 and 180/55 ZR17 Pirelli Diablo Rosso II tires with virtually full tread depth remaining.",
  },
  {
    component: "Brembo M4.32 Radial Monoblock Front Brake & Radial Master Cylinder",
    category: "Braking & Controls",
    detail:
      "Borrowed directly from Ducati's supersport shelf: a 4-piston Brembo M4.32 monoblock radial caliper biting a 330mm front rotor, actuated by a radial front master cylinder, factory clip-on handlebars, and CNC bar-end mirrors.",
  },
  {
    component: "'Black Coffee' Tank with Red Pinstripe, #54 Plates & Tank Bag",
    category: "Livery & Accessories",
    detail:
      "Finished in Ducati's sought-after 2017 Black Coffee gloss paint with a red tank pinstripe border, brushed lateral tank panels, #54 oval side number plates honoring 1968 Imola 200 racer Bruno Spaggiari, and a removable strap-mounted tank bag.",
  },
];

const BUYER_FAQS = [
  {
    q: "Why does the bike have under 1,000 miles?",
    a: "It was purchased as a weekend collector piece, kept in a private enclosed garage in Oakland / Piedmont, and ridden sparingly on dry days. It has never been tracked, dropped, or left outdoors.",
  },
  {
    q: "Why does sub-1,000 mileage matter financially on an 803cc Ducati?",
    a: "Ducati's air-cooled 803cc Desmodue L-twin requires its first major Desmodromic valve-clearance inspection and timing belt service at 7,500 miles (an $1,100 to $1,500 dealership service in the Bay Area). Many used Scramblers listed between $7,500 and $9,400 sit at 6,500 to 10,500 miles and need that service immediately. With under 1,000 miles, this bike has over 6,500 miles of riding before its first valve service is due.",
  },
  {
    q: "What makes the 2017 'Black Coffee' Café Racer different from a standard Ducati Scrambler?",
    a: "The Café Racer was a factory-engineered performance trim ($11,395 original MSRP vs. $8,895 for the base Icon). Ducati replaced the 18-inch front wheel with 17-inch gold cast alloy sport wheels (120/70 front, 180/55 rear), upgraded the brakes to a Superbike-spec Brembo M4.32 radial monoblock caliper with a radial master cylinder, stiffened and lowered the 41mm Kayaba inverted fork, fitted clip-on handlebars with bar-end mirrors, and installed the factory dual Termignoni exhaust.",
  },
  {
    q: "What is the title and registration status?",
    a: "Clean, clear California title in hand (no liens, no salvage history) with current California registration (CA plate 24S7127) for an immediate, straightforward DMV private-party transfer.",
  },
  {
    q: "Where is the motorcycle located and how do viewings work?",
    a: "The bike is garaged in the Oakland / Piedmont area of the East Bay. In-person inspections and cold starts are available by appointment for serious buyers.",
  },
];

export default function Home() {
  const [heroPhotoIdx, setHeroPhotoIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141311] selection:bg-[#B81D13] selection:text-white">
      {/* Top Editorial Masthead */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-block w-2.5 h-2.5 bg-[#B81D13]" />
            <span className="font-mono-num text-xs uppercase tracking-[0.2em] font-semibold">
              Bologna Collector Dossier · Lot 2017-54
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono-num uppercase tracking-wider text-[#57534E]">
            <a href="#overview" className="hover:text-[#141311] transition-colors">
              The Machine
            </a>
            <a href="#upgrades" className="hover:text-[#141311] transition-colors">
              Build &amp; Upgrades
            </a>
            <a href="#market-comps" className="hover:text-[#141311] transition-colors">
              Market Comps
            </a>
            <a href="#gallery" className="hover:text-[#141311] transition-colors">
              5-Photo Archive
            </a>
            <a href="#faq" className="hover:text-[#141311] transition-colors">
              Buyer FAQ
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-[#141311] hover:bg-[#B81D13] text-[#FAF8F5] font-mono-num text-xs uppercase tracking-widest px-4 py-2.5 transition-colors"
          >
            $8,495 · Inquire
          </a>
        </div>
      </header>

      {/* Above-the-Fold Split Hero with Actual Bike Photo */}
      <section className="border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Editorial Headline, Provenance & Pricing */}
            <div className="lg:col-span-6 lg:pr-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-num uppercase tracking-widest text-[#B81D13] mb-4">
                <span>Private Collection · Oakland / Piedmont, CA</span>
                <span className="text-[#E2DDD5]">|</span>
                <span className="text-[#9A7B3E]">Under 1,000 Original Miles</span>
              </div>

              <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06] text-[#141311] mb-6">
                2017 Ducati Scrambler Café Racer
              </h1>

              <p className="text-lg text-[#57534E] leading-relaxed mb-8">
                A collector-grade, sub-1,000-mile example of Ducati&apos;s first-year{" "}
                <strong className="text-[#141311] font-semibold">&ldquo;Black Coffee&rdquo;</strong> Café Racer.
                Equipped with 17-inch gold 10-spoke cast wheels, Brembo M4.32 monoblock radial brakes, wrapped headers
                feeding dual black Termignoni silencers, a custom diamond-stitched tan leather café saddle, and a clean
                California title in hand.
              </p>

              {/* Price & NorCal Comp Callout */}
              <div className="border-t border-b border-[#E2DDD5] py-6 mb-8 bg-[#F3EFEA]/60 px-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono-num uppercase tracking-widest text-[#57534E] mb-1">
                      Private Party Asking Price (No Dealer Fees)
                    </div>
                    <div className="font-serif-editorial text-5xl font-bold text-[#141311]">
                      $8,495
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono-num uppercase tracking-wider text-emerald-800 font-semibold">
                      $901 to $1,000 Below NorCal Dealer Comps
                    </div>
                    <div className="text-xs text-[#57534E] mt-1">
                      SF Moto (8,382 mi): <span className="font-mono-num">$9,396</span> · Sacramento (298 mi):{" "}
                      <span className="font-mono-num">$9,495</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-[#B81D13] hover:bg-[#96150D] text-white font-mono-num text-xs uppercase tracking-[0.2em] py-4 px-8 text-center transition-colors"
                >
                  Schedule Viewing / Make Offer →
                </a>
                <a
                  href="#market-comps"
                  className="border border-[#141311] hover:bg-[#141311] hover:text-[#FAF8F5] text-[#141311] font-mono-num text-xs uppercase tracking-[0.2em] py-4 px-8 text-center transition-colors"
                >
                  Compare Market Prices
                </a>
              </div>

              {/* Quick Highlights */}
              <dl className="grid grid-cols-2 gap-4 text-xs border-t border-[#E2DDD5] pt-6">
                <div>
                  <dt className="font-mono-num uppercase tracking-wider text-[#57534E]">Desmo Service Runway</dt>
                  <dd className="font-semibold text-[#141311] mt-0.5">6,500+ miles until first 7,500-mi valve check</dd>
                </div>
                <div>
                  <dt className="font-mono-num uppercase tracking-wider text-[#57534E]">Title &amp; Registration</dt>
                  <dd className="font-semibold text-[#141311] mt-0.5">Clean CA Title in Hand · Plate 24S7127</dd>
                </div>
              </dl>
            </div>

            {/* Right Column: Interactive Hero Image Showcase + Thumbnail Strip */}
            <div className="lg:col-span-6">
              <div className="border border-[#E2DDD5] bg-white p-3 shadow-sm">
                <div className="relative w-full aspect-[4/5] bg-[#141311] overflow-hidden">
                  <Image
                    src={BIKE_PHOTOS[heroPhotoIdx].src}
                    alt={BIKE_PHOTOS[heroPhotoIdx].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 border border-[#E2DDD5] px-3 py-1 text-[11px] font-mono-num uppercase tracking-wider text-[#141311]">
                    {BIKE_PHOTOS[heroPhotoIdx].specNote}
                  </div>
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-[#57534E]">
                  <span className="font-medium text-[#141311]">{BIKE_PHOTOS[heroPhotoIdx].title}</span>
                  <span className="font-mono-num">
                    0{heroPhotoIdx + 1} / 0{BIKE_PHOTOS.length}
                  </span>
                </div>
              </div>

              {/* 5-Thumbnail Selector Strip */}
              <div className="grid grid-cols-5 gap-2.5 mt-3">
                {BIKE_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setHeroPhotoIdx(idx)}
                    className={`relative aspect-square border overflow-hidden cursor-pointer transition-all ${
                      heroPhotoIdx === idx
                        ? "border-2 border-[#B81D13] ring-1 ring-[#B81D13]"
                        : "border-[#E2DDD5] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry & Specification Bar */}
      <section className="border-b border-[#E2DDD5] bg-[#F3EFEA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#E2DDD5]">
            {[
              { label: "Odometer", value: "< 1,000 mi", sub: "Original miles" },
              { label: "Engine", value: "803cc L-Twin", sub: "Air/oil Desmodromic" },
              { label: "Output", value: "75 HP / 50 lb-ft", sub: "@ 8,250 / 5,750 RPM" },
              { label: "Front Brake", value: "Brembo M4.32", sub: "330mm radial + ABS" },
              { label: "Wheels & Tires", value: "17-in Cast Gold", sub: "Pirelli Diablo Rosso II" },
              { label: "Wet Weight", value: "414 lbs", sub: "31.7-in seat height" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-4 first:pl-0 last:pr-0">
                <div className="text-[11px] font-mono-num uppercase tracking-widest text-[#57534E]">
                  {stat.label}
                </div>
                <div className="font-mono-num text-xl font-bold text-[#141311] mt-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#57534E] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: The Machine & Why the 2017 Launch Edition Matters */}
      <section id="overview" className="border-b border-[#E2DDD5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13]">
                01 · Provenance &amp; Specification
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141311] leading-tight">
                The 2017 &ldquo;Black Coffee&rdquo; Launch Edition, Preserved Under 1,000 Miles
              </h2>
              <p className="text-base text-[#57534E] leading-relaxed">
                When Ducati introduced the Scrambler Café Racer for the 2017 model year ($11,395 MSRP), it was not a
                cosmetic sticker package. Borgo Panigale re-engineered the Scrambler chassis around 17-inch cast gold
                sport wheels, fitted a Superbike-grade Brembo M4.32 radial monoblock front brake caliper and radial
                master cylinder, tightened the rake and trail for sharper turn-in, and bolted on clip-on handlebars with
                aluminum bar-end mirrors and a dual Termignoni exhaust.
              </p>
              <p className="text-base text-[#57534E] leading-relaxed">
                Collectors specifically seek out the 2017 to 2018 <strong className="text-[#141311]">&ldquo;Black Coffee&rdquo;</strong>{" "}
                launch livery with its 10-spoke cast gold wheels and <strong className="text-[#141311]">#54 side number plates</strong>{" "}
                (a tribute to Italian racer Bruno Spaggiari&apos;s 1968 Imola 200 Ducati). In 2019, Ducati discontinued
                the Black Coffee &amp; gold cast-wheel combination in favor of matte silver/blue with wire-spoke wheels.
              </p>
              <div className="border-l-2 border-[#B81D13] pl-5 py-1 bg-[#F3EFEA]/50">
                <p className="text-sm font-semibold text-[#141311]">
                  The 7,500-Mile Desmo Service Advantage ($1,200+ Value)
                </p>
                <p className="text-sm text-[#57534E] mt-1 leading-relaxed">
                  Ducati&apos;s 803cc Desmodue L-twin requires its first major Desmodromic valve-clearance check and
                  belt service at 7,500 miles. Higher-mileage comps (7,000 to 10,500 miles) require that $1,200 to
                  $1,500 shop bill immediately. At under 1,000 miles, this bike gives its next owner more than 6,500
                  miles of open road before the first major valve service is due.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#E2DDD5] bg-white p-3">
                <div className="relative aspect-[3/4] bg-[#141311]">
                  <Image
                    src="/images/ducati-full.jpeg"
                    alt="Full profile view of 2017 Ducati Scrambler Café Racer"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-mono-num text-[#57534E] mt-3">
                  FIG 1.1 · Full profile showing custom diamond-stitched tan leather seat and wrapped headers.
                </p>
              </div>
              <div className="border border-[#E2DDD5] bg-white p-3">
                <div className="relative aspect-[3/4] bg-[#141311]">
                  <Image
                    src="/images/ducati-tail.jpeg"
                    alt="Rear view showing custom tail tidy and flush LED brake light"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-mono-num text-[#57534E] mt-3">
                  FIG 1.2 · Fender eliminator with flush crescent LED taillight and deep Pirelli Rosso II tread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Installed Custom Upgrades & Factory Competition Hardware */}
      <section id="upgrades" className="border-b border-[#E2DDD5] py-20 lg:py-28 bg-[#F3EFEA]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-3">
              02 · Build Sheet &amp; Factory Hardware
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141311]">
              Tasteful Custom Upgrades Over Factory Café Racer Hardware
            </h2>
            <p className="text-base text-[#57534E] mt-4 leading-relaxed">
              Every upgrade on this bike addresses the exact details enthusiasts modify on a Scrambler Café Racer:
              cleaning up the rear fender, upgrading the saddle to stitched tan leather, and wrapping the headers into
              the dual Termignoni silencers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD5] border border-[#E2DDD5]">
            {UPGRADE_LEDGER.map((item, idx) => (
              <div key={item.component} className="bg-[#FAF8F5] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-num uppercase tracking-wider text-[#9A7B3E] mb-3">
                    <span>{item.category}</span>
                    <span>0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif-editorial text-xl font-bold text-[#141311] mb-3 leading-snug">
                    {item.component}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: October 2026 Market Comparables Table */}
      <section id="market-comps" className="border-b border-[#E2DDD5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-3">
              03 · Verified Market Valuation (October 2026)
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141311]">
              How $8,495 Compares to Current West Coast &amp; National Listings
              </h2>
            <p className="text-base text-[#57534E] mt-4 leading-relaxed">
              Across Northern California and the Pacific Northwest, dealer listings for Ducati Scrambler Café Racers
              currently sit between <strong className="text-[#141311]">$8,990 and $9,495</strong> before dealer doc,
              freight, and setup fees. At <strong className="text-[#141311]">$8,495</strong>, this sub-1,000-mile 2017
              launch edition is priced nearly $1,000 below local dealer inventory.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E2DDD5] bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E2DDD5] bg-[#F3EFEA] font-mono-num text-[11px] uppercase tracking-wider text-[#57534E]">
                  <th className="py-4 px-5">Listing / Source</th>
                  <th className="py-4 px-4">Location</th>
                  <th className="py-4 px-4">Livery &amp; Wheels</th>
                  <th className="py-4 px-4">Mileage</th>
                  <th className="py-4 px-4">Price</th>
                  <th className="py-4 px-5">Comparison Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD5]">
                {MARKET_COMPS.map((comp) => (
                  <tr
                    key={comp.listing}
                    className={
                      comp.highlight
                        ? "bg-[#B81D13]/[0.05] font-medium"
                        : "hover:bg-[#FAF8F5]"
                    }
                  >
                    <td className="py-4 px-5 text-[#141311]">
                      {comp.highlight && (
                        <span className="inline-block bg-[#B81D13] text-white font-mono-num text-[10px] uppercase tracking-widest px-2 py-0.5 mr-2">
                          Subject Bike
                        </span>
                      )}
                      {comp.listing}
                    </td>
                    <td className="py-4 px-4 text-[#57534E] whitespace-nowrap">{comp.location}</td>
                    <td className="py-4 px-4 text-[#57534E]">{comp.livery}</td>
                    <td className="py-4 px-4 font-mono-num text-[#141311] whitespace-nowrap">{comp.mileage}</td>
                    <td className="py-4 px-4 font-mono-num font-bold text-[#141311] whitespace-nowrap">
                      {comp.price}
                    </td>
                    <td className="py-4 px-5 text-xs text-[#57534E] leading-relaxed">{comp.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Complete 5-Photo Uncropped Gallery */}
      <section id="gallery" className="border-b border-[#E2DDD5] py-20 lg:py-28 bg-[#F3EFEA]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-3">
                04 · Visual Inspection
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141311]">
                High-Resolution Photo Archive
              </h2>
            </div>
            <p className="text-xs font-mono-num uppercase tracking-wider text-[#57534E]">
              Click any plate to inspect full-screen (Arrow keys &amp; Esc supported)
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Section 5: Complete Technical Specifications & Buyer FAQ */}
      <section id="faq" className="border-b border-[#E2DDD5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Complete Technical Table */}
            <div className="lg:col-span-5">
              <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-3">
                05 · Factory &amp; Installed Specs
              </div>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#141311] mb-6">
                Technical Data Sheet
              </h2>
              <div className="border-t border-[#E2DDD5] divide-y divide-[#E2DDD5] text-sm">
                {[
                  ["Model Year & Trim", "2017 Ducati Scrambler Café Racer"],
                  ["VIN", "ZDM15ANM7HB020905"],
                  ["Factory Colorway", "'Black Coffee' w/ Gold Wheels & Red Pinstripe"],
                  ["Odometer", "Under 1,000 original miles"],
                  ["Engine Type", "Air/oil-cooled 90° L-Twin, 2 Desmodromic valves/cyl"],
                  ["Displacement", "803 cc (88 mm bore x 66 mm stroke)"],
                  ["Horsepower", "75 HP (54 kW) @ 8,250 RPM"],
                  ["Torque", "50 lb-ft (67 Nm) @ 5,750 RPM"],
                  ["Fuel Injection", "Electronic fuel injection, 50 mm throttle body"],
                  ["Exhaust", "Wrapped 2-into-1 headers + Dual Black Termignoni slip-on"],
                  ["Transmission", "6-speed w/ APTC wet multiplate slipper clutch"],
                  ["Frame", "Tubular steel Trellis frame (Black)"],
                  ["Front Suspension", "41 mm inverted Kayaba anodized fork (150 mm travel)"],
                  ["Rear Suspension", "Kayaba monoshock w/ adjustable preload (150 mm travel)"],
                  ["Front Brake", "330 mm disc, radial 4-piston Brembo M4.32 monoblock, Bosch ABS"],
                  ["Rear Brake", "245 mm disc, 1-piston floating Brembo caliper, Bosch ABS"],
                  ["Wheels", "10-spoke cast light alloy in Gold (3.50 x 17 in F / 5.50 x 17 in R)"],
                  ["Tires", "Pirelli Diablo Rosso II (120/70 ZR17 F / 180/55 ZR17 R)"],
                  ["Fuel Tank Capacity", "3.57 gal (13.5 L) steel teardrop tank"],
                  ["Wet Weight", "414 lbs (188 kg) / 379 lbs (172 kg) dry"],
                  ["Seat Height", "31.7 in (805 mm) · Custom diamond-stitched tan leather"],
                  ["CA Registration & Title", "Clean California title in hand · CA Plate 24S7127"],
                ].map(([k, v]) => (
                  <div key={k} className="py-3 flex justify-between gap-4">
                    <span className="text-[#57534E] font-medium">{k}</span>
                    <span className="font-mono-num text-right text-[#141311]">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Buyer FAQ */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-3">
                06 · Pre-Purchase Diligence
              </div>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#141311] mb-6">
                Frequently Asked Questions From Buyers
              </h2>
              <div className="divide-y divide-[#E2DDD5] border-t border-b border-[#E2DDD5]">
                {BUYER_FAQS.map((item) => (
                  <div key={item.q} className="py-6">
                    <h3 className="font-serif-editorial text-xl font-bold text-[#141311] mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#57534E] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Direct Owner Contact & Viewing Scheduler */}
      <section id="contact" className="py-20 lg:py-28 bg-[#F3EFEA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white border border-[#E2DDD5] p-8 md:p-12 shadow-sm">
            <div className="border-b border-[#E2DDD5] pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#B81D13] mb-2">
                  07 · Direct Owner Inquiry
                </div>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#141311]">
                  Schedule an Inspection or Submit an Offer
                </h2>
                <p className="text-sm text-[#57534E] mt-2">
                  Located in Oakland / Piedmont, CA. Clean California title in hand for immediate transfer.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs font-mono-num uppercase tracking-wider text-[#57534E]">Asking Price</div>
                <div className="font-serif-editorial text-3xl font-bold text-[#141311]">$8,495</div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="border-t border-[#E2DDD5] bg-[#FAF8F5] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E] font-mono-num">
          <div>
            2017 DUCATI SCRAMBLER CAFÉ RACER · &lt;1,000 MILES · OAKLAND / PIEDMONT, CA
          </div>
          <div>
            CLEAN CALIFORNIA TITLE IN HAND · SOLD AS-IS · $8,495
          </div>
        </div>
      </footer>
    </div>
  );
}
