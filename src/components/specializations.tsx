"use client";

import React from "react";
import { Car, Zap, Briefcase, Database, LayoutTemplate, Settings2 } from "lucide-react";

export const Specializations = () => {
  return (
    <section id="work" className="py-24 px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
          Our Specializations
        </span>
        
        <div className="grid lg:grid-cols-3 gap-1 px-1 bg-muted mt-12">
          {/* Listing Platforms */}
          <div className="bg-background p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-muted rounded-full">
                <Car className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground">Listing Platforms</h3>
            </div>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Structured, scalable directories built to handle large inventories.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Real Estate Portals",
                "Car Dealership Sites",
                "E-commerce Stores",
                "Directory Platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-foreground">
                  <div className="w-1.5 h-1.5 bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-muted/50 border border-border">
              <Database className="w-4 h-4 mb-3 text-muted-foreground" />
              <h4 className="font-bold text-xs uppercase mb-1 text-foreground">Focus</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
                Data Structure • Scale • Speed
              </p>
            </div>
          </div>

          {/* Static Sites */}
          <div className="bg-background p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-muted rounded-full">
                <Zap className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground">Static Sites</h3>
            </div>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Ultra-fast marketing websites designed for maximum conversion.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Corporate Portfolios",
                "Marketing Landing Pages",
                "Blogs & News Sites",
                "Product Showcases"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-foreground">
                  <div className="w-1.5 h-1.5 bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-muted/50 border border-border">
              <LayoutTemplate className="w-4 h-4 mb-3 text-muted-foreground" />
              <h4 className="font-bold text-xs uppercase mb-1 text-foreground">Focus</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
                Performance • Brand • SEO
              </p>
            </div>
          </div>

          {/* Custom Business Apps */}
          <div className="bg-background p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-muted rounded-full">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground">Custom Apps</h3>
            </div>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Tailor-made software solutions to digitize unique business workflows.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Inventory Management",
                "Client Portals & CRM",
                "Booking Systems",
                "SaaS Dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-foreground">
                  <div className="w-1.5 h-1.5 bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 bg-muted/50 border border-border">
              <Settings2 className="w-4 h-4 mb-3 text-muted-foreground" />
              <h4 className="font-bold text-xs uppercase mb-1 text-foreground">Focus</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
                Logic • Utility • Security
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
