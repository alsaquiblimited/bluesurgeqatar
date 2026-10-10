"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Heart,
  Watch,
  FileText,
} from "lucide-react";

const colors = [
  { id: 2, name: "Midnight Black", watchName: "POGO Guardian", accent: "#393939" },
  { id: 3, name: "Blush Pink", watchName: "POGO Play", accent: "#DDA6A6" },
  { id: 4, name: "Ocean Blue", watchName: "POGO Active", accent: "#8FAFCA" },
];

type Spec = [string, string];

// LT53 specs (POGO Explorer and POGO Guardian) - from the MOTTO quotation
const specsLT53: Spec[] = [
  ["Screen", "1.4 inch IPS screen, 240x240 pixels"],
  ["Touch panel", "G+F, lamination, Corning Glass"],
  ["Housing", "Plastic"],
  ["Chipset", "Unisoc UMS9117 (W117), single core, 1GHz"],
  ["OS", "RTOS"],
  ["Memory", "RAM 64MB + ROM 128MB"],
  ["Location", "GPS, WiFi, LBS"],
  ["WiFi", "Wireless 802.11 b/g/n"],
  ["Video call", "Supported"],
  ["2G network", "GSM B2, 3, 5, 8"],
  ["3G network", "WCDMA B1, 2, 5, 8"],
  ["4G network", "LTE B1, 2, 3, 5, 7, 8, 20, 28A, 38, 39, 40, 41"],
  ["SIM card slot", "Nano SIM card"],
  ["Contacts", "3 SOS + 15 phone numbers"],
  ["G-sensor", "Supported"],
  ["Camera", "0.3MP"],
  ["Waterproof level", "IP67"],
  ["Battery", "Polymer lithium battery, 700mAh"],
  ["Accessories", "Magnetic charge cable, user manual, SIM card picker"],
  ["App", "Junicare (Android and iOS)"],
  [
    "Other features",
    "Pedometer, voice chat, group chat, make friends, remote camera, remote monitoring, remote shutdown, do-not-disturb mode, electronic fence (GEO), history tracking, alarm clock, find watch, phone book, bind/unbind watch",
  ],
];

// LT51 specs (POGO Play and POGO Active) - from the POGO LT51 listing file
const specsLT51: Spec[] = [
  ["Screen", "1.32 inch IPS touch screen, 320x320 pixels"],
  ["Touch panel", "Full lamination, 2.5D"],
  ["Housing", "Plastic housing, UV (front housing) + rubber painting"],
  ["Chipset", "Spreadtrum SL8521E, 1.2GHz dual-core ARM Cortex A7MP"],
  ["OS", "Android 8.1"],
  ["Memory", "RAM 1GB + ROM 8GB"],
  ["GPS", "SL8521E, L1 1575.42MHz C/A code, 22CH"],
  ["Location", "GPS, AGPS, LBS, WiFi"],
  ["WiFi", "Wireless 802.11 b/g/n"],
  ["Video call", "By app or VoLTE"],
  ["2G network", "GSM B2/3/8"],
  ["3G network", "WCDMA B1/2/8"],
  ["4G network", "LTE B1, 3, 7, 8, 20, 28A, 38, 39, 40, 41"],
  ["SIM card slot", "Nano SIM card"],
  ["Calling", "3 SOS + 15 phone numbers"],
  ["SOS", "Supported"],
  ["G-sensor", "Supported (three axis)"],
  ["Remote monitoring", "Supported"],
  ["Camera", "0.3MP"],
  ["Waterproof level", "IP67 (water resistant)"],
  ["Battery", "Lithium battery, 700mAh, 642731"],
  ["Dimension", "47.3 x 42.2 x 16 mm / 55g"],
  ["Accessories", "Magnetic USB cable, SIM card picker and user manual"],
  ["App", "JuniCare (Android and iOS)"],
  [
    "Other features",
    "Pedometer, electronic fence (GEO), history tracking, alarm clock, find watch, phone book, working mode, remote shutdown",
  ],
];

type WatchItem = {
  id: number;
  name: string;
  model: string;
  accent: string;
  image: string;
  badge: string;
  summary: string;
  specs: Spec[];
  manual?: string; // path to the PDF manual in /public
};

const watches: WatchItem[] = [
  {
    id: 1,
    name: "POGO Explorer",
    model: "LT53",
    accent: "#D8C39B",
    image: "/w1.jpeg",
    badge: "BESTSELLER",
    summary: "4G GPS kids smartwatch with video call and IP67 waterproofing.",
    specs: specsLT53,
    manual: "/manuals/LT53Manual.pdf",
  },
  {
    id: 2,
    name: "POGO Guardian",
    model: "LT53",
    accent: "#D8C39B",
    image: "/w2.jpeg",
    badge: "MOST LOVED",
    summary: "4G GPS kids smartwatch with video call and IP67 waterproofing.",
    specs: specsLT53,
    manual: "/manuals/lt53-manual.pdf",
  },
  {
    id: 3,
    name: "POGO Play",
    model: "LT51",
    accent: "#D8C39B",
    image: "/w3.jpeg",
    badge: "NEW ARRIVAL",
    summary:
      "4G GPS kids smartwatch with Android 8.1, video call and IP67 water resistance.",
    specs: specsLT51,
  },
  {
    id: 4,
    name: "POGO Active",
    model: "LT51",
    accent: "#D8C39B",
    image: "/w4.jpeg",
    badge: "",
    summary:
      "4G GPS kids smartwatch with Android 8.1, video call and IP67 water resistance.",
    specs: specsLT51,
  },
];

const benefits = [
  { icon: MapPin, title: "Know where they are", description: "Location features help parents stay informed." },
  { icon: ShieldCheck, title: "Safety comes first", description: "Designed around reassuring parent-focused tools." },
  { icon: Heart, title: "Made for little explorers", description: "Comfortable styles for everyday adventures." },
];

function WatchCard({ watch }: { watch: WatchItem }) {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-[#EAE4D9] bg-[#FCFAF6] transition duration-300 hover:border-[#D8C39B] hover:shadow-xl md:flex-row">
      {/* Watch Image */}
      <div
        className="relative flex aspect-square w-full items-center justify-center overflow-hidden p-6 md:aspect-auto md:min-h-[420px] md:w-[34%] md:shrink-0 md:p-10"
        style={{ background: `linear-gradient(145deg, #F7F3EB, ${watch.accent}35)` }}
      >
        {watch.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-[#8C7959]">
            {watch.badge}
          </span>
        )}

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/80 text-[#817969]">
          <Watch size={16} />
        </div>

        <img
          src={watch.image}
          alt={watch.name}
          loading="lazy"
          className="h-full max-h-[380px] w-full rounded-2xl object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Name, model, full description */}
      <div className="flex flex-1 flex-col p-6 md:p-10">
        <h3 className="text-2xl font-semibold">{watch.name}</h3>

        <p className="mt-1 text-sm font-semibold text-[#A98547]">
          Model: {watch.model}
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#817969]">
          {watch.summary}
        </p>

        <dl className="mt-6 grid gap-x-8 gap-y-4 border-t border-[#EAE4D9] pt-6 sm:grid-cols-2 xl:grid-cols-3">
          {watch.specs.map(([label, value]) => (
            <div
              key={label}
              className={label === "Other features" ? "sm:col-span-2 xl:col-span-3" : ""}
            >
              <dt className="text-[11px] font-semibold text-[#A98547]">{label}</dt>
              <dd className="mt-0.5 text-sm leading-6 text-[#5E584C]">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#EAE4D9] pt-5">
          <Link
            href="/contact"
            aria-label={`Contact us about ${watch.name}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8C39B] px-5 py-2.5 text-sm font-semibold text-[#A98547] transition hover:bg-[#F3EBDD] hover:text-[#806334]"
          >
            contact
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          {watch.manual && (
            <a
              href={watch.manual}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${watch.model} manual (PDF)`}
              className="inline-flex items-center gap-2 rounded-full bg-[#B89555] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#987540]"
            >
              <FileText size={16} />
              Manual
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#292720]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E9E1D3]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E9DCC0]/40 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#F0E8D8]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DED2BB] bg-white/70 px-4 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#987540]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B89555]" />
              THE POGO COLLECTION
            </span>

            <h1 className="mt-7 max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Little wrists.
              <br />
              <span className="font-serif italic text-[#B89555]">Big adventures.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#777064] md:text-lg">
              Meet the watches designed for growing explorers and the parents
              who care about them. More independence for them, more peace of
              mind for you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-3 rounded-full bg-[#B89555] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#987540]"
              >
                Explore the collection
                <ArrowUpRight size={17} />
              </a>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-[#DED4C2] px-7 py-4 text-sm font-semibold text-[#514A3F] transition hover:bg-white"
              >
                Discover features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#817969]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#B89555]" />
                Safety-focused design
              </span>
              <span className="flex items-center gap-2">
                <Heart size={16} className="text-[#B89555]" />
                Made for kids
              </span>
            </div>
          </div>

          {/* Hero Watch Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-[#E9DDC7]/60 blur-3xl" />

            <div
              id="watch"
              className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#EEE7DC] bg-white p-5 sm:min-h-[420px] md:min-h-[540px] md:p-8"
            >
              <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-64 w-64 rounded-full border border-[#E7D9BE]" />
              <div className="pointer-events-none absolute bottom-[-100px] left-[-50px] h-72 w-72 rounded-full border border-[#E7D9BE]" />

              <img
                src="/w5.jpeg"
                alt="POGO kids smartwatch"
                className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-xl"
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 md:px-10 md:py-16">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0E8D9] text-[#A98547]">
              <Icon size={22} />
            </div>
            <div>
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#817969]">{description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Available Colors Section */}
      <section className="border-t border-[#E9E1D3] bg-[#F5F0E7]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-[#B89555]">
              A SHADE FOR EVERY LITTLE PERSONALITY
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find their perfect color.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#817969]">
              From timeless neutrals to playful colors, discover the POGO
              watch styles available for your little explorer.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {colors.map((color) => (
              <a
                key={color.id}
                href="#collection"
                className="group rounded-2xl border border-[#E5DCCB] bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D8C39B] hover:shadow-lg sm:p-7"
              >
                <div className="flex justify-center">
                  <span
                    className="h-12 w-12 rounded-full border-[5px] border-white shadow-md ring-1 ring-[#E8E0D3] transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                    style={{ backgroundColor: color.accent }}
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold sm:text-base">{color.name}</h3>
                <p className="mt-1 text-xs text-[#817969]">{color.watchName}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Collection */}
      <section id="collection" className="scroll-mt-24 border-t border-[#E9E1D3] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.24em] text-[#B89555]">
                FIND THEIR PERFECT MATCH
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore our watches.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#817969]">
                Thoughtfully designed companions for different personalities,
                routines, and adventures.
              </p>
            </div>
            <span className="text-sm text-[#817969]">{watches.length} styles to explore</span>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {watches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#282820] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#B89555]/20 blur-3xl" />
          <div className="relative">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#D8BC84]">
              THEIR WORLD IS WAITING
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Every little adventure deserves a companion.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
              Discover the POGO watch that fits your little explorer and your
              family&apos;s everyday needs.
            </p>
            <Link
              href="/features"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B89555] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#C8A969]"
            >
              Explore all features
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
