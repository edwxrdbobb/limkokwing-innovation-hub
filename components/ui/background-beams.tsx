"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundBeamsProps {
  className?: string
  pathColor?: string
  gradientColors?: string[]
  interactive?: boolean
}

export const BackgroundBeams = React.memo(({ 
  className, 
  pathColor = "hsl(var(--chart-1))", 
  gradientColors = ["hsl(var(--chart-1))", "hsl(var(--chart-3))", "hsl(var(--chart-2))"],
  interactive = true 
}: BackgroundBeamsProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const basePaths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  ]

  const additionalPaths = [
    "M100 -100C200 0 300 100 400 0C500 -100 600 0 700 100",
    "M-100 200C0 300 100 400 200 300C300 200 400 300 500 400",
    "M200 -50C300 50 400 150 500 50C600 -50 700 50 800 150",
  ]

  const allPaths = [...basePaths, ...additionalPaths]

  useEffect(() => {
    if (!interactive) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const svg = svgRef.current
    if (svg) {
      svg.addEventListener('mousemove', handleMouseMove)
      svg.addEventListener('mouseenter', handleMouseEnter)
      svg.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        svg.removeEventListener('mousemove', handleMouseMove)
        svg.removeEventListener('mouseenter', handleMouseEnter)
        svg.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [interactive])

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}>
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: interactive ? 'auto' : 'none' }}
      >
        {allPaths.map((path, index) => {
          const isMainPath = index < basePaths.length
          const delay = isMainPath ? index * 0.3 : (index - basePaths.length) * 0.5 + 1
          const duration = isMainPath ? 3 + (index * 0.2) : 2.5
          const opacity = isMainPath ? 0.3 : 0.15
          
          return (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#gradient-${index})`}
              strokeWidth={isMainPath ? "2" : "1.5"}
              strokeOpacity={opacity}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovering && interactive ? opacity * 1.5 : opacity 
              }}
              transition={{
                pathLength: {
                  duration: duration,
                  delay: delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 4,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.5,
                  ease: "easeInOut",
                }
              }}
              style={{
                filter: interactive && isHovering 
                  ? `drop-shadow(0 0 6px ${gradientColors[index % gradientColors.length]})` 
                  : undefined
              }}
            />
          )
        })}

        {/* Animated Particles */}
        {interactive && Array.from({ length: 8 }).map((_, index) => (
          <motion.circle
            key={`particle-${index}`}
            r="2"
            fill={gradientColors[index % gradientColors.length]}
            initial={{ 
              cx: Math.random() * 696, 
              cy: Math.random() * 316, 
              opacity: 0,
              scale: 0
            }}
            animate={{
              cx: mousePosition.x * 696,
              cy: mousePosition.y * 316,
              opacity: isHovering ? [0, 0.8, 0] : [0, 0.3, 0],
              scale: isHovering ? [0, 1.5, 0] : [0, 1, 0],
            }}
            transition={{
              duration: 2 + (index * 0.2),
              delay: index * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        <defs>
          {allPaths.map((_, index) => {
            const color1 = gradientColors[index % gradientColors.length]
            const color2 = gradientColors[(index + 1) % gradientColors.length]
            const color3 = gradientColors[(index + 2) % gradientColors.length]
            
            return (
              <motion.linearGradient 
                key={`gradient-${index}`} 
                id={`gradient-${index}`} 
                x1="0%" 
                y1="0%" 
                x2="100%" 
                y2="0%"
                animate={interactive && isHovering ? {
                  x1: [`${mousePosition.x * 50}%`, `${(mousePosition.x * 50) + 50}%`],
                  x2: [`${(mousePosition.x * 50) + 50}%`, `${(mousePosition.x * 50) + 100}%`],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <stop offset="0%" stopColor={color1} stopOpacity="0" />
                <stop offset="30%" stopColor={color2} stopOpacity="0.4" />
                <stop offset="50%" stopColor={color1} stopOpacity="1" />
                <stop offset="70%" stopColor={color3} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color2} stopOpacity="0" />
              </motion.linearGradient>
            )
          })}

          {/* Radial gradients for glow effects */}
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={pathColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={pathColor} stopOpacity="0" />
          </radialGradient>

          {/* Filter for enhanced glow */}
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Additional ambient effects */}
      {interactive && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: isHovering 
              ? `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${gradientColors[0]}15 0%, transparent 50%)`
              : undefined,
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
})

BackgroundBeams.displayName = "BackgroundBeams"
