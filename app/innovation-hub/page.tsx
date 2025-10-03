"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard } from "@/components/animated-card"
import { StatsCounter } from "@/components/stats-counter"
import { FloatingIcons } from "@/components/floating-icons"
import {
  Lightbulb,
  Users,
  Rocket,
  TrendingUp,
  Code,
  Briefcase,
  Newspaper,
  Building2,
  Target,
  Zap,
  Globe,
  Award,
} from "lucide-react"
import Image from "next/image"

export default function InnovationHubPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple scroll-based parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with VR Image */}
      <section className="relative min-h-[80vh] overflow-hidden border-b border-border/40">
        {/* Background Image with Parallax */}
        <div ref={heroRef} className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20251002_162136_Samsung%20Notes-AwQNGkFxPT2Gygxolt3s8qldUoOucw.jpg"
            alt="Limkokwing Innovation Hub - Students with VR Technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        {/* Floating Icons */}
        <FloatingIcons />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Gradient Blurs */}
        <div className="gradient-blur absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-accent" />
        <div className="gradient-blur absolute right-[20%] bottom-[20%] h-64 w-64 rounded-full bg-chart-2" />

        {/* Content */}
        <div className="container relative z-10 flex min-h-[80vh] items-center py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 animate-pulse bg-accent/20 px-4 py-2 text-accent hover:bg-accent/30">
              <Zap className="mr-2 h-4 w-4" />
              Innovation & Entrepreneurship
            </Badge>
            <h1 className="mb-6 text-balance font-bold text-5xl leading-tight md:text-7xl">
              Limkokwing
              <span className="bg-gradient-to-r from-accent via-chart-2 to-chart-3 bg-clip-text text-transparent">
                {" "}
                Innovation Hub
              </span>
            </h1>
            <p className="mb-12 text-balance text-muted-foreground text-xl leading-relaxed md:text-2xl">
              Fostering Entrepreneurship, Creativity & Innovation in Sierra Leone
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="rounded-lg border border-accent/20 bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                  <StatsCounter end={5} suffix="+" />
                </div>
                <div className="text-muted-foreground text-sm">Programs</div>
              </div>
              <div className="rounded-lg border border-accent/20 bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                  <StatsCounter end={500} suffix="+" />
                </div>
                <div className="text-muted-foreground text-sm">Students</div>
              </div>
              <div className="rounded-lg border border-accent/20 bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                  <StatsCounter end={50} suffix="+" />
                </div>
                <div className="text-muted-foreground text-sm">Startups</div>
              </div>
              <div className="rounded-lg border border-accent/20 bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold text-accent md:text-4xl">
                  <StatsCounter end={20} suffix="+" />
                </div>
                <div className="text-muted-foreground text-sm">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative border-b border-border/40 py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 bg-accent/10 text-accent">About Us</Badge>
              <h2 className="mb-6 font-bold text-4xl md:text-5xl">Empowering Innovation</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground text-lg leading-relaxed">
                The Limkokwing Innovation Hub is an Entrepreneurship and Innovation support unit of the Limkokwing
                University of Creative Technology, Sierra Leone Campus.
              </p>
            </div>

            {/* Focus Areas Grid */}
            <div className="mb-16 grid gap-6 md:grid-cols-2">
              <AnimatedCard title="Collaborative Ecosystem" delay={0}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Promote collaboration between academia, government, and industry to create a supportive ecosystem
                    for entrepreneurs
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard title="Creative Innovation" delay={100}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Encourage students to think creatively to come up with new and innovative ideas to drive
                    entrepreneurial development
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard title="Skills Development" delay={200}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Encourage education and training in entrepreneurship to help students develop the skills and
                    knowledge they need to start and grow their own businesses
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard title="Growth Acceleration" delay={300}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To facilitate access to financing and accelerate growth for startups and entrepreneurs
                  </p>
                </div>
              </AnimatedCard>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedCard title="Our Mission" delay={400} className="border-2">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To foster innovation and entrepreneurial development in Sierra Leone through dynamic capacity
                    building programs and strengthening collaboration between academia, government, and industry.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard title="Our Vision" delay={500} className="border-2">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a thriving and supportive ecosystem for entrepreneurs in Sierra Leone, where individuals
                    have the skills, knowledge, and resources they need to start and grow successful businesses.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative border-b border-border/40 py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 bg-accent/10 text-accent">Our Programs</Badge>
              <h2 className="mb-6 font-bold text-4xl md:text-5xl">Comprehensive Support</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground text-lg leading-relaxed">
                Five specialized programs designed to support entrepreneurs, innovators, and creative minds at every
                stage of their journey
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* LEAP Program */}
              <AnimatedCard title="Start-ups Incubation" description="LEAP Program" delay={0} className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold">The Nine Phases Model</h4>
                      <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                        A 3-level hands-on and contextualized Lean Startup training model to help students build
                        profitable products/services through systematic development phases.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Gap Assessment
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Idea Generation
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Market Research
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Business Planning
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Product Development
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Growth & Scaling
                    </Badge>
                  </div>
                </div>
              </AnimatedCard>

              {/* TechConnect */}
              <AnimatedCard title="TechConnect" description="Technology Community" delay={100}>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Code className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                        A platform designed to connect students from different ICT-related degree programs to
                        collaborate, learn, and share knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Forums
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Mentorship
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Workshops
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Jobs
                    </Badge>
                  </div>
                </div>
              </AnimatedCard>

              {/* StartupsConnect */}
              <AnimatedCard title="StartupsConnect" description="Entrepreneurship Community" delay={200}>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                        Connect students from different entrepreneurship programs with a focus on startup ventures and
                        business development.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Networking
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Resources
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Events
                    </Badge>
                  </div>
                </div>
              </AnimatedCard>

              {/* Press Club */}
              <AnimatedCard title="Lim Press Club" description="Journalism & Broadcasting" delay={300}>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Newspaper className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                        Professional support for communication students to gain practical knowledge in broadcasting and
                        journalism.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Broadcasting
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Journalism
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Media
                    </Badge>
                  </div>
                </div>
              </AnimatedCard>

              {/* Corporate Innovation */}
              <AnimatedCard
                title="Corporate Innovation"
                description="Industry Partnership"
                delay={400}
                className="lg:col-span-3"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-accent">Collaborative Platform</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Creating collaboration between government, industry, innovators, and entrepreneurs to energize
                        an active ecosystem.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-accent">One-stop Hub</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Training, production and generation of new ideas, products and content powered by technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-accent">Training Programs</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Upskill and upscale competencies to manage transformation and strengthen economic
                        competitiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="gradient-blur absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent/20 text-accent">Join Us</Badge>
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">Ready to Innovate?</h2>
            <p className="mb-12 text-muted-foreground text-lg leading-relaxed">
              Join the Limkokwing Innovation Hub and be part of Sierra Leone's entrepreneurial revolution. Whether
              you're a student, entrepreneur, or industry partner, we have programs designed to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-8 font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                Get in Touch
                <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/programs"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-accent px-8 font-medium text-accent transition-all hover:bg-accent/10"
              >
                View All Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
