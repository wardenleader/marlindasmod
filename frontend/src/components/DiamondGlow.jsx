import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
    {
        q: "How often is a DiamondGlow® treatment recommended?",
        a: "For best results, we recommend a DiamondGlow® treatment every 4 to 6 weeks. This timing allows your skin to fully benefit from the exfoliation and serum infusion while staying in sync with its natural renewal cycle. A consistent schedule compounds results — clearer pores, smoother texture, and a luminous tone.",
    },
    {
        q: "What happens during a DiamondGlow® treatment?",
        a: "This facial combines exfoliation, extraction, and infusion — three key facial steps. That includes buffing away old, dead skin cells; removing dirt and oil from pores; and applying a potent serum that can now more easily penetrate the skin. There are six diamond tips, allowing the treatment to be customized to suit your skin. The same handpiece simultaneously uses pneumatic force (vacuum suction) to clear away old cells and other debris from within pores, eliminating blackheads. As your surface skin is buffed away and your pores are cleared, the handpiece delivers the serum into your newly opened pores.",
    },
    {
        q: "Which DiamondGlow® serum should you choose?",
        a: "Your esthetician will help you select the SkinMedica® Pro-Infusion Serum that best targets your concern — whether that's deep hydration, brightening uneven tone, calming sensitivity, or refining congested skin. Each serum is formulated to pair seamlessly with the DiamondGlow® delivery system.",
    },
];

export default function DiamondGlow() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            id="diamondglow"
            className="relative py-24 md:py-36 bg-sage text-cream overflow-hidden"
            data-testid="diamondglow-section"
        >
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="organic-blob bg-rose top-20 left-10 w-[380px] h-[380px] rounded-full opacity-30" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className="lg:col-span-5">
                    <Reveal y={40}>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
                            <img
                                src="https://customer-assets.emergentagent.com/job_85ef1133-d1a9-481e-8218-35b1a795e382/artifacts/lr6p61sm_image.png"
                                alt="DiamondGlow microdermabrasion treatment"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                    <Reveal>
                        <p className="text-rose-light tracking-[0.4em] uppercase text-xs mb-5">
                            Radiant Results That Last
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-cream text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.02]">
                            DiamondGlow<sup className="text-3xl">®</sup>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-7 space-y-5 text-cream/85 text-lg leading-[1.85] font-light">
                            <p>
                                Just one DiamondGlow® session enhances clarity and
                                luminosity. You'll love your instantly dewy, brighter
                                skin, infused with nourishing SkinMedica®
                                Pro-Infusion Serums. With each treatment, the
                                results compound.
                            </p>
                            <p>
                                The six DiamondGlow® diamond tips allow your
                                Esthetician to customize your treatment to suit your
                                skin. Each tip is designed for maximum efficacy and
                                exfoliation for specific skin concerns.
                            </p>
                        </div>
                    </Reveal>

                    {/* FAQ */}
                    <div className="mt-10 border-t border-cream/15">
                        {FAQS.map((f, i) => {
                            const open = openIndex === i;
                            return (
                                <Reveal key={i} delay={0.05 * i}>
                                    <div className="border-b border-cream/15">
                                        <button
                                            onClick={() => setOpenIndex(open ? -1 : i)}
                                            className="w-full text-left py-5 flex items-center justify-between gap-6 group focus:outline-none"
                                            data-testid={`diamondglow-faq-${i}`}
                                        >
                                            <span className="font-serif text-cream text-xl sm:text-2xl font-light pr-2 group-hover:text-rose-light transition-colors">
                                                {f.q}
                                            </span>
                                            <span className="shrink-0 w-9 h-9 rounded-full border border-cream/30 flex items-center justify-center text-cream group-hover:bg-cream group-hover:text-sage transition-colors">
                                                {open ? (
                                                    <Minus size={16} strokeWidth={1.5} />
                                                ) : (
                                                    <Plus size={16} strokeWidth={1.5} />
                                                )}
                                            </span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-6 pr-12 text-cream/80 leading-relaxed font-light">
                                                        {f.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
