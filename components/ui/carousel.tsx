"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface SlideData {
  title: string
  button: string
  src: string
  description?: string
}

interface CarouselProps {
  slides: SlideData[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Carousel({ slides, className, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prevIndex) => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex >= slides.length) return 0
      if (nextIndex < 0) return slides.length - 1
      return nextIndex
    })
  }, [slides.length])

  const goToSlide = (index: number) => {
    const newDirection = index > current ? 1 : -1
    setDirection(newDirection)
    setCurrent(index)
  }

  const startAutoPlay = useCallback(() => {
    if (autoPlay && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        paginate(1)
      }, autoPlayInterval)
    }
  }, [autoPlay, autoPlayInterval, paginate, slides.length])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
  }, [startAutoPlay, stopAutoPlay])

  const handleMouseEnter = () => stopAutoPlay()
  const handleMouseLeave = () => startAutoPlay()

  return (
    <div 
      className={cn("relative h-[600px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-black/5 via-transparent to-black/5 backdrop-blur-sm", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Carousel */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[current].src || "/placeholder.svg"}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            
            {/* Content with Enhanced Typography */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-2xl"
              >
                <h3 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {slides[current].title}
                </h3>
                {slides[current].description && (
                  <p className="mb-6 text-lg text-white/90 md:text-xl max-w-xl">
                    {slides[current].description}
                  </p>
                )}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 hover:border-white/30 text-white transition-all duration-300"
                  >
                    {slides[current].button}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Controls */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={slides.length <= 1}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={slides.length <= 1}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={cn(
              "relative h-2 rounded-full transition-all duration-300",
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            )}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {current === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: autoPlayInterval / 1000,
                  ease: "linear",
                  repeat: autoPlay ? Infinity : 0,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
