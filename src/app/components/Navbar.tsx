"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import { cn } from "@/app/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  // { name: "Projects", href: "/projects" },
  // { name: "Experience", href: "/experience" },
  // { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4")}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "relative flex items-center justify-between",
            "rounded-full backdrop-blur-md",
            "border border-border/40",
            "bg-background/60 dark:bg-background/40",
            "shadow-[0_0_1rem_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_rgba(255,255,255,0.1)]",
            "px-4 py-2 md:px-6",
            "transition-all duration-300",
          )}
        >
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <span className="relative">
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </span>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "rounded-full p-2.5",
              "bg-primary/10 hover:bg-primary/20",
              "text-primary",
              "transition-colors duration-200",
            )}
            aria-label="Toggle theme"
          >
          {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : null}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-full right-0 left-0 mt-2",
              "rounded-2xl border border-border/40",
              "bg-background/95 dark:bg-background/95",
              "backdrop-blur-xl",
              "p-6",
              "md:hidden",
              "shadow-[0_0_1rem_rgba(0,0,0,0.1)] dark:shadow-[0_0_1rem_rgba(255,255,255,0.1)]",
              isOpen ? "block" : "hidden",
            )}
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}

