import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          {/* Left Column: Heading matching other sections */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-medium leading-tight lg:sticky lg:top-24">
              Achievements
            </h2>
          </div>

          {/* Right Column: Two clean achievement cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1: HackVerse Hackathon Winner */}
            <motion.article
              initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[rgba(36,35,33,0.14)] p-6 sm:p-8 md:p-9 bg-transparent flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#242321] font-medium leading-snug">
                  <span className="text-[#35604C]">Winner</span> at HackVerse
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#55524D] leading-relaxed font-normal">
                  Winner at HackVerse, a hackathon by KODR Bootcamp &amp; Sheryians Coding School. Solved Problem Statement 01: &apos;From Code to Production&apos; with AirLock, an auto-cicd-cli tool that automates GitHub webhook setup, OAuth, and VPS connection.
                </p>
              </div>
            </motion.article>

            {/* Card 2: AgriSmart Top Project */}
            <motion.article
              initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="border border-[rgba(36,35,33,0.14)] p-6 sm:p-8 md:p-9 bg-transparent flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl text-[#242321] font-medium leading-snug">
                  <span className="text-[#35604C]">Top 1</span> Project: AgriSmart
                </h3>
                <p className="mt-4 text-base sm:text-lg text-[#55524D] leading-relaxed font-normal">
Built an AI-powered farming assistant that lets growers ask questions by voice and receive practical, real-time crop guidance. Developed the complete product end-to-end using React and Node.js, from the user interface to the backend architecture.

Selected as the #1 Final Year Project in our college cohort for innovation and real-world impact.                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
