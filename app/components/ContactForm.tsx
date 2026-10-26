"use client";

import { useState, FormEvent } from "react";

const INQUIRY_PRESETS = [
  {
    label: "Schedule an Oakland / Piedmont Viewing",
    text: "Hi, I'm in the Bay Area and would like to schedule an in-person viewing of your 2017 Ducati Scrambler Café Racer this week. What days/times work best?",
  },
  {
    label: "Submit a Cash Offer ($8,495 Ask)",
    text: "Hi, I'm a serious buyer with cash in hand interested in your 2017 Ducati Scrambler Café Racer. I'd like to discuss an offer and pickup timing.",
  },
  {
    label: "Ask a Mechanical / Title Question",
    text: "Hi, I have a quick question about the 2017 Ducati Scrambler Café Racer:",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {status === "success" && (
        <div className="bg-emerald-950/5 border border-emerald-700 text-emerald-900 px-6 py-4 mb-6 text-sm">
          <strong>Inquiry received.</strong> Your message has been sent directly to the owner. Expect a reply within a few hours.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-950/5 border border-[#B81D13] text-[#B81D13] px-6 py-4 mb-6 text-sm">
          Something went wrong sending your message. Please try again in a moment.
        </div>
      )}

      <div className="mb-6">
        <p className="text-xs font-mono-num uppercase tracking-wider text-[#57534E] mb-2.5">
          Quick Inquiry Presets (Click to Pre-Fill):
        </p>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setFormData({ ...formData, message: preset.text })}
              className="text-xs font-mono-num border border-[#E2DDD5] bg-[#FAF8F5] hover:border-[#141311] text-[#141311] px-3 py-2 transition-colors text-left"
            >
              + {preset.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-[#141311] font-mono-num text-xs uppercase tracking-wider mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#141311] focus:outline-none text-[#141311] placeholder-[#57534E]/50 text-sm transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#141311] font-mono-num text-xs uppercase tracking-wider mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#141311] focus:outline-none text-[#141311] placeholder-[#57534E]/50 text-sm transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[#141311] font-mono-num text-xs uppercase tracking-wider mb-2"
          >
            Mobile Number (Optional, for faster text coordination)
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(415) 555-0199"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#141311] focus:outline-none text-[#141311] placeholder-[#57534E]/50 text-sm transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[#141311] font-mono-num text-xs uppercase tracking-wider mb-2"
          >
            Message / Viewing Request *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Let me know when you'd like to see the bike in Oakland / Piedmont or share your offer..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-[#141311] focus:outline-none text-[#141311] placeholder-[#57534E]/50 text-sm transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#B81D13] hover:bg-[#96150D] text-white font-mono-num text-xs uppercase tracking-[0.2em] py-4 px-8 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {status === "loading" ? "Sending Inquiry..." : "Send Direct Message to Owner →"}
        </button>
      </form>
    </div>
  );
}
