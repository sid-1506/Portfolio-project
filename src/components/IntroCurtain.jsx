import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Authentic Apple "hello" continuous monoline cursive path
// Extracted and normalized from Apple vector source (SF-Hello)
// One unbroken single stroke: tall looping 'h', 'e', double looping 'll', closed 'o' with outward flick.
const APPLE_HELLO_PATH =
  'M 10.0 95.5 C 24.8 87.3 38.3 76.7 53.6 58.7 C 64.0 46.4 69.6 32.3 69.9 22.7 C 70.0 15.5 66.5 10.0 60.0 10.0 C 52.8 10.0 48.3 15.5 45.5 28.0 C 42.4 41.8 40.1 57.6 34.4 108.3 L 35.0 103.3 C 37.9 77.5 49.1 58.7 63.3 58.7 C 71.9 58.7 77.3 65.5 75.8 75.2 C 74.9 81.0 73.9 86.8 72.7 93.6 C 71.4 102.2 75.3 108.8 87.1 108.8 C 104.3 108.8 123.1 99.2 132.7 84.4 C 136.0 79.4 137.3 74.8 137.5 70.4 C 137.6 62.4 133.1 56.4 125.1 56.4 C 114.9 56.4 107.2 67.9 107.2 82.6 C 107.2 98.3 115.7 109.4 133.9 109.4 C 158.5 109.4 185.8 79.8 198.3 46.8 C 201.9 37.4 203.2 28.8 203.2 22.7 C 203.2 15.6 200.9 10.1 194.5 10.1 C 188.3 10.1 184.1 14.9 180.4 22.6 C 176.0 31.5 172.8 44.4 171.5 58.9 C 168.1 95.4 175.6 108.8 193.4 108.8 C 214.9 108.8 238.8 78.8 251.0 46.7 C 254.5 37.4 255.9 28.8 255.9 22.7 C 255.9 15.6 253.6 10.1 247.2 10.1 C 240.9 10.1 236.8 14.9 233.1 22.6 C 228.7 31.5 225.5 44.4 224.1 58.9 C 220.8 95.4 228.3 108.8 244.1 108.8 C 260.0 108.8 268.6 95.0 273.7 80.4 C 278.8 65.9 285.1 57.0 298.1 57.0 C 308.9 57.0 317.5 65.0 317.5 80.0 C 317.5 96.7 306.7 109.2 293.0 109.4 C 281.0 109.5 273.1 99.8 273.9 85.1 C 274.8 68.8 284.7 57.0 297.6 57.0 C 305.1 57.0 311.3 60.3 316.3 63.9 C 329.6 73.6 339.9 67.6 343.9 58.0'

export default function IntroCurtain() {
  const [isMounted, setIsMounted] = useState(true)
  const [stage, setStage] = useState('display') // 'display' -> 'text-fade' -> 'panels-lift' -> 'done'
  const reduceMotion = useReducedMotion()

  const panels = [0, 1, 2, 3, 4] // 5 vertical columns

  useEffect(() => {
    if (reduceMotion) {
      // For reduced motion: hold 1.4s, then fade out whole overlay in 0.3s
      const timer = setTimeout(() => {
        setStage('fade-all')
      }, 1400)
      const cleanupTimer = setTimeout(() => {
        setIsMounted(false)
      }, 1750)
      return () => {
        clearTimeout(timer)
        clearTimeout(cleanupTimer)
      }
    }

    // 1. Handwriting starts at 0.2s and draws for exactly 4.0s (finishes at 4.2s)
    // 2. SVG & bottom text begin fading out at 4.25s, right before curtain panels lift
    const textFadeTimer = setTimeout(() => {
      setStage('text-fade')
    }, 4250)

    // 3. Panels begin lifting at 4.45s (staggered left-to-right by 0.08s, duration 0.9s)
    const panelsLiftTimer = setTimeout(() => {
      setStage('panels-lift')
    }, 4450)

    // 4. Animation completes: 4.45s + (4 * 0.08s) + 0.9s = 5.67s. Remove from DOM at 5.8s
    const doneTimer = setTimeout(() => {
      setIsMounted(false)
    }, 5800)

    return () => {
      clearTimeout(textFadeTimer)
      clearTimeout(panelsLiftTimer)
      clearTimeout(doneTimer)
    }
  }, [reduceMotion])

  if (!isMounted) return null

  // If reduced motion is requested
  if (reduceMotion) {
    return (
      <motion.div
        key="reduced-curtain"
        initial={{ opacity: 1 }}
        animate={stage === 'fade-all' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 bg-[#35604C] text-[#F7F6F2] ${
          stage === 'fade-all' ? 'pointer-events-none' : 'pointer-events-auto'
        } select-none`}
      >
        <div className="w-full h-8" />

        {/* Static Apple "hello" SVG at full opacity for reduced motion */}
        <div className="flex items-center justify-center my-auto">
          <svg
            viewBox="0 0 354 120"
            className="w-[clamp(110px,22vw,220px)] h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="hello"
          >
            <path
              d={APPLE_HELLO_PATH}
              fill="none"
              stroke="#F7F6F2"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-2">
          <div className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            Krishnakant Rout
          </div>
          <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-[#F7F6F2]/80">
            PORTFOLIO / 2026
          </div>
        </div>
      </motion.div>
    )
  }

  const isPanelsLifting = stage === 'panels-lift'
  const isTextFading = stage === 'text-fade' || stage === 'panels-lift'

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none ${
        isPanelsLifting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-hidden="true"
    >
      {/* 5 Vertical Curtain Panels (Staggered upward exit) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {panels.map((index) => (
          <motion.div
            key={index}
            initial={{ y: '0%' }}
            animate={isPanelsLifting ? { y: '-100%' } : { y: '0%' }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.76, 0, 0.24, 1], // Smooth, weighted, no bounce
            }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${index * 20}%`,
              width: 'calc(20% + 1px)', // 1px overlap prevents sub-pixel white seams/flashes
              backgroundColor: '#35604C',
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Centered inline SVG Apple-style "hello" lettering */}
      <motion.div
        animate={
          isTextFading
            ? { opacity: 0, y: -10 }
            : { opacity: 1, y: 0 }
        }
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none p-6"
      >
        <svg
          viewBox="0 0 354 120"
          className="w-[clamp(110px,22vw,220px)] h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="hello"
        >
          <motion.path
            d={APPLE_HELLO_PATH}
            fill="none"
            stroke="#F7F6F2"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              delay: 0.2,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </motion.div>

      {/* Bottom Metadata Layer: Fades out just before panels lift */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={
          isTextFading
            ? { opacity: 0, y: -12 }
            : { opacity: 1, y: 0 }
        }
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 pointer-events-none"
      >
        <div className="w-full flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-2 text-[#F7F6F2]">
          {/* Bottom-left: Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          >
            Krishnakant Rout
          </motion.div>

          {/* Bottom-right: Monospace metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-[#F7F6F2]/80"
          >
            PORTFOLIO / 2026
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
