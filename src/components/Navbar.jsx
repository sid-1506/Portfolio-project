export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F6F2] border-b border-[rgba(36,35,33,0.16)]">
      <div className="w-full px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">
        {/* Left: Role */}
        <a
          href="#"
          className="font-medium text-base md:text-lg text-[#242321] hover:text-[#35604C] transition-colors duration-200"
        >
          Full stack developer
        </a>

        {/* Desktop Navigation: All Sections */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#77736D]">
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, 'skills')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => handleScroll(e, 'experience')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#work"
            onClick={(e) => handleScroll(e, 'work')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#achievements"
            onClick={(e) => handleScroll(e, 'achievements')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Achievements
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Navigation: Untouched 3 items */}
        <nav className="flex md:hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77736D]">
          <a
            href="#work"
            onClick={(e) => handleScroll(e, 'work')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="hover:text-[#242321] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
