"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    subRole?: string;
    quote: string;
    image: string;
    description: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Mohan",
        role: "Strategy & Systems",

        quote: "Technology should quietly do the heavy lifting while businesses focus on what truly matters.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop", // Placeholder
        description: "Mohan leads research, system design, and overall growth strategy — ensuring every solution aligns with long-term business goals.",
    },
    {
        name: "Swetha",
        role: "Design & Brand Experience",
        quote: "Good design doesn’t shout. It earns trust.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop", // Placeholder
        description: "Swetha shapes visual identity and user experience, ensuring every interaction reflects clarity, credibility, and refined aesthetics.",
    },
    {
        name: "Preetha",
        role: "Content, Research & Visibility",
        quote: "Visibility without understanding is just noise.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop", // Placeholder
        description: "Preetha leads research-backed content systems, SEO, GMB, and GEO strategies — helping brands get discovered by the right audience.",
    },
    {
        name: "Rushithaa",
        role: "Experience & Flow",
        quote: "Small details decide whether users stay or leave.",
        image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=1200&auto=format&fit=crop", // Placeholder
        description: "Rushithaa focuses on usability, flow, and consistency, ensuring every journey feels intuitive and human.",
    },
];

export const TeamGrid = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight font-[family-name:var(--font-outfit)] border-b border-border pb-6">
                    The People Behind Nexa Waves
                    <span className="block text-lg font-normal text-muted-foreground mt-4 font-[family-name:var(--font-geist-sans)] tracking-normal max-w-2xl">
                        Nexa Waves is led by a focused team, each bringing a distinct skill set to turn strategy into execution.
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                                    {/* Mobile overlay text if needed, but we have text below */}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)]">{member.name}</h3>
                                    <div className="text-xs uppercase tracking-widest text-primary mt-1 font-medium">
                                        {member.role}
                                    </div>
                                    {member.subRole && (
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                                            {member.subRole}
                                        </div>
                                    )}
                                </div>

                                {/* Quote */}
                                <div className="relative pl-6 mb-4 border-l-2 border-primary/30">
                                    <Quote className="absolute -left-2 top-0 w-3 h-3 text-primary fill-primary z-10 hidden" />
                                    <p className="text-lg italic font-[family-name:var(--font-playfair)] leading-relaxed text-foreground/90">
                                        "{member.quote}"
                                    </p>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mt-auto border-t border-border pt-4">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
