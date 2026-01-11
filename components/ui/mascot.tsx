"use client"

import React from "react"
import { motion } from "framer-motion"

export function Mascot({ hovered }: { hovered: boolean }) {
    return (
        <div className="relative w-16 h-16">
            {/* Head */}
            <motion.div
                className="absolute w-12 h-12 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-sm z-10"
                animate={
                    hovered ? {
                        y: [-2, 2, -2],
                        rotate: [0, -5, 5, 0],
                        transition: {
                            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 0.5, ease: "easeInOut" }
                        }
                    } : {
                        y: [0, -3, 0],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }
                }
            >
                {/* Cap */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-amber-400 rounded-t-full border-b-2 border-amber-500/20 z-20" />
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-16 h-3 bg-amber-400 rounded-full z-10 shadow-sm" />

                {/* Eyes */}
                <motion.div
                    className="absolute w-1.5 h-2 bg-slate-800 rounded-full"
                    style={{ left: '28%', top: '55%' }}
                    animate={
                        hovered ? {
                            scaleY: [1, 0.2, 1],
                            transition: { duration: 0.2, times: [0, 0.5, 1] }
                        } : {}
                    }
                />
                <motion.div
                    className="absolute w-1.5 h-2 bg-slate-800 rounded-full"
                    style={{ right: '28%', top: '55%' }}
                    animate={
                        hovered ? {
                            scaleY: [1, 0.2, 1],
                            transition: { duration: 0.2, times: [0, 0.5, 1] }
                        } : {}
                    }
                />

                {/* Cheeks */}
                <div className="absolute w-2 h-1 bg-pink-300/50 rounded-full left-[20%] top-[66%]" />
                <div className="absolute w-2 h-1 bg-pink-300/50 rounded-full right-[20%] top-[66%]" />

                {/* Mouth */}
                <motion.div
                    className="absolute w-4 h-2 border-b-2 border-slate-800 rounded-full"
                    style={{ left: '33%', top: '70%' }}
                    animate={
                        hovered ? { scaleY: 1.5, y: -1 } : { scaleY: 1, y: 0 }
                    }
                />
            </motion.div>

            {/* Left Hand */}
            <motion.div
                className="absolute bottom-1 left-0 w-4 h-4 bg-white rounded-full z-20 shadow-sm border border-slate-100"
                animate={
                    hovered ? {
                        y: [0, -4, 0],
                        x: -2,
                        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                    } : {
                        y: [0, 2, 0],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }
                }
            />

            {/* Right Hand holding Key */}
            <motion.div
                className="absolute bottom-1 right-0 w-4 h-4 bg-white rounded-full z-20 shadow-sm border border-slate-100 flex items-center justify-center"
                animate={
                    hovered ? {
                        y: [0, -6, 0],
                        rotate: [0, 15, -10, 0],
                        x: 2,
                        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                    } : {
                        y: [0, 2, 0],
                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }
                }
            >
                {/* Key Icon - Simple SVG */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-4 -right-2 w-8 h-8 drop-shadow-sm rotate-45"
                >
                    <circle cx="9" cy="9" r="4" stroke="#F59E0B" strokeWidth="2.5" fill="#FEF3C7" />
                    <path d="M12.5 12.5L19 19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M16 19L17 20" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M18 17L19 18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </motion.div>
        </div>
    )
}
