"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siPostgresql,
  siVercel,
  siFramer,
  siStripe,
  siPrisma,
  siRedis,
  siSanity,
  siShadcnui,
  siAppwrite,
  siGithub,
  siFirebase,
  siGooglecloud
} from "simple-icons";

interface TechItem {
  name: string;
  icon: typeof siNextdotjs | null;
  isAws?: boolean;
}

interface Category {
  title: string;
  items: TechItem[];
}

const categories: Category[] = [
  {
    title: "Frontend & UI",
    items: [
      { name: "Next.js", icon: siNextdotjs },
      { name: "React", icon: siReact },
      { name: "TypeScript", icon: siTypescript },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Framer", icon: siFramer },
      { name: "shadcn/ui", icon: siShadcnui }
    ]
  },
  {
    title: "Backend & Services",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Appwrite", icon: siAppwrite },
      { name: "Firebase", icon: siFirebase },
      { name: "Prisma", icon: siPrisma },
      { name: "Sanity", icon: siSanity },
      { name: "Stripe", icon: siStripe }
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Vercel", icon: siVercel },
      { name: "AWS", icon: null, isAws: true },
      { name: "Google Cloud", icon: siGooglecloud },
      { name: "Redis", icon: siRedis },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "GitHub", icon: siGithub }
    ]
  }
];

export const TechStack = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-9xl font-black">Tech</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Technology<br />
            That Works
          </h2>
          <p className="max-w-xs text-white/60 text-sm leading-relaxed font-light">
            We build with modern, proven technologies ensuring your website stays fast, stable, and future-proof.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <h3 className={cn(
                "text-xs font-bold mb-6 border-l-2 pl-3",
                cat.title === "Infrastructure" ? "text-white border-white" : "text-white/50 border-white/20"
              )}>
                {cat.title}
              </h3>
              <div className={cn(
                "grid grid-cols-2 border-t border-l",
                cat.title === "Infrastructure" ? "border-white" : "border-white/20"
              )}>
                {cat.items.map((tech, i) => (
                  <div key={i} className={cn(
                    "p-6 border-r border-b flex flex-col items-center justify-center gap-4 group transition-all cursor-default aspect-square",
                    cat.title === "Infrastructure" ? "border-white hover:bg-white/20" : "border-white/20 hover:bg-white/10"
                  )}>
                    {tech.isAws ? (
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className="text-xl font-black text-white group-hover:scale-110 transition-transform">AWS</span>
                      </div>
                    ) : (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 fill-white group-hover:scale-110 transition-transform"
                      >
                        <path d={tech.icon!.path} />
                      </svg>
                    )}
                    <span className={cn(
                      "text-[10px] font-bold transition-colors text-center",
                      cat.title === "Infrastructure" ? "text-white" : "text-white"
                    )}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
