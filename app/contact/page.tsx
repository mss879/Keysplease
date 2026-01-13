"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Building2,
    MessagesSquare,
    Rocket,
    CheckCircle,
    ChevronDown,
    Plus,
    Minus
} from "lucide-react"

// Form Component
function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")

        // Simulate API call
        setTimeout(() => {
            setStatus("success")
        }, 1500)
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl mx-auto text-center"
            >
                <div className="w-20 h-20 bg-[#c89e36]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#c89e36]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                    Thank you for reaching out. A member of our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-[#c89e36] font-semibold hover:text-[#b08b2f] transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 md:p-10 shadow-2xl max-w-xl mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:border-[#c89e36] focus:ring-4 focus:ring-[#c89e36]/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:border-[#c89e36] focus:ring-4 focus:ring-[#c89e36]/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                        required
                        placeholder="Tell us about your property goals..."
                        rows={4}
                        className="w-full p-4 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:border-[#c89e36] focus:ring-4 focus:ring-[#c89e36]/10 transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">How did you hear about us?</label>
                    <div className="relative">
                        <select className="w-full h-12 px-4 rounded-xl bg-white/50 border border-slate-200 focus:bg-white focus:border-[#c89e36] focus:ring-4 focus:ring-[#c89e36]/10 transition-all outline-none text-slate-900 appearance-none cursor-pointer">
                            <option value="" disabled selected>Select an option</option>
                            <option value="social">Social Media</option>
                            <option value="friend">Friend or Family</option>
                            <option value="search">Search Engine</option>
                            <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-14 bg-[#c89e36] text-white font-bold rounded-xl hover:bg-[#b08b2f] hover:shadow-lg hover:shadow-[#c89e36]/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "submitting" ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : "Submit"}
                </button>
            </form>
        </motion.div>
    )
}

// FAQ Component
const faqs = [
    {
        question: "How quickly can you sell my property?",
        answer: "While every property is unique, our average time to sell is significantly faster than the market average due to our targeted marketing and verified buyer network."
    },
    {
        question: "What areas do you cover?",
        answer: "We primarily operate in major metropolitan areas and exclusive luxury enclaves. Contact us to check if we service your specific location."
    },
    {
        question: "Do you handle property management?",
        answer: "Yes, we offer comprehensive property management services for landlords, including tenant screening, maintenance, and rent collection."
    },
    {
        question: "Can I schedule a private viewing?",
        answer: "Absolutely. We arrange private, secure viewings for all our listings to ensure privacy and convenience for both buyers and sellers."
    }
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className="border-b border-slate-200 last:border-0"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full py-6 flex items-center justify-between text-left group"
                    >
                        <span className="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                            {faq.question}
                        </span>
                        <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                            {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                    </button>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <p className="pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">

            {/* Hero Section with Gradient */}
            <section className="relative pt-48 pb-32 md:pb-48 px-4">

                {/* Logo - Matching Homepage Position */}
                <div className="absolute top-4 left-6 md:top-8 md:left-12 z-20">
                    <img src="/keysplease-logo.png" alt="Keys Please" className="h-16 w-auto md:h-24" />
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600" />

                {/* Decorative Blur */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 mt-16 md:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6"
                        >
                            Let's make your dream home a reality.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-blue-100 font-medium"
                        >
                            Reach out to explore our luxury homes or start managing your property portfolio with confidence.
                        </motion.p>
                    </div>

                    <div className="relative z-20 -mb-52 md:-mb-64">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Spacer for Form Overlap (Reduced height to move icons higher) */}
            <div className="h-32 md:h-40" />

            {/* Features Grid */}
            <section className="py-12 md:py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Building2,
                                title: "Personalized Guidance",
                                desc: "Get expert advice tailored to your personal property needs."
                            },
                            {
                                icon: Rocket,
                                title: "Quick Response Time",
                                desc: "We'll respond promptly to your inquiry within 24 hours."
                            },
                            {
                                icon: MessagesSquare,
                                title: "Custom Options",
                                desc: "Learn how we can create your bespoke property strategy."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="flex flex-col items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#c89e36]/10 transition-all duration-300 group text-center"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#c89e36]/10 text-[#c89e36] group-hover:bg-[#c89e36] group-hover:text-white transition-colors duration-300">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#c89e36] transition-colors">{feature.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="py-20 md:py-32 bg-white px-4">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* FAQ Header */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1a2333] tracking-tighter leading-tight mb-6">
                            Frequently <br />
                            asked questions.
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Answers to your questions, every step of the way.
                        </p>
                    </div>

                    {/* FAQ Q&A */}
                    <div className="lg:col-span-7">
                        <FAQ />
                    </div>
                </div>
            </section>

        </main>
    )
}
