"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { DesignVisual, GrowthVisual, TechVisual, ConversionVisual } from "./feature-visuals";
import { motion } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  highlightWord: string;
  description: string;
}

interface WhyChooseUsProps {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

// Map feature IDs to their animated visual components
const featureVisuals: Record<string, React.FC> = {
  "feature-1": DesignVisual,
  "feature-2": GrowthVisual,
  "feature-3": TechVisual,
  "feature-4": ConversionVisual,
};

// Animated underline component
const AnimatedUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    {children}
    <motion.span
      className="absolute left-0 bottom-0 h-[3px] bg-primary rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    />
  </span>
);

// Render title with highlighted word
const renderTitle = (title: string, highlightWord: string) => {
  const parts = title.split(highlightWord);
  if (parts.length === 1) {
    return title;
  }
  return (
    <>
      {parts[0]}
      <AnimatedUnderline>{highlightWord}</AnimatedUnderline>
      {parts[1]}
    </>
  );
};

export const WhyChooseUs = ({
  heading = "Why Partner With Us",
  description = "We don't just build websites — we build customer acquisition systems that combine beautiful design, smart technology, and proven growth strategies.",
  linkUrl = "#contact",
  linkText = "Start Your Project",
  features = [
    {
      id: "feature-1",
      title: "Design That Builds Brand Value",
      highlightWord: "Value",
      description:
        "We create visually refined, user-focused websites that elevate your brand perception and build trust with customers from the first interaction.",
    },
    {
      id: "feature-2",
      title: "Science-Driven Growth & Visibility",
      highlightWord: "Visibility",
      description:
        "We combine SEO, Google My Business optimization, Generative Engine Optimization (GEO), and automated content systems to consistently amplify customer discovery and growth.",
    },
    {
      id: "feature-3",
      title: "Modern, Scalable & Secure Technology",
      highlightWord: "Technology",
      description:
        "We build with the latest proven technologies to ensure your platform is fast, secure, and scalable — ready to grow with your business without performance bottlenecks.",
    },
    {
      id: "feature-4",
      title: "Conversion-Focused Systems",
      highlightWord: "Systems",
      description:
        "We design every experience to guide visitors into action — turning traffic into leads, inquiries, and real customers through thoughtful UX, clear flows, and measurable outcomes.",
    },
  ],
}: WhyChooseUsProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-primary mb-4 block">
            Why choose us
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
          {features.map((feature) => {
            const VisualComponent = featureVisuals[feature.id];
            return (
              <div
                key={feature.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card group"
              >
                <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: "#C4B8AC" }}>
                  {VisualComponent ? (
                    <VisualComponent />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/5" />
                  )}
                </div>
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <h3 className="text-base md:text-lg font-bold mb-4 leading-tight whitespace-nowrap relative inline-block">
                    {feature.title}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] bg-primary/60 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-bold h-12 px-6 md:h-14 md:px-8"
            asChild
          >
            <a href={linkUrl}>
              Start your project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

