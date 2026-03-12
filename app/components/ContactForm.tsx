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
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Thank you for your inquiry! I'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
          Something went wrong. Please try again or email directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-900 font-bold mb-2 text-base">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-gray-900 placeholder-gray-500 text-base"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-900 font-bold mb-2 text-base">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-gray-900 placeholder-gray-500 text-base"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-900 font-bold mb-2 text-base">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-gray-900 placeholder-gray-500 text-base"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-900 font-bold mb-2 text-base">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your interest in the bike..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-gray-900 placeholder-gray-500 text-base"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
