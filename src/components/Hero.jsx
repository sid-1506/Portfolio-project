import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import portraitImg from '../assets/portrait.jpeg'

export default function Hero() {
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Restrained hero parallax motion
  const nameY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 32])
  const introY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -20])
  // Portrait moves slightly slower than text
  const portraitY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 12])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-0 lg:min-h-[92vh] px-6 md:px-12 flex flex-col justify-start lg:justify-between pt-6 md:pt-8 pb-8 md:pb-6 overflow-hidden"
    >
      {/* Top Hero Row: On mobile, Name (Left) + Compact Portrait (Right). On desktop, Name only */}
      <div className="w-full flex items-center justify-between gap-3 sm:gap-6">
        <motion.div style={{ y: nameY }} className="flex-1 min-w-0">
          <h1 className="font-heading text-[clamp(2.35rem,7vw,8.5rem)] text-[#242321] hover:text-[#35604C] transition-colors duration-300 md:whitespace-nowrap leading-[0.92] cursor-pointer">
            <span className="block md:inline">Krishnakant</span>{' '}
            <span className="block md:inline">Rout</span>
          </h1>
        </motion.div>

        {/* Mobile-only compact portrait photo to the right of the name (38% width, natural ratio, 18px rounded) */}
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          style={{ y: portraitY }}
          className="block lg:hidden shrink-0 w-[38vw] max-w-[165px] min-w-[125px] select-none"
        >
          <img
            src={portraitImg}
            alt="Krishnakant Rout - Full Stack Developer"
            style={{ borderRadius: '18px' }}
            className="w-full h-auto aspect-[3/4] object-cover object-[center_top] rounded-2xl border-0 border-none outline-none shadow-none p-0"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Main Composition: Introduction (Left) + Rectangular Portrait on Desktop only */}
      <div className="w-full mt-7 sm:mt-8 lg:mt-0 lg:my-auto lg:pt-8 flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6 lg:gap-12">
        {/* Left Side: Editorial Introduction (~62% on desktop) */}
        <motion.div
          style={{ y: introY }}
          className="w-full lg:w-[62%] flex flex-col justify-center text-left py-0 lg:py-8"
        >
          <div className="text-left">
            <span className="font-mono text-base sm:text-lg md:text-xl text-[#77736D] select-none block mb-1">
              console.log(
            </span>
            <p className="font-normal text-[#242321] text-2xl sm:text-3xl md:text-[2.65rem] lg:text-[3.15rem] leading-[1.22] tracking-normal pl-4 sm:pl-6 md:pl-8">
              &quot;Full Stack Developer building and shipping{' '}
              <span className="text-[#35604C]">production ready</span> web applications.&quot;
            </p>
            <span className="font-mono text-base sm:text-lg md:text-xl text-[#77736D] select-none block mt-1">
              )
            </span>
          </div>

          {/* Tech stack line */}
          <div className="mt-4 sm:mt-5 font-mono text-xs sm:text-sm md:text-base tracking-wide text-[#77736D]">
            React · Node.js · Express · MongoDB
          </div>

          {/* Micro-statement */}
          <div className="mt-5 sm:mt-6 lg:mt-10 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#77736D]">
            <span>10+ REAL-WORLD CLIENTS</span>
          </div>
        </motion.div>

        {/* Right Side: Desktop-only Rectangular Portrait (Hidden on mobile since photo is beside the name) */}
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
          style={{ y: portraitY }}
          className="hidden lg:flex lg:w-[35%] justify-end items-end select-none"
        >
          <img
            src={portraitImg}
            alt="Krishnakant Rout - Full Stack Developer"
            style={{ borderRadius: '18px' }}
            className="w-auto h-[500px] max-h-[60vh] object-cover object-top rounded-2xl border-0 border-none outline-none shadow-none p-0"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Invisible bottom spacer to balance vertical space on desktop */}
      <div className="hidden lg:block h-1" />
    </section>
  )
}
