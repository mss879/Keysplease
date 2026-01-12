"use client"

import React from "react"
import { motion } from "framer-motion"

// --- Verified Trust Animation (Fun & Bouncy) ---
export const VerifiedTrustAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-xl border-2 border-slate-100">
            {/* Fun Pattern Background */}
            <motion.div
                className="absolute inset-0 opacity-[0.05]"
                animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                style={{
                    backgroundImage: 'radial-gradient(#F59E0B 2px, transparent 2px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Main Property Card */}
            <motion.div
                className="relative w-52 h-72 bg-white rounded-2xl shadow-xl border-2 border-slate-100 overflow-hidden"
                initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
            >
                {/* Photo Placeholder with gradient pop */}
                <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-indigo-200"
                    >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
                    </motion.div>

                    {/* Shimmer */}
                    <motion.div
                        className="absolute inset-0 bg-white/30 skew-x-12"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                </div>

                {/* Content Lines */}
                <div className="p-4 space-y-3">
                    <motion.div className="w-3/4 h-3 bg-slate-100 rounded-full" initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 0.6, type: "spring" }} />
                    <motion.div className="w-1/2 h-3 bg-slate-100 rounded-full" initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ delay: 0.7, type: "spring" }} />

                    <div className="flex gap-2 mt-2 pt-2 border-t border-slate-50">
                        <motion.div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-amber-500" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </motion.div>
                        <div className="space-y-1 pt-1">
                            <motion.div className="w-20 h-2 bg-slate-100 rounded-full font-bold text-[10px] text-slate-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>VERIFIED AGENT</motion.div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Scan Effect (Green Laser Style) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none border-t-[3px] border-green-400 bg-gradient-to-b from-green-400/20 to-transparent"
                    initial={{ y: "-100%" }}
                    animate={{ y: "200%" }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Checklist Popping In */}
            <div className="absolute right-4 top-8 flex flex-col gap-2">
                {['Photos Verified', 'Identity Checked', 'Owner Confirmed'].map((text, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-lg border-2 border-slate-50"
                        initial={{ opacity: 0, x: 50, rotate: 10 }}
                        animate={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                        transition={{ delay: 1 + (i * 0.2), type: "spring", bounce: 0.6 }}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                    >
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">{text}</span>
                    </motion.div>
                ))}
            </div>

            {/* Massive Badge Stamp */}
            <motion.div
                className="absolute -top-2 right-[20%] z-20"
                initial={{ scale: 3, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 12 }}
                transition={{ delay: 2.2, type: "spring", stiffness: 300, damping: 10 }} // Slam effect
            >
                <div className="bg-blue-600 text-white p-4 rounded-full shadow-2xl border-4 border-white ring-4 ring-blue-100">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                {/* Confetti Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${['bg-yellow-400', 'bg-pink-400', 'bg-blue-400'][i % 3]}`}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{ scale: [1, 0], x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100 }}
                        transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
                    />
                ))}
            </motion.div>
        </div>
    )
}

// --- Smart Search Animation (Playful & Elastic) ---
export const SmartSearchAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex flex-col items-center justify-center p-6 rounded-xl border-2 border-slate-100">
            {/* Playful Search Bar */}
            <motion.div
                className="w-full max-w-xs h-14 bg-white rounded-2xl border-2 border-slate-200 shadow-[0_8px_0_#cbd5e1] flex items-center px-4 mb-6 relative z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ y: -2, boxShadow: "0 10px 0 #cbd5e1" }}
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </motion.div>
                <div className="ml-3 h-full flex items-center overflow-hidden">
                    <motion.div
                        className="whitespace-nowrap text-slate-800 font-bold text-lg"
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ delay: 0.5, duration: 1, ease: "linear" }} // Typewriter feel simplified
                        style={{ overflow: "hidden" }}
                    >
                        Dream Home 🏡
                    </motion.div>
                    <motion.div
                        className="w-[2px] h-6 bg-blue-500 ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                    />
                </div>
            </motion.div>

            {/* Filter Pills Popping */}
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
                {['💰 Price < 50M', '🛏️ 3 Beds', '🏊 Pool'].map((label, i) => (
                    <motion.div
                        key={i}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border-b-4 active:border-b-0 active:translate-y-1 transition-all
                            ${i === 0 ? "bg-blue-100 text-blue-600 border-blue-200" : ""}
                            ${i === 1 ? "bg-amber-100 text-amber-600 border-amber-200" : ""}
                            ${i === 2 ? "bg-pink-100 text-pink-600 border-pink-200" : ""}
                        `}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + (i * 0.1), type: "spring", bounce: 0.6 }}
                        whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                    >
                        {label}
                    </motion.div>
                ))}
            </div>

            {/* Results Cards - Springy reveal */}
            <div className="w-full max-w-xs grid grid-cols-2 gap-4 relative h-32">
                {/* Card 1 */}
                <motion.div
                    className="h-32 bg-white rounded-2xl border-2 border-slate-100 shadow-sm p-3 flex flex-col gap-2"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.0, type: "spring" }}
                >
                    <div className="w-full h-16 bg-slate-100 rounded-xl" />
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full" />
                </motion.div>

                {/* Card 2 - The Winner */}
                <motion.div
                    className="h-36 -mt-2 bg-white rounded-2xl border-2 border-blue-200 shadow-xl p-3 relative flex flex-col gap-2"
                    initial={{ scale: 0, rotate: 10 }}
                    animate={{ scale: 1, rotate: 0, borderColor: ["#bfdbfe", "#3b82f6"] }}
                    transition={{ delay: 2.2, type: "spring", bounce: 0.6 }}
                >
                    <div className="w-full h-16 bg-blue-50 rounded-xl mb-1 relative overflow-hidden group">
                        <motion.div className="absolute inset-0 bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors" />
                        <div className="absolute top-1 left-1 bg-amber-400 text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm">NEW</div>
                    </div>
                    <div className="w-3/4 h-3 bg-slate-200 rounded-full" />
                    <div className="w-1/2 h-3 bg-slate-200 rounded-full" />

                    {/* Heart Explosion */}
                    <motion.div
                        className="absolute -top-2 -right-2 bg-white p-1.5 rounded-full shadow-lg border border-slate-100 cursor-pointer z-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.8, type: "spring" }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ delay: 3.2, duration: 0.4 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#F43F5E" stroke="#F43F5E" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

// --- Prime Locations Animation (Treasure Map Vibe) ---
export const PrimeLocationsAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-xl border-2 border-slate-100">

            {/* Fun Moving Pattern Background */}
            <motion.div
                className="absolute inset-0 opacity-[0.08]"
                animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                style={{
                    backgroundImage: 'linear-gradient(#94a3b8 2px, transparent 2px), linear-gradient(90deg, #94a3b8 2px, transparent 2px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Magnifier Lens - Big & Glassy */}
            <motion.div
                className="relative z-20 w-64 h-64 bg-white/90 backdrop-blur rounded-full shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
                style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
                {/* Map Streets */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:10px_10px]" />
                <div className="absolute w-[200%] h-4 bg-slate-100 rotate-45 top-1/2 -left-1/2 border-y-2 border-slate-200 border-dashed" />
                <div className="absolute w-[200%] h-4 bg-slate-100 -rotate-12 top-1/2 left-[-20px] border-y-2 border-slate-200 border-dashed" />

                {/* Pin 1: Bounces in */}
                <motion.div
                    className="absolute"
                    style={{ top: '35%', left: '30%' }}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                >
                    <div className="w-8 h-8 -ml-4 -mt-8 text-slate-400 filter drop-shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    </div>
                </motion.div>

                {/* Pin 2: The "HOT" Location */}
                <motion.div
                    className="absolute"
                    style={{ top: '55%', left: '55%' }}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring", bounce: 0.6 }}
                >
                    {/* Radar Pulse */}
                    <motion.div
                        className="absolute -inset-4 bg-red-400 rounded-full opacity-20"
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <div className="w-10 h-10 -ml-5 -mt-10 text-red-500 filter drop-shadow-lg relative overflow-visible">
                        <motion.div animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        </motion.div>
                        <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border border-white">HOT</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Pop-up Location Card */}
            <motion.div
                className="absolute z-30 bottom-4 right-4 bg-white p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-2 border-slate-100 flex items-center gap-3"
                initial={{ scale: 0, y: 50, rotate: 10 }}
                animate={{ scale: 1, y: 0, rotate: -2 }}
                transition={{ delay: 1.8, type: "spring" }}
            >
                <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden relative">
                    <img src="/api/placeholder/48/48" alt="" className="opacity-0" /> {/* Placeholder structure */}
                    <div className="absolute inset-0 bg-indigo-100" />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-800">Colombo 07</div>
                    <div className="text-[10px] font-semibold text-slate-400">Trendy Area 🔥</div>
                </div>
            </motion.div>
        </div>
    )
}

// --- Secure Chat Animation (Bubbly & Expressive) ---
export const SecureChatAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-xl border-2 border-slate-100 p-8">
            {/* Chat Container */}
            <motion.div
                className="w-72 h-80 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="h-16 border-b border-slate-100 flex items-center px-4 bg-white/80 backdrop-blur-md sticky top-0 z-20">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                            <span className="text-lg">👩‍💼</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="ml-3">
                        <div className="text-xs font-bold text-slate-800">Agent Sarah</div>
                        <div className="text-[10px] text-green-500 font-bold">Online now</div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50/50">

                    {/* Buyer (Gray) */}
                    <motion.div
                        className="self-start max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-sm"
                        initial={{ scale: 0, originX: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <div className="text-xs font-medium text-slate-600">Is this unit available? 🤔</div>
                    </motion.div>

                    {/* Agent (Blue - Pop in) */}
                    <motion.div
                        className="self-end max-w-[85%] bg-blue-500 text-white rounded-2xl rounded-tr-none p-3 shadow-md transform origin-right"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
                    >
                        <div className="text-xs font-bold">Yes! When can you visit? ✨</div>
                    </motion.div>

                    {/* Emoji Reaction Float */}
                    <motion.div
                        className="self-end -mt-2 mr-2 text-lg absolute"
                        style={{ right: '2rem', top: '160px' }}
                        initial={{ y: 0, opacity: 0, scale: 0 }}
                        animate={{ y: -20, opacity: [0, 1, 0], scale: 1.5 }}
                        transition={{ delay: 1.8, duration: 1 }}
                    >
                        👍
                    </motion.div>

                    {/* Booking Invite Card */}
                    <motion.div
                        className="self-center w-full bg-white border-2 border-indigo-100 rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm mt-2"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.5, type: "spring", bounce: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Viewing Request</div>
                                <div className="text-xs font-bold text-indigo-900">Tomorrow, 10 AM</div>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

// --- Easy Listing Animation (Gamified) ---
export const EasyListingAnimation = () => {
    return (
        <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center rounded-xl border-2 border-slate-100">
            {/* Main Form Card */}
            <motion.div
                className="w-60 h-80 bg-white rounded-2xl shadow-xl border-2 border-slate-100 flex flex-col items-center pt-8 relative overflow-hidden z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <div className="text-slate-800 font-black mb-6 text-sm tracking-wide">LIST YOUR PROPERTY</div>

                {/* Fun Inputs that fill up */}
                <div className="space-y-3 w-full px-5">
                    {[
                        { label: "📸 Photos", color: "bg-blue-500" },
                        { label: "📍 Location", color: "bg-amber-500" },
                        { label: "💵 Price", color: "bg-green-500" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="w-full h-10 rounded-lg bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center px-3"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                        >
                            {/* Filling Effect */}
                            <motion.div
                                className={`absolute inset-0 ${item.color} opacity-10`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.5 + i * 0.5, duration: 0.5, ease: "circOut" }}
                            />
                            {/* Checkmark */}
                            <motion.div
                                className="absolute right-3 text-green-500"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 2.0 + i * 0.5, type: "spring" }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </motion.div>
                            <span className="relative text-xs font-bold text-slate-600">{item.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Big Button that transforms */}
                <div className="absolute bottom-6 w-full px-6">
                    <motion.div
                        className="w-full h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg cursor-pointer hover:bg-slate-700"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 3.5, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        PUBLISH NOW
                    </motion.div>
                </div>
            </motion.div>

            {/* Victory Stamp 'Live!' */}
            <motion.div
                className="absolute z-30 pointer-events-none"
                initial={{ scale: 5, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: -10 }}
                transition={{ delay: 4.0, type: "spring", stiffness: 300, damping: 12 }}
            >
                <div className="bg-green-500 text-white px-6 py-2 rounded-lg font-black text-2xl shadow-[0_10px_30px_rgba(34,197,94,0.4)] border-4 border-white transform rotate-[-5deg]">
                    LIVE! 🎉
                </div>
            </motion.div>

            {/* Confetti Explosion Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1.5 h-1.5 rounded-full ${['bg-red-400', 'bg-yellow-400', 'bg-blue-400'][i % 3]}`}
                        style={{ left: '50%', top: '50%' }}
                        animate={{
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                            opacity: [1, 0],
                            scale: [0, 1]
                        }}
                        transition={{ delay: 4.0, duration: 1, ease: "easeOut" }}
                    />
                ))}
            </div>
        </div>
    )
}
