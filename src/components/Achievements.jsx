import { motion, useReducedMotion } from 'framer-motion'

export default function Achievements() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="achievements" className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          {/* Left Column: Heading matching other sections */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={reduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-medium leading-tight lg:sticky lg:top-24"
            >
              <span className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: '105%' },
                    visible: {
                      y: '0%',
                      transition: {
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  Achievements
                </motion.span>
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Three clean achievement cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-6">
            {/* Card 1: HackVerse Hackathon Winner */}
            <motion.article
              initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[rgba(36,35,33,0.14)] p-6 sm:p-7 lg:p-6 xl:p-7 bg-transparent flex flex-col justify-start h-full"
            >
              <div className="w-full flex flex-col justify-start">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.2rem] xl:text-[1.35rem] text-[#242321] font-medium leading-snug min-h-[3.25rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem] xl:min-h-[4.25rem]">
                  <span className="text-[#35604C]">Winner</span> at HackVerse
                </h3>
                <p className="mt-3.5 sm:mt-4 text-[14.5px] sm:text-base lg:text-[14px] xl:text-[15px] text-[#55524D] leading-relaxed font-normal">
                  Won HackVerse, a hackathon by KODR Bootcamp &amp; Sheryians Coding School. Solved Problem Statement 01: &apos;From Code to Production&apos; with AirLock, a CLI tool automating GitHub webhook setup, OAuth, and VPS deployments.
                </p>
              </div>
            </motion.article>

            {/* Card 2: AgriSmart Top Project */}
            <motion.article
              initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="border border-[rgba(36,35,33,0.14)] p-6 sm:p-7 lg:p-6 xl:p-7 bg-transparent flex flex-col justify-start h-full"
            >
              <div className="w-full flex flex-col justify-start">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.2rem] xl:text-[1.35rem] text-[#242321] font-medium leading-snug min-h-[3.25rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem] xl:min-h-[4.25rem]">
                  <span className="text-[#35604C]">Top 1</span> Project: AgriSmart
                </h3>
                <p className="mt-3.5 sm:mt-4 text-[14.5px] sm:text-base lg:text-[14px] xl:text-[15px] text-[#55524D] leading-relaxed font-normal">
                  Built an AI-powered farming assistant with React and Node.js that provides real-time crop guidance through voice interaction. Selected as the #1 Final Year Project in our college cohort for innovation and real-world impact.
                </p>
              </div>
            </motion.article>

            {/* Card 3: Claude Anthropic Fable 5.1 Hackathon */}
            <motion.article
              initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="border border-[rgba(36,35,33,0.14)] p-6 sm:p-7 lg:p-6 xl:p-7 bg-transparent flex flex-col justify-start h-full"
            >
              <div className="w-full flex flex-col justify-start">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.2rem] xl:text-[1.35rem] text-[#242321] font-medium leading-snug min-h-[3.25rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem] xl:min-h-[4.25rem]">
                  <span className="text-[#35604C]">TOP 15</span> at Claude Fable 5.1 Hackathon
                </h3>
                <p className="mt-3.5 sm:mt-4 text-[14.5px] sm:text-base lg:text-[14px] xl:text-[15px] text-[#55524D] leading-relaxed font-normal">
                  Made it to the top 15 among 40 to 50 teams at the Claude Anthropic Fable 5.1 Hackathon in Bhopal. Built and pitched a working prototype under tight hackathon deadlines, with a focus on practical execution and clean code.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
