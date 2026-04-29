import { Reveal } from "./Reveal";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 md:py-36 bg-cream overflow-hidden"
            data-testid="about-section"
        >
            <div className="organic-blob bg-sage-200 -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <Reveal>
                        <p className="text-sage tracking-[0.4em] uppercase text-xs mb-6">
                            Welcome
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-sage text-5xl sm:text-6xl md:text-[4.5rem] leading-[1.02] font-light tracking-tight">
                            Crafting <br className="hidden md:block" />
                            <em className="text-rose-dark">Beauty</em> with <br className="hidden md:block" />
                            Passion
                        </h2>
                    </Reveal>
                </div>

                <div className="lg:col-span-7 space-y-7 text-ink/80 text-lg leading-[1.85] font-light">
                    <Reveal delay={0.15}>
                        <p>
                            Beauty is more than skin deep — it's the quiet confidence
                            that radiates when you feel your best from within. Welcome
                            to a sanctuary where science meets soul, and where you
                            experience the beauty you were always meant to embody.
                        </p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p>
                            At Marlinda's Mod Skincare, we specialize in rejuvenating
                            facials tailored to your unique skin needs, advanced
                            treatments like the SkinMedica® Illuminize Peel®, and
                            deep pore cleansing therapies. Our holistic approach to
                            beauty blends cutting-edge products with soothing
                            techniques designed to hydrate, detoxify, and reveal your
                            natural radiance.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <p>
                            Whether you're seeking gentle care for sensitive skin,
                            practical solutions for acne, or a serene moment of
                            self-care, our expert estheticians are here to guide you
                            on your journey to vibrant, healthy skin.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
