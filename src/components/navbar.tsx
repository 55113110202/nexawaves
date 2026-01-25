"use client";

import Link from "next/link";
import { Search, Menu, ChevronDown, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "./ui/logo-icon";

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
                <div className="flex gap-4 items-center">
                    <a href="tel:+916360114438" className="hover:text-primary transition-colors flex items-center gap-1.5 tracking-normal font-sans text-[11px]">
                        <Phone className="w-3 h-3" /> +91 63601 14438
                    </a>
                    <a href="https://wa.me/916360114438" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.559 4.189 1.618 6.01L0 24l6.116-1.605a11.782 11.782 0 005.925 1.597h.005c6.632 0 12.028-5.397 12.032-12.032.003-3.213-1.252-6.234-3.535-8.514z" />
                        </svg>
                    </a>
                </div>
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

                <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMobileMenu}>
                    <LogoIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:opacity-80 transition-opacity duration-300" />
                    <h1 className="text-2xl md:text-[32px] font-normal tracking-tight font-[family-name:var(--font-outfit)] leading-none group-hover:opacity-80 transition-opacity duration-300">
                        nexawaves
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
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
                    <Button className="h-10 px-6 hidden md:flex">
                        Get in touch
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

                    <Button className="w-full h-12 mt-4">
                        Get in touch
                    </Button>
                </nav>
            </div>
        </header>
    );
};


