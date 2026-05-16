import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Star, ArrowUpRight } from "lucide-react";
import { YELP_URL } from "../data/site";
import { Reveal } from "./Reveal";

function StatCard({ rating, label, href, testid, max = 5 }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    return (
        <a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-cream rounded-3xl border border-champagne/40 p-10 md:p-12 shadow-[0_4px_20px_rgba(58,58,58,0.04)] hover:shadow-[0_22px_50px_rgba(58,58,58,0.10)] hover:-translate-y-1 transition-all duration-500"
            data-testid={testid}
        >
            <div className="flex items-center gap-1 text-champagne mb-5">
                {Array.from({ length: max }).map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        strokeWidth={1.4}
                        fill={inView && i < Math.round(rating) ? "currentColor" : "none"}
                        className="transition-all"
                        style={{ transitionDelay: `${i * 80}ms` }}
                    />
                ))}
            </div>
            <div className="flex items-baseline gap-3">
                <span className="font-serif text-ink text-7xl md:text-8xl font-medium leading-none">
                    {inView ? (
                        <CountUp end={rating} decimals={1} duration={1.6} />
                    ) : (
                        rating.toFixed(1)
                    )}
                </span>
                <span className="text-muted-gray font-serif text-3xl">/ 5</span>
            </div>
            <div className="mt-5 flex items-center justify-between">
                <span className="text-ink/75 tracking-[0.2em] uppercase text-xs">
                    {label}
                </span>
                <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
            </div>
        </a>
    );
}

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="relative py-24 md:py-32 bg-taupe overflow-hidden"
            data-testid="reviews-section"
        >
            <div className="organic-blob bg-rose top-1/2 -left-20 w-[420px] h-[420px] rounded-full opacity-30" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
                <Reveal>
                    <p className="text-[#A07E3F] tracking-[0.35em] uppercase text-sm font-semibold mb-5">
                        Social Proof
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-serif text-ink text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05]">
                        Loved by <em className="text-rose-dark not-italic font-medium">Our Clients</em>
                    </h2>
                </Reveal>

                <div className="mt-14 grid sm:grid-cols-2 gap-6 md:gap-8 text-left">
                    <Reveal delay={0.15}>
                        <StatCard
                            rating={5.0}
                            label="On Google"
                            href="https://www.google.com/search?q=Marlinda%27s+Mod+Skincare+Burlingame"
                            testid="stat-google"
                        />
                    </Reveal>
                    <Reveal delay={0.25}>
                        <StatCard
                            rating={4.7}
                            label="On Yelp"
                            href={YELP_URL}
                            testid="stat-yelp"
                        />
                    </Reveal>
                </div>

                <Reveal delay={0.3}>
                    <a
                        href={YELP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple inline-flex items-center gap-2 mt-12 bg-transparent border border-champagne text-ink hover:bg-rose hover:border-rose hover:text-white rounded-full px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.04]"
                        data-testid="reviews-cta"
                    >
                        Read Our Reviews
                        <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
