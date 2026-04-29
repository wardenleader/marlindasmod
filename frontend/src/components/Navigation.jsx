import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKER_URL } from "../data/site";

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Book Now", href: BOOKER_URL, external: true },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Gift Cards", href: "#gift-cards" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
                    scrolled
                        ? "bg-cream/85 backdrop-blur-xl shadow-[0_2px_24px_rgba(122,139,111,0.08)] py-3"
                        : "bg-transparent py-5"
                }`}
                data-testid="site-nav"
            >
                <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                    <a
                        href="#home"
                        className="font-cursive text-sage text-4xl sm:text-5xl leading-none -mt-2"
                        data-testid="nav-logo"
                    >
                        Marlinda's
                    </a>

                    <ul className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                    className="nav-link text-ink/80 hover:text-sage text-[15px] font-medium tracking-wide"
                                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:block">
                        <a
                            href={BOOKER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ripple inline-flex items-center justify-center bg-sage text-cream rounded-full px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-sage-600 transition-all duration-300 hover:scale-[1.03] shadow-md"
                            data-testid="nav-book-cta"
                        >
                            Book an Appointment
                        </a>
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden text-sage hover:text-sage-600 transition-colors p-2"
                        aria-label="Open menu"
                        data-testid="nav-mobile-toggle"
                    >
                        <Menu size={28} strokeWidth={1.5} />
                    </button>
                </nav>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[90] bg-ink/40 backdrop-blur-sm lg:hidden"
                            onClick={() => setOpen(false)}
                            data-testid="nav-drawer-overlay"
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed top-0 right-0 bottom-0 z-[91] w-full sm:w-[420px] bg-sage text-cream p-8 flex flex-col lg:hidden overflow-y-auto"
                            data-testid="nav-drawer"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <span className="font-cursive text-cream text-5xl leading-none">
                                    Marlinda's
                                </span>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-cream hover:text-rose transition-colors p-2"
                                    aria-label="Close menu"
                                    data-testid="nav-drawer-close"
                                >
                                    <X size={28} strokeWidth={1.5} />
                                </button>
                            </div>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                                    },
                                }}
                                className="flex flex-col gap-2"
                            >
                                {NAV_ITEMS.map((item) => (
                                    <motion.li
                                        key={item.label}
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <a
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={
                                                item.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            onClick={() => setOpen(false)}
                                            className="block py-4 border-b border-cream/15 font-serif text-3xl sm:text-4xl text-cream hover:text-rose transition-colors"
                                            data-testid={`drawer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-auto pt-10 text-cream/80"
                            >
                                <p className="text-xs tracking-[0.3em] uppercase mb-2">
                                    Visit Us
                                </p>
                                <p className="font-serif text-xl">1199 Howard Ave #101</p>
                                <p className="font-serif text-xl">Burlingame, CA 94010</p>
                                <a
                                    href="tel:+16503401700"
                                    className="inline-block mt-4 text-rose-light hover:text-rose font-medium tracking-wide"
                                    data-testid="drawer-phone"
                                >
                                    (650) 340-1700
                                </a>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
