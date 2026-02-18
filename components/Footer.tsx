import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="font-bold text-white text-xl">N</span>
                        </div>
                        <span className="text-2xl font-outfit font-bold tracking-tight text-white">
                            Nexora
                        </span>
                    </Link>
                    <p className="mt-4 text-zinc-500 text-sm max-w-xs transition-colors hover:text-zinc-400 cursor-default">
                        Designing and building the future of digital experiences with cutting-edge technology.
                    </p>
                </div>

                <div className="flex space-x-12">
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-outfit font-semibold">Company</h4>
                        <Link href="#services" className="text-zinc-500 hover:text-white text-sm transition-colors">Services</Link>
                        <Link href="#portfolio" className="text-zinc-500 hover:text-white text-sm transition-colors">Portfolio</Link>
                        <Link href="#process" className="text-zinc-500 hover:text-white text-sm transition-colors">Process</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-outfit font-semibold">Legal</h4>
                        <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
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
