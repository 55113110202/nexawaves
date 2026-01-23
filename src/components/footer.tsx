"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-4">

        {/* Top Section: CTA and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/20 pb-12 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to upgrade your<br />digital presence?
            </h2>
            <Button className="bg-white text-foreground hover:bg-white/90 rounded-none text-xs font-bold uppercase tracking-widest h-12 px-6 md:h-14 md:px-8">
              Start a Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Subscribe to our newsletter</h3>
            <p className="text-white/60 mb-6 max-w-md font-light">
              Get the latest trends in digital design and development delivered straight to your inbox. No spam, ever.
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 px-4 py-3 w-full text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
              />
              <Button className="rounded-none font-bold uppercase tracking-wider h-12 px-6">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <h2 className="text-3xl font-normal font-[family-name:var(--font-outfit)] tracking-tight group-hover:opacity-80 transition-opacity">nexawaves</h2>
            </Link>
            <p className="text-white/60 text-sm max-w-xs mb-8 leading-relaxed">
              We build discoverable, secure, beautiful, and scalable digital experiences for the modern world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-start-6 lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Sitemap</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/60 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/60 transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Web Apps</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">SEO</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Contact</h4>
            <address className="not-italic text-sm space-y-4 text-white/80">
              <p>No 2A, 14th Cross, Balaji Layout<br />Bangalore, Karnataka 560056, India</p>
              <p><a href="mailto:hello@nexawaves.com" className="hover:underline">hello@nexawaves.com</a></p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 font-medium uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} nexawaves. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
