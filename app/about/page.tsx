import { Badge } from "@/components/ui/badge"
import { Carousel } from "@/components/ui/carousel"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { NinePhasesChart } from "@/components/ui/nine-phases-chart"
import { Target, Eye, Heart, Lightbulb, Users, Award, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  const showcaseSlides = [
    {
      title: "Innovation Hub Facilities",
      button: "Explore More",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20251002_162136_Samsung%20Notes-AwQNGkFxPT2Gygxolt3s8qldUoOucw.jpg",
    },
    {
      title: "Collaborative Workspaces",
      button: "View Spaces",
      src: "/modern-collaborative-workspace-students.jpg",
    },
    {
      title: "Tech Labs & Equipment",
      button: "See Technology", 
      src: "/technology-lab-computers-equipment.jpg",
    },
    {
      title: "Event & Meeting Spaces",
      button: "Book Space",
      src: "/modern-event-space-presentation.jpg",
    },
  ]

  return (
    <div className="flex flex-col max-w-full m-auto">
      {/* Hero Section */}
      <section className="border-b border-border py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-chart-1/20 text-chart-1 hover:bg-chart-1/30">About Us</Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Limkokwing Innovation Hub</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              A dynamic ecosystem dedicated to fostering entrepreneurship, creativity, and innovation in Sierra Leone
              through world-class programs and industry collaboration.
            </p>
          </div>
        </div>
      </section>

    {/* vision & mission */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="container">
          <BentoGrid className="lg:grid-cols-2">
            <BentoCard className="border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-chart-1/20">
                <Target className="h-7 w-7 text-chart-1" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="leading-relaxed text-muted-foreground">
                To foster innovation and entrepreneurial development in Sierra Leone through dynamic capacity building
                programs and strengthening collaboration between academia, government, and industry.
              </p>
            </BentoCard>

            <BentoCard className="border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-transparent">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-chart-3/20">
                <Eye className="h-7 w-7 text-chart-3" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="leading-relaxed text-muted-foreground">
                To create a thriving and supportive ecosystem for entrepreneurs in Sierra Leone, where individuals have
                the skills, knowledge, and resources they need to start and grow successful businesses.
              </p>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

    {/* showcase */}
      <section className="border-y border-border bg-card py-20 max-w-full mx-auto">
        <div className="container max-w-full w-[90vw] mx-auto">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">Our Space</Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Explore Our Facilities</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              State-of-the-art facilities designed to inspire creativity, foster collaboration, and drive innovation.
            </p>
          </div>

          <Carousel slides={showcaseSlides} />
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-chart-3/20 text-chart-3 hover:bg-chart-3/30">Our Values</Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">What Drives Us</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              These principles guide everything we do and shape the culture of our innovation hub.
            </p>
          </div>

          <BentoGrid>
            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10">
                <Lightbulb className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="mb-2 font-semibold">Innovation</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Encouraging creative thinking and pioneering solutions to real-world challenges.
              </p>
            </BentoCard>

            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
                <Heart className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="mb-2 font-semibold">Excellence</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Maintaining the highest standards in programs, mentorship, and student support.
              </p>
            </BentoCard>

            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
                <Target className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="mb-2 font-semibold">Integrity</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Upholding ethical principles and fostering a culture of honesty and respect.
              </p>
            </BentoCard>

            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10">
                <Users className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="mb-2 font-semibold">Collaboration</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Building strong partnerships between students, industry, and government.
              </p>
            </BentoCard>

            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-5/10">
                <Zap className="h-6 w-6 text-chart-5" />
              </div>
              <h3 className="mb-2 font-semibold">Impact</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Creating meaningful change in Sierra Leone's entrepreneurial ecosystem.
              </p>
            </BentoCard>

            <BentoCard>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10">
                <Globe className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="mb-2 font-semibold">Community</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nurturing a supportive network of entrepreneurs, mentors, and innovators.
              </p>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

            {/* Nine Phases Chart Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-gray-500/40 overflow-hidden max-w-full mx-auto">
        <div className="container max-w-full w-[80vw] mx-auto">
              {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
            </div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <NinePhasesChart />
            </div>
          </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-border bg-card py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-chart-1/20 text-chart-1 hover:bg-chart-1/30">
              <Award className="mr-2 h-3 w-3" />
              Our Impact
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Achievements & Milestones</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Recognition and results that reflect our commitment to fostering entrepreneurship in Sierra Leone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-chart-1">500+</div>
              <div className="text-sm text-muted-foreground">Startups Launched & Supported</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-chart-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Students Trained in Entrepreneurship</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-chart-3">50+</div>
              <div className="text-sm text-muted-foreground">Industry Partnerships Established</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
