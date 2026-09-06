import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Left Column: Section Heading matching the Projects. style */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-medium leading-tight lg:sticky lg:top-24">
              Experience
            </h2>
          </div>

          {/* Right Column: Clean Editorial Code Layout with per-entry blur-to-unblur reveal */}
          <div className="lg:col-span-9">
            <div className="w-full">
              {/* Header declaration */}
              <motion.div
                initial={{ opacity: 0.1, filter: 'blur(8px)', y: 10 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#242321] flex items-baseline"
              >
                <span className="text-[#35604C] font-medium">const</span>{' '}
                <span className="text-[#35604C] font-medium mx-1.5">experience</span>{' '}
                <span className="text-[#77736D] mr-1.5">=</span>{' '}
                <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                  [
                </span>
              </motion.div>

              {/* Indented experience list with left border line */}
              <div className="border-l border-[rgba(36,35,33,0.18)] pl-4 sm:pl-6 md:pl-8 my-3 sm:my-4 space-y-7 sm:space-y-9 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#242321]">
                {/* Item 1: Full Stack Developer Trainee - Animates independently */}
                <motion.div
                  initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <div className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                    {'{'}
                  </div>

                  <div className="border-l border-[rgba(36,35,33,0.12)] pl-4 sm:pl-6 space-y-2">
                    <div>
                      <span className="text-[#77736D]">role: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Full Stack Developer Trainee</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">org: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Sheryians Coding School</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">type: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Apprenticeship</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">duration: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Jul 2026 — Present</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">location: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Bhopal, MP, India · On-site</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <div className="text-[#77736D]">highlights: [</div>
                      <div className="border-l border-[rgba(36,35,33,0.12)] pl-4 sm:pl-6 my-1.5 space-y-1.5">
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Selected for the 4-month KODR Full Stack Development Bootcamp</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Building with React, TypeScript, backend development and DevOps</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Collaborating on real-world apps via project-based learning</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                      </div>
                      <div className="text-[#77736D]">],</div>
                    </div>
                  </div>

                  <div className="flex items-baseline">
                    <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                      {'}'}
                    </span>
                    <span className="text-[#77736D]">,</span>
                  </div>
                </motion.div>

                {/* Item 2: Full Stack Developer - Animates independently */}
                <motion.div
                  initial={{ opacity: 0.1, filter: 'blur(10px)', y: 18 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px', amount: 0.2 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2"
                >
                  <div className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                    {'{'}
                  </div>

                  <div className="border-l border-[rgba(36,35,33,0.12)] pl-4 sm:pl-6 space-y-2">
                    <div>
                      <span className="text-[#77736D]">role: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Full Stack Developer</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">org: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Freelance · Self-Employed</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">type: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Freelance</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">duration: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Jul 2024 — Jun 2026</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <span className="text-[#77736D]">location: </span>
                      <span className="text-[#77736D]">&quot;</span>
                      <span className="text-[#242321]">Mumbai, India · Remote</span>
                      <span className="text-[#77736D]">&quot;,</span>
                    </div>

                    <div>
                      <div className="text-[#77736D]">highlights: [</div>
                      <div className="border-l border-[rgba(36,35,33,0.12)] pl-4 sm:pl-6 my-1.5 space-y-1.5">
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Designed and shipped production websites for 10+ real-world clients</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Built end-to-end apps using React, Node.js, Express, MongoDB</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                        <div>
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">Owned full lifecycle — design, development, deployment and maintenance</span>
                          <span className="text-[#77736D]">&quot;,</span>
                        </div>
                      </div>
                      <div className="text-[#77736D]">],</div>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                      <span className="text-[#77736D]">skills:</span>{' '}
                      <span className="text-[#77736D]">[</span>
                      {['React', 'Node.js', 'MongoDB'].map((skill, sIdx, sArr) => (
                        <span key={skill} className="inline-flex items-baseline">
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">{skill}</span>
                          <span className="text-[#77736D]">&quot;</span>
                          {sIdx < sArr.length - 1 && <span className="text-[#77736D] mr-1">,</span>}
                        </span>
                      ))}
                      <span className="text-[#77736D]">],</span>
                    </div>
                  </div>

                  <div className="flex items-baseline">
                    <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                      {'}'}
                    </span>
                    <span className="text-[#77736D]">,</span>
                  </div>
                </motion.div>
              </div>

              {/* Closing bracket */}
              <motion.div
                initial={{ opacity: 0.1, filter: 'blur(6px)', y: 8 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl font-normal leading-relaxed flex items-baseline"
              >
                <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                  ]
                </span>
                <span className="text-[#77736D]">;</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
