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
            className="relative py-24 md:py-36 bg-cream overflow-hidden"
            data-testid="story-section"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div className="lg:col-span-5 relative">
                    <Reveal y={50} duration={1}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-taupe aspect-[4/5] max-w-md mx-auto lg:mx-0">
                            <motion.img
                                style={{ y }}
                                src="https://customer-assets.emergentagent.com/job_luxury-skincare-spa-1/artifacts/eyq9uepm_image.png"
                                alt="Marlinda Macay, founder of Marlinda's Mod Skincare"
                                className="absolute inset-0 w-full h-[112%] object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Decorative champagne ring */}
                        <div className="hidden lg:block absolute -bottom-6 -right-6 w-40 h-40 rounded-full border border-champagne" />
                    </Reveal>
                </div>

                {/* Bio */}
                <div className="lg:col-span-7">
                    <Reveal>
                        <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5">
                            Experience
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-ink text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-medium tracking-tight">
                            The Story Behind <br />
                            <em className="text-rose-dark not-italic font-medium">Our Beauty</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-8 space-y-5 text-ink/85 text-lg leading-[1.85] font-light">
                            <p>
                                Marlinda is the founder of Marlinda's Skin &
                                Bodycare, established in 1996, where she has
                                cultivated a distinguished legacy of excellence in
                                skincare. Rooted in a three-generation tradition
                                alongside her daughter, Mia and granddaughter,
                                Maddie, her work is a reflection of enduring
                                passion, artistry, and a deep commitment to care.
                                Over the years, she has built a devoted clientele
                                who are drawn not only to her expertise, but to her
                                refined approach, attention to detail, and
                                effortlessly warm presence.
                            </p>
                            <p>
                                With more than two decades of experience in
                                permanent makeup artistry, Marlinda is recognized
                                for her precision, elevated technique, and ability
                                to enhance natural beauty with soft, sophisticated
                                results. As an intuitive and highly knowledgeable
                                esthetician, she approaches each client with a
                                tailored perspective — delivering personalized
                                treatments and thoughtfully curated, results-driven
                                skincare designed to restore balance, radiance, and
                                confidence.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-px flex-1 max-w-[60px] bg-champagne" />
                            <p className="font-serif italic text-ink text-xl">
                                — Marlinda Macay
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
