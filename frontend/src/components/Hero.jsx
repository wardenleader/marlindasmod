import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BOOKER_URL } from "../data/site";

const HEADLINE = "Crafting Beauty with Passion";

export default function Hero() {
    const words = HEADLINE.split(" ");
    return (
        <section
            id="home"
            className="relative min-h-[100svh] w-full overflow-hidden grain"
            data-testid="hero-section"
        >
            {/* Background image with Ken Burns */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 animate-ken-burns will-change-transform">
                    <img
                        src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=2000"
                        alt="Serene spa treatment ambiance"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-sage/55 via-sage-700/40 to-ink/65" />
            </div>

            {/* Floating shimmer particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 14 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute block rounded-full bg-cream/40"
                        style={{
                            left: `${(i * 7.3) % 100}%`,
                            top: `${(i * 13) % 90 + 5}%`,
                            width: `${4 + (i % 4) * 2}px`,
                            height: `${4 + (i % 4) * 2}px`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.7, 0.2],
                        }}
                        transition={{
                            duration: 6 + (i % 5),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i * 0.3) % 3,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[100svh] flex flex-col justify-center pt-28 pb-24">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                    className="text-cream/85 text-xs tracking-[0.5em] uppercase mb-5"
                    data-testid="hero-eyebrow"
                >
                    Burlingame · Since 1996
                </motion.p>

                <h1
                    className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-light tracking-tight max-w-4xl"
                    data-testid="hero-headline"
                >
                    {words.map((w, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 36 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 1.9 + i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="inline-block mr-3"
                        >
                            {w === "Beauty" ? <em className="font-medium text-cream">{w}</em> : w}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.6 }}
                    className="mt-7 max-w-xl text-cream/85 text-lg sm:text-xl font-light leading-relaxed"
                    data-testid="hero-subheading"
                >
                    A sanctuary where science meets soul.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 2.85 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href={BOOKER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple bg-rose hover:bg-rose-dark text-ink rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-lg"
                        data-testid="hero-book-cta"
                    >
                        Book an Appointment
                    </a>
                    <a
                        href="#services"
                        className="btn-ripple bg-transparent border border-cream/60 text-cream hover:bg-cream hover:text-sage rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04]"
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
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-cream/80 hover:text-cream transition-colors"
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
