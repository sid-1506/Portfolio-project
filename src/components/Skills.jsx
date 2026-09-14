import { motion, useReducedMotion } from 'framer-motion'

const skillCategories = [
  {
    key: 'Languages',
    items: ['C++', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    key: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'React Router',
      'Redux Toolkit',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Framer Motion',
      'Axios',
      'Responsive Design',
      'Figma',
    ],
  },
  {
    key: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices API Design', 'MongoDB', 'Mongoose'],
  },
  {
    key: 'DevOps',
    items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'VPS Deployment', 'Webhooks', 'Vercel'],
  },
  {
    key: 'Tools',
    items: ['Postman', 'Debugging', 'Cross browser Testing', 'Performance Optimization'],
  },
]

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
          {/* Left: Section Heading matching the Projects. style */}
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
                  Skills
                </motion.span>
              </span>
            </motion.h2>
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
                    <span className="text-[#77736D] whitespace-nowrap">{category.key}: [</span>
                    {category.items.map((item, idx, arr) => {
                      const isLast = idx === arr.length - 1
                      return (
                        <span key={item} className="inline-flex items-baseline whitespace-nowrap">
                          <span className="text-[#77736D]">&quot;</span>
                          <span className="text-[#242321]">{item}</span>
                          <span className="text-[#77736D]">&quot;</span>
                          {isLast ? (
                            <span className="text-[#77736D]">],</span>
                          ) : (
                            <span className="text-[#77736D]">,</span>
                          )}
                        </span>
                      )
                    })}
                    {category.items.length === 0 && <span className="text-[#77736D]">],</span>}
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
