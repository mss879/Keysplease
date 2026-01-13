"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
    {
        title: "Explore",
        links: [
            { name: "Home", href: "/" },
            { name: "Buy Properties", href: "/buy" },
            { name: "Rent Homes", href: "/rent" },
            { name: "Commercial", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Contact", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
        ]
    }
];

const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
];

export function Footer() {
    return (
        <footer className="w-[98%] mx-auto bg-[#001f3f] text-white pt-20 pb-10 overflow-hidden relative rounded-t-[3rem] mt-2">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="bg-white py-3 px-6 rounded-2xl w-fit shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/keysplease-logo.png"
                                    alt="Keys Please"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed max-w-md font-light">
                            Your trusted partner in finding the perfect property. Experience luxury, comfort, and convenience with Keys Please.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {footerLinks.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-bold text-lg mb-6 text-white tracking-wide">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-slate-400 hover:text-[#c89e36] transition-colors text-sm flex items-center gap-1 group w-fit"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Social Column */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Connect</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c89e36] hover:border-[#c89e36] hover:text-white transition-all duration-300 text-slate-300 group"
                                    >
                                        <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-light">
                        © 2026 Keys Please. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-500 text-xs font-medium tracking-wide">Made by</span>
                            <a href="https://www.arcai.agency" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
                                <Image
                                    src="/arc%20logo.png"
                                    alt="ARC AI"
                                    width={24}
                                    height={24}
                                    className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </a>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <span className="text-slate-500 text-xs font-medium tracking-wide">
                            Powered by <span className="text-white">Next.js</span>
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
