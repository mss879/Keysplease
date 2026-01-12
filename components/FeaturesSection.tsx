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

import {
    VerifiedTrustAnimation,
    SmartSearchAnimation,
    PrimeLocationsAnimation,
    SecureChatAnimation,
    EasyListingAnimation
} from "@/components/FeaturesAnimations"

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
