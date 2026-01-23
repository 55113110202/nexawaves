"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface WhyChooseUsProps {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const WhyChooseUs = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "#contact",
  linkText = "Book a demo",
  features = [
    {
      id: "feature-1",
      title: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
      id: "feature-3",
      title: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
      id: "feature-4",
      title: "Advanced Analytics",
      description:
        "Powerful analytics tools to help you understand your users and make data-driven decisions.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    },
  ],
}: WhyChooseUsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
            {description}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-card group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-overlay"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="group rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase text-xs font-bold tracking-widest h-12 px-6 md:h-14 md:px-8"
            asChild
          >
            <a href={linkUrl}>
              {linkText}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
