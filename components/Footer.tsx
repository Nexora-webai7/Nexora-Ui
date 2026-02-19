import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div>
                    <Link href="/" className="flex items-center group">
                        <Image src="/logo.png" alt="Nexora" width={140} height={140} className="object-contain" />
                    </Link>
                    <p className="mt-4 text-zinc-500 text-sm max-w-xs transition-colors hover:text-zinc-400 cursor-default">
                        Designing and building the future of digital experiences with cutting-edge technology.
                    </p>
                    <p className="mt-4 text-zinc-600 text-xs font-medium uppercase tracking-wider">
                        Founder: Aditya Agrawal | Co-founder: Ronit Agrawal
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-12">
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-outfit font-semibold">Company</h4>
                        <Link href="#services" className="text-zinc-500 hover:text-white text-sm transition-colors">Services</Link>
                        <Link href="#portfolio" className="text-zinc-500 hover:text-white text-sm transition-colors">Portfolio</Link>
                        <Link href="#process" className="text-zinc-500 hover:text-white text-sm transition-colors">Process</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-outfit font-semibold">Legal</h4>
                        <Link href="/privacy" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-outfit font-semibold">Location</h4>
                        <div className="text-zinc-500 text-sm leading-relaxed">
                            <p>Bennett University</p>
                            <p>Plot # 8-11, Techzone 2</p>
                            <p>Greater Noida, UP 201310</p>
                        </div>
                    </div>
                </div>

                <div className="text-sm text-zinc-600">
                    © {new Date().getFullYear()} Nexora Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
