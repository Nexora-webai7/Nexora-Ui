"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    gradient?: boolean;
}

export const SectionHeader = ({ title, subtitle, gradient = false }: SectionHeaderProps) => (
    <div className="mb-16 text-center">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "text-4xl md:text-5xl font-outfit font-bold mb-4",
                gradient ? "text-gradient" : "text-white"
            )}
        >
            {title}
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
        >
            {subtitle}
        </motion.p>
    </div>
);
