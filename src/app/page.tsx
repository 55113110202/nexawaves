"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/ui/hero-section-2";
import { WhyChooseUs } from "@/components/ui/why-choose-us";
import { ServiceFeatures } from "@/components/service-features";
import { TechStack } from "@/components/techstack";
import { BlogGrid } from "@/components/blog-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black/20 dark:selection:bg-white/20">
      <Navbar />
      <HeroSection
        title={
          <>
            Technology That <br />
            <span className="text-primary">Brings Customers</span>
          </>
        }
        subtitle="We build systems that turn attention into consistent customer flow."
        primaryCTA={{
          text: "GET MORE CUSTOMERS",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "SEE HOW IT WORKS",
          href: "#services",
        }}
        backgroundImage="/hero-image.webp"
        contactInfo={{
          website: "Highly Discoverable",
          phone: "Fast & Beautiful",
          address: "Scalable",
        }}
        className="pt-24 md:pt-8"
      />
      <WhyChooseUs />
      <ServiceFeatures />
      <TechStack />
      <BlogGrid />
      <Footer />
    </main>
  );
}
