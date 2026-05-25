'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { ExternalLink, Code } from "lucide-react"

const placeholderProjects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A placeholder project description highlighting the main features and technologies used. This will be updated later.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Another placeholder project description to showcase the grid layout. Replace this with your actual amazing work.",
    tech: ["Next.js", "Framer Motion", "Node.js"],
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Your third project goes here. Explain what problem it solves and how you built it from the ground up.",
    tech: ["Vue.js", "Express", "MongoDB"],
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full min-h-screen bg-black text-white py-24 px-8 relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
            Selected Projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Here are a few things I've built recently. More projects will be added over time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full bg-neutral-900/40 border-neutral-800 hover:border-neutral-600 transition-all duration-300 group overflow-hidden">
                <div className="h-48 bg-neutral-800/50 flex items-center justify-center border-b border-neutral-800 group-hover:bg-neutral-800/80 transition-colors">
                  <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Image Placeholder</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-neutral-100">{project.title}</CardTitle>
                    <div className="flex gap-3 text-neutral-400">
                      <a href="#" className="hover:text-white transition-colors"><Code className="w-5 h-5" /></a>
                      <a href="#" className="hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
                    </div>
                  </div>
                  <CardDescription className="text-neutral-400 leading-relaxed min-h-[4rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
