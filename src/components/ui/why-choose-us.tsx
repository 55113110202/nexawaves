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
  heading = "Why Partner With Us",
  description = "We don't just build websites — we build customer acquisition systems that combine beautiful design, smart technology, and proven growth strategies.",
  linkUrl = "#contact",
  linkText = "Start Your Project",
  features = [
    {
      id: "feature-1",
      title: "Design That Builds Brand Value",
      description:
        "We create visually refined, user-focused websites that elevate your brand perception and build trust with customers from the first interaction.",
      image: "/beauty.webp",
    },
    {
      id: "feature-2",
      title: "Science-Driven Growth & Visibility",
      description:
        "We combine SEO, Google My Business optimization, Generative Engine Optimization (GEO), and automated content systems to consistently amplify customer discovery and growth.",
      image: "/growth-visibility.png",
    },
    {
      id: "feature-3",
      title: "Modern, Scalable & Secure Technology",
      description:
        "We build with the latest proven technologies to ensure your platform is fast, secure, and scalable — ready to grow with your business without performance bottlenecks.",
      image: "/tech-security.png",
    },
    {
      id: "feature-4",
      title: "Conversion-Focused Systems",
      description:
        "We design every experience to guide visitors into action — turning traffic into leads, inquiries, and real customers through thoughtful UX, clear flows, and measurable outcomes.",
      image: "/conversion-focus.png",
    },
  ],
}: WhyChooseUsProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-card group"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
