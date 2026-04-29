import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

export default function Story() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section
            ref={ref}
            id="story"
            className="relative py-24 md:py-36 bg-cream-200 overflow-hidden"
            data-testid="story-section"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className="lg:col-span-6 relative">
                    <Reveal y={50} duration={1}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-sage-100 aspect-[4/5] max-w-md mx-auto lg:mx-0">
                            <motion.img
                                style={{ y }}
                                src="https://customer-assets.emergentagent.com/job_85ef1133-d1a9-481e-8218-35b1a795e382/artifacts/0gixb0lb_image.png"
                                alt="Marlinda performing permanent makeup with precision"
                                className="absolute inset-0 w-full h-[112%] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent" />
                        </div>

                        {/* Decorative champagne ring */}
                        <div className="hidden lg:block absolute -bottom-6 -right-6 w-40 h-40 rounded-full border border-champagne/40" />
                    </Reveal>
                </div>

                {/* Bio */}
                <div className="lg:col-span-6">
                    <Reveal>
                        <p className="text-sage tracking-[0.4em] uppercase text-xs mb-5">
                            Experience
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-sage text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-light tracking-tight">
                            The Story Behind <br />
                            <em className="text-rose-dark">Our Beauty</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-8 space-y-5 text-ink/80 text-lg leading-[1.85] font-light">
                            <p>
                                Marlinda founded Marlinda's Skin & Bodycare in 1996,
                                establishing a legacy of excellence in skincare. Over
                                the years, she has cultivated a loyal clientele who
                                appreciate her professionalism, dedication, and warm,
                                friendly approach.
                            </p>
                            <p>
                                With over 20 years of experience as a permanent
                                makeup artist, Marlinda is highly skilled in
                                enhancing natural beauty through precise, artistic
                                techniques. As a perceptive and knowledgeable
                                esthetician, she is passionate about helping her
                                clients achieve and maintain a youthful, healthy
                                appearance — combining personalized skincare
                                treatments with high-quality, skin-specific products.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-px flex-1 max-w-[60px] bg-sage/30" />
                            <p className="font-serif italic text-sage text-xl">
                                — Marlinda Macay
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
