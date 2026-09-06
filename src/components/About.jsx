import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-12% 0px' })

  const rawText =
    'I am a full stack developer who builds websites and web applications for real businesses. I have worked with 10+ clients across automotive, industrial, hospitality and creative fields, with care for clean architecture, fast pages and restrained design.'

  const words = rawText.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0.16, y: 1 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="about"
      className="w-full py-16 md:py-28"
    >
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Heading matching other sections */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-medium leading-tight lg:sticky lg:top-24">
              About
            </h2>
          </div>

          {/* Right Column: Paragraph & Credentials */}
          <div className="lg:col-span-9 max-w-4xl" ref={containerRef}>
            <div className="text-2xl sm:text-3xl md:text-4xl text-[#242321] font-normal leading-[1.35] tracking-normal">
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl text-[#35604C] select-none block mb-2 font-light">
                {'{'}
              </span>

              {/* Word-by-word reveal */}
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="pl-4 sm:pl-6 md:pl-8"
              >
                {words.map((word, index) => {
                  // Highlight only "10+" and "restrained" using green accent
                  const cleanWord = word.replace(/[^a-zA-Z0-9+]/g, '')
                  const is10Plus = cleanWord === '10+' || word.startsWith('10+')
                  const isRestrained = cleanWord === 'restrained' || word.startsWith('restrained')

                  return (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className={`inline-block mr-[0.28em] last:mr-0 ${
                        is10Plus || isRestrained
                          ? 'text-[#35604C] font-medium'
                          : 'text-[#242321]'
                      }`}
                    >
                      {word}
                    </motion.span>
                  )
                })}
              </motion.p>

              <span className="font-mono text-3xl sm:text-4xl md:text-5xl text-[#35604C] select-none block mt-2 font-light">
                {'}'}
              </span>
            </div>

            {/* Two Equal Columns (Education & Practice) */}
            <div className="mt-14 md:mt-20 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {/* Education */}
              <div>
                <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#77736D] mb-2">
                  Education:
                </div>
                <div className="font-heading text-xl md:text-2xl text-[#242321] font-medium">
                  Bachelor of Computer Applications
                </div>
                <div className="font-mono text-[10px] md:text-[11px] text-[#77736D] mt-1.5">
                  BCA · 2023 / 2026
                </div>
              </div>

              {/* Practice */}
              <div>
                <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#77736D] mb-2">
                  Practice:
                </div>
                <div className="font-heading text-xl md:text-2xl text-[#242321] font-medium">
                  Data Structures &amp; Algorithms
                </div>
                <div className="font-mono text-[10px] md:text-[11px] text-[#77736D] mt-1.5">
                  Continuous problem solving
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
