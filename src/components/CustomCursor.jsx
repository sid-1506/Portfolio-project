import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches || reduceMotion) {
      return
    }

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      } else {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible, reduceMotion])

  if (reduceMotion || !isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <svg
        width="14.5"
        height="24.65"
        viewBox="0 0 17 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path
          d="M 0.75 0.75 L 0.75 21.85 L 5.25 17.35 L 9.55 27.65 L 13.25 25.85 L 9.15 16.05 L 15.75 16.05 Z"
          fill="#35604C"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ paintOrder: 'stroke fill' }}
        />
      </svg>
    </div>
  )
}
