import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left transition-all">
                        <Link href="/" className="flex items-center group -ml-2">
                            <Image src="/logo.png" alt="Nexora" width={120} height={120} className="object-contain md:w-[140px] md:h-[140px]" />
                        </Link>
                        <p className="mt-2 md:mt-4 text-zinc-500 text-xs sm:text-sm max-w-xs transition-colors hover:text-zinc-400 cursor-default">
                            Designing and building the future of digital experiences with cutting-edge technology.
                        </p>
                        <div className="mt-6 space-y-1">
                            <p className="text-zinc-600 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                                Co-Founder: Aditya Agrawal
                            </p>
                            <p className="text-zinc-600 text-[10px] md:text-xs font-medium uppercase tracking-wider">
                                Co-founder: Ronit Agrawal
                            </p>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 w-full md:w-auto">
                        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4">
                            <h4 className="text-white text-sm md:text-base font-outfit font-semibold uppercase tracking-widest text-[10px] md:normal-case md:tracking-normal">Company</h4>
                            <Link href="#services" className="text-zinc-500 hover:text-white text-xs md:text-sm transition-colors">Services</Link>
                            <Link href="#portfolio" className="text-zinc-500 hover:text-white text-xs md:text-sm transition-colors">Portfolio</Link>
                            <Link href="#process" className="text-zinc-500 hover:text-white text-xs md:text-sm transition-colors">Process</Link>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4">
                            <h4 className="text-white text-sm md:text-base font-outfit font-semibold uppercase tracking-widest text-[10px] md:normal-case md:tracking-normal">Legal</h4>
                            <Link href="/privacy" className="text-zinc-500 hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-zinc-500 hover:text-white text-xs md:text-sm transition-colors">Terms of Service</Link>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4 col-span-2 sm:col-span-1 border-t border-white/5 pt-8 sm:border-0 sm:pt-0">
                            <h4 className="text-white text-sm md:text-base font-outfit font-semibold uppercase tracking-widest text-[10px] md:normal-case md:tracking-normal">Location</h4>
                            <div className="text-zinc-500 text-xs md:text-sm leading-relaxed text-center md:text-left">
                                <p>Bennett University</p>
                                <p>Plot # 8-11, Techzone 2</p>
                                <p>Greater Noida, UP 201310</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <div className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest order-2 md:order-1">
                        © {new Date().getFullYear()} Nexora Agency. All rights reserved.
                    </div>
                    <div className="flex gap-6 order-1 md:order-2">
                        {/* Placeholder for social icons if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
