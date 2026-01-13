"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Mascot } from "@/components/ui/mascot";

interface ComingSoonProps {
    title: string;
    description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">

            {/* Back Button */}
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-[#c89e36] transition-colors font-medium group"
            >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Back to Home
            </Link>

            <div className="flex flex-col items-center gap-8 max-w-lg text-center">

                {/* Scaled Mascot Container */}
                <div className="relative w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-xl border border-slate-100 p-8">
                    <div className="transform scale-[2.5] origin-center translate-y-2">
                        <Mascot hovered={true} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-[#1a2333] tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/50 text-amber-700 rounded-full text-sm font-semibold border border-amber-200">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
                    </span>
                    Under Development
                </div>

            </div>
        </div>
    );
}
