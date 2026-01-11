"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// --- Animation Components ---

const VerifiedTrustAnimation = () => {
    return (
        <div className="relative w-full h-full bg-slate-50 overflow-hidden flex items-center justify-center rounded-xl border border-slate-200">
             {/* 0. Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', 
                    backgroundSize: '20px 20px' 
                }} 
            />

            {/* Main Property Card */}
            <motion.div
                className="relative w-48 h-64 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    boxShadow: ["0px 1px 2px rgba(0,0,0,0.05)", "0px 10px 15px -3px rgba(0,0,0,0.1)"],
                    borderColor: ["#e2e8f0", "#94a3b8"] // sharpening outline
                }}
                transition={{ duration: 0.8, times: [0, 1] }}
            >
                {/* Photo Placeholder */}
                <div className="w-full h-32 bg-slate-100 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                {/* Content Lines */}
                <div className="p-4 space-y-2">
                    <div className="w-3/4 h-3 bg-slate-200 rounded animate-pulse" />
                    <div className="w-1/2 h-3 bg-slate-200 rounded animate-pulse" />
                    <div className="flex gap-2 mt-2">
                        <div className="w-4 h-4 rounded-full bg-slate-100" />
                        <div className="w-4 h-4 rounded-full bg-slate-100" />
                    </div>
                </div>

                 {/* Step 3: Highlight Sweep */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)' }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Step 1: Checklist */}
            <div className="absolute right-8 top-12 flex flex-col gap-3">
                {[0, 1, 2].map((i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.4), duration: 0.4 }}
                    >
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div className="w-16 h-2 bg-slate-200 rounded" />
                    </motion.div>
                ))}
            </div>

            {/* Step 2: Verified Badge Stamp */}
            <motion.div
                className="absolute -top-2.5 -right-2.5 z-10" 
                style={{ top: '25%', right: '35%' }}
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200, damping: 15 }}
            >
                <div className="bg-blue-600 text-white p-2 rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.4)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
            </motion.div>
        </div>
    )
}

const SmartSearchAnimation = () => {
    return (
        <div className="relative w-full h-full bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-8 rounded-xl border border-slate-200">
            {/* Search Bar */}
            <motion.div 
                className="w-full max-w-sm h-10 bg-white rounded-full border border-slate-200 shadow-sm flex items-center px-4 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <div className="ml-3 w-32 h-2 bg-slate-100 rounded" />
            </motion.div>

            {/* Step 1: Filter Chips */}
            <div className="flex gap-2 mb-8">
                {['District', 'Price', 'Beds'].map((label, i) => (
                    <motion.div
                        key={i}
                        className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-500 font-medium border border-slate-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                    >
                        {label}
                    </motion.div>
                ))}
            </div>

            {/* Step 2: Results Grid */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3 relative h-32">
                 {/* Cards that stay */}
                 <motion.div 
                    className="h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-3"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="w-full h-12 bg-slate-100 rounded mb-2" />
                    <div className="w-3/4 h-2 bg-slate-100 rounded" />
                </motion.div>
                
                <motion.div 
                    className="h-24 bg-white rounded-lg border border-slate-200 shadow-sm p-3 relative"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="w-full h-12 bg-slate-100 rounded mb-2" />
                    <div className="w-3/4 h-2 bg-slate-100 rounded" />
                    
                    {/* Step 3: Saved Icon */}
                    <motion.div
                        className="absolute top-2 right-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.2, type: "spring" }}
                    >
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

const PrimeLocationsAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-xl border border-slate-200/60 shadow-sm">
            
            {/* 1. Background Search Pill (Static/Subtle) */}
            <div className="absolute top-6 left-6 w-24 h-6 bg-slate-50 rounded-full border border-slate-100 flex items-center px-2 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
            </div>

            {/* 2. Main Map (Background Layer - Clean Silhouette) */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0.1, scale: 0.95 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                 <svg width="400" height="500" viewBox="0 0 400 500">
                    <path 
                        d="M 200 50 Q 280 90 260 200 Q 290 320 200 450 Q 110 340 140 200 Q 110 90 200 50 Z" 
                        fill="none" 
                        stroke="#0f172a" 
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

            {/* 3. The Magnifier / Inset (Centered & Clean) */}
            <motion.div
                className="relative z-20 w-64 h-64 bg-white rounded-full shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center transform-gpu"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
                {/* Clean Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px]" />
                 
                 {/* Stylized Crosshair/Roads */}
                 <div className="absolute w-full h-[1px] bg-slate-200 rotate-12 top-[45%]" />
                 <div className="absolute h-full w-[1px] bg-slate-200 -rotate-12 left-[50%]" />

                 {/* Pin 1: Colombo 04 */}
                 <motion.div 
                    className="absolute"
                    style={{ top: '42%', left: '38%' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.0, type: "spring" }}
                 >
                     <div className="w-3 h-3 bg-blue-500 rounded-full border-[3px] border-white shadow-sm" />
                     <motion.div 
                        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-2.5 py-1.5 rounded-lg shadow-md border border-slate-100 z-10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                     >
                        <span className="text-[10px] font-semibold text-slate-700 whitespace-nowrap block">Colombo 04</span>
                     </motion.div>
                 </motion.div>

                 {/* Pin 2: Colombo 06 - Highlighted */}
                 <motion.div 
                    className="absolute"
                    style={{ top: '58%', left: '55%' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, type: "spring" }}
                 >
                     {/* Pulse */}
                     <motion.div 
                        className="absolute -inset-6 rounded-full border border-blue-500/20 bg-blue-500/5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.4, duration: 0.5 }}
                     />
                     <div className="w-3 h-3 bg-blue-600 rounded-full border-[3px] border-white shadow-sm relative z-20" />
                     
                     <motion.div 
                        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-2.5 py-1.5 rounded-lg shadow-md border border-blue-100 z-20"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}
                     >
                        <span className="text-[10px] font-semibold text-blue-600 whitespace-nowrap block">Colombo 06</span>
                     </motion.div>
                 </motion.div>
            </motion.div>

            {/* 4. Property Card - Clean Pop-up */}
            <motion.div
                className="absolute z-30 right-6 bottom-6 w-48 bg-white rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.6, duration: 0.6, type: "spring", bounce: 0.3 }}
            >
                {/* Image */}
                <div className="w-full h-24 bg-slate-50 rounded-lg mb-3 relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4"/></svg>
                     </div>
                     {/* Tag */}
                     <div className="absolute bottom-2 left-2 px-2 py-1 bg-slate-800/90 backdrop-blur rounded text-[9px] font-medium text-white shadow-sm">
                        Colombo 06
                     </div>
                </div>
                {/* Content */}
                <div className="space-y-2 px-0.5 pb-1">
                    <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                    <div className="flex gap-2">
                        <div className="w-8 h-1.5 bg-slate-100 rounded-full" />
                        <div className="w-8 h-1.5 bg-slate-100 rounded-full" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const SecureChatAnimation = () => {
    return (
        <div className="relative w-full h-full bg-slate-50 overflow-hidden flex items-center justify-center rounded-xl border border-slate-200 p-8">
            {/* Chat Window Container */}
            <motion.div 
                className="w-64 h-80 bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50/50">
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-slate-200" />
                         <div className="w-16 h-2 bg-slate-200 rounded-full" />
                    </div>
                    {/* Secure Lock Badge (Final Step) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.6 }}
                        className="text-blue-500"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </motion.div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 flex flex-col gap-3">
                    
                    {/* 1. Buyer Message (Left) */}
                    <motion.div
                        className="self-start max-w-[80%] bg-slate-100 rounded-2xl rounded-tl-none p-3"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {/* Scribble Text */}
                        <svg width="40" height="6" viewBox="0 0 40 6">
                            <motion.path d="M 0 3 L 40 3" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 4" 
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.4 }} 
                            />
                        </svg>
                    </motion.div>

                    {/* 2. Seller Reply (Right) */}
                        {/* Typing Dots first */}
                    <motion.div
                        className="self-end mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0s" }}/>
                            <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}/>
                            <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}/>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="self-end max-w-[80%] bg-blue-50 rounded-2xl rounded-tr-none p-3"
                        initial={{ x: 10, opacity: 0, display: "none" }}
                        animate={{ x: 0, opacity: 1, display: "block" }}
                        transition={{ delay: 1.6 }}
                    >
                         <div className="w-24 h-1.5 bg-blue-200 rounded-full mb-1.5" />
                         <div className="w-16 h-1.5 bg-blue-200 rounded-full" />
                    </motion.div>

                    {/* 3. Viewing Request (Buyer Special Bubble) */}
                    <motion.div
                        className="self-start mt-2 border border-blue-100 bg-white shadow-sm rounded-xl p-2 flex items-center gap-3 pr-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.0, type: "spring" }}
                    >
                        <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        </div>
                        <div className="space-y-1">
                            <div className="w-20 h-1.5 bg-slate-200 rounded-full"/>
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full"/>
                        </div>
                    </motion.div>

                    {/* 4. Seller Confirmation (Right) */}
                    <motion.div
                        className="self-end mt-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.0 }}
                    >
                         <div className="bg-blue-600 text-white p-2 rounded-full rounded-tr-none shadow-sm flex items-center justify-center">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                         </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}

const EasyListingAnimation = () => {
    return (
        <div className="relative w-full h-full bg-slate-50 overflow-hidden flex items-center justify-center rounded-xl border border-slate-200">
            {/* Step 0: Add Listing Card */}
            <motion.div
                className="w-56 h-72 bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col items-center pt-8 relative overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-slate-300 font-semibold mb-6">New Listing</div>
                
                {/* Step 1: Tiles Input */}
                <div className="space-y-3 w-full px-6">
                    {[
                        { icon: "Image", bg: "bg-blue-100", col: "text-blue-600" }, 
                        { icon: "MapPin", bg: "bg-orange-100", col: "text-orange-600" },
                        { icon: "DollarSign", bg: "bg-green-100", col: "text-green-600" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="w-full h-10 rounded border border-slate-100 flex items-center px-3 gap-3 bg-slate-50"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.4 }}
                        >
                            <div className={`w-6 h-6 rounded ${item.bg} ${item.col} flex items-center justify-center text-[10px]`}>
                               {/* Simplified Icon */}
                               <div className="w-3 h-3 bg-current rounded-full opacity-50"/>
                            </div>
                            <div className="w-20 h-2 bg-slate-200 rounded" />
                        </motion.div>
                    ))}
                </div>

                {/* Step 2: Progress Bar */}
                <div className="absolute bottom-6 w-4/5 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    />
                </div>
            </motion.div>

            {/* Step 3: Publish / Move to Grid (Implying grid by scaling down and fading slightly as if joining others) */}
            <motion.div
                className="absolute inset-0 bg-slate-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.5 }}
            >
                 <div className="w-full h-full flex flex-wrap gap-4 p-8 opacity-20">
                     <div className="w-24 h-32 bg-slate-300 rounded-lg" />
                     <div className="w-24 h-32 bg-slate-300 rounded-lg" />
                     <div className="w-24 h-32 bg-slate-300 rounded-lg" />
                     <div className="w-24 h-32 bg-blue-400 rounded-lg" /> {/* Our hero joining */}
                 </div>
            </motion.div>
        </div>
    )
}


// --- Main Data ---

const features = [
  {
    id: "item-1",
    title: "Verified Listings & Trust",
    description: "Every property is presented with clear details, accurate photos, and key information you can trust. We help buyers and sellers connect with confidence through verified profiles and transparent listing standards.",
    Animation: VerifiedTrustAnimation
  },
  {
    id: "item-2",
    title: "Smart Search & Personalized Matches",
    description: "Find the right home faster with filters that matter in Sri Lanka, including district, price range, bedrooms, land size, and nearby essentials. Save searches and get suggestions that match your preferences.",
    Animation: SmartSearchAnimation
  },
  {
    id: "item-3",
    title: "Prime Locations Across Sri Lanka",
    description: "Explore properties in Colombo, Kandy, Galle, Jaffna, and beyond. Browse by district and neighborhood to discover homes in locations that fit your lifestyle, commute, and future plans.",
    Animation: PrimeLocationsAnimation
  },
  {
    id: "item-4",
    title: "Secure Chat & Faster Deals",
    description: "Message sellers directly, ask questions, and arrange viewings in one place. With secure in-app chat and quick replies, it’s easy to move from interest to inspection to agreement.",
    Animation: SecureChatAnimation
  },
  {
    id: "item-5",
    title: "Easy Listing for Sellers",
    description: "Post your property in minutes with guided steps for photos, pricing, location, and contact details. Manage your listings, edit anytime, and respond to buyers quickly.",
    Animation: EasyListingAnimation
  }
]

export function FeaturesSection() {
    const [activeItem, setActiveItem] = useState("item-1")

    return (
        <section id="features" className="w-full py-12 md:py-16 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a2333] tracking-tighter mb-4 leading-tight">
                        Everything you need to find a place called home.
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        Simple, secure, and designed for Sri Lanka’s property market.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Accordion */}
                    <div className="w-full">
                        <Accordion 
                            type="single" 
                            collapsible={false} 
                            value={activeItem} 
                            onValueChange={(val) => val && setActiveItem(val)}
                        >
                            {features.map((feature) => (
                                <AccordionItem key={feature.id} value={feature.id} className="border-b-0 mb-2 px-4 border-l-2 border-transparent data-[state=open]:border-blue-600 data-[state=open]:bg-slate-50 transition-all rounded-r-lg">
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <span className="text-lg font-semibold">{feature.title}</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-muted-foreground pb-4 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Right Side - Animation Display */}
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[450px] rounded-2xl overflow-hidden bg-slate-50 shadow-inner border border-slate-100">
                        <AnimatePresence mode="wait">
                            {features.map((feature) => (
                                activeItem === feature.id && (
                                    <motion.div
                                        key={feature.id}
                                        className="absolute inset-0 w-full h-full"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <feature.Animation />
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
