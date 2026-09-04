import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Capabilities() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' })

  const technologies = [
    'JavaScript',
    'React',
    'React Router',
    'Redux',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Framer Motion',
    'Postman',
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Left: Small Label */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#77736D]">
              Capabilities / 10
            </span>
          </div>

          {/* Right: Large Flowing Technology List */}
          <div className="lg:col-span-9" ref={containerRef}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap items-baseline gap-y-3 md:gap-y-4 text-2xl sm:text-3xl md:text-4xl text-[#242321] font-light leading-snug"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="inline-flex items-baseline"
                >
                  <span>{tech}</span>
                  {index < technologies.length - 1 && (
                    <span className="text-[#35604C] font-normal mx-2.5 sm:mx-4 select-none">
                      /
                    </span>
                  )}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
