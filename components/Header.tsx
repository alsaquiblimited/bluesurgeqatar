"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Watch", href: "/watch" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) =>
    `transition-colors duration-200 hover:text-[#B89555] ${isActive(href)
      ? "font-semibold text-[#B89555]"
      : "text-[#55514A]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E1D3] bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        {/* Company Name */}
        <Link
          href="/"
          onClick={closeMenu}
          className="min-w-0 max-w-[230px]"
          aria-label="Blue Surge Trading and Contracting home"
        >
          <span className="block text-sm font-extrabold uppercase leading-5 tracking-wide text-[#282820] sm:text-base md:text-lg">
            BLUE SURGE
            <span className="text-[#B89555]">.</span>
          </span>

          <span className="mt-1 block text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#81745F] sm:text-[10px]">
            Trading and Contracting
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

          <a
            href="tel:+97477325525"
            className="hidden items-center gap-2 rounded-full bg-[#B89555] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#987540] sm:flex"
          >
            <Phone size={15} />
            <span>Contact Us</span>
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
                BLUE SURGE TRADING AND CONTRACTING
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

            <Link
              href="/watch"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-[#B89555] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#987540]"
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
