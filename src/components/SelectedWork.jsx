import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

import patidarImg from '../assets/patidar.png'
import ravariyaImg from '../assets/ravariya.png'
import stutiImg from '../assets/stuti.png'

const projects = [
  {
    number: '01',
    title: 'AirLock',
    category: 'HackVerse / Developer Tool',
    tech: 'Node.js · TypeScript · GitHub API · Webhooks',
    description:
      'A production-ready CLI that securely connects GitHub repositories to a VPS, configures deployment routes, creates webhooks automatically and verifies every incoming event.',
    link: 'https://github.com/sid-1506/AirLock',
    cta: 'VIEW PROJECT ↗',
    isAirLock: true,
  },
  {
    number: '02',
    title: 'Patidar Car Boutique',
    category: 'Automotive / Bhopal',
    tech: 'React · Framer Motion',
    description:
      'A refined brand showcase and inventory portal for a premium multi-brand automobile boutique.',
    link: 'https://patidarcarboutique.vercel.app/',
    cta: 'VIEW PROJECT ↗',
    imageSrc: patidarImg,
    alt: 'Patidar Car Boutique showcase',
  },
  {
    number: '03',
    title: 'Ravariya Green Energy',
    category: 'Industrial / Clean Energy',
    tech: 'Next.js · Tailwind',
    description:
      'Corporate digital presence and product catalog for sustainable biomass and green energy manufacturing.',
    link: 'https://ravariya.vercel.app/',
    cta: 'VIEW PROJECT ↗',
    imageSrc: ravariyaImg,
    alt: 'Ravariya Green Energy platform',
  },
  {
    number: '04',
    title: 'Stuti Girls Hostel',
    category: 'Hospitality / Bhopal',
    tech: 'React · React Router',
    description:
      'Informational portal and room inquiry platform for safe and modern student residential accommodation.',
    link: 'https://stutigirlshostel.vercel.app/',
    cta: 'VIEW PROJECT ↗',
    imageSrc: stutiImg,
    alt: 'Stuti Girls Hostel showcase',
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="w-full pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="w-full px-6 md:px-12">
        {/* Section Header */}
        <div className="pb-10 md:pb-16">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#35604C] block mb-2">
            Selected work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#242321]">
            Projects.
          </h2>
        </div>

        {/* Clean 2-Column Grid on Desktop (Exactly 2 equal cards per row, 4 projects total, 0 empty slots), 1-Column on Mobile/Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Refined subtle scroll parallax
  const frameY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : ['-1.5%', '1.5%']
  )

  return (
    <article ref={containerRef} className="flex flex-col w-full">
      {/* Visual Preview Container - Completely free of border, outline, frame, background wrapper, and padding */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/card block w-full border-0 border-none outline-none"
      >
        <motion.div
          style={{ y: frameY }}
          className="relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center bg-transparent border-0 border-none outline-none shadow-none p-0"
        >
          {project.isAirLock ? (
            /* Minimal dark-green typography preview for AirLock */
            <div className="w-full h-full bg-[#35604C] p-6 sm:p-8 flex flex-col justify-between text-[#F7F6F2] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.015] select-none border-0 border-none outline-none shadow-none">
              <div className="flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#F7F6F2]/75">
                <span>AirLock CLI</span>
                <span>v1.0.0 · Production</span>
              </div>
              <div className="my-auto py-3">
                <div className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#F7F6F2] font-medium tracking-tight">
                  AirLock
                </div>
                <div className="font-mono text-xs sm:text-[13px] text-[#F7F6F2]/80 mt-1.5 flex items-center gap-1.5">
                  <span className="text-[#F7F6F2]/50">$</span> airlock deploy --secure --vps
                </div>
              </div>
              <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#F7F6F2]/60">
                <span>GitHub API · Webhooks</span>
                <span>TypeScript</span>
              </div>
            </div>
          ) : (
            /* Screenshot sitting directly in project area with zero frame, border, background strip, or padding */
            <img
              src={project.imageSrc}
              alt={project.alt}
              loading="lazy"
              className="w-full h-full object-contain object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.015] border-0 border-none outline-none shadow-none p-0 bg-transparent"
            />
          )}
        </motion.div>
      </a>

      {/* Metadata & Information */}
      <div className="mt-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#77736D] mb-1.5">
            {project.number} / {project.category}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl text-[#242321] font-medium">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#35604C] transition-colors"
            >
              {project.title}
            </a>
          </h3>
          <p className="font-mono text-[10px] md:text-[11px] text-[#77736D] mt-1.5">
            {project.tech}
          </p>
          <p className="text-xs sm:text-[13px] text-[#55524D] leading-relaxed mt-2.5">
            {project.description}
          </p>
        </div>

        <div className="mt-4 pt-1">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#242321]"
          >
            <span className="underline decoration-1 underline-offset-4 decoration-[rgba(36,35,33,0.3)] group-hover/link:decoration-[#35604C] group-hover/link:text-[#35604C] transition-colors">
              {project.cta}
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}
