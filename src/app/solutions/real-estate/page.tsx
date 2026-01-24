"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Home, Phone, Briefcase, Star, Shield, ArrowRight, Check,
    Users, Clock, Trophy, Zap, Globe, Smartphone, Search as SearchIcon
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

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
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                            Real Estate Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Your Digital Storefront That Works{" "}
                            <span className="text-primary italic font-[family-name:var(--font-playfair)]">24/7</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-10">
                            While you're sleeping, your customers are searching online for properties.
                            If they can't find you, they'll find your competitor.
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
                                Are You Still Depending Only on{" "}
                                <span className="text-primary">Word-of-Mouth?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Most local realtors have no website or just a basic one. In today's digital-first world,
                                customers judge your business by your online presence before they ever meet you.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Customers search online before calling",
                                    "First impression matters — a lot",
                                    "Your competitors are already online"
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
                                <SearchIcon className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium text-muted-foreground">
                                    "Google it"<br />is how customers find you now
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
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                            Your Complete Digital Real Estate Platform
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A stunning, professional website that makes you look like a big brand —
                            <strong className="text-foreground"> even if you're just getting started.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5 FEATURE BLOCKS */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Home,
                                title: "Showcase Properties Beautifully",
                                items: [
                                    "High-quality photo galleries",
                                    "Detailed spec pages (beds, baths, area, price)",
                                    "Interactive location maps",
                                    "Smart search & filter",
                                    "Perfect on mobile"
                                ]
                            },
                            {
                                icon: Phone,
                                title: "Capture Every Lead Automatically",
                                items: [
                                    "Contact forms on every page",
                                    "OTP verification — genuine leads only",
                                    "Service inquiry forms",
                                    "No lead escapes — straight to you"
                                ]
                            },
                            {
                                icon: Briefcase,
                                title: "Highlight All Your Services",
                                items: [
                                    "Property Sourcing",
                                    "Property Marketing",
                                    "Property Management",
                                    "Legal Services",
                                    "NRI Services"
                                ]
                            },
                            {
                                icon: Star,
                                title: "Build Trust & Credibility",
                                items: [
                                    "Live Google rating on homepage",
                                    "Customer testimonials section",
                                    "Stats counter (experience, clients, properties)",
                                    "Professional about us page",
                                    "Blog for market updates"
                                ]
                            },
                            {
                                icon: Shield,
                                title: "Customers Feel Safe",
                                items: [
                                    "Secure website with encryption",
                                    "Bot protection — no spam",
                                    "Privacy policy & terms included"
                                ]
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
                                <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-2">
                                    {feature.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURE TABLE */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[family-name:var(--font-outfit)]">
                        Features That Make You <span className="text-primary">Stand Out</span>
                    </h2>
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <table className="w-full">
                            <thead className="bg-primary text-primary-foreground">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                                    <th className="px-6 py-4 text-left font-bold">How It Helps You</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Beautiful Design", "Impress customers instantly — look like a premium brand"],
                                    ["OTP Verified Leads", "No fake numbers — only genuine buyers/sellers contact you"],
                                    ["Property Submission Portal", "Property owners can directly submit listings to you"],
                                    ["Agent/Associate Login", "Your team members can access the system"],
                                    ["Blog Section", "Share market insights — become the local expert"],
                                    ["SEO Ready", "Google will show your website when people search"],
                                    ["Lightning Fast", "Website loads in under 2 seconds"],
                                    ["Works Everywhere", "Perfect on phone, tablet, laptop, desktop"]
                                ].map(([feature, benefit], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                                        <td className="px-6 py-4 font-medium border-b border-border">{feature}</td>
                                        <td className="px-6 py-4 text-muted-foreground border-b border-border">{benefit}</td>
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
                            "Property Listing Page",
                            "Individual Property Detail Pages",
                            "6 Service Pages",
                            "Contact/Reach Us Page",
                            "Property Submission Portal",
                            "Blog Section",
                            "About Us Page",
                            "FAQ Section",
                            "Testimonials Section",
                            "Agent Login Portal",
                            "Admin Dashboard",
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

            {/* BENEFITS GRID */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-[family-name:var(--font-outfit)]">
                        Your Website Will Help You...
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Every feature is designed with one goal: growing your business
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Users, title: "Get More Leads", desc: "Forms everywhere. OTP means only serious customers." },
                            { icon: Trophy, title: "Look Professional", desc: "Premium website = premium brand image." },
                            { icon: Clock, title: "Save Time", desc: "Customers browse and filter themselves." },
                            { icon: Zap, title: "Work 24/7", desc: "Wake up to fresh leads every morning." },
                            { icon: Globe, title: "Beat Competitors", desc: "Stand out from realtors with no website." }
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
                                    "Share your logo & colors",
                                    "Provide property details",
                                    "Tell us your services",
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
                                    "Set up the complete website",
                                    "Configure all pages & forms",
                                    "Connect all integrations",
                                    "Handle hosting & maintenance"
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
                        What Other Realtors Are <span className="text-primary">Saying</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "My customers now find me online. I used to depend only on references, now I get 10-15 new leads every week from the website.",
                            "The OTP verification is amazing. Earlier I used to get so many fake inquiries. Now every lead is genuine.",
                            "I look bigger than I am. Customers think I'm a large company because of my professional website."
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

            {/* COST COMPARISON */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-[family-name:var(--font-outfit)]">
                        What Would This Cost To Build?
                    </h2>
                    <p className="text-center text-muted-foreground mb-12">
                        If you went to a software company and asked them to build this from scratch:
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-border bg-background">
                        <table className="w-full">
                            <thead className="bg-card">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Item</th>
                                    <th className="px-6 py-4 text-right font-bold">Market Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Premium website design", "₹2-3 lakh"],
                                    ["Property management system", "₹3-4 lakh"],
                                    ["Lead capture with OTP", "₹1-2 lakh"],
                                    ["Mobile-friendly development", "₹1-2 lakh"],
                                    ["Admin dashboard", "₹2-3 lakh"],
                                    ["Hosting & domain (yearly)", "₹15-25K"]
                                ].map(([item, cost], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "" : "bg-card/50"}>
                                        <td className="px-6 py-4 border-b border-border">{item}</td>
                                        <td className="px-6 py-4 text-right border-b border-border text-muted-foreground">{cost}</td>
                                    </tr>
                                ))}
                                <tr className="bg-primary text-primary-foreground font-bold">
                                    <td className="px-6 py-4">Total</td>
                                    <td className="px-6 py-4 text-right">₹10-15 lakh+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-2xl font-bold mt-8 font-[family-name:var(--font-outfit)]">
                        But you won't pay that.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                        Ready To Go Digital?
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                        Your complete real estate website — ready to launch in days, not months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {[
                            "Complete website setup",
                            "Your branding (logo, colors)",
                            "Domain connection",
                            "All forms & integrations working",
                            "Training on how to use",
                            "1 year hosting included"
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
                        "In today's world, if you're not online, you don't exist."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
