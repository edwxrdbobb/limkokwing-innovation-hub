"use client"

import { Lightbulb, Rocket, Users, Target } from "lucide-react"

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[10%] top-[20%] animate-float opacity-20" style={{ animationDelay: "0s" }}>
        <Lightbulb className="h-12 w-12 text-accent" />
      </div>
      <div className="absolute right-[15%] top-[30%] animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Rocket className="h-16 w-16 text-accent" />
      </div>
      <div className="absolute left-[20%] bottom-[25%] animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Users className="h-14 w-14 text-accent" />
      </div>
      <div className="absolute right-[10%] bottom-[20%] animate-float opacity-20" style={{ animationDelay: "1.5s" }}>
        <Target className="h-12 w-12 text-accent" />
      </div>
    </div>
  )
}
