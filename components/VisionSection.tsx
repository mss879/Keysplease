"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export function VisionSection() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="w-full py-12 md:py-16 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-xl bg-black">

                    {/* Video Background */}
                    <video
                        ref={videoRef}
                        src="https://scroll-supply.s3.us-east-005.backblazeb2.com/Video.mp4"
                        preload="auto"
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-5xl leading-[1.1] tracking-tight"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {[
                                "Step", "inside", "a", "world", "where", "exceptional",
                                "design", "and", "timeless", "luxury", "meet."
                            ].map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mx-[0.2em]"
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>

                    {/* Play/Pause Button */}
                    <div className="absolute bottom-8 right-8 z-20">
                        <button
                            onClick={togglePlay}
                            className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-all hover:scale-105 active:scale-95 group"
                            aria-label={isPlaying ? "Pause Video" : "Play Video"}
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 fill-white" />
                            ) : (
                                <Play className="w-6 h-6 fill-white ml-1" />
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
