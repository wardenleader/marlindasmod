import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { services } from "../data/services";
import { BOOKER_URL } from "../data/site";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function Services() {
    const [active, setActive] = useState(null);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (active) setSlide(0);
    }, [active]);

    const next = () =>
        setSlide((s) => (active ? (s + 1) % active.images.length : 0));
    const prev = () =>
        setSlide((s) =>
            active ? (s - 1 + active.images.length) % active.images.length : 0
        );

    return (
        <section
            id="services"
            className="relative py-24 md:py-36 bg-taupe overflow-hidden"
            data-testid="services-section"
        >
            <div className="organic-blob bg-rose/30 top-40 -right-20 w-[420px] h-[420px] rounded-full opacity-50" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10">
                <Reveal>
                    <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5 text-center">
                        The Menu
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-center font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                        Our <em className="text-rose-dark not-italic font-medium">Services</em>
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="mt-6 text-center text-muted-gray text-lg max-w-2xl mx-auto font-light">
                        Prices and the full menu are available on our booking page.
                        Tap any service to view a slideshow.
                    </p>
                </Reveal>

                <StaggerGroup
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                    stagger={0.05}
                >
                    {services.map((s, idx) => (
                        <StaggerItem key={s.id}>
                            <button
                                onClick={() => setActive(s)}
                                className="group relative block w-full text-left bg-cream rounded-3xl p-8 md:p-10 border border-champagne/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne overflow-hidden"
                                data-testid={`service-card-${s.id}`}
                            >
                                <span className="absolute top-5 right-6 text-champagne/70 text-[10px] tracking-[0.3em] uppercase font-light">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                <div className="flex items-start justify-between gap-4 pt-6">
                                    <div>
                                        <h3 className="font-serif text-ink text-3xl md:text-4xl leading-tight font-medium">
                                            {s.name}
                                        </h3>
                                        <p className="mt-3 text-ink/75 text-base md:text-lg font-light leading-snug">
                                            {s.tagline}
                                        </p>
                                    </div>
                                    <span className="shrink-0 mt-1 w-11 h-11 rounded-full bg-champagne/15 text-champagne flex items-center justify-center group-hover:bg-rose group-hover:text-white transition-all duration-300">
                                        <Plus size={18} strokeWidth={1.5} />
                                    </span>
                                </div>

                                <div className="mt-7 pt-5 border-t border-champagne/30 flex items-center text-champagne text-[12px] tracking-[0.25em] uppercase font-semibold group-hover:text-rose-dark transition-colors">
                                    View Slideshow
                                    <ArrowRight size={14} strokeWidth={1.5} className="ml-2 transition-transform group-hover:translate-x-1" />
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
                            className="btn-ripple inline-flex items-center gap-3 bg-rose hover:bg-rose-dark text-white rounded-full px-9 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-lg"
                            data-testid="services-view-all-cta"
                        >
                            View All Services & Pricing
                            <ArrowRight size={18} strokeWidth={1.5} />
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* Slideshow Modal */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-ink/70 backdrop-blur-sm p-0 sm:p-6"
                        onClick={() => setActive(null)}
                        data-testid="service-modal"
                    >
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full sm:max-w-3xl bg-cream rounded-t-3xl sm:rounded-3xl overflow-hidden"
                        >
                            {/* Slideshow */}
                            <div className="relative aspect-[16/10] bg-ink flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={slide}
                                        src={active.images[slide]}
                                        alt={`${active.name} ${slide + 1}`}
                                        initial={{ opacity: 0, scale: 1.02 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                {/* Slideshow controls */}
                                {active.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prev}
                                            className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 hover:bg-cream text-ink flex items-center justify-center shadow-lg transition-colors"
                                            aria-label="Previous slide"
                                            data-testid="slideshow-prev"
                                        >
                                            <ChevronLeft size={20} strokeWidth={1.5} />
                                        </button>
                                        <button
                                            onClick={next}
                                            className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 hover:bg-cream text-ink flex items-center justify-center shadow-lg transition-colors"
                                            aria-label="Next slide"
                                            data-testid="slideshow-next"
                                        >
                                            <ChevronRight size={20} strokeWidth={1.5} />
                                        </button>

                                        {/* Dots */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {active.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setSlide(i)}
                                                    aria-label={`Go to slide ${i + 1}`}
                                                    data-testid={`slideshow-dot-${i}`}
                                                    className={`h-1.5 rounded-full transition-all ${
                                                        i === slide
                                                            ? "bg-cream w-8"
                                                            : "bg-cream/50 hover:bg-cream/80 w-2"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                <button
                                    onClick={() => setActive(null)}
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/90 text-ink hover:bg-cream transition-colors flex items-center justify-center shadow"
                                    aria-label="Close"
                                    data-testid="service-modal-close"
                                >
                                    <X size={16} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className="p-7 md:p-10">
                                <p className="text-champagne tracking-[0.3em] uppercase text-[10px] mb-3">
                                    {active.tagline}
                                </p>
                                <h3 className="font-serif text-ink text-3xl md:text-4xl font-medium leading-tight">
                                    {active.name}
                                </h3>
                                <p className="mt-5 text-ink/80 leading-relaxed font-light">
                                    {active.description}
                                </p>
                                <a
                                    href={BOOKER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-ripple inline-flex items-center gap-2 mt-7 bg-rose hover:bg-rose-dark text-white rounded-full px-7 py-3 text-sm font-medium tracking-[0.15em] uppercase transition-colors"
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
