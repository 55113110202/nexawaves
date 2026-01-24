"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Car, Phone, Briefcase, Star, Shield, ArrowRight, Check,
    Users, Clock, Trophy, Zap, Globe, Smartphone, Search as SearchIcon
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export default function AutomotiveSolutionsPage() {
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
                            Automotive Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-outfit)] mb-8">
                            Your Digital Showroom That Sells{" "}
                            <span className="text-primary italic font-[family-name:var(--font-playfair)]">24/7</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-10">
                            While you're closing deals at the showroom, your website should be generating
                            new leads. If buyers can't find you online, they'll find your competitor.
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
                                Still Relying Only on{" "}
                                <span className="text-primary">Walk-ins & Referrals?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Today's car buyers research online before visiting any showroom.
                                They compare prices, check specifications, and read reviews — all from their phone.
                                If you're not there, you've already lost.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "90% of buyers research online before visiting",
                                    "Your inventory should be visible 24/7",
                                    "Competitors with websites get more leads"
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
                                <Car className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium text-muted-foreground">
                                    "Let me search online first"<br />— Every modern car buyer
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
                            Your Complete Digital Automotive Platform
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A stunning, professional website that showcases your inventory like a premium brand —
                            <strong className="text-foreground"> whether you have 10 cars or 1000.</strong>
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
                                icon: Car,
                                title: "Showcase Your Inventory",
                                items: [
                                    "High-quality photo galleries per vehicle",
                                    "Detailed specs (make, model, year, mileage, price)",
                                    "360° interior/exterior views",
                                    "Smart search & filter by budget, brand, type",
                                    "Mobile-optimized browsing"
                                ]
                            },
                            {
                                icon: Phone,
                                title: "Capture Every Lead",
                                items: [
                                    "Inquiry forms on every vehicle page",
                                    "OTP verification — genuine buyers only",
                                    "Test drive booking system",
                                    "WhatsApp integration for quick contact"
                                ]
                            },
                            {
                                icon: Briefcase,
                                title: "Highlight Your Services",
                                items: [
                                    "New Car Sales",
                                    "Pre-Owned / Used Cars",
                                    "Car Financing & Loans",
                                    "Insurance Services",
                                    "Vehicle Exchange Program"
                                ]
                            },
                            {
                                icon: Star,
                                title: "Build Trust & Credibility",
                                items: [
                                    "Live Google rating on homepage",
                                    "Customer testimonials & reviews",
                                    "Stats counter (cars sold, happy customers)",
                                    "About us with team photos",
                                    "Blog for car tips & market updates"
                                ]
                            },
                            {
                                icon: Shield,
                                title: "Customers Feel Safe",
                                items: [
                                    "Secure website with SSL encryption",
                                    "Verified dealer badge",
                                    "Transparent pricing display",
                                    "Privacy policy included"
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
                                    ["Premium Design", "Look like a branded showroom — impress buyers instantly"],
                                    ["OTP Verified Leads", "No time wasters — only genuine buyers contact you"],
                                    ["Vehicle Submission Portal", "Owners can submit their cars for consignment"],
                                    ["Compare Vehicles", "Buyers can compare specs side-by-side"],
                                    ["EMI Calculator", "Show monthly payment options on every car"],
                                    ["SEO Ready", "Rank on Google when people search 'cars for sale in [city]'"],
                                    ["Lightning Fast", "Website loads instantly — buyers don't wait"],
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
                            "Vehicle Inventory Page",
                            "Individual Vehicle Detail Pages",
                            "Service Pages (Sales, Finance, Insurance)",
                            "Contact/Reach Us Page",
                            "Vehicle Submission Portal",
                            "Test Drive Booking System",
                            "Blog Section",
                            "About Us Page",
                            "FAQ Section",
                            "Testimonials Section",
                            "Admin Dashboard",
                            "EMI Calculator Widget",
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
                        Every feature is designed with one goal: selling more cars
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Users, title: "Get More Leads", desc: "Inquiries 24/7. OTP means only serious buyers." },
                            { icon: Trophy, title: "Look Premium", desc: "Website that matches your showroom's quality." },
                            { icon: Clock, title: "Save Time", desc: "Buyers browse inventory before calling." },
                            { icon: Zap, title: "Sell Faster", desc: "More visibility = quicker inventory turnover." },
                            { icon: Globe, title: "Expand Reach", desc: "Reach buyers beyond your local area." }
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
                                    "Share your logo & branding",
                                    "Provide vehicle inventory",
                                    "Tell us your services",
                                    "Start selling!"
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
                                    "Upload your inventory",
                                    "Configure all features",
                                    "Handle hosting & updates"
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
                        What Other Dealers Are <span className="text-primary">Saying</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "I was skeptical at first, but now I get 20+ inquiries every week from the website. Many customers come already decided on a car!",
                            "The test drive booking feature is brilliant. Customers book online, I just confirm. No back-and-forth on calls.",
                            "My showroom looks small but my website looks huge. Customers think I'm a big dealer. Perfect for building trust!"
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
                                        <p className="font-bold text-sm">Happy Dealer</p>
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
                                    ["Inventory management system", "₹3-4 lakh"],
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
                        Your complete automotive website — ready to launch in days, not months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {[
                            "Complete website setup",
                            "Your branding (logo, colors)",
                            "Inventory upload",
                            "All features configured",
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
                        "Your next customer is searching online right now. Will they find you?"
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
