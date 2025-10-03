"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={containerRef}
      className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              index,
              ...(child.props || {}),
            })
          : child
      )}
    
    </motion.div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  index?: number
  background?: string
  icon?: React.ReactNode
  title?: string
  description?: string
}

export function BentoCard({
  children,
  className,
  index = 0,
  background,
  icon,
  title,
  description,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]))
  const scale = useSpring(1)

  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = e.clientX - centerX
    const y = e.clientY - centerY
    
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    scale.set(1.02)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    scale.set(1)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all duration-500",
        "hover:shadow-2xl cursor-pointer",
        className
      )}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: background || `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`,
          filter: "blur(1px)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Icon with glow effect */}
        {icon && (
          <motion.div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/20"
            animate={{
              boxShadow: isHovered 
                ? "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)"
                : "0 4px 20px rgba(0, 0, 0, 0.1)",
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
          </motion.div>
        )}
        
        {/* Content */}
        <motion.div
          className="space-y-4"
          style={{
            transform: "translateZ(20px)",
          }}
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {title && (
            <motion.h3
              className="text-xl font-bold tracking-tight"
              animate={{
                color: isHovered ? "hsl(var(--chart-1))" : "hsl(var(--foreground))",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          )}
          
          {description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          
          {children}
        </motion.div>
      </div>
      
      {/* Floating particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * 300,
                y: Math.random() * 200,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: [null, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: Math.random() * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
      
      {/* Bottom shine effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{
          opacity: isHovered ? 1 : 0,
          scaleX: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

// Enhanced BentoGrid variant with masonry layout
export function BentoGridMasonry({ children, className }: BentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6",
        className
      )}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className="break-inside-avoid mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {React.isValidElement(child)
            ? React.cloneElement(child, {
                index,
                ...(child.props || {}),
              })
            : child}
        </motion.div>
      ))}
    </motion.div>
  )
}
