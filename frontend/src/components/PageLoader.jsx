import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setShow(false), 1700);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-cream"
                    data-testid="page-loader"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative text-center"
                    >
                        <div className="font-cursive text-ink text-7xl sm:text-8xl leading-none">
                            Marlinda's
                        </div>
                        <div className="mt-5 text-champagne tracking-[0.5em] text-lg sm:text-xl uppercase font-semibold">
                            Mod Skincare
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
