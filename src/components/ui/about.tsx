'use client'

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="w-full min-h-[50vh] bg-black text-white py-20 px-8 relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500"
        >
          About Me
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg md:text-xl text-neutral-400 leading-relaxed"
        >
          As a website developer, I believe in building digital experiences that leave a lasting impression. 
          I blend creative design with robust engineering to deliver products that are not only visually 
          stunning but also highly performant and accessible. Every project is an opportunity to push boundaries.
        </motion.p>
      </div>
    </section>
  )
}
