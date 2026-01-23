"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        category: "Real Estate",
        title: "Immersive Property Experiences",
        description: "In a crowded market, your properties need to stand out. Our real estate solutions combine high-fidelity imagery, virtual tours, and SEO-optimized listings to capture buyer interest instantly.",
        image: "/placeholder.jpg", // Ideally replace with a real estate specific image
        points: ["Interactive Maps", "Virtual Tours", "Lead Generation CRM"],
        alignment: "left"
    },
    {
        category: "Automotive",
        title: "Digital Showrooms for Modern Dealerships",
        description: "Shift gears with a website that matches the performance of the cars you sell. We build high-speed, inventory-synced platforms that turn visitors into test-drivers.",
        image: "/placeholder.jpg",
        points: ["Inventory Sync", "Financing Calculators", "High-Res Galleries"],
        alignment: "right"
    },
    {
        category: "E-Commerce",
        title: "Shopify Storefronts That Convert",
        description: "Stop relying on generic templates. We crave unique brand identities that tell your story and guide customers seamlessly from discovery to checkout.",
        image: "/placeholder.jpg",
        points: ["Custom Themes", "App Integration", "Conversion Optimization"],
        alignment: "left"
    }
];

export const ServiceFeatures = () => {
    return (
        <section id="services" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Tailored Solutions for<br />Industry Leaders</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {features.map((feature, index) => (
                        <div key={index} className={cn(
                            "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
                            feature.alignment === "right" ? "lg:flex-row-reverse" : ""
                        )}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                                    {/* Placeholder gradient until images are ready */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay"
                                    />

                                    {/* Decorative Elements */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-primary/20 hidden lg:block"></div>
                                    <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-primary/20 hidden lg:block"></div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2">
                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                                    — {feature.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                                    {feature.description}
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {feature.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <Button variant="outline" className="group rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase text-xs font-bold tracking-widest h-12 px-6 md:h-14 md:px-8">
                                    View Case Studies <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
