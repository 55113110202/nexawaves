"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { LogoIcon } from "./ui/logo-icon";

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
            <Button className="bg-white text-foreground hover:bg-white/90 h-12 px-6 md:h-14 md:px-8">
              Start a project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-white/60 mb-6 max-w-md font-light">
              Get the latest trends in digital design and development delivered straight to your inbox. No spam, ever.
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 px-4 py-3 w-full text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/40 rounded-full"
              />
              <Button className="font-bold h-12 px-6">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <LogoIcon className="w-8 h-8 opacity-90 group-hover:opacity-70 transition-opacity [&_rect]:fill-white/20 [&_path]:stroke-white" />
              <h2 className="text-[32px] font-normal font-[family-name:var(--font-outfit)] tracking-tight leading-none group-hover:opacity-80 transition-opacity">nexawaves</h2>
            </Link>
            <p className="text-white/60 text-sm max-w-xs mb-8 leading-relaxed">
              We build discoverable, secure, beautiful, and scalable digital experiences for the modern world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-foreground transition-all duration-300 rounded-full">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-start-6 lg:col-span-2">
            <h4 className="font-bold mb-8 text-white/40">Sitemap</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-white/60 transition-colors">Services</Link></li>
              <li><Link href="/#work" className="hover:text-white/60 transition-colors">Work</Link></li>
              <li><Link href="/#journal" className="hover:text-white/60 transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold mb-8 text-white/40">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/solutions/real-estate" className="hover:text-white/60 transition-colors">Real Estate</Link></li>
              <li><Link href="/solutions/automotive" className="hover:text-white/60 transition-colors">Automotive</Link></li>
              <li><Link href="/solutions/ecommerce" className="hover:text-white/60 transition-colors">E-Commerce</Link></li>
              <li><Link href="/web-apps" className="hover:text-white/60 transition-colors">Web Apps</Link></li>
              <li><Link href="/seo" className="hover:text-white/60 transition-colors">SEO</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h4 className="font-bold mb-8 text-white/40">Contact</h4>
            <address className="not-italic text-sm space-y-4 text-white/80">
              <p>No 2A, 14th Cross, Balaji Layout<br />Bangalore, Karnataka 560056, India</p>
              <p><a href="mailto:hello@nexawaves.com" className="hover:underline">hello@nexawaves.com</a></p>
              <div className="flex flex-col gap-2">
                <p><a href="tel:+916360114438" className="hover:underline">+91 63601 14438</a></p>
                <a
                  href="https://wa.me/916360114438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.559 4.189 1.618 6.01L0 24l6.116-1.605a11.782 11.782 0 005.925 1.597h.005c6.632 0 12.028-5.397 12.032-12.032.003-3.213-1.252-6.234-3.535-8.514z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
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
