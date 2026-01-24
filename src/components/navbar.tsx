"use client";

import Link from "next/link";
import { Search, Menu, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileSolutionsOpen(false);
    };

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-border",
            scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-background py-4"
        )}>
            {/* Top Utility Bar - Hidden on Scroll or Mobile */}
            <div className={cn(
                "container mx-auto px-4 flex justify-between items-center text-xs font-medium uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-4 mb-4",
                scrolled ? "hidden" : "hidden md:flex"
            )}>
                <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-primary transition-colors">Newsletter</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Subscribe</Link>
                </div>
            </div>

            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>

                <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
                    <h1 className="text-2xl md:text-3xl font-normal tracking-tight font-[family-name:var(--font-outfit)] group-hover:opacity-80 transition-opacity duration-300">
                        nexawaves
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide">
                    <Link href="/about" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">About</Link>

                    {/* Solutions Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-primary transition-all">
                            Solutions
                            <ChevronDown className={cn("w-4 h-4 transition-transform", solutionsOpen && "rotate-180")} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className={cn(
                            "absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-200",
                            solutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        )}>
                            <Link
                                href="/solutions/real-estate"
                                className="block px-4 py-3 text-sm normal-case tracking-normal hover:bg-muted hover:text-primary transition-colors border-b border-border/50"
                            >
                                <span className="font-semibold">Real Estate Solutions</span>
                                <span className="block text-xs text-muted-foreground mt-0.5">Digital platforms for realtors</span>
                            </Link>
                            <Link
                                href="/solutions/automotive"
                                className="block px-4 py-3 text-sm normal-case tracking-normal hover:bg-muted hover:text-primary transition-colors border-b border-border/50"
                            >
                                <span className="font-semibold">Automotive Solutions</span>
                                <span className="block text-xs text-muted-foreground mt-0.5">Digital showrooms for dealers</span>
                            </Link>
                            <Link
                                href="/solutions/ecommerce"
                                className="block px-4 py-3 text-sm normal-case tracking-normal hover:bg-muted hover:text-primary transition-colors"
                            >
                                <span className="font-semibold">E-Commerce Solutions</span>
                                <span className="block text-xs text-muted-foreground mt-0.5">Shopify & custom stores</span>
                            </Link>
                        </div>
                    </div>

                    <Link href="/#work" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">Work</Link>
                    <Link href="/#journal" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">Journal</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-transparent hover:text-primary">
                        <Search className="w-4 h-4" />
                    </Button>
                    <ThemeToggle />
                    <Button className="rounded-full text-xs font-bold uppercase tracking-wider h-10 px-6 hidden md:flex">
                        Get in Touch
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={cn(
                "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
                mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
                <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 bg-background">
                    <Link
                        href="/about"
                        className="py-3 text-lg font-medium border-b border-border/50 hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>

                    {/* Mobile Solutions Accordion */}
                    <div className="border-b border-border/50">
                        <button
                            className="w-full py-3 flex items-center justify-between text-lg font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        >
                            Solutions
                            <ChevronDown className={cn("w-5 h-5 transition-transform", mobileSolutionsOpen && "rotate-180")} />
                        </button>
                        <div className={cn(
                            "overflow-hidden transition-all duration-200",
                            mobileSolutionsOpen ? "max-h-48 pb-4" : "max-h-0"
                        )}>
                            <Link
                                href="/solutions/real-estate"
                                className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Real Estate Solutions
                            </Link>
                            <Link
                                href="/solutions/automotive"
                                className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                                onClick={closeMobileMenu}
                            >
                                Automotive Solutions
                            </Link>
                            <Link
                                href="/solutions/ecommerce"
                                className="block py-2 pl-4 text-muted-foreground hover:text-primary transition-colors"
                                onClick={closeMobileMenu}
                            >
                                E-Commerce Solutions
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="/#work"
                        className="py-3 text-lg font-medium border-b border-border/50 hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Work
                    </Link>
                    <Link
                        href="/#journal"
                        className="py-3 text-lg font-medium border-b border-border/50 hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                    >
                        Journal
                    </Link>

                    <Button className="w-full rounded-full text-sm font-bold uppercase tracking-wider h-12 mt-4">
                        Get in Touch
                    </Button>
                </nav>
            </div>
        </header>
    );
};


