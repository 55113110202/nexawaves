"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Palette, Shield, TrendingUp, Share2, Clock, ArrowRight, Check,
    ShoppingBag, Star, Zap, MessageSquare, Globe, Code, Search
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

// 5 Core Advantages Data - E-commerce Focused
const coreAdvantages = [
    {
        icon: Palette,
        title: "Aesthetics",
        tagline: "Look Premium, Look Established",
        result: "Customers trust your brand and pay premium prices.",
        features: [
            "Custom design that doesn't look like every other Shopify store",
            "Beautiful product pages with galleries, specs & pricing",
            "Brand-first layout that builds recognition and loyalty",
            "Perfect experience on mobile, tablet & desktop"
        ]
    },
    {
        icon: Shield,
        title: "Trust",
        tagline: "Buy Confidently, Without Hesitation",
        result: "Customers complete checkout without second-guessing.",
        features: [
            "Professional design that signals legitimacy",
            "Customer reviews & testimonials prominently displayed",
            "Secure checkout with trusted payment badges",
            "Clear policies and transparent pricing"
        ]
    },
    {
        icon: TrendingUp,
        title: "Growth",
        tagline: "Found by Customers, Not Just Found",
        result: "Organic traffic that converts into revenue.",
        features: [
            "SEO built into every page, product, and collection",
            "Generative Engine Optimization (GEO) for AI assistants",
            "Smart product filtering and search",
            "Analytics and conversion tracking built-in"
        ]
    },
    {
        icon: Share2,
        title: "Virality",
        tagline: "Products That Share Themselves",
        result: "Customers become your marketing team.",
        features: [
            "Beautiful product pages perfect for social sharing",
            "One-click share to WhatsApp, Instagram, Facebook",
            "Shareable collection links for campaigns",
            "Blog content that drives organic traffic"
        ]
    },
    {
        icon: Clock,
        title: "Time",
        tagline: "Focus on Business, Not Website",
        result: "You run your business while the store runs itself.",
        features: [
            "Easy product management — no coding needed",
            "Automated inventory sync and updates",
            "Customer queries reduced with detailed product info",
            "Orders processed smoothly without manual intervention"
        ]
    }
];

// Advantages Summary Table
const advantagesSummary = [
    { advantage: "Aesthetics", benefit: "Premium brand perception" },
    { advantage: "Trust", benefit: "Higher conversion rates" },
    { advantage: "Growth", benefit: "Organic traffic & visibility" },
    { advantage: "Virality", benefit: "Social proof & referrals" },
    { advantage: "Time", benefit: "Automated operations" }
];

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
                        <span className="text-sm font-bold text-primary mb-6 block">
                            E-commerce solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Not Another Shopify Store.{" "}
                            <span className="text-primary italic font-[family-name:var(--font-playfair)]">Your Brand Engine.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-6">
                            An aesthetically designed storefront elevates your brand and builds instant trust with customers.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-10">
                            <strong className="text-foreground">The right technology gives you worldwide reach</strong> — connecting you with customers you never imagined, selling your products 24/7 across the globe.
                        </p>

                        {/* Value Props */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                                <Palette className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Premium Design</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                                <Shield className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Instant Trust</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                                <Globe className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">Worldwide Reach</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                                <Search className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">SEO & GEO Built-in</span>
                            </div>
                        </div>

                        <Button size="lg" className="h-14 px-10">
                            Get your free demo <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* PAIN POINTS SECTION */}
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
                                Sound Familiar?
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Your store looks exactly like every other Shopify site",
                                    "Customers don't remember your brand after visiting",
                                    "Zero organic traffic — you're paying for every visitor",
                                    "High cart abandonment because the site doesn't feel trustworthy",
                                    "Template limitations stop you from standing out"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0"></div>
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
                                <ShoppingBag className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium text-muted-foreground">
                                    "This looks like every other store"<br />— said no customer ever, after seeing our work
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold text-primary mb-4 block">
                            The difference
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                            Why This Platform Changes Your Business
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            This is not just a store. It's a{" "}
                            <strong className="text-foreground">brand statement</strong> +{" "}
                            <strong className="text-foreground">discovery engine</strong> +{" "}
                            <strong className="text-foreground">conversion machine</strong> that works 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5 CORE ADVANTAGES - GRID BLOCKS */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* First row - 3 columns */}
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {coreAdvantages.slice(0, 3).map((advantage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-background p-6 md:p-8 rounded-2xl border border-border h-full flex flex-col"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <advantage.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-1">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-primary font-medium text-sm mb-4">
                                        {advantage.tagline}
                                    </p>
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {advantage.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mt-auto">
                                        <p className="text-xs font-medium">
                                            <span className="text-primary">Result:</span>{" "}
                                            <span className="text-foreground">{advantage.result}</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Second row - 2 columns */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {coreAdvantages.slice(3, 5).map((advantage, index) => (
                                <motion.div
                                    key={index + 3}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index + 3) * 0.1 }}
                                    className="bg-background p-6 md:p-8 rounded-2xl border border-border h-full flex flex-col"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <advantage.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-1">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-primary font-medium text-sm mb-4">
                                        {advantage.tagline}
                                    </p>
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {advantage.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mt-auto">
                                        <p className="text-xs font-medium">
                                            <span className="text-primary">Result:</span>{" "}
                                            <span className="text-foreground">{advantage.result}</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        Generic Shopify <span className="text-primary">vs</span> Nexa Waves
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

            {/* SUMMARY TABLE - One Platform, Five Advantages */}
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-[family-name:var(--font-outfit)]">
                        One Platform. <span className="text-primary">Five Big Advantages.</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Every feature is designed with one goal: growing your brand and revenue
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <table className="w-full">
                            <thead className="bg-primary text-primary-foreground">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Advantage</th>
                                    <th className="px-6 py-4 text-left font-bold">What It Gives You</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advantagesSummary.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                                        <td className="px-6 py-4 font-bold border-b border-border">{row.advantage}</td>
                                        <td className="px-6 py-4 text-muted-foreground border-b border-border">{row.benefit}</td>
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
                            "Product Listing Pages with Filters",
                            "Individual Product Pages",
                            "Collection & Category Pages",
                            "Shopping Cart & Checkout Optimization",
                            "About & Contact Pages",
                            "Blog & Content Section",
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

            {/* PROCESS SECTION */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        We Handle <span className="text-primary">Everything</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold mb-6 text-center">What You Do</h3>
                            <ul className="space-y-4">
                                {[
                                    "Share your brand vision & assets",
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
                                    "Build on Shopify or WordPress",
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
            <section className="py-20 bg-card border-y border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        What Brands Are <span className="text-primary">Saying</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Everyone asks where I got my website done. It looks nothing like other Shopify stores. My brand finally has the presence it deserves.",
                            "We were getting zero organic traffic before. Now we rank on Google for our key products. SEO being built-in made all the difference.",
                            "Switched from a template store and our conversion rate went up 40%. Customers actually trust us now because we look premium."
                        ].map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-background rounded-2xl border border-border"
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
                        Ready for a store that actually stands out?
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
                            "Ongoing support"
                        ].map((item, i) => (
                            <span key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
                                <Check className="w-4 h-4" /> {item}
                            </span>
                        ))}
                    </div>
                    <Button size="lg" variant="secondary" className="h-14 px-10">
                        Get your free demo <ArrowRight className="w-4 h-4 ml-2" />
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
