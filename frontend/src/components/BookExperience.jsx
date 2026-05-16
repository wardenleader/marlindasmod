import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BOOKER_URL } from "../data/site";
import { Reveal } from "./Reveal";

export default function BookExperience() {
    return (
        <section
            id="book-experience"
            className="relative py-24 md:py-32 bg-cream overflow-hidden"
            data-testid="book-experience-section"
        >
            <div className="organic-blob bg-rose top-0 right-0 w-[420px] h-[420px] rounded-full opacity-25" />
            <div className="organic-blob bg-champagne bottom-0 left-0 w-[480px] h-[480px] rounded-full opacity-20" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
                <Reveal>
                    <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-6">
                        Book Your Experience
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                        Ready to <em className="text-rose-dark not-italic font-medium">Glow?</em>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-8 text-ink/85 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Browse our full menu of services and book instantly online.
                        Every treatment is custom-tailored to your skin's unique story.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <motion.a
                        href={BOOKER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-ripple inline-flex items-center gap-3 mt-10 bg-rose hover:bg-rose-dark text-white rounded-full px-10 py-5 text-base font-medium tracking-[0.15em] uppercase shadow-xl transition-colors duration-300"
                        data-testid="book-experience-cta"
                    >
                        Book Now
                        <ArrowRight size={18} strokeWidth={1.5} />
                    </motion.a>
                </Reveal>
            </div>
        </section>
    );
}
