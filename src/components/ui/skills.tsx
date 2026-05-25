'use client'

import { motion } from "framer-motion"
import { SkillsGlobe } from "@/components/ui/skills-globe"

export function SkillsSection() {
  return (
    <section id="skills" className="w-full min-h-screen bg-black text-white py-20 px-8 relative overflow-hidden border-t border-neutral-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-neutral-500 text-center mb-12 text-base"
        >
          Drag the globe — watch my skills spin around the world 🌍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-[680px]"
        >
          <SkillsGlobe />
        </motion.div>
      </div>
    </section>
  )
}
