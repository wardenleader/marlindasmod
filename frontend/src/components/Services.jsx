import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { BOOKER_URL } from "../data/site";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function Services() {
    const [active, setActive] = useState(null);

    return (
        <section
            id="services"
            className="relative py-24 md:py-36 bg-cream overflow-hidden"
            data-testid="services-section"
        >
            <div className="organic-blob bg-rose top-40 -right-20 w-[420px] h-[420px] rounded-full opacity-25" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <Reveal>
                    <p className="text-sage tracking-[0.4em] uppercase text-xs mb-5 text-center">
                        The Menu
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-center font-serif text-sage text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05]">
                        Our <em className="text-rose-dark">Services</em>
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-6 text-center text-ink/70 text-lg max-w-2xl mx-auto font-light">
                        Prices and the full menu are available on our booking page.
                        Tap any service to read more.
                    </p>
                </Reveal>

                <StaggerGroup
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    stagger={0.05}
                >
                    {services.map((s, idx) => (
                        <StaggerItem key={s.id}>
                            <button
                                onClick={() => setActive(s)}
                                className="group relative text-left w-full bg-white rounded-3xl overflow-hidden border border-sage/10 shadow-[0_8px_30px_rgba(122,139,111,0.06)] hover:shadow-[0_22px_50px_rgba(122,139,111,0.18)] hover:-translate-y-1.5 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                                data-testid={`service-card-${s.id}`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                                    <span className="absolute top-4 left-4 text-cream/90 text-[10px] tracking-[0.3em] uppercase">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="p-6 md:p-7 flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-serif text-sage text-2xl md:text-[1.6rem] leading-tight font-light">
                                            {s.name}
                                        </h3>
                                        <p className="mt-2 text-ink/60 text-sm font-light">
                                            {s.tagline}
                                        </p>
                                    </div>
                                    <span className="shrink-0 mt-1 w-9 h-9 rounded-full bg-sage/10 text-sage flex items-center justify-center group-hover:bg-sage group-hover:text-cream transition-all duration-300">
                                        <Plus size={16} strokeWidth={1.5} />
                                    </span>
                                </div>
                            </button>
                        </StaggerItem>
                    ))}
                </StaggerGroup>

                <Reveal delay={0.2}>
                    <div className="mt-16 text-center">
                        <a
                            href={BOOKER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ripple inline-flex items-center gap-3 bg-sage hover:bg-sage-600 text-cream rounded-full px-9 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-lg"
                            data-testid="services-view-all-cta"
                        >
                            View All Services & Pricing
                            <ArrowRight size={18} strokeWidth={1.5} />
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 sm:p-6"
                        onClick={() => setActive(null)}
                        data-testid="service-modal"
                    >
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full sm:max-w-2xl bg-cream rounded-t-3xl sm:rounded-3xl overflow-hidden"
                        >
                            <div className="relative aspect-[16/9]">
                                <img
                                    src={active.image}
                                    alt={active.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                                <button
                                    onClick={() => setActive(null)}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 text-sage hover:bg-cream transition-colors flex items-center justify-center"
                                    aria-label="Close"
                                    data-testid="service-modal-close"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-7 md:p-10">
                                <p className="text-sage tracking-[0.3em] uppercase text-[10px] mb-3">
                                    {active.tagline}
                                </p>
                                <h3 className="font-serif text-sage text-3xl md:text-4xl font-light leading-tight">
                                    {active.name}
                                </h3>
                                <p className="mt-5 text-ink/80 leading-relaxed font-light">
                                    {active.description}
                                </p>
                                <a
                                    href={BOOKER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-ripple inline-flex items-center gap-2 mt-7 bg-sage hover:bg-sage-600 text-cream rounded-full px-7 py-3 text-sm font-medium tracking-[0.15em] uppercase transition-colors"
                                    data-testid="service-modal-book"
                                >
                                    Book This Service
                                    <ArrowRight size={16} strokeWidth={1.5} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
