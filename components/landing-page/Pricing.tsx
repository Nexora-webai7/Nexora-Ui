"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Globe, Settings, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export const Pricing = () => {
    const plans = [
        {
            title: "Website Creation",
            price: "Custom",
            description: "Custom-built websites tailored to your specific business requirements and goals.",
            features: [
                "Full Custom Design",
                "Next.js Performance",
                "SEO Optimization",
                "Responsive Layout",
                "Contact Form Integration"
            ],
            icon: <Globe size={24} className="text-blue-500" />,
            buttonText: "Get Started",
            highlight: false
        },
        {
            title: "Maintenance",
            price: "Monthly/Yearly",
            description: "Continuous care for your website to ensure it stays secure, fast, and up-to-date.",
            features: [
                "24/7 Security Monitoring",
                "Regular Backups",
                "Performance Updates",
                "Content Updates",
                "Priority Support"
            ],
            icon: <Settings size={24} className="text-purple-500" />,
            buttonText: "Get Maintenance",
            highlight: true
        },
        {
            title: "Social & SEO",
            price: "Growth Plan",
            description: "Manage and improve your social presence and Google reputation to drive more customers.",
            features: [
                "Social Media Management",
                "Content Strategy",
                "Google Review Management",
                "Analytics Reporting",
                "Engagement Growth"
            ],
            icon: <TrendingUp size={24} className="text-pink-500" />,
            buttonText: "Grow Now",
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Flexible Plans"
                    subtitle="Choose the perfect solution to elevate your digital presence and grow your business."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className={cn(
                                "glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] relative flex flex-col h-full transition-all group",
                                plan.highlight ? "border-white/30 bg-white/5 ring-1 ring-white/20" : "border-white/10"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] md:text-xs font-bold py-1 px-4 rounded-full whitespace-nowrap">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-6 md:mb-8">
                                <div className="mb-5 md:mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-outfit font-bold text-white mb-2">{plan.title}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{plan.price}</span>
                                </div>
                                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <span className="text-zinc-400 text-xs md:text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-4 rounded-2xl font-bold transition-all text-sm md:text-base",
                                plan.highlight
                                    ? "bg-white text-black hover:bg-zinc-200"
                                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                            )}>
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
