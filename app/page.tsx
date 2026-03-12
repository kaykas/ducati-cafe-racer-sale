import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ducati-hero.jpeg"
            alt="2017 Ducati Scrambler Café Racer"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="inline-block bg-black/60 backdrop-blur-md px-8 py-3 rounded-full mb-8 border border-white/20">
            <p className="text-sm font-bold tracking-wider uppercase text-white">Under 1,000 Miles • Pristine Condition</p>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight drop-shadow-2xl">
            2017 Ducati<br />
            <span className="text-5xl md:text-7xl font-bold">Scrambler Café Racer</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-10 drop-shadow-lg">
            Italian Racing Heritage Meets Retro Style
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 bg-black/60 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <div className="text-4xl md:text-5xl font-bold drop-shadow-lg">Make Offer</div>
            <div className="hidden sm:block w-px h-10 bg-white/60"></div>
            <div className="text-xl font-semibold">Motivated Seller</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-gray-900 px-12 py-6 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Owner
            </a>
            <a
              href="#gallery"
              className="inline-block bg-black/60 backdrop-blur-md text-white px-12 py-6 rounded-full text-lg font-bold hover:bg-black/70 transition-all border-2 border-white/40 hover:border-white/60 shadow-xl"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">&lt;1K</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Miles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">2017</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Model Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">75hp</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Power Output</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">Italian Performance Art</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This isn't just a motorcycle—it's a meticulously preserved piece of Ducati's legendary Scrambler lineage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Barely Broken In</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              This 2017 Ducati Scrambler Café Racer has less than 1,000 miles on the odometer. It's been stored indoors,
              maintained meticulously, and ridden sparingly. This is a collector-grade machine that deserves an owner
              who will appreciate its pedigree.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Scrambler Café Racer pays homage to the 1950s British café racer culture with modern Ducati engineering.
              Featuring <strong>clip-on handlebars</strong>, a <strong>quilted tan leather seat</strong>, race-inspired number plates,
              and aggressive Pirelli Diablo Rosso II tires—this bike turns heads everywhere it goes.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-lg font-medium text-gray-900 mb-2">Why This Matters</p>
              <p className="text-gray-700">
                Finding a Ducati Scrambler Café Racer with under 1,000 miles is exceptionally rare. Most have been ridden hard
                or modified heavily. This bike's originality and pristine condition make it a true find.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ducati-garage.jpeg"
              alt="Ducati Scrambler in garage showing pristine condition"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Heritage & Performance */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Heritage & Performance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">803cc L-Twin Engine</h4>
              <p className="text-gray-800">
                Ducati's legendary 90-degree L-twin delivers 75 horsepower at 8,250 rpm with that unmistakable Desmodromic
                valve signature. Air/oil-cooled for classic simplicity with modern reliability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Race-Inspired Design</h4>
              <p className="text-gray-800">
                Clip-on handlebars, aggressive riding position, number 54 plates honoring Italian racer Bruno Spaggiari,
                quilted tan leather seat, and red-rimmed fuel tank. Every detail screams performance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Components</h4>
              <p className="text-gray-800">
                Brembo M4.32 radial monoblock front brakes, 41mm Kayaba inverted forks, Pirelli Diablo Rosso II tires,
                and Termignoni exhaust. This bike has the best of Italian engineering.
              </p>
            </div>
          </div>
        </div>

        {/* The Ducati Difference */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Ducati?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">The Name That Defines Italian Motorcycling.</strong> Since 1926,
                Ducati has built bikes that blend art, performance, and engineering excellence. This isn't transportation—
                it's a statement of intent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Scrambler Heritage.</strong> The Scrambler line celebrates Ducati's
                1960s-70s era when these bikes dominated dirt and street. The Café Racer variant adds aggressive styling
                inspired by British racing culture.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Collector Appeal.</strong> Low-mileage Ducatis hold value exceptionally well.
                The Scrambler Café Racer is already a sought-after variant, and this example's condition makes it investment-grade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Ride Quality.</strong> Despite the aggressive café racer stance, this bike
                delivers confidence-inspiring handling with a 21.8-degree rake, 414-pound wet weight, and Ducati's legendary
                trellis frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Complete Specifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Engine</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Type:</span>
                <span>L-Twin</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Displacement:</span>
                <span>803cc</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Power:</span>
                <span>75hp @ 8,250rpm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Torque:</span>
                <span>50 ft-lbs @ 5,750rpm</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Chassis</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Frame:</span>
                <span>Steel Trellis</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Weight:</span>
                <span>414 lbs (wet)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Wheelbase:</span>
                <span>56.5 inches</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Seat Height:</span>
                <span>31.7 inches</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Suspension & Brakes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Front:</span>
                <span>41mm Kayaba</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Rear:</span>
                <span>Preload Adjustable</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Front Brake:</span>
                <span>Brembo M4.32</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">ABS:</span>
                <span>Standard</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Mileage:</span>
                <span>&lt;1,000 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Year:</span>
                <span>2017</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Condition:</span>
                <span>Pristine</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>Bay Area, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-900">What Makes This Special</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Under 1,000 Miles</strong>
                <p className="text-gray-700 text-sm mt-1">Barely broken in—this bike is essentially new with full mechanical life ahead</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Custom Upgrades</strong>
                <p className="text-gray-700 text-sm mt-1">Tastefully customized with quality components that enhance performance and aesthetics</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Indoor Stored</strong>
                <p className="text-gray-700 text-sm mt-1">Always garaged and protected—no sun damage, no weather exposure</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Premium Termignoni Exhaust</strong>
                <p className="text-gray-700 text-sm mt-1">Factory Termignoni silencers with aluminum covers for authentic Ducati sound</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Pirelli Diablo Rosso II Tires</strong>
                <p className="text-gray-700 text-sm mt-1">Performance-oriented rubber with minimal wear—ready for spirited riding</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900">Ready to Ride</strong>
                <p className="text-gray-700 text-sm mt-1">Current registration, fresh fluids, and perfect mechanical condition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Photo Gallery</h2>
        <Gallery />
        <p className="text-center text-gray-700 mt-12 text-lg">
          Click any image to view in full-screen detail.
        </p>
      </section>

      {/* Perfect For */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Collectors</h3>
              <p className="text-gray-300 leading-relaxed">
                Low-mileage Ducatis are investment pieces. This Café Racer variant with under 1,000 miles is exceptionally
                rare and will appreciate with proper care.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Weekend Warriors</h3>
              <p className="text-gray-300 leading-relaxed">
                Perfect for canyon carving, coffee runs, and spirited rides. Light, agile, and powerful enough to thrill
                without overwhelming.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ducati Enthusiasts</h3>
              <p className="text-gray-300 leading-relaxed">
                Add a pristine Scrambler Café Racer to your collection. This bike exemplifies Ducati's blend of heritage
                styling and modern performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-green-100 text-green-900 px-6 py-2 rounded-full font-bold mb-8 border-2 border-green-300">
            Motivated Seller • Make an Offer
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">Best Offer</h2>
          <p className="text-2xl text-gray-800 font-semibold mb-4">Under 1,000 Miles • Pristine Condition</p>
          <p className="text-lg text-gray-700 mb-12 font-medium">
            Comparable 2017 Scrambler Café Racers with higher mileage: $8,000-$10,000
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Bike Details</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">2017 Ducati Scrambler Café Racer</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">Under 1,000 Miles</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">Custom Upgrades</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">Current Registration</span>
              </div>
            </div>
            <p className="text-gray-700 mt-6 italic">
              Motorcycle sold as-is. Clear title. Bay Area, California.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-700">
              Located in Bay Area, California. Available for in-person viewing by appointment.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <ContactForm />
          </div>
          <div className="mt-8 text-center text-gray-700">
            <p className="mb-2">Serious inquiries only</p>
            <p className="text-sm">Typical response time: 24 hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">2017 Ducati Scrambler</h3>
              <p className="text-gray-400 leading-relaxed">
                Pristine Café Racer variant with under 1,000 miles. Meticulously maintained, indoor stored,
                and ready for its next owner.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <ul className="space-y-2 text-gray-400">
                <li>803cc L-Twin Engine</li>
                <li>75hp / 50 ft-lbs torque</li>
                <li>414 lbs wet weight</li>
                <li>Brembo brakes, Termignoni exhaust</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-400 mb-4">
                Bay Area, California<br />
                Available by appointment
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2026 All rights reserved • Motorcycle sold as-is • Clear title</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
