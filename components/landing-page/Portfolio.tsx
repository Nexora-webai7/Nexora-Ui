"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export const Portfolio = () => {
    const projects = [
        { title: "Quantum", category: "App Design", color: "from-blue-600/20" },
        { title: "Nexus", category: "Web Platform", color: "from-purple-600/20" },
        { title: "Orbit", category: "Brand Identity", color: "from-indigo-600/20" },
        { title: "Void", category: "Product Dev", color: "from-zinc-800/20" }
    ];

    return (
        <section id="portfolio" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Our Showcase" subtitle="A glimpse into the digital futures we've already built." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-950 border border-white/5"
                        >
                            <div className={cn("absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-40 group-hover:opacity-60", project.color)} />
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <span className="text-blue-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-outfit font-bold text-white mb-4">{project.title}</h3>
                                <div className="flex items-center text-white/50 text-sm group-hover:text-white transition-colors">
                                    View Case Study <ExternalLink size={16} className="ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
