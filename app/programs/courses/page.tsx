import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, Code, Briefcase, Camera, Cpu, TrendingUp, Globe } from "lucide-react"

const programs = [
  {
    category: "Design & Creative Arts",
    icon: Palette,
    programs: [
      {
        title: "Graphic Design",
        duration: "3 years",
        level: "Bachelor",
        description: "Master visual communication and digital design principles.",
      },
      {
        title: "Interior Architecture",
        duration: "3 years",
        level: "Bachelor",
        description: "Create innovative and functional interior spaces.",
      },
      {
        title: "Fashion Design",
        duration: "3 years",
        level: "Bachelor",
        description: "Develop your unique style and fashion industry expertise.",
      },
    ],
  },
  {
    category: "Technology & Computing",
    icon: Code,
    programs: [
      {
        title: "Software Engineering",
        duration: "4 years",
        level: "Bachelor",
        description: "Build cutting-edge software solutions and applications.",
      },
      {
        title: "Cybersecurity",
        duration: "4 years",
        level: "Bachelor",
        description: "Protect digital assets and combat cyber threats.",
      },
      {
        title: "Data Science",
        duration: "4 years",
        level: "Bachelor",
        description: "Analyze data and extract meaningful insights.",
      },
    ],
  },
  {
    category: "Business & Management",
    icon: Briefcase,
    programs: [
      {
        title: "Business Administration",
        duration: "3 years",
        level: "Bachelor",
        description: "Develop leadership and strategic management skills.",
      },
      {
        title: "Marketing",
        duration: "3 years",
        level: "Bachelor",
        description: "Master modern marketing strategies and consumer behavior.",
      },
      {
        title: "Entrepreneurship",
        duration: "3 years",
        level: "Bachelor",
        description: "Launch and grow successful business ventures.",
      },
    ],
  },
  {
    category: "Media & Communication",
    icon: Camera,
    programs: [
      {
        title: "Digital Film & Television",
        duration: "3 years",
        level: "Bachelor",
        description: "Create compelling visual stories for screen.",
      },
      {
        title: "Journalism",
        duration: "3 years",
        level: "Bachelor",
        description: "Report news and tell stories that matter.",
      },
      {
        title: "Public Relations",
        duration: "3 years",
        level: "Bachelor",
        description: "Build and manage brand reputation and communications.",
      },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Our Programs</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Discover a wide range of programs designed to help you achieve your academic and career goals. From
              creative arts to technology and business, we offer world-class education across multiple disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Programs by Category */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {programs.map((category, idx) => {
              const Icon = category.icon
              return (
                <div key={idx}>
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold md:text-3xl">{category.category}</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.programs.map((program, programIdx) => (
                      <Card
                        key={programIdx}
                        className="border-border bg-card transition-colors hover:border-cyan-400/50"
                      >
                        <CardHeader>
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant="secondary">{program.level}</Badge>
                            <Badge variant="outline">{program.duration}</Badge>
                          </div>
                          <CardTitle>{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full bg-transparent">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="border-t border-border bg-card py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">What Makes Our Programs Special</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Every program is designed with your success in mind, combining academic excellence with practical
              experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-400/10">
                <Globe className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold">International Recognition</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Degrees recognized and valued by employers worldwide.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-400/10">
                <Briefcase className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold">Industry Partnerships</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Collaborate with leading companies on real projects.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-400/10">
                <Cpu className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold">Modern Facilities</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                State-of-the-art labs, studios, and learning spaces.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-400/10">
                <TrendingUp className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold">Career Support</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dedicated career services and job placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Ready to Apply?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Take the next step in your educational journey. Contact us to learn more about our programs and
              application process.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
