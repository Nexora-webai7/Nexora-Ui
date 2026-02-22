"use client";

import React from "react";
import { Code, Smartphone, Layers, Monitor, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "High-performance websites built with Next.js and React for ultra-fast speeds and SEO.",
            icon: <Code size={32} className="text-blue-500" />,
            className: "md:col-span-2"
        },
        {
            title: "App Development",
            description: "Seamless mobile experiences that scale with your business.",
            icon: <Smartphone size={32} className="text-purple-500" />,
            className: "col-span-1"
        },
        {
            title: "UI/UX Design",
            description: "Intuitive and beautiful interfaces that engage users.",
            icon: <Layers size={32} className="text-blue-400" />,
            className: "col-span-1"
        },
        {
            title: "Cloud Performance",
            description: "Optimized infrastructure for lightning-fast delivery across the globe.",
            icon: <Monitor size={32} className="text-purple-400" />,
        },
        {
            title: "Social Media Management",
            description: "Strategic management of your social presence on Instagram, Facebook, and more to drive engagement and growth.",
            icon: <Instagram size={32} className="text-pink-500" />,
            className: "col-span-1"
        }
    ];

    return (
        <section id="services" className="py-20 md:py-24 px-4 sm:px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Expertise" subtitle="We deliver premium solutions across all digital touchpoints." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={cn(
                                "glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl group hover:border-white/30 hover:bg-white/10 transition-all cursor-default relative overflow-hidden",
                                service.className
                                    ? service.className.includes("md:col-span-2")
                                        ? "md:col-span-2"
                                        : ""
                                    : ""
                            )}
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-outfit font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
