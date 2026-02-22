"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/dotted-surface";
import { RotatingEarth } from "@/components/wireframe-dotted-globe";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <DottedSurface className="size-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div
                        className="text-center lg:text-left"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-medium mb-8">
                            <Sparkles size={14} className="mr-2 text-blue-400" />
                            Engineering the Digital Frontier
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-bold tracking-tight text-white mb-8 leading-[1.1] md:max-w-2xl mx-auto lg:mx-0">
                            Build Your <span className="text-gradient">Futuristic</span> <br className="hidden sm:block" /> Digital Presence
                        </h1>
                        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed">
                            Nexora is a premium Web & App development agency crafting bespoke digital experiences
                            with cutting-edge technology and visionary design.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                            <Link href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center group">
                                Start Your Project
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-0 transition-transform" />
                            </Link>
                            <Link href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors text-center">
                                View Showcase
                            </Link>
                        </div>
                    </div>

                    {/* Globe / Abstract Pattern - Hidden on mobile, 50% on desktop */}
                    <div
                        className="hidden lg:flex justify-center items-center w-full"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] xl:max-w-[600px]">
                            <RotatingEarth />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
