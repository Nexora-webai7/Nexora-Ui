"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <section id="process" className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Our Process" subtitle="How we turn ideas into industry-leading digital products." />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    <div className="hidden md:block absolute top-[50px] left-0 right-0 h-px bg-white/10 -z-10" />
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative text-center group"
                        >
                            <div className="w-12 h-12 rounded-full glass border-white/20 mx-auto flex items-center justify-center text-white font-bold mb-6 bg-black z-10 transition-colors group-hover:bg-white group-hover:text-black">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-outfit font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
