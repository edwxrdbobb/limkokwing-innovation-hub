"use client"

import { Badge } from "@/components/ui/badge"
import { Timeline } from "@/components/ui/timeline"
import { Target, Calendar, Rocket, Code, Building2 } from "lucide-react"
import { ReactNode } from "react"

interface TimelineItem {
  title: string
  date: string
  time: string
  location: string
  category: string
  icon: ReactNode
  content: ReactNode
}

interface TimelineSectionProps {
  timelineData?: TimelineItem[]
}

export function TimelineSection({ timelineData }: TimelineSectionProps) {
  const defaultTimelineData = [
    {
      title: "Innovation Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Limkokwing Innovation Hub",
      category: "Conference",
      icon: <Calendar className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Join us for our annual Innovation Summit featuring keynote speakers from leading tech companies, startup
            pitch competitions, and networking opportunities. This premier event brings together entrepreneurs, investors,
            and industry leaders from across Sierra Leone and beyond.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-chart-1">Expected Attendees:</strong>
              <br />250+ participants
            </div>
            <div>
              <strong className="text-chart-2">Key Features:</strong>
              <br />Keynotes, Pitches, Networking
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "LEAP Program Cohort 5",
      date: "April 1, 2025",
      time: "Application Deadline",
      location: "Online Application",
      category: "Program",
      icon: <Rocket className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Applications open for the 5th cohort of our flagship LEAP startup incubation program. Transform your idea
            into a viable business with expert mentorship, funding opportunities, and access to our network of industry partners.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-chart-3">Program Duration:</strong>
              <br />6 months intensive
            </div>
            <div>
              <strong className="text-chart-4">Cohort Size:</strong>
              <br />15 startups maximum
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "TechConnect Hackathon",
      date: "May 20-22, 2025",
      time: "Friday 6PM - Sunday 6PM",
      location: "Innovation Hub Labs",
      category: "Hackathon",
      icon: <Code className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            48-hour coding marathon bringing together developers, designers, and entrepreneurs to build innovative
            solutions for real-world problems. Compete for cash prizes, mentorship opportunities, and potential funding.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-chart-1">Prize Pool:</strong>
              <br />$10,000 total
            </div>
            <div>
              <strong className="text-chart-5">Team Size:</strong>
              <br />3-5 members per team
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Industry Partnership Forum",
      date: "June 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Main Conference Hall",
      category: "Networking",
      icon: <Building2 className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            Connect with industry leaders and explore collaboration opportunities. Learn about internships, job
            placements, and corporate innovation projects. This exclusive forum facilitates meaningful connections
            between startups and established companies.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-chart-2">Partners:</strong>
              <br />50+ companies
            </div>
            <div>
              <strong className="text-chart-3">Opportunities:</strong>
              <br />Jobs, Internships, Partnerships
            </div>
          </div>
        </div>
      ),
    },
  ]

  const dataToDisplay = timelineData || defaultTimelineData

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="container">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">
            <Target className="mr-2 h-3 w-3" />
            Innovation Roadmap
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Our Journey Forward</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Follow our strategic roadmap as we continue to build Sierra Leone's premier innovation ecosystem.
          </p>
        </div>

        <Timeline data={dataToDisplay} />
      </div>
    </section>
  )
}