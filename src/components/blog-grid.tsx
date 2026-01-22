"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const articles = [
    {
        category: "Technology",
        title: "The Rise of Headless CMS",
        excerpt: "Why decoupling your backend is the smart move for scalable growth.",
        date: "Oct 12, 2025",
        author: "Dev Team"
    },
    {
        category: "Design",
        title: "Minimalism is Not Dead",
        excerpt: "How 'white space' actually guides user attention and increases conversion.",
        date: "Oct 08, 2025",
        author: "Design Studio"
    },
    {
        category: "Security",
        title: "Zero Trust Architecture",
        excerpt: "Implementing bank-grade security protocols for standard web apps.",
        date: "Sep 28, 2025",
        author: "SecOps"
    },
    {
        category: "Business",
        title: "ROI of Good UX",
        excerpt: "Measuring the tangible impact of user experience on your bottom line.",
        date: "Sep 15, 2025",
        author: "Strategy"
    },
];

export const BlogGrid = () => {
    return (
        <section id="journal" className="py-24 border-t border-border bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">The Journal</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
                    </div>
                    <Button variant="link" className="text-primary hidden md:flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Read All Articles <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((article, i) => (
                        <div key={i} className="group cursor-pointer flex flex-col h-full bg-background border border-border p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-6 aspect-[3/2] bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 transition-transform duration-500 group-hover:scale-105"></div>
                                <div className="absolute top-4 left-4 bg-background px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                    {article.category}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-3 text-xs text-muted-foreground uppercase tracking-wider">
                                    <span>{article.date}</span>
                                    <span>{article.author}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                    {article.excerpt}
                                </p>
                                <div className="pt-4 border-t border-border/50 flex items-center text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full h-12 uppercase text-xs font-bold tracking-widest">Read All Articles</Button>
                </div>
            </div>
        </section>
    );
};
