"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    ShoppingBag, Search, Palette, Zap, Shield, ArrowRight, Check,
    Users, Clock, Trophy, Globe, TrendingUp, Sparkles, Code
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export default function EcommerceSolutionsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                            E-Commerce Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Not Another Shopify Site.<br />
                            <span className="text-primary italic font-[family-name:var(--font-playfair)]">Your Brand & Customer Engine.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-10">
                            All Shopify stores look the same. Yours won't. We build spectacular,
                            branded storefronts powered by Shopify & WordPress — with SEO and discoverability
                            built from the foundation, not as an afterthought.
                        </p>
                        <Button size="lg" className="rounded-full text-sm font-bold uppercase tracking-wider h-14 px-10">
                            Get Your Free Demo <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* PROBLEM STATEMENT */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                                Tired of Stores That Look{" "}
                                <span className="text-primary">Exactly The Same?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Most e-commerce sites use the same templates, the same layouts, the same themes.
                                Customers scroll past within seconds. You need a store that stops them,
                                builds your brand, and converts — not just another cookie-cutter site.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Generic themes don't build brand recall",
                                    "Template sites = template results",
                                    "SEO is usually an afterthought"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-foreground">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center"
                        >
                            <div className="text-center p-8">
                                <Sparkles className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium text-muted-foreground">
                                    "This looks like every other store"<br />— said no customer ever, after seeing our work
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE NEXA WAVES DIFFERENCE */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                            The Nexa Waves Difference
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                            Spectacular Design. Powerful Platform. Found Everywhere.
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                            We build on <strong className="text-foreground">Shopify</strong> for bulletproof e-commerce and{" "}
                            <strong className="text-foreground">WordPress</strong> for dynamic content — but the design?
                            That's 100% custom, 100% yours, 100% unforgettable.
                        </p>

                        {/* Platform Badges */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
                                <ShoppingBag className="w-6 h-6 text-primary" />
                                <span className="font-bold">Shopify Powered</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
                                <Code className="w-6 h-6 text-primary" />
                                <span className="font-bold">WordPress Ready</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
                                <Search className="w-6 h-6 text-primary" />
                                <span className="font-bold">SEO & GEO Built-in</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* KEY DIFFERENTIATORS */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Palette,
                                title: "Personalized Design, Not Templates",
                                description: "Every store we build is designed from scratch for your brand. No themes, no templates — just spectacular, custom experiences that look nothing like the competition.",
                                highlight: "Your brand, amplified"
                            },
                            {
                                icon: Search,
                                title: "SEO & GEO From The Foundation",
                                description: "Search optimization isn't an add-on for us — it's built into every page, every product, every URL. Generative Engine Optimization (GEO) ensures AI assistants recommend your products.",
                                highlight: "Discoverability by default"
                            },
                            {
                                icon: ShoppingBag,
                                title: "Shopify Power, Custom Look",
                                description: "Get all the reliability, security, and features of Shopify — without looking like every other Shopify store. Best of both worlds: proven platform, unique presence.",
                                highlight: "The engine they trust, the face you own"
                            },
                            {
                                icon: Code,
                                title: "Dynamic WordPress Sites",
                                description: "For content-heavy brands, we build on WordPress with WooCommerce — giving you full control over blogs, landing pages, and dynamic content that drives traffic.",
                                highlight: "Content that converts"
                            },
                            {
                                icon: TrendingUp,
                                title: "Conversion-Optimized Journeys",
                                description: "Every click path, every button, every product page is designed to convert. We don't just make pretty stores — we engineer shopping experiences that sell.",
                                highlight: "Design that drives revenue"
                            },
                            {
                                icon: Zap,
                                title: "Lightning Fast Performance",
                                description: "Speed = sales. Our stores are optimized for sub-2-second load times, mobile-first design, and Core Web Vitals that make Google happy and customers stay.",
                                highlight: "Fast sites sell more"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background p-8 rounded-2xl border border-border"
                            >
                                <feature.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-outfit)]">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {feature.description}
                                </p>
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    {feature.highlight}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SHOPIFY VS US COMPARISON */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        Generic Shopify Store <span className="text-primary">vs</span> Nexa Waves Build
                    </h2>
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                                    <th className="px-6 py-4 text-center font-bold text-muted-foreground">Generic Shopify</th>
                                    <th className="px-6 py-4 text-center font-bold text-primary">Nexa Waves</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Design", "Template-based", "100% Custom"],
                                    ["Brand Identity", "Looks like others", "Uniquely yours"],
                                    ["SEO", "Basic, add-on apps", "Built from foundation"],
                                    ["GEO (AI Optimization)", "Not included", "Built-in"],
                                    ["Performance", "Theme-dependent", "Optimized for speed"],
                                    ["Mobile Experience", "Responsive (basic)", "Mobile-first design"],
                                    ["Conversion Focus", "Generic layout", "Engineered journeys"],
                                    ["Support", "Self-service", "Dedicated partner"]
                                ].map(([aspect, generic, nexa], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                                        <td className="px-6 py-4 font-medium border-b border-border">{aspect}</td>
                                        <td className="px-6 py-4 text-center text-muted-foreground border-b border-border">{generic}</td>
                                        <td className="px-6 py-4 text-center font-medium border-b border-border">{nexa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="py-20 bg-foreground text-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        Here's What You Get
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Custom Homepage Design",
                            "Product Listing Pages",
                            "Individual Product Pages",
                            "Collection/Category Pages",
                            "Shopping Cart & Checkout Optimization",
                            "About & Contact Pages",
                            "Blog/Content Section",
                            "SEO Foundation Setup",
                            "GEO (Generative Engine) Optimization",
                            "Mobile-First Responsive Design",
                            "Performance Optimization",
                            "Analytics & Tracking Setup",
                            "Payment Gateway Integration",
                            "Email Marketing Integration",
                            "Social Media Integration",
                            "Privacy Policy & Legal Pages"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 p-4 bg-white/10 rounded-lg"
                            >
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span className="font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS GRID */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-[family-name:var(--font-outfit)]">
                        Your Store Will Help You...
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Every design decision is made with one goal: growing your brand and revenue
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Users, title: "Build Your Brand", desc: "Stand out from the sea of template stores." },
                            { icon: TrendingUp, title: "Get Discovered", desc: "SEO & GEO built-in, not bolted-on." },
                            { icon: Clock, title: "Convert More", desc: "Optimized journeys = higher sales." },
                            { icon: Trophy, title: "Look Premium", desc: "Design that justifies premium prices." },
                            { icon: Globe, title: "Scale Easily", desc: "Shopify/WordPress scales with you." }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 bg-card rounded-2xl border border-border"
                            >
                                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        We Handle <span className="text-primary">Everything</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold mb-6 text-center">What You Do</h3>
                            <ul className="space-y-4">
                                {[
                                    "Share your brand vision",
                                    "Provide product catalog",
                                    "Review & approve designs",
                                    "Launch & start selling!"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6 text-center">What We Do</h3>
                            <ul className="space-y-4">
                                {[
                                    "Design your custom storefront",
                                    "Build on Shopify/WordPress",
                                    "Optimize for SEO & speed",
                                    "Launch & support ongoing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        What Our Clients <span className="text-primary">Say</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Everyone asks where I got my website done. It looks nothing like other Shopify stores. My brand finally has the presence it deserves.",
                            "We were getting zero organic traffic before. Now we rank on Google for our key products. SEO being built-in made all the difference.",
                            "Switched from a template-based store and our conversion rate went up 40%. Customers actually trust us now because we look premium."
                        ].map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-card rounded-2xl border border-border"
                            >
                                <p className="text-lg italic font-[family-name:var(--font-playfair)] text-muted-foreground mb-6">
                                    "{quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                                    <div>
                                        <p className="font-bold text-sm">Happy Brand Owner</p>
                                        <p className="text-xs text-muted-foreground">E-Commerce Client</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                        Ready For a Store That Actually Stands Out?
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                        Your brand deserves more than a template. Let's build something spectacular.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {[
                            "Custom design",
                            "Shopify or WordPress",
                            "SEO & GEO built-in",
                            "Mobile-first",
                            "Performance optimized",
                            "Ongoing support"
                        ].map((item, i) => (
                            <span key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                                <Check className="w-4 h-4" /> {item}
                            </span>
                        ))}
                    </div>
                    <Button size="lg" variant="secondary" className="rounded-full text-sm font-bold uppercase tracking-wider h-14 px-10">
                        Get Your Free Demo <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="mt-8 text-lg italic font-[family-name:var(--font-playfair)] opacity-80">
                        "It's not just another Shopify site. It's your brand and customer engine."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
