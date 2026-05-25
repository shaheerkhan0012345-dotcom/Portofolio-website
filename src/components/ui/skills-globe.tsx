'use client'

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Skills spread evenly across the globe — no two are close to each other
const skills = [
  { name: "JavaScript", lat: 68,   lon: -30,   color: "#F7DF1E", bg: "#2a2200",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M8 24.5l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.4 1.4-1.8V14h2.8v8.8c0 3-1.7 4.3-4.2 4.3-2.3 0-3.6-1.2-4-2.6zM18 24.2l2.3-1.3c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2l-2.2 1.4c-.4-.8-1-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.2 1 3.4 2 3.4 4.1 0 2.4-1.8 3.6-4.3 3.6-2.4 0-4-1.2-4.7-2.8z" fill="#000"/></svg>,
  },
  { name: "React",      lat: 42,   lon: -95,   color: "#61DAFB", bg: "#001e2b",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/></svg>,
  },
  { name: "Next.js",   lat: 18,   lon: -105,  color: "#ffffff", bg: "#111111",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><circle cx="16" cy="16" r="14" fill="#000"/><path d="M10 22V10l14 16h-3.5L10 13.5" fill="white"/><rect x="19" y="10" width="3" height="9" fill="white"/></svg>,
  },
  { name: "TypeScript", lat: -12,  lon: -68,   color: "#3178C6", bg: "#001428",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><rect width="32" height="32" rx="4" fill="#3178C6"/><path d="M7 16h10M12 11v10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 20c0 1.1.9 1.5 1.8 1.5 1 0 1.7-.5 1.7-1.5 0-.9-.6-1.3-1.8-1.7-1.2-.4-2.7-1-2.7-2.8 0-1.7 1.3-2.5 3-2.5 1.6 0 2.8.8 2.8 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>,
  },
  { name: "Node.js",   lat: -50,  lon: -68,   color: "#68A063", bg: "#0a1a0a",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M16 3L4 10v12l12 7 12-7V10z" fill="#68A063"/><path d="M16 3L4 10l12 7 12-7z" fill="#85C46C"/><text x="10" y="20" fontSize="9" fill="white" fontWeight="bold">JS</text></svg>,
  },
  { name: "Tailwind",  lat: 5,    lon: 22,    color: "#38BDF8", bg: "#001520",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M6 13c1.3-5 4.7-7.5 9.3-6.7-1.3 5.2 1.3 8.7 6.7 9.3-1.3 5.2-4.7 7.5-9.3 6.7 1.3-5.2-1.3-8.7-6.7-9.3z" stroke="#38BDF8" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M16 19.7c1.3-5 4.7-7.5 9.3-6.7" stroke="#38BDF8" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
  },
  { name: "HTML",      lat: 52,   lon: 20,    color: "#E34F26", bg: "#1a0800",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M5 4l2.5 22L16 28l8.5-2L27 4z" fill="#E34F26"/><path d="M16 26l6.9-1.9 2.1-17H16z" fill="#EF652A"/><path d="M16 13h-4.5l-.3-3H16V7H7.5l.9 9H16zm0 8.2l-3.8-1-.2-2.8H9.2l.4 5 6.4 1.8z" fill="white"/><path d="M16 13v3h4.1l-.4 4.3-3.7 1v3.5l6.4-1.8 1-12H16z" fill="white"/></svg>,
  },
  { name: "CSS",       lat: 32,   lon: 88,    color: "#264DE4", bg: "#00051a",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M5 4l2.5 22L16 28l8.5-2L27 4z" fill="#264DE4"/><path d="M16 26l6.9-1.9 2.1-17H16z" fill="#2965F1"/><path d="M16 13h-4.6L11.1 10H16V7H8l.8 9H16zm0 8.2l-3.8-1-.3-3H9.1l.5 5.5 6.4 1.8z" fill="white"/><path d="M16 13v3h4.1l-.4 4.3-3.7 1v3.5l6.4-1.8 1-12H16z" fill="white"/></svg>,
  },
  { name: "Git",       lat: -22,  lon: 132,   color: "#F05032", bg: "#1a0500",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M29.5 14.5L17.5 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7.1a2 2 0 11-1.7 0V11.7a2 2 0 01-1.1-2.6L11.5 6 2.5 15a1.7 1.7 0 000 2.4l12 12a1.7 1.7 0 002.4 0l12.6-12.6a1.7 1.7 0 000-2.3z" fill="#F05032"/></svg>,
  },
  { name: "Figma",     lat: 62,   lon: 128,   color: "#A259FF", bg: "#0f0015",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><rect x="8" y="2" width="8" height="8" rx="4" fill="#F24E1E"/><rect x="16" y="2" width="8" height="8" rx="4" fill="#FF7262"/><rect x="8" y="10" width="8" height="8" rx="4" fill="#A259FF"/><rect x="8" y="18" width="8" height="8" rx="4" fill="#0ACF83"/><circle cx="20" cy="14" r="4" fill="#1ABCFE"/></svg>,
  },
  { name: "Framer",    lat: -42,  lon: 172,   color: "#BB4FFF", bg: "#0d0015",
    icon: <svg viewBox="0 0 32 32" width="30" height="30"><path d="M6 4h20L16 16 6 4z" fill="#BB4FFF"/><path d="M6 16h10l10 12H6V16z" fill="#9F3FD9"/><path d="M16 16l10-12v12H16z" fill="#CC66FF"/></svg>,
  },
]

function latLonTo3D(lat: number, lon: number): [number, number, number] {
  const latR = (lat * Math.PI) / 180
  const lonR = (lon * Math.PI) / 180
  return [
    Math.cos(latR) * Math.cos(lonR),
    Math.sin(latR),
    Math.cos(latR) * Math.sin(lonR),
  ]
}

function projectPoint(
  lat: number, lon: number,
  phi: number, theta: number,
  size: number
): { x: number; y: number; visible: boolean; depth: number } {
  const [x, y, z] = latLonTo3D(lat, lon)
  const x1 = x * Math.cos(phi) + z * Math.sin(phi)
  const z1 = -x * Math.sin(phi) + z * Math.cos(phi)
  const y2 = y * Math.cos(theta) - z1 * Math.sin(theta)
  const z2 = y * Math.sin(theta) + z1 * Math.cos(theta)
  const r = size / 2
  return {
    x: r + x1 * r * 0.93,
    y: r - y2 * r * 0.93,
    visible: z2 > 0.08,
    depth: z2,
  }
}

export function SkillsGlobe() {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const overlayRef   = useRef<HTMLDivElement>(null)
  const sectionRef   = useRef<HTMLDivElement>(null)
  const phiRef       = useRef(0)
  const thetaRef     = useRef(0.2)
  const dragPhiRef   = useRef(0)
  const dragThetaRef = useRef(0)
  const offsetPhiRef = useRef(0)
  const offsetThetaRef = useRef(0)
  const pointerRef   = useRef<{ x: number; y: number } | null>(null)
  const isPausedRef  = useRef(false)
  const rAFRef       = useRef<number>(0)
  const sizeRef      = useRef(0)

  // ── GSAP entrance animation ──────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Globe canvas: pop in from scale 0.6
      gsap.from(canvasRef.current, {
        scale: 0.6, opacity: 0, duration: 1.4,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      })

      // Icon badges: stagger float-in from below
      gsap.from(".skill-badge", {
        y: 30, opacity: 0, scale: 0.5,
        duration: 0.6,
        stagger: 0.07,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      })

      // Continuous gentle pulse on icon glow
      gsap.to(".skill-icon-wrap", {
        boxShadow: (i: number) => {
          const c = skills[i % skills.length].color
          return `0 0 22px ${c}88, 0 2px 10px #0009`
        },
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.2, repeat: -1 },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ── rAF overlay projection loop ──────────────────────────────────────────
  const updateOverlays = useCallback(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const size = sizeRef.current
    if (size === 0) return

    const totalPhi   = phiRef.current + offsetPhiRef.current + dragPhiRef.current
    const totalTheta = thetaRef.current + offsetThetaRef.current + dragThetaRef.current

    Array.from(overlay.children).forEach((child, i) => {
      const el = child as HTMLElement
      const { x, y, visible, depth } = projectPoint(skills[i].lat, skills[i].lon, totalPhi, totalTheta, size)
      const scale = visible ? 0.6 + depth * 0.5 : 0
      el.style.transform = `translate(${x - 44}px, ${y - 44}px) scale(${scale})`
      el.style.opacity   = visible ? String(0.3 + depth * 0.7) : "0"
      el.style.zIndex    = visible ? String(Math.floor(depth * 10)) : "0"
    })

    rAFRef.current = requestAnimationFrame(updateOverlays)
  }, [])

  // ── Pointer events ────────────────────────────────────────────────────────
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerRef.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerRef.current) {
      offsetPhiRef.current   += dragPhiRef.current
      offsetThetaRef.current += dragThetaRef.current
      dragPhiRef.current = 0
      dragThetaRef.current = 0
    }
    pointerRef.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!pointerRef.current) return
      dragPhiRef.current   = (e.clientX - pointerRef.current.x) / 250
      dragThetaRef.current = (e.clientY - pointerRef.current.y) / 800
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerup",   handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup",   handlePointerUp)
    }
  }, [handlePointerUp])

  // ── Globe init ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let globe: ReturnType<typeof createGlobe> | null = null
    let animId: number

    function init() {
      const width = canvas!.offsetWidth
      if (!width || globe) return
      sizeRef.current = width

      globe = createGlobe(canvas!, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width, height: width,
        phi: 0, theta: 0.2,
        dark: 1, diffuse: 1.6,
        mapSamples: 16000, mapBrightness: 8,
        baseColor:   [0.12, 0.12, 0.18],
        markerColor: [0.9, 0.9, 1.0],
        glowColor:   [0.08, 0.08, 0.2],
        markers: skills.map(s => ({ location: [s.lat, s.lon] as [number, number], size: 0.04 })),
        arcs: [],
        arcColor: [0.3, 0.85, 0.95],
        arcWidth: 0.5, arcHeight: 0.25, opacity: 0.7,
      })

      function animate() {
        if (!isPausedRef.current) phiRef.current += 0.004
        globe!.update({
          phi:   phiRef.current + offsetPhiRef.current + dragPhiRef.current,
          theta: thetaRef.current + offsetThetaRef.current + dragThetaRef.current,
        })
        animId = requestAnimationFrame(animate)
      }
      animate()
      rAFRef.current = requestAnimationFrame(updateOverlays)
      setTimeout(() => { if (canvas) canvas.style.opacity = "1" })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver(entries => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init() }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animId) cancelAnimationFrame(animId)
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current)
      if (globe) globe.destroy()
    }
  }, [updateOverlays])

  return (
    <div ref={sectionRef} className="relative aspect-square w-full select-none">
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%",
          cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%", touchAction: "none",
        }}
      />

      {/* Skill badges projected onto globe surface */}
      <div ref={overlayRef} className="absolute inset-0 pointer-events-none">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-badge"
            style={{ position: "absolute", top: 0, left: 0, willChange: "transform, opacity" }}
          >
            <div className="flex flex-col items-center gap-1.5">
              {/* Icon square */}
              <div
                className="skill-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: skill.bg,
                  border: `2px solid ${skill.color}70`,
                  boxShadow: `0 0 14px ${skill.color}55, 0 2px 10px #000a`,
                }}
              >
                {skill.icon}
              </div>
              {/* Name label */}
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                style={{
                  background: `${skill.bg}ee`,
                  color: skill.color,
                  border: `1px solid ${skill.color}50`,
                }}
              >
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
