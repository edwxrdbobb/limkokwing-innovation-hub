"use client"

import { useEffect, useRef, useState } from "react"

interface StatsCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function StatsCounter({ end, duration = 2000, suffix = "", prefix = "", className = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = countRef.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = Date.now()
            const animate = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / duration, 1)
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              setCount(Math.floor(easeOutQuart * end))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            animate()
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={countRef} className={`text-4xl font-bold tabular-nums ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
