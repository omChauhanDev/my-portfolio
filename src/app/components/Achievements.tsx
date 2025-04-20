"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: <Image src="/GSoC-icon.svg" alt="GSoC" width={32} height={32} />,
    title: "GSoC 2024",
    description: "Selected for Google Summer of Code 2024",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Academic Excellence",
    description: "Current CGPA: 9.8",
  },
  // {
  //   icon: <Code className="w-10 h-10" />,
  //   title: "Problem Solving",
  //   description: " Solved 400+ DSA Problems",
  // },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground inline-block relative group">
            Major Achievements
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 h-full flex flex-col justify-between">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center">{achievement.title}</h3>
                  <p className="text-base text-muted-foreground text-center">{achievement.description}</p>
                </div>
                <motion.div
                  className="w-full h-1 bg-primary/20 mt-4 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

