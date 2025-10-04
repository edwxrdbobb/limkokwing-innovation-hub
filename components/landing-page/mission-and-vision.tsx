import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Target, TrendingUp } from "lucide-react"

export default function MissionAndVissionSection()
{
    return(
        <>
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
        </>
    )
}