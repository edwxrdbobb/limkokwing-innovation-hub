"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Target, 
  Lightbulb, 
  Search, 
  FileText, 
  Wrench, 
  Building, 
  DollarSign, 
  Rocket, 
  TrendingUp,
  Info
} from "lucide-react"

interface Phase {
  id: number
  title: string
  subtitle: string
  description: string
  details: string
  icon: React.ComponentType<any>
  color: string
  bgColor: string
  borderColor: string
  position: { x: number; y: number }
  stage: "Early Stage (Ideation)" | "Intermediate (Development)" | "Advance (Setup & Scaleup)"
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Gap Assessment",
    subtitle: "",
    description: "Identify market gaps and opportunities for innovation",
    details: "Comprehensive analysis of market needs, competitor landscape, and identifying untapped opportunities that align with your skills and interests.",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    position: { x: 50, y: 15 },
    stage: "Early Stage (Ideation)"
  },
  {
    id: 2,
    title: "Idea Generation",
    subtitle: "Problem/Solution Fit",
    description: "Generate innovative solutions to identified problems",
    details: "Brainstorm creative solutions, validate problem-solution fit, and develop initial concept that addresses real market needs effectively.",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    position: { x: 75, y: 35 },
    stage: "Early Stage (Ideation)"
  },
  {
    id: 3,
    title: "Market Research",
    subtitle: "",
    description: "Conduct thorough market analysis and validation",
    details: "Deep market research, customer interviews, competitive analysis, and market size estimation to validate your business opportunity.",
    icon: Search,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    position: { x: 85, y: 65 },
    stage: "Early Stage (Ideation)"
  },
  {
    id: 4,
    title: "Business Planning",
    subtitle: "",
    description: "Develop comprehensive business strategy and plan",
    details: "Create detailed business model, financial projections, go-to-market strategy, and operational plans for sustainable growth.",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    position: { x: 75, y: 85 },
    stage: "Intermediate (Development)"
  },
  {
    id: 5,
    title: "Product Development",
    subtitle: "MVP & Market Fit",
    description: "Build and iterate on your minimum viable product",
    details: "Develop MVP, test with early customers, iterate based on feedback, and achieve product-market fit through continuous improvement.",
    icon: Wrench,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    position: { x: 50, y: 85 },
    stage: "Intermediate (Development)"
  },
  {
    id: 6,
    title: "Business Registration",
    subtitle: "Legal Framework",
    description: "Handle legal structure and regulatory compliance",
    details: "Register business entity, obtain necessary licenses, understand regulatory requirements, and establish legal foundation for operations.",
    icon: Building,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    position: { x: 25, y: 75 },
    stage: "Advance (Setup & Scaleup)"
  },
  {
    id: 7,
    title: "Investment Readiness",
    subtitle: "Fundraising",
    description: "Prepare for and secure necessary funding",
    details: "Develop investor pitch, financial models, due diligence materials, and execute fundraising strategy to secure growth capital.",
    icon: DollarSign,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    position: { x: 15, y: 50 },
    stage: "Advance (Setup & Scaleup)"
  },
  {
    id: 8,
    title: "Commercialization",
    subtitle: "Market Launch",
    description: "Launch product and execute go-to-market strategy",
    details: "Execute launch strategy, scale operations, implement marketing campaigns, and establish customer acquisition channels.",
    icon: Rocket,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    position: { x: 25, y: 25 },
    stage: "Advance (Setup & Scaleup)"
  },
  {
    id: 9,
    title: "Growth & Scaling",
    subtitle: "",
    description: "Scale operations and expand market presence",
    details: "Optimize operations, expand to new markets, build strategic partnerships, and implement systems for sustainable growth.",
    icon: TrendingUp,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    position: { x: 35, y: 15 },
    stage: "Advance (Setup & Scaleup)"
  }
]

const stageColors = {
  "Early Stage (Ideation)": "text-orange-600",
  "Intermediate (Development)": "text-blue-600", 
  "Advance (Setup & Scaleup)": "text-purple-600"
}

export function NinePhasesChart() {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null)
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16"> 
      <div className="text-center mb-20">
        <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 font-medium">
          LEAP Program Methodology
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
          Nine Phases Model
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-6 text-slate-600">
          For Startup Development
        </h3>
        <p className="text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed">
          A comprehensive methodology guiding entrepreneurs through every stage of building profitable products and services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Interactive Circular Diagram */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-square max-w-4xl mx-auto">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
            >
              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
                </radialGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.08"/>
                </filter>
              </defs>

              {/* Center Circle */}
              <circle
                cx="200"
                cy="200"
                r="75"
                fill="url(#centerGradient)"
                stroke="#e2e8f0"
                strokeWidth="2"
                filter="url(#softShadow)"
              />
              
              {/* Center Text */}
              <text
                x="200"
                y="190"
                textAnchor="middle"
                className="fill-slate-700 font-bold text-sm tracking-wide"
              >
                NINE PHASES
              </text>
              <text
                x="200"
                y="210"
                textAnchor="middle"
                className="fill-slate-500 font-medium text-xs"
              >
                STARTUP MODEL
              </text>

              {/* Connection Lines (draw first, behind circles) */}
              {phases.map((phase) => {
                const x = (phase.position.x / 100) * 400
                const y = (phase.position.y / 100) * 400
                const isSelected = selectedPhase?.id === phase.id
                
                return (
                  <line
                    key={`line-${phase.id}`}
                    x1={x}
                    y1={y}
                    x2="200"
                    y2="200"
                    stroke={isSelected ? "#64748b" : "#e2e8f0"}
                    strokeWidth={isSelected ? "2" : "1"}
                    strokeDasharray="4,4"
                    className="transition-all duration-300"
                  />
                )
              })}

              {/* Phase Circles */}
              {phases.map((phase) => {
                const x = (phase.position.x / 100) * 400
                const y = (phase.position.y / 100) * 400
                const isHovered = hoveredPhase === phase.id
                const isSelected = selectedPhase?.id === phase.id
                
                return (
                  <g key={phase.id}>
                    {/* Phase Circle */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="32"
                      className={cn(
                        "cursor-pointer transition-all duration-300",
                        phase.bgColor.replace('bg-', 'fill-'),
                        phase.borderColor.replace('border-', 'stroke-')
                      )}
                      strokeWidth="2"
                      filter="url(#softShadow)"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setHoveredPhase(phase.id)}
                      onMouseLeave={() => setHoveredPhase(null)}
                      onClick={() => setSelectedPhase(isSelected ? null : phase)}
                    />
                    
                    {/* Selection Ring */}
                    {isSelected && (
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="38"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Phase Icon */}
                    <foreignObject x={x-12} y={y-12} width="24" height="24">
                      <phase.icon className={cn("h-6 w-6", phase.color)} />
                    </foreignObject>
                    
                    {/* Phase Number */}
                    <text
                      x={x-20}
                      y={y-20}
                      textAnchor="middle"
                      className="fill-slate-600 font-bold text-xs"
                      style={{ pointerEvents: 'none' }}
                    >
                      {phase.id}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
        
        {/* Phase Details Panel */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPhase?.id || 'default'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedPhase ? (
                <Card className="h-fit border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "p-3 rounded-xl",
                        selectedPhase.bgColor,
                        selectedPhase.borderColor,
                        "border-2"
                      )}>
                        <selectedPhase.icon className={cn("h-6 w-6", selectedPhase.color)} />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-blue-50 text-blue-700 border-blue-200">
                          Phase {selectedPhase.id}
                        </Badge>
                        <CardTitle className="text-xl font-bold mb-1 text-slate-800">
                          {selectedPhase.title}
                        </CardTitle>
                        {selectedPhase.subtitle && (
                          <CardDescription className="font-medium text-slate-600">
                            {selectedPhase.subtitle}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {selectedPhase.description}
                    </p>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-slate-800">
                        <Info className="h-4 w-4 text-blue-600" />
                        Details
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {selectedPhase.details}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <Badge variant="outline" className={cn(
                        "font-medium",
                        stageColors[selectedPhase.stage]
                      )}>
                        {selectedPhase.stage}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-fit border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Select a Phase</CardTitle>
                    <CardDescription className="text-slate-600">
                      Click on any phase in the diagram to learn more about it.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(stageColors).map(([stage, color]) => (
                      <div key={stage} className="flex items-center gap-3">
                        <div className={cn("w-3 h-3 rounded-full", 
                          stage === "Early Stage (Ideation)" ? "bg-orange-400" :
                          stage === "Intermediate (Development)" ? "bg-blue-400" : "bg-purple-400"
                        )} />
                        <span className="text-sm font-medium text-slate-700">{stage}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}