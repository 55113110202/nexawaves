"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/ui/hero-section-2";
import { ServiceFeatures } from "@/components/service-features";
import { TechStack } from "@/components/techstack";
import { BlogGrid } from "@/components/blog-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black/20 dark:selection:bg-white/20">
      <Navbar />
      <HeroSection
        logo={{
          url: "https://vucvdpamtrjkzmubwlts.supabase.co/storage/v1/object/public/users/user_2zMtrqo9RMaaIn4f8F2z3oeY497/avatar.png",
          alt: "Nexawaves Logo",
          text: "nexawaves"
        }}
        slogan="DISCOVERABLE • SECURE • BEAUTIFUL • SCALABLE"
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
        backgroundImage="https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        contactInfo={{
          website: "nexawaves.com",
          phone: "+1 (555) 123-4567",
          address: "Bangalore, India",
        }}
        className="pt-20 md:pt-0"
      />
      <ServiceFeatures />
      <TechStack />
      <BlogGrid />
      <Footer />
    </main>
  );
}
