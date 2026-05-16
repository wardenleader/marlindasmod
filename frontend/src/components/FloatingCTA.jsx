import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { BOOKER_URL } from "../data/site";

export default function FloatingCTA() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Mobile: full-width fixed bottom */}
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-4 left-4 right-4 z-[70] sm:hidden"
                    >
                        <a
                            href={BOOKER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-soft-pulse flex items-center justify-center gap-2 bg-rose hover:bg-rose-dark text-ink rounded-full py-4 text-sm font-medium tracking-[0.2em] uppercase shadow-2xl transition-colors"
                            data-testid="floating-cta-mobile"
                        >
                            <CalendarHeart size={18} strokeWidth={1.5} />
                            Book Now
                        </a>
                    </motion.div>

                    {/* Desktop: bottom-right circular */}
                    <motion.a
                        href={BOOKER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden sm:flex fixed bottom-6 right-6 z-[70] animate-soft-pulse items-center gap-2 bg-rose hover:bg-rose-dark text-white rounded-full pl-5 pr-6 py-3.5 text-xs font-medium tracking-[0.2em] uppercase shadow-2xl transition-colors hover:scale-105"
                        data-testid="floating-cta-desktop"
                    >
                        <CalendarHeart size={18} strokeWidth={1.5} />
                        Book Now
                    </motion.a>
                </>
            )}
        </AnimatePresence>
    );
}
