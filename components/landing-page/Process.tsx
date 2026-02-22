"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export const Process = () => {
    const steps = [
        { title: "Strategy", desc: "Understanding your vision and defining the roadmap." },
        { title: "Design", desc: "Crafting beautiful interfaces and seamless UX." },
        { title: "Develop", desc: "Engineering with speed, security, and scalability." },
        { title: "Launch", desc: "Going live and evolving with the market." }
    ];

    return (
        <section id="process" className="py-20 md:py-24 px-4 sm:px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Our Process" subtitle="How we turn ideas into industry-leading digital products." />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
                    <div className="hidden md:block absolute top-[50px] left-0 right-0 h-px bg-white/10 -z-10" />
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="relative text-center group"
                        >
                            <div className="w-12 h-12 rounded-full glass border-white/20 mx-auto flex items-center justify-center text-white font-bold mb-6 bg-black z-10 transition-colors group-hover:bg-white group-hover:text-black">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed px-4 sm:px-0">{step.desc}</p>

                            {/* Mobile connector line */}
                            {index < steps.length - 1 && (
                                <div className="block md:hidden w-px h-8 bg-white/10 mx-auto mt-4 mb-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
