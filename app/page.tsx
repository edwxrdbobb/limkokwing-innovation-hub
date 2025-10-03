"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatsCounter } from "@/components/stats-counter"
import { Carousel } from "@/components/ui/carousel"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Timeline } from "@/components/ui/timeline"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import {
  ArrowRight,
  Users,
  Rocket,
  Target,
  TrendingUp,
  Building2,
  Sparkles,
  Code,
  GraduationCap,
  Calendar,
  Award,
} from "lucide-react"

export default function HomePage() {
  const showcaseSlides = [
    {
      title: "End-of-Semester Pitch Day!",
      button: "Check Out",
      description: "On 11th September, the Faculty of Business Management & Globalisation in collaboration with the Limkokwing Innovation Hub hosted our End-of-Semester Pitch Day—and it was a resounding success!",
      src: "/innovation-hub-event-presentation.jpg",
    },
    {
      title: "Pitch Perfect for International Investors!",
      button: "Join Workshop",
      description: "Following the successful Day 1 training on Digital Online Freelancing, which equipped students with essential freelancing skills—how to secure jobs, work effectively, and earn income—Day 2 shifted its focus to the art of pitching. ",
      src: "/freelancer-project-001.jpg",
    },
    {
      title: "Inspiring Innovation at Academic City University College ",
      button: "Check-Out",
      description: "Day 2 of our Ghana trip took us to Academic City University College in Accra, where we had another inspiring day of learning and exploration.",
      src: "/ghana-day-02.jpg",
    },
    {
      title: "Digital Freelancers Meetup ",
      button: "See Events",
      description: "JWe were proud to host the 4th Digital Freelancers Meetup yesterday, organized under the ITC READY Salone programme",
      src: "/digital-freelancer.jpg",
    },
  ]

  const eventCards = [
    {
      id: "1",
      title: "Innovation Summit 2025",
      description: "Join us for our annual Innovation Summit featuring keynote speakers from leading tech companies, startup pitch competitions, and networking opportunities.",
      date: "March 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Limkokwing Innovation Hub",
      attendees: 250,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20251002_162136_Samsung%20Notes-AwQNGkFxPT2Gygxolt3s8qldUoOucw.jpg",
      category: "Conference",
      status: "upcoming" as const,
    },
    {
      id: "2",
      title: "LEAP Program Cohort 5 Applications",
      description: "Applications open for the 5th cohort of our flagship LEAP startup incubation program. Transform your idea into a viable business.",
      date: "April 1, 2025",
      time: "All Day",
      location: "Online Application",
      attendees: 50,
      image: "/startup-incubation-workspace.jpg",
      category: "Program",
      status: "upcoming" as const,
    },
    {
      id: "3",
      title: "TechConnect Hackathon",
      description: "48-hour coding marathon bringing together developers, designers, and entrepreneurs to build innovative solutions.",
      date: "May 20-22, 2025",
      time: "Friday 6PM - Sunday 6PM",
      location: "Innovation Hub Labs",
      attendees: 120,
      image: "/technology-workshop-students-coding.jpg",
      category: "Hackathon",
      status: "upcoming" as const,
    },
    {
      id: "4",
      title: "Industry Partnership Forum",
      description: "Connect with industry leaders and explore collaboration opportunities. Learn about internships and job placements.",
      date: "June 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Main Conference Hall",
      attendees: 180,
      image: "/innovation-hub-event-presentation.jpg",
      category: "Networking",
      status: "upcoming" as const,
    },
    {
      id: "5",
      title: "Web3 Workshop Series",
      description: "Learn about blockchain technology, NFTs, and decentralized applications in this comprehensive workshop series.",
      date: "February 28, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Lab 2",
      attendees: 85,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20251002_162136_Samsung%20Notes-AwQNGkFxPT2Gygxolt3s8qldUoOucw.jpg",
      category: "Workshop",
      status: "past" as const,
    },
  ]

  const timelineData = [
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

  return (
    <div className="flex flex-col max-w-full mx-auto px-4">
      <section className="relative min-h-screen overflow-hidden w-full mx-auto">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <Image
            src="inno-hub-banner.jpg"
            alt="Limkokwing Innovation Hub"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 flex min-h-screen items-center justify-center py-20">
          <div className="max-w-2xl space-y-8">
            <Badge className="w-fit bg-chart-1/20 text-chart-1 hover:bg-chart-1/30 backdrop-blur-sm">
              <Sparkles className="mr-2 h-3 w-3" />
              Fostering Entrepreneurship, Creativity & Innovation
            </Badge>

            <h1 className="text-balance font-sans text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent">
                Limkokwing
              </span>
              <br />
              Innovation Hub
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
              An Entrepreneurship and Innovation support unit of Limkokwing University of Creative Technology, Sierra Leone Campus, fostering collaboration between academia, government, and industry.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group bg-chart-1 hover:bg-chart-1/90" asChild>
                <Link href="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-chart-3 text-chart-3 hover:bg-chart-3/10 bg-background/80 backdrop-blur-sm"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-16 max-w-7xl mx-auto">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="text-center">
              <div className="mb-2 text-chart-1">
                <StatsCounter end={500} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-chart-2">
                <StatsCounter end={1200} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-chart-3">
                <StatsCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-chart-4">
                <StatsCounter end={85} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto">
        <div className="container text-center">
          <BentoGrid className="lg:grid-cols-2 max-w-6xl mx-auto">
            <BentoCard className="border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/20">
                <Target className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed text-muted-foreground">
                To foster innovation and entrepreneurial development in Sierra Leone through dynamic capacity building
                programs and strengthening collaboration between academia, government, and industry.
              </p>
            </BentoCard>

            <BentoCard className="border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/20">
                <TrendingUp className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="leading-relaxed text-muted-foreground">
                To create a thriving and supportive ecosystem for entrepreneurs in Sierra Leone, where individuals have
                the skills, knowledge, and resources they need to start and grow successful businesses. We envision a future
                where entrepreneurship is an integral part of Sierra Leone's economic growth and development, and where
                innovation and creativity are valued and nurtured.
              </p>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 max-w-full mx-auto">
        <div className="container max-w-full w-[2000px] mx-auto">
          <div className="mb-12 text-center mx-auto">
            <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">Our Facilities</Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Innovation Hub Showcase</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Explore our state-of-the-art facilities and vibrant community spaces designed to foster creativity and
              collaboration.
            </p>
          </div>

          <Carousel slides={showcaseSlides} />
        </div>
      </section>

      <section className="relative py-20 max-w-7xl mx-auto">
        <BackgroundBeams />
        <div className="container relative z-10">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">Our Programs</Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Comprehensive Support for Entrepreneurs
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              From ideation to scaling, we provide the tools, mentorship, and resources you need to succeed.
            </p>
          </div>

          <BentoGrid>
            <BentoCard 
              className="border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent"
              icon={<img src="/startup-incubation.jpg" alt="Start-ups Incubation" className="h-32 w-full object-cover" />}
              title="Start-ups Incubation (LEAP)"
              description="A 3-level hands-on and contextualized Lean Startup training model to help students build profitable products/services through our comprehensive nine-phase development process."
            >
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-semibold text-chart-1">85%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Startups Launched</span>
                  <span className="font-semibold text-chart-1">120+</span>
                </div>
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-1 hover:bg-chart-1/10" asChild>
                  <Link href="/programs#leap">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            <BentoCard 
              className="border-chart-2/20 bg-gradient-to-br from-chart-2/5 to-transparent"
              icon={<img src="/technology-workshop-students-coding.jpg" alt="TechConnect" className="h-32 w-full object-cover" />}
              title="TechConnect"
              description="A platform designed to connect students from different ICT-related degree programs. Creates a community for students to collaborate, learn, and share knowledge in technology through discussion forums, mentorship programs, job opportunities, and skill-building workshops."
            >
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-semibold text-chart-2">500+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Monthly Events</span>
                  <span className="font-semibold text-chart-2">8-12</span>
                </div>
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-2 hover:bg-chart-2/10" asChild>
                  <Link href="/programs#techconnect">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            <BentoCard 
              className="border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent"
              icon={<img src="/modern-collaborative-workspace-students.jpg" alt="StartupsConnect" className="h-32 w-full object-cover" />}
              title="StartupsConnect"
              description="A platform designed to connect students from different entrepreneurship-related programs within Limkokwing University and its community. Creates a community for students to collaborate, learn, and share knowledge in entrepreneurship, with focus on startup ventures through discussion forums, mentorship programs, and startup-focused workshops."
            >
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Network Size</span>
                  <span className="font-semibold text-chart-3">300+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Collaborations</span>
                  <span className="font-semibold text-chart-3">50+</span>
                </div>
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-3 hover:bg-chart-3/10" asChild>
                  <Link href="/programs#startupsconnect">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            <BentoCard 
              className="border-chart-4/20 bg-gradient-to-br from-chart-4/5 to-transparent"
              icon={<img src="/event-029.jpg" alt="Lim Press Club" className="h-32 w-full object-cover" />}
              title="Lim Press Club"
              description="Provides intellectual and professional support to communication students, with the goal of creating a platform for broadcasting and journalism students to gain practical knowledge of the field of journalism outside of the classroom."
            >
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Student Members</span>
                  <span className="font-semibold text-chart-4">150+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Publications</span>
                  <span className="font-semibold text-chart-4">25+</span>
                </div>
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-4 hover:bg-chart-4/10" asChild>
                  <Link href="/programs#pressclub">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            <BentoCard 
              className="border-chart-5/20 bg-gradient-to-br from-chart-5/5 to-transparent"
              icon={<img src="/technology-lab-computers-equipment.jpg" alt="Corporate Innovation & Industry Partnership" className="h-32 w-full object-cover" />}
              title="Corporate Innovation & Industry Partnership"
              description="Connecting public and private sectors with entrepreneurs, creating a collaborative platform between government, industry, innovators, academia and start-ups/entrepreneurs to energize an active entrepreneurial ecosystem. Provides training, production and generation of new ideas, products and content powered by technology."
            >
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Partner Companies</span>
                  <span className="font-semibold text-chart-5">50+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-chart-5">80+</span>
                </div>
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-5 hover:bg-chart-5/10" asChild>
                  <Link href="/programs#corporate">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            <BentoCard 
              className="border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent lg:col-span-2"
              icon={<img src="/innovation-hub-event-presentation.jpg" alt="Success Stories" className="h-32 w-full object-cover" />}
              title="Success Stories"
            >
              <div className="space-y-6">
                <p className="leading-relaxed text-muted-foreground">
                  Our programs have helped launch over 500 startups, with many going on to secure funding and create
                  jobs in Sierra Leone. Join our community of successful entrepreneurs and innovators.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-chart-1">500+</div>
                    <div className="text-sm text-muted-foreground">Startups Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-chart-2">$2.5M</div>
                    <div className="text-sm text-muted-foreground">Funding Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-chart-3">1200+</div>
                    <div className="text-sm text-muted-foreground">Jobs Created</div>
                  </div>
                </div>
                
                <Button variant="ghost" className="group/btn w-full justify-between p-0 text-chart-1 hover:bg-chart-1/10" asChild>
                  <Link href="/about#success-stories">
                    View all stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-chart-3/20 text-chart-3 hover:bg-chart-3/30">
              <Calendar className="mr-2 h-3 w-3" />
              Upcoming Events
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">What's Next at the Innovation Hub</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Stay updated with our upcoming programs, events, and opportunities to connect with the innovation
              community.
            </p>
          </div>

          <AppleCardsCarousel cards={eventCards} />
        </div>
      </section>

      {/* Timeline Section for Roadmap */}
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

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 max-w-7xl mx-auto">
        <div className="gradient-blur absolute left-1/3 top-1/2 h-96 w-96 rounded-full bg-chart-1" />
        <div className="gradient-blur absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-chart-3" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-chart-1/20 text-chart-1 hover:bg-chart-1/30">Join Us</Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Join the Limkokwing Innovation Hub and become part of Sierra Leone's thriving entrepreneurial ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group bg-chart-1 hover:bg-chart-1/90" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-chart-3 text-chart-3 hover:bg-chart-3/10 bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
