"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/dotted-surface";
import { RotatingEarth } from "@/components/wireframe-dotted-globe";

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
                    <h1 className="text-5xl md:text-6xl font-outfit font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Build Your <span className="text-gradient">Futuristic</span> <br /> Digital Presence
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Nexora is a premium Web & App development agency crafting bespoke digital experiences
                        with cutting-edge technology and visionary design.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center group">
                            Start Your Project
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="#services" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors">
                            View Showcase
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Hero Image / Abstract Pattern */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-20 px-6 mx-auto"
            >
                <RotatingEarth />
            </motion.div>
        </section>
    );
};
