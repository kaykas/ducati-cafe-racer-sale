import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-ducati-red selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-neutral-950"></div>
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-ducati-red opacity-[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-[-10%] w-[40vw] h-[60vw] bg-white opacity-[0.02] rounded-full blur-[100px] rotate-45"></div>
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,black_40%,transparent)] opacity-50"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 font-display font-black text-[25vw] leading-none text-neutral-900 opacity-40 select-none tracking-tighter">
          DUCATI
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-8 lg:px-16 py-24">
        <div className="max-w-6xl w-full mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-ducati-red shadow-[0_0_10px_rgba(213,0,0,0.8)]"></div>
            <div className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 px-4 py-1.5 skew-x-[-15deg]">
              <span className="block skew-x-[15deg] text-ducati-accent font-bold text-xs tracking-[0.25em] uppercase">
                Under 1,000 Miles
              </span>
              <span className="block skew-x-[15deg] text-neutral-600">•</span>
              <span className="block skew-x-[15deg] text-white font-bold text-xs tracking-[0.25em] uppercase">
                Pristine Condition
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <div className="flex flex-col mb-8 relative">
            <h2 className="font-display font-bold text-5xl lg:text-6xl uppercase tracking-tight text-neutral-400 italic leading-[0.9]">
              2017 Ducati
            </h2>
            <h1 className="font-display font-black text-7xl lg:text-[10rem] uppercase tracking-tighter text-white italic leading-[0.85] relative -left-1">
              Scrambler
            </h1>
            <h2 className="font-display font-bold text-5xl lg:text-7xl uppercase tracking-widest text-transparent text-stroke-2 italic leading-[0.9] mt-2">
              Café Racer
            </h2>
          </div>

          {/* Description */}
          <div className="relative pl-6 mb-12 max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ducati-red to-transparent"></div>
            <p className="text-xl text-neutral-400 font-light leading-relaxed">
              Italian racing heritage meets aggressive retro styling. A flawlessly maintained machine engineered for the pure thrill of the ride.
            </p>
          </div>

          {/* Price and CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-12">
            {/* Price */}
            <div className="flex flex-col relative group">
              <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Priced to Sell</span>
              </div>
              <div className="font-display text-7xl font-black text-white tracking-tighter drop-shadow-lg">
                $8,495
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="relative group bg-ducati-red text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden clip-angled transition-all duration-300 hover:bg-ducati-accent hover:shadow-[0_0_20px_rgba(213,0,0,0.4)] px-10 py-5 text-center flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Owner
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700 ease-in-out"></div>
              </a>

              <a
                href="#gallery"
                className="relative group bg-transparent border-2 border-neutral-700 text-white font-bold uppercase tracking-[0.2em] text-sm clip-angled transition-all duration-300 hover:border-white hover:bg-white hover:text-black px-10 py-5 text-center"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-20 w-full bg-neutral-950 border-t border-neutral-800">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ducati-red/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          <div className="px-6 py-8 flex flex-col justify-center items-center hover:bg-neutral-900/50 transition-colors">
            <span className="text-neutral-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Mileage</span>
            <span className="font-display text-2xl font-bold text-white tracking-wide">&lt;1,000 Miles</span>
          </div>
          <div className="px-6 py-8 flex flex-col justify-center items-center hover:bg-neutral-900/50 transition-colors">
            <span className="text-neutral-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Engine</span>
            <span className="font-display text-2xl font-bold text-white tracking-wide">803cc L-Twin</span>
          </div>
          <div className="px-6 py-8 flex flex-col justify-center items-center hover:bg-neutral-900/50 transition-colors">
            <span className="text-neutral-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Power</span>
            <span className="font-display text-2xl font-bold text-white tracking-wide">75 HP</span>
          </div>
          <div className="px-6 py-8 flex flex-col justify-center items-center hover:bg-neutral-900/50 transition-colors">
            <span className="text-neutral-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Weight</span>
            <span className="font-display text-2xl font-bold text-white tracking-wide">414 lbs</span>
          </div>
        </div>
      </div>

      {/* The Story */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-32">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-ducati-red"></div>
            <span className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">The Story</span>
            <div className="h-[2px] w-16 bg-ducati-red"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6 text-white uppercase tracking-tight">
            Italian Performance Art
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            This isn't just a motorcycle—it's a meticulously preserved piece of Ducati's legendary Scrambler lineage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-4xl font-bold text-white uppercase">Barely Broken In</h3>
            <p className="text-lg text-neutral-400 leading-relaxed">
              This 2017 Ducati Scrambler Café Racer has less than 1,000 miles on the odometer. It's been stored indoors,
              maintained meticulously, and ridden sparingly. This is a collector-grade machine that deserves an owner
              who will appreciate its pedigree.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              The Scrambler Café Racer pays homage to the 1950s British café racer culture with modern Ducati engineering.
              Featuring <strong className="text-white">clip-on handlebars</strong>, a <strong className="text-white">quilted tan leather seat</strong>, race-inspired number plates,
              and aggressive Pirelli Diablo Rosso II tires—this bike turns heads everywhere it goes.
            </p>
            <div className="border-l-4 border-ducati-red bg-neutral-900/50 p-6">
              <p className="text-lg font-semibold text-white mb-2">Why This Matters</p>
              <p className="text-neutral-400">
                Finding a Ducati Scrambler Café Racer with under 1,000 miles is exceptionally rare. Most have been ridden hard
                or modified heavily. This bike's originality and pristine condition make it a true find.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/images/ducati-garage.jpeg"
              alt="Ducati Scrambler in garage showing pristine condition"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Heritage Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 hover:border-ducati-red transition-colors">
            <div className="w-12 h-12 bg-ducati-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ducati-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-display text-2xl font-bold text-white mb-3 uppercase">803cc L-Twin</h4>
            <p className="text-neutral-400">
              Ducati's legendary 90-degree L-twin delivers 75 horsepower at 8,250 rpm with that unmistakable Desmodromic
              valve signature. Air/oil-cooled for classic simplicity with modern reliability.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 hover:border-ducati-red transition-colors">
            <div className="w-12 h-12 bg-ducati-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ducati-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="font-display text-2xl font-bold text-white mb-3 uppercase">Race Design</h4>
            <p className="text-neutral-400">
              Clip-on handlebars, aggressive riding position, number 54 plates honoring Italian racer Bruno Spaggiari,
              quilted tan leather seat, and red-rimmed fuel tank. Every detail screams performance.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 hover:border-ducati-red transition-colors">
            <div className="w-12 h-12 bg-ducati-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ducati-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-display text-2xl font-bold text-white mb-3 uppercase">Premium Parts</h4>
            <p className="text-neutral-400">
              Brembo M4.32 radial monoblock front brakes, 41mm Kayaba inverted forks, Pirelli Diablo Rosso II tires,
              and Termignoni exhaust. This bike has the best of Italian engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-32 bg-neutral-900/30">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-ducati-red"></div>
            <span className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">Technical</span>
            <div className="h-[2px] w-16 bg-ducati-red"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">
            Complete Specifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Engine",
              specs: [
                { label: "Type", value: "L-Twin" },
                { label: "Displacement", value: "803cc" },
                { label: "Power", value: "75hp @ 8,250rpm" },
                { label: "Torque", value: "50 ft-lbs @ 5,750rpm" }
              ]
            },
            {
              title: "Chassis",
              specs: [
                { label: "Frame", value: "Steel Trellis" },
                { label: "Weight", value: "414 lbs (wet)" },
                { label: "Wheelbase", value: "56.5 inches" },
                { label: "Seat Height", value: "31.7 inches" }
              ]
            },
            {
              title: "Suspension",
              specs: [
                { label: "Front", value: "41mm Kayaba" },
                { label: "Rear", value: "Preload Adj." },
                { label: "Front Brake", value: "Brembo M4.32" },
                { label: "ABS", value: "Standard" }
              ]
            },
            {
              title: "Details",
              specs: [
                { label: "Mileage", value: "<1,000 miles" },
                { label: "Year", value: "2017" },
                { label: "Condition", value: "Pristine" },
                { label: "Location", value: "Bay Area, CA" }
              ]
            }
          ].map((category, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-ducati-red transition-colors">
              <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-wide">{category.title}</h3>
              <ul className="space-y-4 text-neutral-400">
                {category.specs.map((spec, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="font-semibold">{spec.label}:</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-16 bg-neutral-900/50 border border-neutral-800 p-12">
          <h3 className="font-display text-3xl font-bold mb-8 text-center text-white uppercase">What Makes This Special</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { title: "Under 1,000 Miles", desc: "Barely broken in—this bike is essentially new with full mechanical life ahead" },
              { title: "Custom Upgrades", desc: "Tastefully customized with quality components that enhance performance and aesthetics" },
              { title: "Indoor Stored", desc: "Always garaged and protected—no sun damage, no weather exposure" },
              { title: "Termignoni Exhaust", desc: "Factory Termignoni silencers with aluminum covers for authentic Ducati sound" },
              { title: "Pirelli Diablo Rosso II", desc: "Performance-oriented rubber with minimal wear—ready for spirited riding" },
              { title: "Ready to Ride", desc: "Current registration, fresh fluids, and perfect mechanical condition" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-ducati-red mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-white">{feature.title}</strong>
                  <p className="text-neutral-400 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-32">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-ducati-red"></div>
            <span className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">Images</span>
            <div className="h-[2px] w-16 bg-ducati-red"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">
            Photo Gallery
          </h2>
        </div>
        <Gallery />
        <p className="text-center text-neutral-500 mt-12 text-lg">
          Click any image to view in full-screen detail
        </p>
      </section>

      {/* Perfect For */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-32 bg-neutral-900/30">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">
            Perfect For
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              title: "Collectors",
              desc: "Low-mileage Ducatis are investment pieces. This Café Racer variant with under 1,000 miles is exceptionally rare and will appreciate with proper care."
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              title: "Weekend Warriors",
              desc: "Perfect for canyon carving, coffee runs, and spirited rides. Light, agile, and powerful enough to thrill without overwhelming."
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
              title: "Enthusiasts",
              desc: "Add a pristine Scrambler Café Racer to your collection. This bike exemplifies Ducati's blend of heritage styling and modern performance."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-ducati-red transition-colors">
              <div className="w-16 h-16 bg-ducati-red/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-ducati-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white uppercase">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 py-32 text-center">
        <div className="inline-block bg-neutral-900 border border-ducati-red/50 text-ducati-accent px-6 py-2 skew-x-[-10deg] font-bold mb-8 uppercase tracking-widest text-sm">
          <span className="block skew-x-[10deg]">Priced to Sell • Serious Inquiries Only</span>
        </div>
        <h2 className="font-display text-7xl lg:text-9xl font-black mb-6 text-white tracking-tighter">$8,495</h2>
        <p className="text-2xl text-neutral-400 font-semibold mb-4">Under 1,000 Miles • Pristine Condition</p>
        <p className="text-lg text-neutral-500 mb-12">
          Comparable 2017 Scrambler Café Racers with higher mileage: $6,990-$8,990
        </p>
        <div className="bg-neutral-900/50 border border-neutral-800 p-8 mb-12">
          <h3 className="font-display text-2xl font-bold mb-4 text-white uppercase">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "2017 Ducati Scrambler Café Racer",
              "Under 1,000 Miles",
              "Custom Upgrades",
              "Current Registration"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <svg className="w-5 h-5 text-ducati-red mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-400">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 mt-6 italic">
            Motorcycle sold as-is. Clear title. Bay Area, California.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-3xl mx-auto px-8 lg:px-16 py-32">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-ducati-red"></div>
            <span className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">Contact</span>
            <div className="h-[2px] w-16 bg-ducati-red"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-4 text-white uppercase tracking-tight">Get in Touch</h2>
          <p className="text-xl text-neutral-400">
            Located in Bay Area, California. Available for in-person viewing by appointment.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 md:p-12">
          <ContactForm />
        </div>
        <div className="mt-8 text-center text-neutral-500">
          <p className="mb-2">Serious inquiries only</p>
          <p className="text-sm">Typical response time: 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-white uppercase">2017 Ducati Scrambler</h3>
              <p className="text-neutral-500 leading-relaxed">
                Pristine Café Racer variant with under 1,000 miles. Meticulously maintained, indoor stored,
                and ready for its next owner.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-white uppercase">Specifications</h3>
              <ul className="space-y-2 text-neutral-500">
                <li>803cc L-Twin Engine</li>
                <li>75hp / 50 ft-lbs torque</li>
                <li>414 lbs wet weight</li>
                <li>Brembo brakes, Termignoni exhaust</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-white uppercase">Location</h3>
              <p className="text-neutral-500 mb-4">
                Bay Area, California<br />
                Available by appointment
              </p>
            </div>
          </div>
          <div className="border-t border-neutral-900 pt-8 text-center text-neutral-600 text-sm">
            <p>© 2026 All rights reserved • Motorcycle sold as-is • Clear title</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
