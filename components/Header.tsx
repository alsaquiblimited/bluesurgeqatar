"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Watch", href: "/watch" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

// WhatsApp number in international format (no +, spaces or dashes)
const WHATSAPP_NUMBER = "97477325525";
const WHATSAPP_MESSAGE = "Hello, I would like to know more about POGO Kids Watches.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) =>
    `transition-colors duration-200 hover:text-[#B89555] ${
      isActive(href) ? "font-semibold text-[#B89555]" : "text-[#55514A]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E1D3] bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        {/* Company Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="min-w-0 max-w-[230px]"
          aria-label="POGO Kids Watches home"
        >
          <span className="block text-sm font-extrabold uppercase leading-5 tracking-wide text-[#282820] sm:text-base md:text-lg">
            POGO KIDS
            <span className="text-[#B89555]">.</span>
          </span>

          <span className="mt-1 block text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#81745F] sm:text-[10px]">
            Kids Watches
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="mailto:bluesurgeqatar974@gmail.com"
            aria-label="Email us"
            className="hidden rounded-full border border-[#E7DECE] p-2.5 text-[#81745F] transition hover:border-[#B89555] hover:bg-[#F8F5EF] hover:text-[#B89555] sm:inline-flex"
          >
            <Mail size={17} />
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="hidden items-center gap-2 rounded-full bg-[#B89555] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#987540] sm:flex"
          >
            <FaWhatsapp size={17} />
            <span>WhatsApp Us</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full border border-[#E7DECE] p-2.5 text-[#282820] transition hover:bg-[#F8F5EF] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E9E1D3] bg-white px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-5 text-sm font-medium">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={linkClass(href)}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}

            <div className="border-t border-[#E9E1D3]" />

            <div>
              <p className="font-bold uppercase leading-5 text-[#282820]">
                POGO KIDS WATCHES
              </p>
              <p className="mt-1 text-xs text-[#817969]">
                Official Contact · Qatar
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+97477325525"
                onClick={closeMenu}
                className="flex items-center gap-3 text-[#55514A] hover:text-[#B89555]"
              >
                <Phone size={17} className="text-[#B89555]" />
                +974 7732 5525
              </a>

              <a
                href="tel:+97477326773"
                onClick={closeMenu}
                className="flex items-center gap-3 text-[#55514A] hover:text-[#B89555]"
              >
                <Phone size={17} className="text-[#B89555]" />
                +974 7732 6773
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:bluesurgeqatar974@gmail.com"
                onClick={closeMenu}
                className="flex items-start gap-3 break-all text-[#55514A] hover:text-[#B89555]"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#B89555]" />
                bluesurgeqatar974@gmail.com
              </a>

              <a
                href="mailto:pogoqatar974@gmail.com"
                onClick={closeMenu}
                className="flex items-start gap-3 break-all text-[#55514A] hover:text-[#B89555]"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#B89555]" />
                pogoqatar974@gmail.com
              </a>
            </div>

            {/* WhatsApp (mobile) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-[#B89555] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#987540]"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
              <ArrowUpRight size={17} />
            </a>

            <Link
              href="/watch"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full border border-[#D8C39B] px-5 py-3.5 text-sm font-semibold text-[#A98547] transition hover:bg-[#F3EBDD]"
            >
              Explore Watches
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
