"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/dotted-surface";


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <DottedSurface className="size-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-medium mb-8">
                        <Sparkles size={14} className="mr-2 text-blue-400" />
                        Engineering the Digital Frontier
                    </span>
                    <h1 className="text-5xl md:text-8xl font-outfit font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Build Your <span className="text-gradient">Futuristic</span> <br /> Digital Presence
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Nexora is a premium Web & App development agency crafting bespoke digital experiences
                        with cutting-edge technology and visionary design.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center group">
                            Start Your Project
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold text-lg hover:bg-white/10 transition-colors">
                            View Showcase
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Hero Image / Abstract Pattern */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-20 px-6 max-w-6xl mx-auto"
            >
                <div className="relative rounded-2xl overflow-hidden glass border-white/10 shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center group overflow-hidden">
                        {/* Mock Dashboard / Interface UI */}
                        <div className="w-full h-full p-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                                </div>
                                <div className="h-6 w-32 rounded-lg bg-white/5" />
                            </div>
                            <div className="grid grid-cols-3 gap-6 flex-1">
                                <div className="col-span-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5 p-4" />
                                <div className="rounded-xl bg-white/5 border border-white/5 p-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
