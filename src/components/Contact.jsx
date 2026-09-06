export default function Contact() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#35604C] text-white pt-16 pb-14 md:pt-20 md:pb-16 lg:py-10 xl:py-12"
    >
      <div className="w-full px-6 md:px-12">
        {/* Main Row: Single-line headline on left, two distributed contact columns on right on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 xl:gap-14">
          {/* Left: Single-line Headline */}
          <div className="lg:w-[42%] xl:w-[44%] shrink-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.75rem] font-medium leading-[1.12] tracking-tight text-white whitespace-normal lg:whitespace-nowrap">
              Let’s make something useful.
            </h2>
          </div>

          {/* Right: Two Evenly Distributed Contact Columns (Direct Contact & Platforms) */}
          <div className="w-full lg:w-[58%] xl:w-[56%] flex flex-col sm:flex-row sm:items-start justify-between gap-8 sm:gap-10 font-mono lg:pl-10 xl:pl-16">
            {/* Column 1: Direct Contact (Shifted slightly right from the headline) */}
            <div className="lg:pl-4 xl:pl-8">
              <div className="text-white/70 uppercase tracking-[0.12em] text-xs sm:text-[13px] mb-2">
                Direct Contact
              </div>
              <a
                href="mailto:krishnakantrout1506@gmail.com"
                className="text-sm sm:text-[14px] md:text-[15px] text-white hover:text-white/80 transition-colors duration-200 underline decoration-1 underline-offset-4 decoration-white/40 hover:decoration-white break-all sm:break-normal"
              >
                krishnakantrout1506@gmail.com
              </a>
            </div>

            {/* Column 2: Platforms (Given generous rightward spacing across the footer width) */}
            <div className="flex flex-col gap-2 sm:text-right lg:pr-2">
              <div className="text-white/70 uppercase tracking-[0.12em] text-xs sm:text-[13px] mb-1">
                Platforms
              </div>
              <a
                href="https://www.linkedin.com/in/krishnakant-rout-867720292/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-[14px] md:text-[15px] text-white hover:text-white/80 transition-colors duration-200 inline-flex items-center gap-1 sm:justify-end"
              >
                <span>LinkedIn ↗</span>
              </a>
              <a
                href="https://github.com/sid-1506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-[14px] md:text-[15px] text-white hover:text-white/80 transition-colors duration-200 inline-flex items-center gap-1 sm:justify-end"
              >
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
