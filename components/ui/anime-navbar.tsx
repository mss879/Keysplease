"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Mascot } from "./mascot"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [autoHover, setAutoHover] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setAutoHover(prev => !prev)
      }, 2000)
      return () => clearInterval(interval)
    } else {
      setAutoHover(false)
    }
  }, [isMobile])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = items.find(item => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  if (!mounted) return null

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="fixed top-16 right-6 z-[10001] md:hidden">
        <div className="relative">
          {/* Mascot sitting on top */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none scale-90 origin-bottom z-20"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Mascot hovered={autoHover} />
          </motion.div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-black/80 backdrop-blur-md p-3 rounded-full text-amber-400 border border-amber-500/20 shadow-lg relative z-10"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Logo */}
      <div className="fixed top-9 left-3 z-[10000] md:hidden">
        <Link href="/">
          <img
            src="/keysplease-logo-mobile.png"
            alt="Keys Please"
            className="h-20 w-auto drop-shadow-lg"
            onError={(e) => {
              // Fallback if mobile logo doesn't exist, use standard
              e.currentTarget.src = "/keysplease-logo.png"
            }}
          />
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-[#0a0f18] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {/* Mascot removed here as it is now on the button */}

            <div className="flex flex-col items-center gap-6 mt-10">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => {
                      setActiveTab(item.name)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-4 text-2xl font-bold transition-all duration-300",
                      isActive ? "text-amber-400" : "text-slate-400"
                    )}
                  >
                    <Icon size={28} />
                    {item.name}
                  </Link>
                )
              })}

              <div className="w-16 h-px bg-amber-500/20 my-4" />

              <Link
                href="/sign-in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold px-8 py-3 rounded-full bg-amber-400 text-black"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-9 right-0 z-[9999]">
        <div className="flex justify-end pr-8 pt-6">
          <motion.div
            className="flex items-center gap-3 bg-black/50 border border-amber-500/20 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              const isHovered = hoveredTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name)
                  }}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "relative cursor-pointer text-base font-semibold px-6 py-3 rounded-full transition-all duration-300",
                    "text-amber-100/70 hover:text-amber-300",
                    isActive && "text-amber-400"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md" />
                      <div className="absolute inset-[-4px] bg-amber-500/15 rounded-full blur-xl" />
                      <div className="absolute inset-[-8px] bg-amber-500/10 rounded-full blur-2xl" />
                      <div className="absolute inset-[-12px] bg-amber-500/5 rounded-full blur-3xl" />

                      <div
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0"
                        style={{
                          animation: "shine 3s ease-in-out infinite"
                        }}
                      />
                    </motion.div>
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>

                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-amber-500/10 rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.div
                      layoutId="anime-mascot"
                      className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Mascot hovered={!!hoveredTab} />
                    </motion.div>
                  )}
                </Link>
              )
            })}

            <div className="w-px h-6 bg-amber-500/20 mx-1" />

            <Link
              href="/sign-in"
              className="relative cursor-pointer text-base font-semibold px-6 py-2 rounded-full transition-all duration-300 text-black bg-amber-400 hover:bg-amber-300"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
