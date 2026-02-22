"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    gradient?: boolean;
}

export const SectionHeader = ({ title, subtitle, gradient = false }: SectionHeaderProps) => (
    <div className="mb-16 text-center">
        <h2
            className={cn(
                "text-4xl md:text-5xl font-outfit font-bold mb-4",
                gradient ? "text-gradient" : "text-white"
            )}
        >
            {title}
        </h2>
        <p
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
        >
            {subtitle}
        </p>
    </div>
);
