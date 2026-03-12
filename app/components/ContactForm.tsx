"use client";

import { useState, FormEvent } from "react";

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
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      {status === "success" && (
        <div className="bg-green-900/20 border border-green-700 text-green-400 px-6 py-4 rounded-lg mb-6">
          Thank you for your inquiry! I'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-900/20 border border-red-700 text-red-400 px-6 py-4 rounded-lg mb-6">
          Something went wrong. Please try again or email directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-neutral-300 font-bold mb-2 text-sm uppercase tracking-wider">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-ducati-red focus:border-ducati-red text-white placeholder-neutral-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-neutral-300 font-bold mb-2 text-sm uppercase tracking-wider">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-ducati-red focus:border-ducati-red text-white placeholder-neutral-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-neutral-300 font-bold mb-2 text-sm uppercase tracking-wider">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-ducati-red focus:border-ducati-red text-white placeholder-neutral-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-neutral-300 font-bold mb-2 text-sm uppercase tracking-wider">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your interest in the bike..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-ducati-red focus:border-ducati-red text-white placeholder-neutral-500 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full relative group bg-ducati-red text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden clip-angled transition-all duration-300 hover:bg-ducati-accent hover:shadow-[0_0_20px_rgba(213,0,0,0.4)] px-10 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {status === "loading" ? "Sending..." : "Send Message"}
          </span>
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700 ease-in-out"></div>
        </button>
      </form>
    </div>
  );
}
