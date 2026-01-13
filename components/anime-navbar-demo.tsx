"use client"

import * as React from "react"
import { Home, ShoppingBag, Key, Phone } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "/",
    href: "/",
    icon: Home,
  },
  {
    name: "Buy",
    url: "/buy",
    href: "/buy",
    icon: ShoppingBag,
  },
  {
    name: "Rent",
    url: "/rent",
    href: "/rent",
    icon: Key,
  },
  {
    name: "Contact",
    url: "#",
    href: "#",
    icon: Phone,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
