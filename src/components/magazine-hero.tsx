"use client";

import Image from "next/image";
import { ArrowRight, Globe, Lock, Palette, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGrid } from "./animated-grid";

export const MagazineHero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 overflow-hidden border-b border-border">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Main Feature - Takes up 8 columns */}
                    <div className="lg:col-span-8 group cursor-pointer">
                        <div className="relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-muted">
                            {/* Generative/Abstract Background Placeholder utilizing CSS gradients for now */}
                            {/* Animated Grid Background */}
                            <div className="absolute inset-0 bg-black">
                                <div className="absolute inset-0 opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000">
                                    <AnimatedGrid
                                        startColor={[255, 0, 0]}
                                        endColor={[255, 0, 255]}
                                        animationStartColor={[255, 0, 0]}
                                        animationEndColor={[255, 0, 255]}
                                        rows={12}
                                        cols={20}
                                        cellSize="4rem"
                                        animationDuration="3s"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest">Featured</span>
                                    <span className="text-white/80 text-xs uppercase tracking-wider">Digital Architecture</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">
                                    Defining the Future of <br className="hidden md:block" /> Digital Real Estate.
                                </h2>
                                <p className="hidden md:block text-white/70 max-w-xl text-lg mb-6 font-light">
                                    We craft discoverable, secure, and beautiful web experiences tailored for the modern property market.
                                </p>
                                <div className="flex items-center gap-2 text-white font-medium uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                                    Read Cover Story <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Top Stories - Takes up 4 columns */}
                    <div className="lg:col-span-4 flex flex-col gap-8 h-full">
                        <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trending Topics</span>
                        </div>

                        {/* Story 1 */}
                        <div className="group cursor-pointer">
                            <div className="flex gap-4 items-start">
                                <span className="text-4xl font-serif font-bold text-muted-foreground/20 group-hover:text-primary transition-colors">01</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                                        Why Speed is the New SEO
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        Scalable architectures that prioritize performance are dominating search rankings in 2025.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-border w-full my-2"></div>

                        {/* Story 2 */}
                        <div className="group cursor-pointer">
                            <div className="flex gap-4 items-start">
                                <span className="text-4xl font-serif font-bold text-muted-foreground/20 group-hover:text-primary transition-colors">02</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                                        Security First, Always
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        Protecting user data isn't just compliance—it's the cornerstone of digital trust.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-border w-full my-2"></div>

                        {/* Story 3 */}
                        <div className="group cursor-pointer">
                            <div className="flex gap-4 items-start">
                                <span className="text-4xl font-serif font-bold text-muted-foreground/20 group-hover:text-primary transition-colors">03</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                                        The Shopify Revolution
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        Custom storefronts are changing how car dealers and agents sell online.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8">
                            <div className="bg-muted p-6 rounded-sm">
                                <h4 className="font-serif font-bold text-lg mb-2">Editor's Pick</h4>
                                <p className="text-xs text-muted-foreground mb-4">
                                    Explore our curated collection of high-converting templates.
                                </p>
                                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider">
                                    View Catalog
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Ticker/Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 mt-12 border-t border-border">
                    {[
                        { icon: Globe, label: "Discoverable", value: "SEO Optimized" },
                        { icon: Lock, label: "Secure", value: "Bank-Grade Auth" },
                        { icon: Palette, label: "Beautiful", value: "Award Winning UI" },
                        { icon: Zap, label: "Scalable", value: "Cloud Native" },
                    ].map((stat, i) => (
                        <div key={i} className="flex gap-3 items-center opacity-70 hover:opacity-100 transition-opacity">
                            <stat.icon className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                                <span className="text-xs font-medium">{stat.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
