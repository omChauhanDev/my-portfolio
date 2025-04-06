"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/app/lib/utils"

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Drop me an email",
    value: "work@omchauhan.in",
    href: "mailto:work@omchauhan.in",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Let's have a call",
    value: "+91 9759498037",
    href: "tel:+919759498037",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    description: "Greater Noida, India",
    value: "201310",
    href: "https://www.google.com/maps?q=28.450603,77.584715",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="min-h-svh pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid gap-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group p-6 rounded-2xl",
                    "border border-border/50",
                    "bg-background/50 backdrop-blur-sm",
                    "transition-all duration-300",
                    "hover:bg-primary/5 hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                      <p className="text-primary mt-1">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-background/50 backdrop-blur-sm",
                      "border border-border/50",
                      "focus:border-primary focus:ring-1 focus:ring-primary",
                      "transition-colors duration-200"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-background/50 backdrop-blur-sm",
                      "border border-border/50",
                      "focus:border-primary focus:ring-1 focus:ring-primary",
                      "transition-colors duration-200"
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "bg-background/50 backdrop-blur-sm",
                    "border border-border/50",
                    "focus:border-primary focus:ring-1 focus:ring-primary",
                    "transition-colors duration-200"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "bg-background/50 backdrop-blur-sm",
                    "border border-border/50",
                    "focus:border-primary focus:ring-1 focus:ring-primary",
                    "transition-colors duration-200",
                    "resize-none"
                  )}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full px-6 py-3 rounded-xl",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90",
                  "flex items-center justify-center gap-2",
                  "transition-colors duration-200",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 