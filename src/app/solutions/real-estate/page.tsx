"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Palette, Shield, TrendingUp, Share2, Clock, ArrowRight, Check,
    Home, Star, Zap, MessageSquare, Globe
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

// 5 Core Advantages Data
const coreAdvantages = [
    {
        icon: Palette,
        title: "Aesthetics",
        tagline: "Look Premium, Look Established",
        result: "Customers take you seriously from the first glance.",
        features: [
            "Modern, high-end design that instantly builds confidence",
            "Beautiful property listings with photos, specs & pricing",
            "Clean layout that feels like a big brand, not a local listing",
            "Perfect experience on mobile, tablet & desktop"
        ]
    },
    {
        icon: Shield,
        title: "Trust",
        tagline: "Believe You Before They Call",
        result: "Buyers feel safe contacting you — hesitation is gone.",
        features: [
            "Live Google reviews displayed on the website",
            "Real customer testimonials & success stats",
            "OTP-verified inquiries only (no fake leads)",
            "Secure website with privacy & data protection"
        ]
    },
    {
        icon: TrendingUp,
        title: "Growth",
        tagline: "More Leads, Better Quality",
        result: "Higher conversions with less effort.",
        features: [
            "Leads captured from every listing & page",
            "Smart search & filters help buyers shortlist themselves",
            "Customers contact you with clear intent",
            "Central dashboard to manage listings & inquiries"
        ]
    },
    {
        icon: Share2,
        title: "Virality",
        tagline: "Your Listings Sell You",
        result: "Customers market your business for you.",
        features: [
            "Share one clean link instead of sending images repeatedly",
            "Listings look professional when shared on WhatsApp & social media",
            "Easy forwarding by customers to family & friends",
            "Blog & updates improve Google visibility"
        ]
    },
    {
        icon: Clock,
        title: "Time",
        tagline: "Stop Explaining, Start Closing",
        result: "You save time every day and close deals faster.",
        features: [
            "No more repeating details on calls or WhatsApp",
            "Price, specs, location, photos — everything shown clearly",
            "Customers come informed and decision-ready",
            "Less follow-ups, faster closures"
        ]
    }
];

// Advantages Summary Table
const advantagesSummary = [
    { advantage: "Aesthetics", benefit: "Premium brand perception" },
    { advantage: "Trust", benefit: "Confidence before first call" },
    { advantage: "Growth", benefit: "Consistent, quality leads" },
    { advantage: "Virality", benefit: "Organic reach & referrals" },
    { advantage: "Time", benefit: "Faster decisions, less effort" }
];

export default function RealEstateSolutionsPage() {
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
                            Real estate solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Not Just a Website.{" "}
                            <span className="text-primary italic font-[family-name:var(--font-playfair)]">A Growth Engine.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-6">
                            An aesthetically designed digital presence elevates your brand and builds instant trust with buyers.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-10">
                            <strong className="text-foreground">The right technology gives you worldwide reach</strong> — connecting you with customers you never imagined, 24 hours a day, 7 days a week.
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
                                    "You keep sending the same property images on WhatsApp, again and again",
                                    "Customers ask basic questions you've answered a hundred times",
                                    "Fake inquiries waste your time — no way to filter serious buyers",
                                    "Your competitors look bigger and more established online",
                                    "You depend entirely on word-of-mouth and personal referrals"
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
                                <MessageSquare className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium text-muted-foreground">
                                    "Send me the details on WhatsApp"<br />— Every customer, every time
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
                            The solution
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                            Why This Platform Changes Your Business
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            This is not just a website. It's a{" "}
                            <strong className="text-foreground">digital showroom</strong> +{" "}
                            <strong className="text-foreground">trust builder</strong> +{" "}
                            <strong className="text-foreground">growth engine</strong> that works 24/7.
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

            {/* SUMMARY TABLE - One Platform, Five Advantages */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-[family-name:var(--font-outfit)]">
                        One Platform. <span className="text-primary">Five Big Advantages.</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Every feature is designed with one goal: growing your business
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
                                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
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
                            "Premium Landing Page",
                            "Property Listing Page with Filters",
                            "Individual Property Detail Pages",
                            "Service Pages (Buying, Selling, Rental, NRI)",
                            "Contact Page with OTP Verification",
                            "Property Submission Portal",
                            "Blog Section for Market Updates",
                            "About Us & Team Page",
                            "Live Google Reviews Integration",
                            "Testimonials Section",
                            "Admin Dashboard",
                            "Mobile-Optimized Design",
                            "SEO & Google Business Ready",
                            "Privacy Policy & Terms Pages"
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
                                    "Share your logo & brand colors",
                                    "Provide property details & photos",
                                    "Tell us about your services",
                                    "Start using!"
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
                                    "Design & build your complete website",
                                    "Configure all pages, forms & integrations",
                                    "Optimize for search engines",
                                    "Handle hosting & ongoing maintenance"
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
                        What Realtors Are <span className="text-primary">Saying</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "I used to send property images on WhatsApp 10 times a day. Now I just share one link. Customers see everything and call me ready to visit.",
                            "The OTP verification changed everything. No more fake inquiries. Every lead is someone genuinely interested in buying or selling.",
                            "Customers think I'm a big company now. My website looks more professional than builders with 100x my inventory."
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
                                        <p className="font-bold text-sm">Happy Realtor</p>
                                        <p className="text-xs text-muted-foreground">Verified Customer</p>
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
                        Ready to transform your business?
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                        Your complete real estate platform — ready to launch in days, not months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {[
                            "Complete website setup",
                            "Your branding (logo, colors)",
                            "All integrations configured",
                            "Training included",
                            "1 year hosting included"
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
                        "In today's world, if you're not online, you don't exist."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
