"use client";

// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { AnimatedGrid } from "@/components/animated-grid";
import { ThemeToggle } from "@/components/theme-toggle";

const Hero = () => {
  return (
    <Section className="bg-background">
      <Container>
        <div className="flex flex-col items-start">
          <div className="mb-6 flex items-center gap-4">
            <Button
              asChild
              className="w-fit"
              size={"sm"}
              variant={"outline"}
            >
              <Link className="not-prose" href="https://9d8.dev">
                Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <Balancer>
              Technology That Brings Customers
            </Balancer>
          </h1>
          <h3 className="mt-6 text-lg text-muted-foreground md:text-xl">
            <Balancer>
              We build systems that turn attention into consistent customer flow.
            </Balancer>
          </h3>
          {/* Animated Grid in Image Placeholder */}
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border border-border md:h-[480px] md:rounded-xl">
            <AnimatedGrid 
              startColor={[255, 0, 0]} 
              endColor={[255, 0, 255]} 
              animationStartColor={[255, 0, 0]} 
              animationEndColor={[255, 0, 255]} 
              rows={10} 
              cols={15} 
              cellSize="6rem" 
              animationDuration="2s"
              className="h-full w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
);
};

export default Hero;
