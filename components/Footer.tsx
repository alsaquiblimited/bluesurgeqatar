"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Our Watches", href: "/watch" },
    { label: "Features", href: "/features" },
    { label: "About Us", href: "/about" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/contact" },
    { label: "Help Center", href: "/contact" },
  ],
  Information: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms & Conditions", href: "/" },
    { label: "Shipping Policy", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="top"
      className="border-t border-[#E9E1D3] bg-[#FAF8F3] text-[#292720]"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Company Branding and Contact Details */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Blue Surge Trading and Contracting home"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B89555] text-white shadow-sm">
                <span className="text-xl font-extrabold">BS</span>
              </span>

              <span className="min-w-0">
                <span className="block text-lg font-extrabold leading-6 tracking-wide sm:text-xl">
                  BLUE SURGE
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#A18756]">
                  Trading and Contracting
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#817969]">
              BLUE SURGE TRADING AND CONTRACTING brings you POGO
              smartwatches, helping families stay connected while little
              explorers discover their world.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DCCB] bg-white text-[#817969] transition hover:border-[#B89555] hover:text-[#B89555]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DCCB] bg-white text-[#817969] transition hover:border-[#B89555] hover:text-[#B89555]"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DCCB] bg-white text-[#817969] transition hover:border-[#B89555] hover:text-[#B89555]"
              >
                <FaYoutube size={17} />
              </a>
            </div>

            {/* Company Contact Details */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A18756]">
                Get in Touch
              </h3>

              <a
                href="tel:+97477325525"
                className="flex items-start gap-3 text-sm text-[#70685A] transition hover:text-[#B89555]"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-[#B89555]" />
                <span>+974 7732 5525</span>
              </a>

              <a
                href="tel:+97477326773"
                className="flex items-start gap-3 text-sm text-[#70685A] transition hover:text-[#B89555]"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-[#B89555]" />
                <span>+974 7732 6773</span>
              </a>

              <a
                href="mailto:bluesurgeqatar974@gmail.com"
                className="flex items-start gap-3 break-all text-sm text-[#70685A] transition hover:text-[#B89555]"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-[#B89555]" />
                <span>bluesurgeqatar974@gmail.com</span>
              </a>

              <a
                href="mailto:pogoqatar974@gmail.com"
                className="flex items-start gap-3 break-all text-sm text-[#70685A] transition hover:text-[#B89555]"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-[#B89555]" />
                <span>pogoqatar974@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#70685A]">
                <MapPin size={16} className="shrink-0 text-[#B89555]" />
                <span>Qatar</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#A18756]">
                {heading}
              </h3>

              <ul className="mt-5 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-[#70685A] transition hover:text-[#B89555]"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="mt-14 grid gap-4 rounded-2xl border border-[#E9E1D3] bg-white/70 p-5 sm:grid-cols-2 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0E8D9] text-[#A98547]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold">Designed with Care</p>
              <p className="mt-1 text-xs text-[#817969]">
                Thoughtful features for little explorers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0E8D9] text-[#A98547]">
              <Heart size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold">Made for Families</p>
              <p className="mt-1 text-xs text-[#817969]">
                Created with everyday family needs in mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E9E1D3]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-10 sm:text-left">
          <p className="text-xs text-[#817969]">
            © 2026 BLUE SURGE TRADING AND CONTRACTING.            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#817969]">
            Made for little adventures
            <Heart
              size={12}
              className="fill-[#B89555] text-[#B89555]"
            />
          </p>

          <a
            href="#top"
            className="text-xs font-semibold text-[#A18756] transition hover:text-[#806334]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}