"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export interface TimelineEntry {
  title: string
  content: React.ReactNode
  date?: string
  time?: string
  location?: string
  icon?: React.ReactNode
  category?: string
}

interface TimelineProps {
  data: TimelineEntry[]
  className?: string
}

export function Timeline({ data, className }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lineProgress, setLineProgress] = useState(0)
  const scrollYProgress = useMotionValue(0)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const items = ref.current.querySelectorAll("[data-timeline-item]")
      const containerRect = ref.current.getBoundingClientRect()
      const containerTop = containerRect.top + window.scrollY
      const containerHeight = containerRect.height
      const viewportCenter = window.scrollY + window.innerHeight / 2

      // Calculate overall progress for the line animation
      const progress = Math.max(0, Math.min(1, (viewportCenter - containerTop) / containerHeight))
      setLineProgress(progress)
      scrollYProgress.set(progress)

      // Find active item
      let newActiveIndex = 0
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2
        
        if (itemCenter <= window.innerHeight / 2) {
          newActiveIndex = index
        }
      })
      
      setActiveIndex(newActiveIndex)
    }

    const throttledScroll = throttle(handleScroll, 16) // ~60fps
    window.addEventListener("scroll", throttledScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <div ref={ref} className={cn("relative max-w-7xl mx-auto", className)}>
      {/* Enhanced Timeline line with gradient */}
      <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2">
        <motion.div 
          className="w-full bg-gradient-to-b from-chart-1 via-chart-2 to-chart-3 rounded-full"
          style={{
            height: `${lineProgress * 100}%`,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Floating progress indicator */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <div className="h-32 w-1 bg-border rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-chart-1 to-chart-3 rounded-full"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>
          <div className="absolute -right-12 top-0 space-y-2 text-xs text-muted-foreground">
            {data.map((_, index) => (
              <motion.div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full border transition-all duration-300",
                  activeIndex >= index 
                    ? "bg-chart-1 border-chart-1 scale-125" 
                    : "bg-background border-border scale-100"
                )}
                style={{ marginTop: `${(index / (data.length - 1)) * 112}px` }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline items */}
      <div className="space-y-24 py-12">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isActive={activeIndex >= index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

interface TimelineItemProps {
  item: TimelineEntry
  index: number
  isActive: boolean
  isEven: boolean
}

function TimelineItem({ item, index, isActive, isEven }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={itemRef}
      data-timeline-item
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Enhanced Timeline dot with glow effect */}
      <motion.div
        className={cn(
          "absolute left-8 top-4 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background transition-all duration-500 md:left-1/2",
          "shadow-lg z-10"
        )}
        animate={{
          backgroundColor: isActive ? "hsl(var(--chart-1))" : "hsl(var(--muted))",
          scale: isActive ? 1.2 : 1,
          boxShadow: isActive 
            ? "0 0 20px hsl(var(--chart-1)), 0 0 40px hsl(var(--chart-1))/50" 
            : "0 4px 12px hsl(var(--muted))/30",
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.3 }}
      >
        {item.icon && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0.7 }}
          >
            {item.icon}
          </motion.div>
        )}
      </motion.div>

      {/* Content card */}
      <div className={cn(
        "ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12",
        isEven ? "md:text-right" : "md:text-left"
      )}>
        <motion.div
          className={cn(
            "space-y-4",
            isEven ? "md:col-start-1" : "md:col-start-2"
          )}
          animate={{
            x: isActive ? 0 : isEven ? -20 : 20,
            opacity: isActive ? 1 : 0.6,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="space-y-3">
            {item.category && (
              <Badge
                variant="outline"
                className={cn(
                  "border-chart-1/30 bg-chart-1/10 text-chart-1",
                  isEven ? "md:ml-auto" : "md:mr-auto"
                )}
              >
                {item.category}
              </Badge>
            )}
            
            <motion.h3 
              className="text-2xl font-bold tracking-tight md:text-3xl"
              animate={{
                color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
              }}
            >
              {item.title}
            </motion.h3>
          </div>

          {/* Metadata */}
          {(item.date || item.time || item.location) && (
            <div className={cn(
              "flex flex-wrap gap-4 text-sm text-muted-foreground",
              isEven ? "md:justify-end" : "md:justify-start"
            )}>
              {item.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              )}
              {item.time && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{item.time}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          className={cn(
            "mt-6 md:mt-0",
            isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className={cn(
              "relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500",
              "hover:shadow-lg hover:shadow-chart-1/10",
              isActive 
                ? "border-chart-1/30 bg-card shadow-md" 
                : "border-border bg-card/30"
            )}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Background gradient */}
            <div className={cn(
              "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
              "bg-gradient-to-br from-chart-1/5 via-transparent to-chart-3/5",
              isActive && "opacity-100"
            )} />
            
            <div className="relative z-10">
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Utility function for throttling scroll events
function throttle<T extends (...args: any[]) => any>(func: T, delay: number): T {
  let timeoutId: NodeJS.Timeout | undefined
  let lastExecTime = 0
  return ((...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }) as T
}
