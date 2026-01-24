"use client";

import Link from "next/link";
import { Search, Menu, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                {/* Mobile Menu */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                </Button>

                <Link href="/" className="flex items-center group">
                    <h1 className="text-2xl md:text-3xl font-normal tracking-tight font-[family-name:var(--font-outfit)] group-hover:opacity-80 transition-opacity duration-300">
                        nexawaves
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wide">
                    <Link href="/about" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">About</Link>
                    <Link href="/#services" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">Services</Link>
                    <Link href="/#work" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">Work</Link>
                    <Link href="/#studio" className="hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all">Studio</Link>
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
        </header>
    );
};
