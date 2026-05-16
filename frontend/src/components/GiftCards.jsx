import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { GIFT_CARD_URL } from "../data/site";
import { Reveal } from "./Reveal";

export default function GiftCards() {
    return (
        <section
            id="gift-cards"
            className="relative py-24 md:py-32 bg-cream overflow-hidden"
            data-testid="gift-cards-section"
        >
            <div className="organic-blob bg-rose top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30" />
            <div className="organic-blob bg-champagne bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-30" />

            <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
                <Reveal>
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex w-16 h-16 rounded-full bg-rose/30 items-center justify-center mb-6 shadow-md"
                    >
                        <Gift size={26} strokeWidth={1.4} className="text-rose-dark" />
                    </motion.div>
                </Reveal>
                <Reveal delay={0.05}>
                    <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5">
                        Gift Cards
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.02]">
                        The Gift of <em className="text-rose-dark not-italic font-medium">Glow</em>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-ink/85 text-lg sm:text-xl max-w-xl mx-auto font-light">
                        Give the gift of self-care. Perfect for birthdays,
                        anniversaries, or simply because they deserve it.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <a
                        href={GIFT_CARD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple inline-flex items-center gap-3 mt-10 bg-rose hover:bg-rose-dark text-white rounded-full px-10 py-5 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04] shadow-xl"
                        data-testid="gift-card-cta"
                    >
                        Purchase a Gift Card
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
