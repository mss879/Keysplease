"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PropertyCardProps {
    image: string;
    tag: string;
    title: string;
    description: string;
    href: string;
}

const PropertyCard = ({ image, tag, title, description, href }: PropertyCardProps) => {
    return (
        <Link href={href} className="group flex flex-col p-4 rounded-[32px] bg-white hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag Pill */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-10">
                    <span className="text-white text-xs font-medium tracking-wide">
                        {tag}
                    </span>
                </div>

                {/* CTA Button - Floating on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#f1f1f1] hover:bg-white text-black px-6 py-3 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 z-10 w-max">
                    <span className="text-sm font-semibold">See Properties</span>
                </div>
            </div>

            {/* Text Content */}
            <div className="mt-6 px-2 text-start">
                <h3 className="text-lg font-bold text-[#1a2333] mb-3 group-hover:text-[#c89e36] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[280px]">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export function LuxurySection() {
    const properties = [
        {
            image: "https://framerusercontent.com/images/heNh7YY0rCPrFkkOAK3hEIF8FE.png",
            tag: "Rent",
            title: "Rent Properties",
            description: "Explore Keys Please’s luxury homes tailored and uncover your ideal living.",
            href: "/search-result",
        },
        {
            image: "https://framerusercontent.com/images/res1TKi4yr6XgrJKPr1Ca8AvLQ.png",
            tag: "Sale",
            title: "Sell Properties",
            description: "Discover a sale you'll love on Keys Please, thanks to our filters and property tags.",
            href: "/search-result",
        },
        {
            image: "https://framerusercontent.com/images/7pPh0Xbw11P3V5BwPJMt8d6aU.jpg",
            tag: "Commercial",
            title: "Commercial Properties",
            description: "Commercial properties tailored for business purposes. Luxury properties for commerce.",
            href: "/search-result",
        },
        {
            image: "https://framerusercontent.com/images/M6dbvs7gLWKRt4e2c1h9SnATSs.jpg",
            tag: "Land",
            title: "Land Properties",
            description: "Land in the best location in the city. Build your luxury experience in the heart of UK.",
            href: "/search-result",
        },
        {
            image: "https://framerusercontent.com/images/yhWApYIqDPwizkyBP0vcESwWoU.jpg",
            tag: "Lease",
            title: "Lease Properties",
            description: "Specific timeline leases for your needs. Luxury properties at extended time periods.",
            href: "/search-result",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 max-w-2xl px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a2333] tracking-tighter mb-4 flex gap-x-3 gap-y-1 flex-wrap">
                        <span className="inline-block animate-fadeIn">Luxury</span>
                        <span className="inline-block animate-fadeIn delay-100">Lives</span>
                        <span className="inline-block animate-fadeIn delay-200">Here</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                        Your trusted real estate partner in every transaction.
                    </p>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((prop, index) => (
                        <PropertyCard key={index} {...prop} />
                    ))}
                </div>

            </div>
        </section>
    );
}
