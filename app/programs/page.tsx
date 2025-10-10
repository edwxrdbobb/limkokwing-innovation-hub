import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, Code, Briefcase, Camera, Cpu, TrendingUp, Globe } from "lucide-react"
import { ProgramsSection } from "@/components/landing-page/programs-section"



export default function ProgramsPage() {
  return (
    <div className="flex flex-col max-w-full mx-auto">
      {/* Hero Section */}
      <section className="border-b border-border py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Our Programs</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              From ideation to scaling, we provide the tools, mentorship, and resources you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <ProgramsSection isPrograms={true} />

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto">
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
