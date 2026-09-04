export default function Contact() {
  return (
    <footer id="contact" className="w-full bg-[#292724] text-[#F7F6F2] pt-20 md:pt-32 pb-14 md:pb-20">
      <div className="w-full px-6 md:px-12">
        {/* Top micro-label */}
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#F7F6F2]/60 mb-8 md:mb-12">
          Have a project in mind?
        </div>

        {/* Large Statement (Two Lines, Oversized Typography) */}
        <div className="font-heading text-[clamp(2.75rem,7.5vw,7.2rem)] font-medium leading-[1.02] tracking-normal">
          <div>Let’s make</div>
          <div className="text-[#35604C]">something useful.</div>
        </div>

        {/* Thin Semi-transparent Divider & Three Columns */}
        <div className="mt-16 md:mt-28 pt-10 md:pt-14 border-t border-[#F7F6F2]/15 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start font-mono text-[11px] md:text-xs">
          {/* Column 1: Email */}
          <div>
            <div className="text-[#F7F6F2]/40 uppercase tracking-[0.12em] mb-2">
              Direct Contact
            </div>
            <a
              href="mailto:krishnakantrout1506@gmail.com"
              className="text-[#F7F6F2] hover:text-[#35604C] transition-colors duration-200 underline decoration-1 underline-offset-4 decoration-[#F7F6F2]/30 hover:decoration-[#35604C]"
            >
              krishnakantrout1506@gmail.com
            </a>
          </div>

          {/* Column 2: Social Links */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[#F7F6F2]/40 uppercase tracking-[0.12em] mb-1">
              Platforms
            </div>
            <a
              href="https://www.linkedin.com/in/krishnakant-rout-867720292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F6F2] hover:text-[#35604C] transition-colors duration-200 inline-flex items-center gap-1"
            >
              <span>LinkedIn ↗</span>
            </a>
            <a
              href="https://github.com/sid-1506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F6F2] hover:text-[#35604C] transition-colors duration-200 inline-flex items-center gap-1"
            >
              <span>GitHub ↗</span>
            </a>
          </div>

          {/* Column 3: Location & Copyright */}
          <div className="flex flex-col gap-1 md:text-right">
            <div className="text-[#F7F6F2]/40 uppercase tracking-[0.12em] mb-1">
              Location
            </div>
            <div className="text-[#F7F6F2]">Mumbai, India</div>
            <div className="text-[#F7F6F2]/60 mt-1">© 2026</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
