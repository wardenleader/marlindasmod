import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Check, Loader2 } from "lucide-react";
import {
    ADDRESS,
    PHONE,
    PHONE_TEL,
    EMAIL,
    MAP_URL,
    MAP_EMBED,
    HOURS,
} from "../data/site";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", phone: "", message: "" };

// Animated clock face — hands rotate continuously
function AnimatedClock() {
    return (
        <div
            className="relative w-7 h-7 rounded-full border-[1.5px] border-ink/80 flex items-center justify-center bg-transparent"
            aria-hidden="true"
            data-testid="animated-clock"
        >
            {/* Center pin */}
            <span className="absolute w-1 h-1 rounded-full bg-ink/80 z-10" />
            {/* Hour markers */}
            {[0, 90, 180, 270].map((deg) => (
                <span
                    key={deg}
                    className="absolute top-0.5 left-1/2 w-[1px] h-[3px] bg-ink/50 origin-[50%_12px]"
                    style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
                />
            ))}
            {/* Minute hand */}
            <motion.span
                className="absolute top-1/2 left-1/2 h-[8px] w-[1.5px] bg-ink/85 rounded-full origin-bottom"
                style={{ translateX: "-50%", translateY: "-100%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* Hour hand */}
            <motion.span
                className="absolute top-1/2 left-1/2 h-[5px] w-[1.5px] bg-ink rounded-full origin-bottom"
                style={{ translateX: "-50%", translateY: "-100%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [status, setStatus] = useState({ state: "idle", message: "" });

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus({ state: "error", message: "Please fill in name, email, and message." });
            return;
        }
        setStatus({ state: "loading", message: "" });
        try {
            await axios.post(`${API}/contact`, {
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim() || null,
                message: form.message.trim(),
            });
            setStatus({
                state: "success",
                message: "Thank you — we'll be in touch soon.",
            });
            setForm(initial);
        } catch (err) {
            const msg =
                err?.response?.data?.detail ||
                "Something went wrong. Please try again or call us.";
            setStatus({ state: "error", message: typeof msg === "string" ? msg : "Submission failed." });
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 md:py-36 bg-cream overflow-hidden"
            data-testid="contact-section"
        >
            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-14">
                    <Reveal>
                        <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5">
                            Visit Us
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                            Come <em className="text-rose-dark not-italic font-medium">Say Hello</em>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left: Contact Info + Map */}
                    <div className="lg:col-span-6 space-y-8">
                        <Reveal>
                            <div className="bg-cream-50 rounded-3xl p-8 md:p-10 border border-champagne/30">
                                <h3 className="font-serif text-ink text-3xl font-medium mb-6">
                                    Contact
                                </h3>
                                <ul className="space-y-5 text-ink/85">
                                    <li className="flex items-start gap-4">
                                        <MapPin size={20} strokeWidth={1.5} className="text-champagne mt-1 shrink-0" />
                                        <a
                                            href={MAP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-rose-dark transition-colors leading-relaxed"
                                            data-testid="contact-address"
                                        >
                                            {ADDRESS}
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Phone size={20} strokeWidth={1.5} className="text-champagne shrink-0" />
                                        <a
                                            href={PHONE_TEL}
                                            className="hover:text-rose-dark transition-colors text-lg"
                                            data-testid="contact-phone"
                                        >
                                            {PHONE}
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Mail size={20} strokeWidth={1.5} className="text-champagne shrink-0" />
                                        <a
                                            href={`mailto:${EMAIL}`}
                                            className="hover:text-rose-dark transition-colors"
                                            data-testid="contact-email"
                                        >
                                            {EMAIL}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="rounded-3xl overflow-hidden border border-champagne/30 shadow-lg aspect-[16/10]">
                                <iframe
                                    title="Marlinda's Mod Skincare location"
                                    src={MAP_EMBED}
                                    className="w-full h-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    data-testid="contact-map"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="bg-[#D6C3A3] text-ink rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(214,195,163,0.4)]">
                                <div className="flex items-center gap-3 mb-5">
                                    <AnimatedClock />
                                    <h3 className="font-serif text-ink text-2xl font-medium">
                                        Hours
                                    </h3>
                                </div>
                                <ul className="divide-y divide-ink/15">
                                    {HOURS.map((h) => (
                                        <li
                                            key={h.day}
                                            className="flex items-center justify-between py-3 text-ink/85"
                                            data-testid={`hours-${h.day.toLowerCase()}`}
                                        >
                                            <span className="font-serif text-lg">{h.day}</span>
                                            <span className="text-sm tracking-wide font-light">
                                                {h.hours}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-6">
                        <Reveal>
                            <form
                                onSubmit={submit}
                                className="bg-cream-50 rounded-3xl p-8 md:p-12 border border-champagne/30 shadow-[0_8px_30px_rgba(184,137,61,0.06)]"
                                data-testid="contact-form"
                            >
                                <h3 className="font-serif text-ink text-3xl font-medium mb-2">
                                    Send a Message
                                </h3>
                                <p className="text-ink/60 text-sm mb-8">
                                    We'll respond within one business day.
                                </p>

                                <div className="space-y-7">
                                    <Field
                                        label="Name"
                                        value={form.name}
                                        onChange={update("name")}
                                        testid="contact-input-name"
                                        required
                                    />
                                    <Field
                                        label="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={update("email")}
                                        testid="contact-input-email"
                                        required
                                    />
                                    <Field
                                        label="Phone (optional)"
                                        type="tel"
                                        value={form.phone}
                                        onChange={update("phone")}
                                        testid="contact-input-phone"
                                    />
                                    <Field
                                        label="Message"
                                        value={form.message}
                                        onChange={update("message")}
                                        testid="contact-input-message"
                                        textarea
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status.state === "loading"}
                                    className="btn-ripple inline-flex items-center gap-2 mt-9 bg-rose hover:bg-rose-dark disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.03] shadow-lg"
                                    data-testid="contact-submit"
                                >
                                    {status.state === "loading" ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" /> Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowRight size={16} strokeWidth={1.5} />
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {status.state === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 flex items-center gap-2 text-rose-dark"
                                            data-testid="contact-success"
                                        >
                                            <Check size={18} /> {status.message}
                                        </motion.div>
                                    )}
                                    {status.state === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-6 text-rose-dark text-sm"
                                            data-testid="contact-error"
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, value, onChange, type = "text", textarea, required, testid }) {
    const Cmp = textarea ? "textarea" : "input";
    return (
        <label className="block">
            <span className="block text-champagne tracking-[0.2em] uppercase text-[10px] mb-2 font-medium">
                {label}
                {required && <span className="text-rose-dark ml-1">•</span>}
            </span>
            <Cmp
                type={type}
                value={value}
                onChange={onChange}
                rows={textarea ? 4 : undefined}
                required={required}
                data-testid={testid}
                className="w-full bg-transparent border-b border-champagne/50 pb-3 pt-1 text-ink placeholder-champagne/50 focus:border-rose-dark focus:outline-none transition-colors text-base resize-none"
            />
        </label>
    );
}
