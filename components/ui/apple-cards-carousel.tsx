"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export interface EventCard {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees?: number
  image: string
  category: string
  status: "upcoming" | "past" | "ongoing"
}

interface AppleCardsCarouselProps {
  cards: EventCard[]
  className?: string
}

export function AppleCardsCarousel({ cards, className }: AppleCardsCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden py-8", className)}
    >
      <motion.div
        className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cards.map((card, index) => (
          <EventCardComponent
            key={card.id}
            card={card}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </motion.div>
    </div>
  )
}

interface EventCardComponentProps {
  card: EventCard
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

function EventCardComponent({
  card,
  index,
  hoveredIndex,
  setHoveredIndex,
}: EventCardComponentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const distance = useMotionValue(0)
  const realTimeDistance = useSpring(distance, {
    stiffness: 300,
    damping: 40,
  })

  const scaleFromCenter = useTransform(realTimeDistance, [-300, 0, 300], [0.8, 1, 0.8])
  const opacityFromCenter = useTransform(realTimeDistance, [-300, 0, 300], [0.5, 1, 0.5])

  useEffect(() => {
    const updateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const screenCenterX = window.innerWidth / 2
        distance.set(centerX - screenCenterX)
      }
    }

    const handleScroll = () => updateDistance()
    const handleResize = () => updateDistance()

    updateDistance()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [distance])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "ongoing":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "past":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleFromCenter,
        opacity: opacityFromCenter,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative flex-shrink-0 w-80 cursor-pointer"
    >
      <motion.div
        className={cn(
          "relative h-96 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 backdrop-blur-sm",
          hoveredIndex === index && "shadow-2xl shadow-blue-500/20"
        )}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="outline"
              className={cn(
                "border backdrop-blur-sm font-medium",
                getStatusColor(card.status)
              )}
            >
              {card.status}
            </Badge>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              variant="outline"
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
            >
              {card.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <motion.div
            className="space-y-2"
            animate={hoveredIndex === index ? { y: -4 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white line-clamp-2 leading-tight">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-2">
              {card.description}
            </p>
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{card.date}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="h-4 w-4" />
              <span>{card.time}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{card.location}</span>
            </div>

            {card.attendees && (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                <span>{card.attendees} attendees</span>
              </div>
            )}
          </div>

          <motion.div
            animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="sm"
              className={cn(
                "w-full transition-all duration-300",
                card.status === "upcoming"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : card.status === "ongoing"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-600 hover:bg-gray-700 text-white"
              )}
            >
              {card.status === "upcoming"
                ? "Register"
                : card.status === "ongoing"
                ? "Join Now"
                : "View Details"}
            </Button>
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: hoveredIndex === index 
              ? "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
              : undefined,
          }}
        />
      </motion.div>
    </motion.div>
  )
}