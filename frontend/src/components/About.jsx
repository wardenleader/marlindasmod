import { Reveal } from "./Reveal";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 md:py-36 bg-taupe overflow-hidden"
            data-testid="about-section"
        >
            <div className="organic-blob bg-rose/30 -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-60" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <Reveal>
                        <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-6">
                            Welcome
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-[4.5rem] leading-[1.02] font-medium tracking-tight">
                            Crafting <br className="hidden md:block" />
                            <em className="text-rose-dark not-italic font-medium">Beauty</em> with <br className="hidden md:block" />
                            Passion
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-8 hidden lg:block w-20 h-px bg-champagne" />
                    </Reveal>
                </div>

                <div className="lg:col-span-7 space-y-7 text-ink/85 text-lg leading-[1.85] font-light">
                    <Reveal delay={0.15}>
                        <p>
                            At Marlinda's, you'll find a spa sanctuary in the heart
                            of Burlingame — a place where care is personal and every
                            experience is centered around you.
                        </p>
                    </Reveal>
                    <Reveal delay={0.22}>
                        <p>
                            Each treatment is thoughtfully tailored, with dedicated,
                            one-on-one care from your esthetician. From rejuvenating
                            facials to advanced services such as the SkinMedica
                            Illuminize Peel, every experience is enhanced with
                            award-winning <em className="not-italic font-medium text-ink">SkinCeuticals</em> and{" "}
                            <em className="not-italic font-medium text-ink">Phytomer</em> luxury marine-based skincare made
                            in France — cornerstones of our results-driven approach,
                            paired with meticulous, deep cleansing techniques.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p>
                            Each service is designed to support healthy, balanced,
                            radiant skin. Whether you're addressing specific concerns
                            or simply taking time for yourself, you are guided with
                            precision, care, and a commitment to your individual
                            needs.
                        </p>
                    </Reveal>
                    <Reveal delay={0.38}>
                        <p>
                            At Marlinda's, your care is our priority. We are here to
                            support you in feeling your best every day with
                            thoughtful, personalized attention. For over 30 years in
                            Burlingame, across three generations, clients have
                            trusted Marlinda's for consistent, attentive care —
                            reflected in our five-star reviews.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
