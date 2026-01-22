"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Zap, Search, Shield, Database, LayoutDashboard } from "lucide-react";

const services = [
  {
    title: "Website Design",
    desc: "Clean, minimal Swiss-inspired UI/UX designed for clarity and impact.",
    icon: Layout
  },
  {
    title: "Fast Performance",
    desc: "Core Web Vitals optimized. Lightning-fast load times for better conversion.",
    icon: Zap
  },
  {
    title: "SEO Optimized",
    desc: "Engineered for maximum discoverability and AI search readiness.",
    icon: Search
  },
  {
    title: "Security by Default",
    desc: "Enterprise-grade security practices baked into every line of code.",
    icon: Shield
  },
  {
    title: "Built for Scalability",
    desc: "Architecture designed to handle high traffic and growing data needs effortlessly.",
    icon: Database
  },
  {
    title: "Custom Dashboards",
    desc: "Intuitive, powerful admin interfaces giving you full control over your content and data.",
    icon: LayoutDashboard
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
              What We Do
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
              Engineering<br />
              for Growth
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-sm">
            We don&apos;t overdesign. We focus on what matters: speed, security, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
              className="p-10 border-r border-b border-border transition-colors cursor-default group bg-background"
            >
              <service.icon className="w-8 h-8 mb-8 text-foreground group-hover:text-background transition-colors" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-foreground group-hover:text-background transition-colors">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-background/80 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
