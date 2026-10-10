"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    _hp: "", // Honeypot field for spam prevention
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);

    // Client-side validation checks
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!trimmedPhone || trimmedPhone.length < 6) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setErrorMessage("Please enter your message (at least 5 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          message: trimmedMessage,
          _hp: formData._hp,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
      } else {
        const errorMsg =
          result?.error ||
          "We were unable to deliver your message. Please try again or contact us directly.";
        setErrorMessage(errorMsg);
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#282820]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E9E1D3]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E9E1D3]/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#D8C39B]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#817969] transition hover:text-[#B89555]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C39B]/60 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#9A7940]">
              <span className="h-2 w-2 rounded-full bg-[#B89555]" />
              WE&apos;RE HERE TO HELP
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s start a
              <span className="block font-serif italic text-[#B89555]">
                conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#817969] sm:text-lg">
              Have a question about POGO smartwatches? Our team is here to
              help with product information, orders, and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Business Details */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[#E9E1D3] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3EBDD] text-[#9A7940]">
                <ShieldCheck size={23} />
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                Pogokids Watches
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#817969]">
                Your point of contact for POGO smartwatches in Qatar. Get in
                touch with us for product enquiries and assistance.
              </p>

              <div className="mt-7 space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#B89555]">
                    <Phone size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold">Call Us</h3>

                    <a
                      href="tel:+97477325525"
                      className="mt-2 block text-sm text-[#817969] transition hover:text-[#B89555]"
                    >
                      +974 7732 5525
                    </a>

                    <a
                      href="tel:+97477326773"
                      className="mt-1 block text-sm text-[#817969] transition hover:text-[#B89555]"
                    >
                      +974 7732 6773
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#B89555]">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold">Email Us</h3>

                    <a
                      href="mailto:bluesurgeqatar974@gmail.com"
                      className="mt-2 block break-all text-sm text-[#817969] transition hover:text-[#B89555]"
                    >
                      bluesurgeqatar974@gmail.com
                    </a>

                    <a
                      href="mailto:pogoqatar974@gmail.com"
                      className="mt-2 block break-all text-sm text-[#817969] transition hover:text-[#B89555]"
                    >
                      pogoqatar974@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#B89555]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="mt-2 text-sm text-[#817969]">
                      Qatar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-[#282820] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D8C39B]">
                NEED QUICK ASSISTANCE?
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                We&apos;re just a call away.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Contact our team directly for your questions and enquiries.
              </p>

              <a
                href="tel:+97477325525"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D8C39B] px-5 py-3 text-sm font-semibold text-[#282820] transition hover:bg-white"
              >
                Call Our Team
                <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[#E9E1D3] bg-white p-6 shadow-sm sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#B89555]">
                CONTACT FORM
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Send us a message
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#817969]">
                Fill in the details below and tell us how we can help.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-[#D8C39B] bg-[#FAF8F3] p-6"
              >
                <CheckCircle2
                  size={35}
                  className="text-[#9A7940]"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  Thank you! Your message has been submitted successfully.
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#817969]">
                  Our team at Pogokids Watches has received your inquiry and
                  will get back to you shortly. You can also contact us
                  directly using the phone numbers or email addresses listed
                  on this page.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      message: "",
                      _hp: "",
                    });
                  }}
                  className="mt-5 rounded-full border border-[#D8C39B] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#F3EBDD]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Banner */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-800"
                  >
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-600" />
                    <div className="flex-1">
                      <p className="font-medium">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Honeypot field for bot spam prevention */}
                <div
                  className="hidden"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <label htmlFor="_hp">Please leave this blank</label>
                  <input
                    id="_hp"
                    name="_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name <span className="text-[#B89555]">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      disabled={isSubmitting}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#E9E1D3] bg-[#FAF8F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A092] focus:border-[#B89555] focus:ring-2 focus:ring-[#B89555]/15 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone Number <span className="text-[#B89555]">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      disabled={isSubmitting}
                      placeholder="+974 XXXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#E9E1D3] bg-[#FAF8F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A092] focus:border-[#B89555] focus:ring-2 focus:ring-[#B89555]/15 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address <span className="text-[#B89555]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#E9E1D3] bg-[#FAF8F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A092] focus:border-[#B89555] focus:ring-2 focus:ring-[#B89555]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Message <span className="text-[#B89555]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={3000}
                    disabled={isSubmitting}
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-y rounded-xl border border-[#E9E1D3] bg-[#FAF8F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A8A092] focus:border-[#B89555] focus:ring-2 focus:ring-[#B89555]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#282820] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#B89555] disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs leading-5 text-[#817969]">
                  Your details are sent directly to our team at Pogokids
                  Watches. We will get back to you promptly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
