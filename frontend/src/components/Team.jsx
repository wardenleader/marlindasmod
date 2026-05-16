import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "../data/team";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

function InitialAvatar({ initial }) {
    return (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-cream-50 border border-champagne/40 flex items-center justify-center mx-auto shadow-[inset_0_2px_8px_rgba(58,58,58,0.06)]">
            <span className="font-serif text-ink text-6xl sm:text-7xl font-medium leading-none -mt-1">
                {initial}
            </span>
        </div>
    );
}

function PhotoAvatar({ src, alt }) {
    return (
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto overflow-hidden border-2 border-cream-50 shadow-[0_8px_24px_rgba(58,58,58,0.12)]">
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
}

function Avatar({ member }) {
    return member.image ? (
        <PhotoAvatar src={member.image} alt={member.name} />
    ) : (
        <InitialAvatar initial={member.firstName.charAt(0)} />
    );
}

export default function Team() {
    const [active, setActive] = useState(null);

    return (
        <section
            id="team"
            className="relative py-24 md:py-36 bg-cream overflow-hidden"
            data-testid="team-section"
        >
            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center">
                    <Reveal>
                        <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5">
                            The Studio
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                            Meet Our <em className="text-rose-dark not-italic font-medium">Experts</em>
                        </h2>
                    </Reveal>
                </div>

                <StaggerGroup
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                    stagger={0.07}
                >
                    {team.map((m) => (
                        <StaggerItem key={m.id}>
                            <button
                                onClick={() => setActive(m)}
                                className="group block w-full text-left bg-taupe rounded-3xl overflow-hidden border border-champagne/30 shadow-[0_4px_18px_rgba(58,58,58,0.04)] hover:shadow-[0_22px_50px_rgba(58,58,58,0.10)] hover:-translate-y-1 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                                data-testid={`team-card-${m.id}`}
                            >
                                <div className="pt-12 pb-8 px-6 bg-taupe-light">
                                    <Avatar member={m} />
                                </div>
                                <div className="bg-ink text-cream px-6 py-7">
                                    <h3 className="font-serif text-cream text-3xl sm:text-4xl font-medium leading-none">
                                        {m.firstName}
                                    </h3>
                                    <p className="mt-2 text-champagne text-sm tracking-[0.15em] uppercase">
                                        {m.role}
                                    </p>
                                    <p className="mt-4 text-cream/70 text-sm font-light line-clamp-2">
                                        {m.bio}
                                    </p>
                                    <span className="inline-block mt-5 text-rose-light text-xs tracking-[0.25em] uppercase border-b border-rose-light/40 pb-1 group-hover:border-rose-light transition-colors">
                                        Read Bio
                                    </span>
                                </div>
                            </button>
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-ink/70 backdrop-blur-sm p-0 sm:p-6"
                        onClick={() => setActive(null)}
                        data-testid="team-modal"
                    >
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full sm:max-w-2xl bg-cream rounded-t-3xl sm:rounded-3xl overflow-hidden"
                        >
                            <button
                                onClick={() => setActive(null)}
                                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-cream/90 text-ink hover:bg-cream transition-colors flex items-center justify-center shadow"
                                aria-label="Close"
                                data-testid="team-modal-close"
                            >
                                ✕
                            </button>
                            <div className="px-8 sm:px-12 pt-12 pb-10">
                                <Avatar member={active} />
                                <h3 className="mt-6 text-center font-serif text-ink text-4xl sm:text-5xl font-medium">
                                    {active.name}
                                </h3>
                                <p className="mt-2 text-center text-champagne text-sm tracking-[0.2em] uppercase">
                                    {active.role}
                                </p>
                                <p className="mt-7 text-ink/85 leading-[1.85] font-light">
                                    {active.bio}
                                </p>
                                {active.contact && (
                                    <div className="mt-7 pt-6 border-t border-champagne/40 text-ink">
                                        {active.contact.label && (
                                            <span className="text-xs tracking-[0.25em] uppercase mr-2 text-muted-gray">
                                                {active.contact.label}:
                                            </span>
                                        )}
                                        {active.contact.phone && (
                                            <a
                                                href={`tel:${active.contact.phone.replace(/[^\d]/g, "")}`}
                                                className="font-serif text-2xl text-ink hover:text-rose-dark transition-colors"
                                                data-testid={`team-${active.id}-phone`}
                                            >
                                                {active.contact.phone}
                                            </a>
                                        )}
                                        {active.contact.link && (
                                            <a
                                                href={active.contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-serif text-xl text-ink hover:text-rose-dark transition-colors mr-3"
                                                data-testid={`team-${active.id}-link`}
                                            >
                                                {active.contact.link.replace(/^https?:\/\//, "")}
                                            </a>
                                        )}
                                        {active.contact.handle && (
                                            <span className="text-sm text-muted-gray">
                                                · {active.contact.handle}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
