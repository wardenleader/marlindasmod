import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BOOKER_URL, TAGLINE } from "../data/site";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[100svh] w-full overflow-hidden"
            data-testid="hero-section"
        >
            {/* Background image with Ken Burns */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 animate-ken-burns will-change-transform">
                    <img
                        src="https://customer-assets.emergentagent.com/job_luxury-skincare-spa-1/artifacts/0c79pxh9_image.png"
                        alt="Marlinda's Mod Skincare storefront at 1199 Howard Ave, Burlingame"
                        className="absolute inset-0 w-full h-full object-contain sm:object-cover object-top sm:object-center bg-ink"
                        loading="eager"
                    />
                </div>
                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-transparent to-champagne/15 mix-blend-overlay" />
                {/* Vignette */}
                <div className="absolute inset-0" style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(58,58,58,0.55) 100%)"
                }} />
                {/* Grain overlay */}
                <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
            </div>

            {/* Floating golden shimmer particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute block rounded-full"
                        style={{
                            left: `${(i * 4.3) % 100}%`,
                            top: `${(i * 11) % 90 + 5}%`,
                            width: `${3 + (i % 5) * 1.5}px`,
                            height: `${3 + (i % 5) * 1.5}px`,
                            background: i % 3 === 0 ? "rgba(214,195,163,0.85)" : "rgba(246,244,241,0.65)",
                            filter: "blur(0.4px)",
                            boxShadow: i % 3 === 0 ? "0 0 8px rgba(214,195,163,0.7)" : "0 0 6px rgba(255,255,255,0.5)",
                        }}
                        animate={{
                            y: [0, -40 - (i % 4) * 8, 0],
                            x: [0, (i % 2 === 0 ? 10 : -10), 0],
                            opacity: [0.1, 0.85, 0.1],
                        }}
                        transition={{
                            duration: 7 + (i % 6),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i * 0.2) % 4,
                        }}
                    />
                ))}
            </div>

            {/* Diagonal light leak */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-1/3 -left-1/4 w-[140%] h-[60%] rotate-12"
                style={{
                    background: "linear-gradient(110deg, transparent 35%, rgba(255,235,200,0.18) 50%, transparent 65%)",
                    mixBlendMode: "screen",
                }}
                animate={{ x: ["-10%", "10%", "-10%"] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[100svh] flex flex-col justify-end pt-28 pb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-cream font-medium tracking-tight drop-shadow-2xl max-w-3xl"
                    style={{
                        fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                        lineHeight: 1.2,
                    }}
                    data-testid="hero-headline"
                >
                    Three generations of <em className="not-italic text-rose-light">beauty</em>,
                    thoughtfully crafted in Burlingame since 1996.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.3 }}
                    className="mt-8 flex flex-wrap gap-4"
                >
                    <a
                        href={BOOKER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple bg-rose hover:bg-rose-dark text-white rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-2xl"
                        data-testid="hero-book-cta"
                    >
                        Book an Appointment
                    </a>
                    <a
                        href="#services"
                        className="btn-ripple bg-cream/15 backdrop-blur border border-cream/50 text-cream hover:bg-cream hover:text-ink rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04]"
                        data-testid="hero-services-cta"
                    >
                        Explore Services
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#book-experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-cream/85 hover:text-cream transition-colors"
                aria-label="Scroll down"
                data-testid="hero-scroll-indicator"
            >
                <span className="text-[10px] tracking-[0.4em] uppercase mb-2">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={22} strokeWidth={1.5} />
                </motion.div>
            </motion.a>
        </section>
    );
}
