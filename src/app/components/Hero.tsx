"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, MapPin, Hand, Mail, Sparkles } from "lucide-react"

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    href: "https://www.github.com/omChauhanDev",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/omchauhandev",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:omchauhan64408@omchauhan.com",
    label: "Email",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    href: "https://www.google.com/maps?q=28.450603,77.584715",
    label: "Location",
  },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 transition-colors duration-500 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl mt-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto text-left space-y-2 lg:space-y-6"
          >
            <div className="flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground">
              <span>Hello there</span>
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatDelay: 1 }}
              >
                <Hand className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <span>I am</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Om Chauhan
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-medium">
              Full Stack Developer & Open Source Contributor
            </p>

            <div className="flex items-center gap-2 text-xl sm:text-2xl text-muted-foreground">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span>Building the future with AI</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#timeline"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out transform hover:scale-105"
              >
                Explore My Journey
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-input text-base font-medium rounded-full text-foreground bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out transform hover:scale-105"
              >
                View Projects
              </Link>
            </div> */}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-3xl opacity-20 animate-pulse" />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-primary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-background via-background/80 to-background/40 backdrop-blur-sm" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/profilePic1.png"
                  alt="Om Chauhan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

