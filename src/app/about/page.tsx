"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TeamGrid } from "@/components/about/team-grid";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            {/* 1. MANIFESTO HERO */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                            More than a service provider
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Your <span className="text-primary italic font-[family-name:var(--font-playfair)]">Growth Partner</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                            In today's digital landscape, websites are everywhere — yet most serve as little more than static brochures. Functional, but forgettable.
                            <br /><br />
                            <strong className="text-foreground font-medium">At Nexa Waves, we take a different approach. We build digital platforms engineered to drive measurable business growth — not just look good.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. BELIEFS (Three Pillars) */}
            <section className="py-24 bg-card border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 border border-border/50 bg-background rounded-2xl h-full flex flex-col"
                        >
                            <h3 className="text-3xl font-bold mb-2 font-[family-name:var(--font-outfit)]">Research</h3>
                            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6">before design</p>
                            <p className="text-muted-foreground leading-relaxed">
                                We don’t believe in guesswork. Before a single pixel is placed, we dive deep into your industry, analyzing competitor gaps and customer intent. We identify exactly how your audience searches and what they need to ensure the final product answers their questions instantly.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 border border-border/50 bg-background rounded-2xl h-full flex flex-col"
                        >
                            <h3 className="text-3xl font-bold mb-2 font-[family-name:var(--font-outfit)] text-primary">Strategy</h3>
                            <p className="text-foreground font-medium tracking-wide text-sm uppercase mb-6">before execution</p>
                            <p className="text-muted-foreground leading-relaxed">
                                A website without a plan is just a digital brochure. We map out the entire customer journey—from the first click to the final conversion. Our strategy defines the content hierarchy, user flows, and call-to-action placement to guide every visitor effortlessly toward becoming a customer.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 border border-border/50 bg-background rounded-2xl h-full flex flex-col"
                        >
                            <h3 className="text-3xl font-bold mb-2 font-[family-name:var(--font-outfit)]">Systems</h3>
                            <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6">before scale</p>
                            <p className="text-muted-foreground leading-relaxed">
                                Growth shouldn't break your business. We build digital foundations ready to scale from day one. By implementing robust CMS structures, automated workflows, and clean code, we ensure your technology handles increased traffic and content without constant manual maintenance.
                            </p>
                        </motion.div>
                    </div>
                    <div className="text-center mt-16 max-w-3xl mx-auto">
                        <p className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] italic text-muted-foreground leading-relaxed">
                            "Design is not decoration. Technology is not a checklist. Growth is intentional."
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. DIFFERENTIATION (We Don't Build Websites) */}
            <section className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)] leading-tight">
                            We Don’t Just Build Websites.
                            <span className="block text-primary mt-2">We Build Customer-Centric Growth Systems.</span>
                        </h2>
                        <p className="text-lg opacity-80 leading-relaxed mb-8">
                            Every Nexa Waves project is treated as a long-term growth system, not a one-time deliverable. The result is not just a good-looking website, but a platform designed to attract, engage, and convert customers consistently.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            "Brand-led, aesthetic design that builds trust",
                            "SEO, GMB, and Generative Engine Optimization",
                            "Automated content systems rooted in research",
                            "Modern, secure, and scalable technology",
                            "Conversion-focused user journeys"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 border border-white/10 rounded-lg hover:border-primary/50 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROCESS (Research-First) */}
            <section className="py-24 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Our Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-outfit)]">Research-First Approach</h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Before a single interface is designed, we invest time in understanding:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Your industry and niche", "Customer behavior and intent", "How discovery happens in your market", "What drives real conversions"].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 py-4 px-6 bg-muted/30 rounded-full border border-border">
                                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-xl italic font-[family-name:var(--font-playfair)] text-center text-foreground/80">
                        Only then do we decide what to build, what to simplify, and what to avoid.
                    </p>
                </div>
            </section>

            {/* 5. TEAM GRID */}
            <TeamGrid />

            {/* 6. VISION */}
            <section className="py-24 bg-card text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 font-[family-name:var(--font-outfit)]">Our Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {[
                            "Websites are active growth assets",
                            "Technology works seamlessly in the background",
                            "Customer acquisition is predictable and sustainable",
                            "Businesses grow through systems, not constant manual effort"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-16 text-lg tracking-wide uppercase font-bold text-muted-foreground">
                        Building digital foundations that support growth for years.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
