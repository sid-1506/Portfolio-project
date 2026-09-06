import { motion } from 'framer-motion'

const skillCategories = [
  {
    key: 'frontend',
    items: ['JavaScript', 'React', 'Redux', 'Next.js', 'Framer Motion'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    key: 'tools',
    items: ['Postman', 'React Router'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Left: Section Heading matching the Projects. style */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#242321] font-medium leading-tight lg:sticky lg:top-24">
              Skills
            </h2>
          </div>

          {/* Right: Clean Editorial Code Layout with per-entry blur-to-unblur reveal */}
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
                <span className="text-[#35604C] font-medium mx-1.5">skills</span>{' '}
                <span className="text-[#77736D] mr-1.5">=</span>{' '}
                <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                  {'{'}
                </span>
              </motion.div>

              {/* Indented body with clean editorial left border line */}
              <div className="border-l border-[rgba(36,35,33,0.18)] pl-4 sm:pl-6 md:pl-8 my-2.5 sm:my-3 space-y-3.5 sm:space-y-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#242321]">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0.1, filter: 'blur(8px)', y: 12 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: true, margin: '-6% 0px', amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1"
                  >
                    <span className="text-[#77736D]">{category.key}:</span>{' '}
                    <span className="text-[#77736D]">[</span>
                    {category.items.map((item, idx, arr) => (
                      <span key={item} className="inline-flex items-baseline">
                        <span className="text-[#77736D]">&quot;</span>
                        <span className="text-[#242321]">{item}</span>
                        <span className="text-[#77736D]">&quot;</span>
                        {idx < arr.length - 1 && <span className="text-[#77736D] mr-1">,</span>}
                      </span>
                    ))}
                    <span className="text-[#77736D]">],</span>
                  </motion.div>
                ))}
              </div>

              {/* Closing brace */}
              <motion.div
                initial={{ opacity: 0.1, filter: 'blur(6px)', y: 8 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl font-normal leading-relaxed flex items-baseline"
              >
                <span className="font-mono text-lg sm:text-xl md:text-2xl font-light text-[#35604C] select-none">
                  {'}'}
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
