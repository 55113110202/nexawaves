"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { AnimatedGrid } from "./animated-grid";

// Icon component for feature highlights
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                <path d="M11 22V9"></path>
                <path d="M2 9h20"></path>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};


// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onPointerDown' | 'onPointerUp' | 'onPointerMove'> {
    logo?: {
        url: string;
        alt: string;
        text?: string;
    };
    slogan?: string;
    title: React.ReactNode;
    subtitle: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    backgroundImage: string;
    contactInfo: {
        website: string;
        phone: string;
        address: string;
    };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
    ({ className, logo, slogan, title, subtitle, primaryCTA, secondaryCTA, backgroundImage, contactInfo, ...props }, ref) => {

        // Animation variants for the container to orchestrate children animations
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
            },
        };

        // Animation variants for individual text/UI elements
        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            },
        } as any;

        return (
            <section
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-background text-foreground border-b border-border",
                    className
                )}
                {...props}
            >
                <div className="container mx-auto">
                    <motion.div
                        className="flex w-full flex-col md:flex-row border-x border-border"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Left Side: Content */}
                        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
                            {/* Top Section: Logo & Main Content */}
                            <div>
                                <motion.header className="mb-12 hidden md:block" variants={itemVariants}>
                                    {logo && (
                                        <div className="flex items-center">
                                            <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                                            <div>
                                                {logo.text && <p className="text-lg font-bold text-foreground">{logo.text}</p>}
                                                {slogan && <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>}
                                            </div>
                                        </div>
                                    )}
                                </motion.header>

                                <motion.main variants={containerVariants}>
                                    <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl" variants={itemVariants}>
                                        {title}
                                    </motion.h1>
                                    <motion.div
                                        className="my-6 h-1 bg-primary origin-left"
                                        initial={{ scaleX: 0, width: "50%" }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    />
                                    <motion.p className="mb-8 max-w-md text-base text-muted-foreground" variants={itemVariants}>
                                        {subtitle}
                                    </motion.p>
                                    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                                        <motion.a
                                            href={primaryCTA.href}
                                            className="inline-flex items-center justify-center h-12 px-6 md:h-14 md:px-8 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:bg-primary/90 hover:scale-[1.02]"
                                            variants={itemVariants}
                                        >
                                            {primaryCTA.text}
                                        </motion.a>
                                        {secondaryCTA && (
                                            <motion.a
                                                href={secondaryCTA.href}
                                                className="inline-flex items-center justify-center h-12 px-6 md:h-14 md:px-8 border-2 border-primary text-primary font-bold rounded-full transition-all hover:bg-primary hover:text-primary-foreground"
                                                variants={itemVariants}
                                            >
                                                {secondaryCTA.text}
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.main>
                            </div>

                            {/* Bottom Section: Footer Info */}
                            <motion.footer className="mt-12 w-full" variants={itemVariants}>
                                <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3 border-t border-border pt-8">
                                    <div className="flex items-center">
                                        <InfoIcon type="website" />
                                        <span>{contactInfo.website}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <InfoIcon type="phone" />
                                        <span>{contactInfo.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <InfoIcon type="address" />
                                        <span>{contactInfo.address}</span>
                                    </div>
                                </div>
                            </motion.footer>
                        </div>

                        {/* Right Side: Hero Image */}
                        <motion.div
                            className="w-full min-h-[300px] md:w-1/2 md:min-h-full lg:w-2/5 overflow-hidden relative bg-background flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <img
                                src={backgroundImage}
                                alt="Hero"
                                className="w-full h-auto max-h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
