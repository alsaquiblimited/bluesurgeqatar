
"use client";

import { useState } from "react";
import {
    MapPin,
    Video,
    Phone,
    MessageCircle,
    ShieldCheck,
    Siren,
    Waves,
    BatteryFull,
    Bluetooth,
    Wifi,
    Globe,
    Smartphone,
    Clock,
    Heart,
    Navigation,
    ArrowUpRight,
    Play,
    CheckCircle2,
    X,
    Watch,
    Radio,
    LockKeyhole,
} from "lucide-react";

const gold = "#B89555";

const featureGroups = [
    {
        label: "SAFETY & LOCATION",
        title: "Peace of mind, wherever they go.",
        description:
            "Stay informed about your child's location and get extra reassurance throughout the day.",
        features: [
            {
                icon: MapPin,
                title: "Real-Time GPS Tracking",
                description:
                    "Check your child's location through the companion app.",
                tag: "LOCATION",
            },
            {
                icon: Navigation,
                title: "GPS + Wi-Fi + LBS",
                description:
                    "Multiple location technologies help determine the watch's position.",
                tag: "SMART LOCATION",
            },
            {
                icon: Siren,
                title: "SOS Emergency Call",
                description:
                    "A dedicated SOS feature helps your child request assistance quickly.",
                tag: "EMERGENCY",
            },
            {
                icon: ShieldCheck,
                title: "Safe Zones",
                description:
                    "Set designated areas and receive alerts when your child enters or leaves them.",
                tag: "GEOFENCING",
            },
        ],
    },
    {
        label: "COMMUNICATION",
        title: "Closer, even when you're apart.",
        description:
            "Make everyday check-ins easier with connected communication features.",
        features: [
            {
                icon: Video,
                title: "Video Calling",
                description:
                    "See and speak with your child when compatible connectivity is available.",
                tag: "VIDEO",
            },
            {
                icon: Phone,
                title: "Two-Way Voice Calls",
                description:
                    "Stay in touch with voice calls between supported contacts.",
                tag: "CALLING",
            },
            {
                icon: MessageCircle,
                title: "Voice Chat",
                description:
                    "Send and receive voice messages through supported devices and services.",
                tag: "MESSAGING",
            },
            {
                icon: LockKeyhole,
                title: "Connected Contacts",
                description:
                    "Help keep communication within approved contacts when supported by the watch and app.",
                tag: "CONNECTIVITY",
            },
        ],
    },
    {
        label: "BUILT FOR EVERYDAY LIFE",
        title: "Little watch. Big adventures.",
        description:
            "Practical details designed around active kids and busy family routines.",
        features: [
            {
                icon: Radio,
                title: "4G Network",
                description:
                    "Compatible cellular connectivity for supported calling and data features.",
                tag: "4G",
            },
            {
                icon: Smartphone,
                title: "Optional eSIM",
                description:
                    "eSIM support is optional and depends on the watch variant and carrier.",
                tag: "eSIM",
            },
            {
                icon: Waves,
                title: "IP67 Water Resistance",
                description:
                    "Designed to resist dust and limited water exposure under specified test conditions.",
                tag: "IP67",
            },
            {
                icon: BatteryFull,
                title: "All-Day Battery",
                description:
                    "Designed for everyday use. Actual battery life depends on settings and usage.",
                tag: "BATTERY",
            },
            {
                icon: Bluetooth,
                title: "Bluetooth",
                description:
                    "Bluetooth connectivity for supported devices and functions.",
                tag: "WIRELESS",
            },
            {
                icon: Wifi,
                title: "Connected Technology",
                description:
                    "Smart connectivity designed to support the watch's available features.",
                tag: "SMART TECH",
            },
            {
                icon: Heart,
                title: "Kid-Friendly Design",
                description:
                    "A fun, wearable design intended for little wrists and daily adventures.",
                tag: "COMFORT",
            },
            {
                icon: Clock,
                title: "Easy to Use",
                description:
                    "Simple watch controls designed to make everyday interactions easier.",
                tag: "SIMPLE",
            },
        ],
    },
];

const watchColors = [
    { name: "Ocean Blue", color: "#75C9E4" },
    { name: "Blush Pink", color: "#EBA9B9" },
    { name: "Classic Black", color: "#242424" },
    { name: "Ice Blue & White", color: "#D9EEF3" },
];

export default function FeaturesPage() {
    const [videoOpen, setVideoOpen] = useState(false);

    // Put your video URL in NEXT_PUBLIC_POGO_VIDEO_URL.
    const videoUrl = "/v1feat.mp4";

    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#191919]">
            {/* PAGE INTRO */}
            <section className="relative border-b border-[#E9E1D3] bg-[#FCFAF6]">
                <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#F1E5D0] opacity-50 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 md:px-10 md:py-28">
                    <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] lg:gap-16">
                        {/* Left: Heading and description */}
                        <div className="flex min-w-0 flex-col items-start">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5D5B7] bg-white px-4 py-2">
                                <span className="h-2 w-2 rounded-full bg-[#B89555]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#947440]">
                                    The POGO experience
                                </span>
                            </div>

                            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                                Smart features.
                                <br />
                                <span className="font-serif font-normal italic text-[#B89555]">
                                    Safer little adventures.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#706B63] sm:text-lg">
                                From real-time location tracking to SOS assistance and
                                video calls, discover the features designed to help families
                                stay connected and give children confidence to explore.
                            </p>
                        </div>

                        {/* Right: Watch image and button */}
                        <div className="flex flex-col items-center gap-6 md:items-center">
                            <img
                                src="/if2.jpeg"
                                alt="POGO kids smartwatch"
                                className="h-75 w-full rounded-3xl border border-[#E9E1D3]  object-contain shadow-xl sm:h-75 sm:w-95 bg-transparent"
                            />

                            <a
                                href="/watch"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B89555] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#987540]"
                            >
                                Explore All Watches
                                <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </div>


                    <div className="mt-10 flex flex-wrap gap-3">
                        {["Live GPS", "SOS Help", "Video Calls", "Safe Zones"].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[#E9E1D3] bg-white px-4 py-2 text-xs font-medium text-[#62594B]"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* VIDEO SHOWCASE */}
            <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
                            See POGO in action
                        </p>

                        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            Designed for kids.
                            <br />
                            <span className="font-serif font-normal italic text-[#B89555]">
                                Peace of mind for parents.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-8 text-[#706B63]">
                            Discover how POGO brings location tracking, calls and
                            everyday connectivity together in one kid-friendly watch.
                            Watch the product video to explore its design and features.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <button
                                onClick={() => setVideoOpen(true)}
                                className="inline-flex items-center gap-3 rounded-full bg-[#B89555] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#987540]"
                            >
                                <Play size={17} fill="currentColor" />
                                Watch the video
                            </button>

                            <a
                                href="#all-features"
                                className="inline-flex items-center gap-2 rounded-full border border-[#DDD4C5] px-6 py-4 text-sm font-semibold transition hover:border-[#B89555]"
                            >
                                View features <ArrowUpRight size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Video preview */}
                    <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-[#E9E1D3] bg-[#F7F3EB]">
                        {videoUrl ? (
                            <video
                                src="/v1feat.mp4"
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
                        ) : (
                            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D8C39C] bg-white text-[#B89555] shadow-sm">
                                    <Play size={30} fill="currentColor" />
                                </div>
                                <p className="mt-5 text-lg font-semibold">
                                    Discover POGO
                                </p>
                                <p className="mt-2 max-w-xs text-sm leading-6 text-[#81786B]">
                                    Add your product video to display it here.
                                </p>
                                <p className="mt-4 text-xs text-[#A18756]">
                                    POGO Kids Smart Tracking Watch
                                </p>
                            </div>
                        )}

                        <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/80 bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#947440]">
                            Meet POGO
                        </div>
                    </div>
                </div>
            </section>

            {/* ALL FEATURES */}
            <section
                id="all-features"
                className="border-y border-[#E9E1D3] bg-[#FCFBF8]"
            >
                {featureGroups.map((group, groupIndex) => (
                    <div
                        key={group.label}
                        className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"
                    >
                        <div className="mb-9 grid gap-4 md:grid-cols-2 md:items-end">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
                                    {group.label}
                                </p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                    {group.title}
                                </h2>
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-[#706B63] md:justify-self-end">
                                {group.description}
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {group.features.map(
                                ({ icon: Icon, title, description, tag }) => (
                                    <article
                                        key={title}
                                        className="group rounded-2xl border border-[#E9E1D3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CDB78F] hover:shadow-xl hover:shadow-[#8B7449]/5"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3E9] text-[#B89555] transition group-hover:bg-[#B89555] group-hover:text-white">
                                                <Icon size={23} strokeWidth={1.7} />
                                            </div>

                                            <span className="rounded-full border border-[#EEE5D6] px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#9A8359]">
                                                {tag}
                                            </span>
                                        </div>

                                        <h3 className="mt-6 text-base font-semibold">
                                            {title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#777066]">
                                            {description}
                                        </p>

                                        <div className="mt-5 h-px w-full bg-[#F0EBE2]" />

                                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#9A8359]">
                                            <CheckCircle2 size={15} />
                                            <span>Made for everyday life</span>
                                        </div>
                                    </article>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </section>

            {/* WATCH COLORS */}
            <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
                        A style for every little explorer
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Made to match their world.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#706B63]">
                        Fun colors, a comfortable fit, and a kid-friendly design
                        that fits into everyday adventures.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {watchColors.map((watch) => (
                        <div
                            key={watch.name}
                            className="rounded-2xl border border-[#E9E1D3] bg-[#FCFBF8] p-5 text-center"
                        >
                            <div
                                className="mx-auto h-10 w-10 rounded-full border border-black/10 shadow-sm"
                                style={{ backgroundColor: watch.color }}
                            />
                            <p className="mt-4 text-sm font-semibold">{watch.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* APP SECTION */}
            <section className="bg-[#F8F5EF]">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20">
                    <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#B89555] shadow-sm">
                            <Smartphone size={28} />
                        </div>

                        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
                            Connected to your phone
                        </p>

                        <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
                            Your child's world, closer to you.
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-[#706B63]">
                            Use the compatible companion app to access available
                            location and communication features from your phone.
                            Supported functions depend on the watch model, app,
                            connectivity, and service plan.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "View location on a map",
                                "Manage supported watch settings",
                                "Access available safety features",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-sm text-[#514A40]"
                                >
                                    <CheckCircle2 size={17} className="text-[#B89555]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex min-h-[280px] items-center justify-center rounded-[2rem] border border-[#E9E1D3] bg-white p-8">
                        <div className="max-w-sm text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-[#F8F3E9] text-[#B89555]">
                                <MapPin size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold">
                                Location at a glance
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#81786B]">
                                Replace this area with a screenshot of your actual
                                POGO companion app map.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A18756]">
                    Stay connected. Stay worry-free.
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                    Smart watch.
                    <br />
                    <span className="font-serif font-normal italic text-[#B89555]">
                        Peace of mind for parents.
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#706B63]">
                    Discover a smarter way for families to stay connected,
                    wherever the day takes them.
                </p>

                <a
                    href="/watch"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B89555] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#987540]"
                >
                    Explore POGO Watch
                    <ArrowUpRight size={18} />
                </a>
            </section>

            {/* VIDEO MODAL */}
            {videoOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setVideoOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="POGO product video"
                        className="relative w-full max-w-4xl rounded-2xl bg-white p-3 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute -right-2 -top-12 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
                            aria-label="Close video"
                        >
                            <X size={20} />
                        </button>

                        {videoUrl ? (
                            <video
                                src="/v1feat.mp4"
                                controls
                                autoPlay
                                playsInline
                                className="aspect-video w-full rounded-xl bg-black"
                            />
                        ) : (
                            <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-[#FCFAF6] px-6 text-center">
                                <Video size={40} className="text-[#B89555]" />
                                <h3 className="mt-4 text-xl font-semibold">
                                    Add your POGO video
                                </h3>
                                <p className="mt-2 max-w-md text-sm leading-6 text-[#706B63]">
                                    Set NEXT_PUBLIC_POGO_VIDEO_URL to your video URL,
                                    or place your MP4 in the public folder and update
                                    the videoUrl variable.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}