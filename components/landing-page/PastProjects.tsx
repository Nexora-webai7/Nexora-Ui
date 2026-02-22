"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Code2, Sparkles, Rocket, Globe, Coffee, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const projects = [
    {
        title: "Zenith Pay",
        category: "FinTech Platform",
        description: "A secure and scalable digital payment platform enabling seamless transactions with real-time analytics and fraud protection.",
        icon: <Globe className="w-6 h-6" />,
        color: "from-emerald-600/20 to-green-500/20",
        accent: "text-emerald-400",
        size: "md:col-span-2 md:row-span-2",
        tags: ["Next.js", "TypeScript", "Stripe", "Security"],
        link: "https://zenith-react-my-app.vercel.app/"
    },
    {
        title: "Cravora",
        category: "Food & Ordering Platform",
        description: "A modern food discovery and ordering platform built for performance, intuitive UX, and seamless customer experience.",
        icon: <Sparkles className="w-6 h-6" />,
        color: "from-orange-600/20 to-rose-500/20",
        accent: "text-orange-400",
        size: "md:col-span-1 md:row-span-1",
        tags: ["React", "Tailwind", "API Integration"],
        link: "https://cravora-nine.vercel.app/"
    },
    {
        title: "GDG Bennett University",
        category: "Developer Community",
        description: "Official website for Google Developer Group at Bennett University, showcasing events, workshops, and technical initiatives.",
        icon: <Code2 className="w-6 h-6" />,
        color: "from-blue-600/20 to-cyan-500/20",
        accent: "text-blue-400",
        size: "md:col-span-1 md:row-span-1",
        tags: ["Next.js", "Community", "UI/UX"],
        link: "https://gdg-bu.vercel.app/"
    }
];

export const PastProjects = () => {
    return (
        <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Engineered Excellence"
                    subtitle="Explore our gallery of high-performance digital solutions crafted for industry leaders."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {projects.map((project, index) => {
                        const isLarge = project.size.includes("row-span-2");
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5",
                                    isLarge ? "p-8" : "p-5",
                                    project.size
                                )}
                            >
                                {/* Gradient Background */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10",
                                    project.color
                                )} />

                                {/* Content Top */}
                                <div>
                                    <div className={cn("flex justify-between items-start", isLarge ? "mb-6" : "mb-3")}>
                                        <div className={cn(
                                            "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500",
                                            isLarge ? "p-3" : "p-2.5",
                                            project.accent
                                        )}>
                                            {project.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] uppercase tracking-wider text-white/30 px-2 py-1 rounded-full border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className={cn("text-xs font-bold uppercase tracking-widest block", isLarge ? "mb-2" : "mb-1.5", project.accent)}>
                                        {project.category}
                                    </span>
                                    <h3 className={cn("font-outfit font-bold text-white group-hover:translate-x-1 transition-transform duration-300", isLarge ? "text-2xl md:text-3xl mb-3" : "text-xl md:text-2xl mb-2")}>
                                        {project.title}
                                    </h3>
                                    <p className={cn("text-zinc-400 leading-relaxed", isLarge ? "text-sm md:text-base max-w-[280px]" : "text-[13px] md:text-sm")}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Content Bottom */}
                                <div className={cn("flex items-center justify-between", isLarge ? "mt-8" : "mt-auto pt-4")}>
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center text-white font-medium group/btn cursor-pointer"
                                    >
                                        View Project
                                        <ArrowRight className="ml-2 w-4 h-4 text-white/50 group-hover/btn:text-white transition-colors" />
                                    </motion.a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/10"
                                    >
                                        <ExternalLink className="w-4 h-4 text-white/50" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
