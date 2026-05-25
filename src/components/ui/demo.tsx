'use client'

import { useEffect, useRef } from "react"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SplineSceneBasic() {
  const textRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading: slide up + fade out as user scrolls down
      gsap.to(headingRef.current, {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Animate paragraph: slide up slightly slower
      gsap.to(paraRef.current, {
        y: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="w-full h-screen bg-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full max-w-7xl mx-auto">
        {/* Left content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center"
        >
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight"
          >
            Muhammad Shaheer <br />
            <span className="text-3xl md:text-5xl text-neutral-300">Website Developer</span>
          </h1>
          <p ref={paraRef} className="mt-4 text-neutral-400 max-w-lg text-lg">
            I am a passionate Website Developer specializing in building modern, interactive,
            and highly responsive web applications. With a strong eye for design and a focus
            on performance, I turn complex problems into elegant, user-friendly solutions.
          </p>
        </motion.div>

        {/* Right content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="flex-1 relative hidden md:block"
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

