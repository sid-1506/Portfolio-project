import { useEffect } from 'react'
import Lenis from 'lenis'
import IntroCurtain from './components/IntroCurtain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

export default function App() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#242321] selection:bg-[#35604C] selection:text-[#F7F6F2]">
      {/* Editorial Custom Pointer */}
      <CustomCursor />

      {/* 1. Opening Animation: Full-screen terracotta curtain */}
      <IntroCurtain />

      {/* 2. Top Navigation */}
      <Navbar />

      {/* 3. Main Content Flow: Hero -> Skills -> Experience -> Projects -> About -> Achievements */}
      <main id="main-content">
        <Hero />
        <Skills />
        <Experience />
        <SelectedWork />
        <About />
        <Achievements />
      </main>

      {/* 4. Full-width Dark Contact Footer */}
      <Contact />
    </div>
  )
}
