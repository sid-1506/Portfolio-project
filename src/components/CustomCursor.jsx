import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isDarkBg, setIsDarkBg] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches || reduceMotion) {
      return
    }

    const updateCursorState = (target) => {
      if (!target) return
      const inDark = Boolean(target.closest('footer') || target.closest('#contact'))
      setIsDarkBg(inDark)

      const interactive = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('h1') ||
        target.closest('h2') ||
        target.closest('h3') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
      setIsHovered(interactive)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
      updateCursorState(e.target)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handlePointerOver = (e) => {
      updateCursorState(e.target)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handlePointerOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handlePointerOver)
    }
  }, [isVisible, reduceMotion])

  if (reduceMotion || !isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
      animate={{
        width: isHovered ? 32 : 16,
        height: isHovered ? 32 : 16,
        backgroundColor: 'transparent',
        border: isDarkBg ? '1.5px solid #FFFFFF' : '1.5px solid #35604C',
      }}
      transition={{
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  )
}
