
"use client";

import React, { useState } from "react";
import {
  Menu,
  MapPin,
  Video,
  ShieldCheck,
  Siren,
  ArrowUpRight,
  X,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description: "Know where your child is.",
  },
  {
    icon: Video,
    title: "Video & Voice Calls",
    description: "Stay connected anytime.",
  },
  {
    icon: Siren,
    title: "SOS Emergency",
    description: "One tap for help.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Zones",
    description: "Get location alerts.",
  },
];

export default function PogoHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#191919]">
      {/* NAVBAR */}
      {/* <header className="sticky top-0 z-50 border-b border-[#E9E1D3] bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#home"
            className="group flex items-center gap-2"
            aria-label="POGO home"
          >
            <span className="text-3xl font-black tracking-[-0.08em]">
              POGO<span className="text-[#B89555]">.</span>
            </span>
            <span className="hidden border-l border-[#DED4C2] pl-3 text-[9px] font-medium uppercase leading-4 tracking-[0.2em] text-[#81745F] sm:block">
              Smart care.
              <br />
              Little explorers.
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#55514A] md:flex">
            <a
              href="#home"
              className="transition hover:text-[#B89555]"
            >
              Home
            </a>
            <a
              href="#watch"
              className="transition hover:text-[#B89555]"
            >
              Our Watch
            </a>
            <a
              href="#features"
              className="transition hover:text-[#B89555]"
            >
              Features
            </a>
            <a
              href="#about"
              className="transition hover:text-[#B89555]"
            >
              About Us
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#watch"
              className="hidden items-center gap-2 rounded-full bg-[#B89555] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#987540] sm:flex"
            >
              Explore Watch
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-[#E7DECE] p-2.5 transition hover:bg-[#F8F5EF] md:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-[#E9E1D3] bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-medium text-[#39352E]">
              {[
                ["Home", "#home"],
                ["Our Watch", "#watch"],
                ["Features", "#features"],
                ["About Us", "#about"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}

              <a
                href="#watch"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#B89555] px-5 py-3 text-white"
              >
                Explore Watch <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        )}
      {/* </header> */} 

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 md:py-20 lg:gap-16 lg:py-24"
      >
        {/* Subtle decorative background */}
        <div className="pointer-events-none absolute -left-40 top-20 -z-0 h-80 w-80 rounded-full bg-[#F8F2E7] blur-3xl" />

        <div className="relative z-10 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5D5B7] bg-[#FCF9F2] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#B89555]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#947440]">
              Smart safety for kids
            </span>
          </div>

          <h1 className="mt-7 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Your Child&apos;s
            <br />
            Safety,{" "}
            <span className="font-serif font-normal italic text-[#B89555]">
              Our Promise.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#706B63] sm:text-lg">
            Stay connected. Stay confident. Stay POGO. Thoughtfully
            designed smart tracking and secure communication for little
            explorers and the parents who care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/watch"
              className="inline-flex items-center gap-3 rounded-full bg-[#B89555] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#B89555]/15 transition hover:-translate-y-0.5 hover:bg-[#987540]"
            >
              Explore POGO Watch
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-[#DDD4C5] bg-white px-6 py-4 text-sm font-semibold text-[#29251F] transition hover:border-[#B89555]"
            >
              Discover Features
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#706B63]">
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#B89555]" />
              Designed for kids
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-[#B89555]" />
              Real-time tracking
            </span>
          </div>

          <div className="mt-10 h-px max-w-md bg-[#E9E1D3]" />
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#948875]">
            Stylish · Smart · Secure
          </p>
        </div>

        {/* WATCH IMAGE */}
        <div
          id="watch"
          className="relative order-1 flex min-h-[330px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#EEE7DC] bg-[#fffff] p-5 sm:min-h-[420px] md:order-2 md:min-h-[540px] md:p-8"
        >
          <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-64 w-64 rounded-full border border-[#E7D9BE]" />
          <div className="pointer-events-none absolute bottom-[-100px] left-[-50px] h-72 w-72 rounded-full border border-[#E7D9BE]" />

          <img
            src="/w1.jpeg"
            alt="POGO kids smart GPS tracking watch"
            className="relative z-10 h-full max-h-[500px] rounded-2xl w-full drop-shadow-xl"
          />

          <div className="absolute bottom-5 left-5 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:bottom-7 sm:left-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A18756]">
              Made for little explorers
            </p>
            <p className="mt-1 text-sm font-semibold text-[#29251F]">
              Confidence in every step.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section
        id="features"
        className="border-y border-[#E9E1D3] bg-[#FCFBF8]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-10">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`flex items-start gap-4 py-6 md:px-5 md:py-8 ${
                index !== features.length - 1
                  ? "border-b border-[#E9E1D3] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="shrink-0 rounded-2xl border border-[#E7D8BB] bg-white p-3 text-[#B89555]">
                <Icon size={22} strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#28241F]">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#837B70]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY SECTION */}
<section
  id="gallery"
  className="border-b border-[#E9E1D3] bg-[#FAF8F3] px-5 py-16 md:px-10 md:py-24"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
        A closer look at POGO
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#292720] sm:text-4xl md:text-5xl">
        Small watch. <span className="font-serif italic text-[#B89555]">Big possibilities.</span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-[#817969] md:text-base">
        Discover how POGO brings everyday adventures, smart features,
        and peace of mind together in one little companion.
      </p>
    </div>

    {/* Video Gallery */}
    <div className="relative mx-auto mt-10 max-w-5xl">
      <div className="absolute -inset-3 rounded-[2rem] bg-[#E9DCC0]/40 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E5DCCB] bg-white p-2 shadow-xl sm:rounded-[2rem] sm:p-3">
         <video
                                src="/v2.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                preload="metadata"
                                className="h-full w-full object-cover"
                                aria-label="POGO kids smartwatch product video"
                            >
                                Your browser does not support video playback.
                            </video>
      </div>

      {/* Caption */}
      <div className="mt-5 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <h3 className="text-base font-semibold text-[#292720]">
            Meet your child&apos;s everyday companion
          </h3>
          <p className="mt-1 text-sm text-[#817969]">
            Explore the world of POGO, one adventure at a time.
          </p>
        </div>

        <a
          href="/v1feat.mp4"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#DED4C2] px-5 py-3 text-sm font-semibold text-[#514A3F] transition hover:border-[#B89555] hover:bg-white"
        >
          View video
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
          The POGO promise
        </p>

        <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Smart technology.
            <br />
            <span className="font-serif font-normal italic text-[#B89555]">
              More peace of mind.
            </span>
          </h2>

          <p className="max-w-xl text-base leading-8 text-[#706B63]">
            POGO brings together location tracking, emergency assistance,
            and connected communication in a kid-friendly smartwatch.
            Helping parents stay connected while giving children more
            confidence to explore.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-5 mb-10 rounded-[2rem] bg-[#F8F5EF] px-6 py-12 text-center sm:mx-10 md:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
          Stay connected. Stay worry-free.
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A little watch. A whole lot of reassurance.
        </h2>
        <a
          href="/watch"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B89555] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#987540]"
        >
          Discover POGO <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}