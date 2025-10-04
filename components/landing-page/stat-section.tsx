import { StatsCounter } from "@/components/stats-counter"

export default function StatSection() {
  return (
    <>
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
    </>
  )
}