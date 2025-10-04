import { Badge } from "@/components/ui/badge"
import {Carousel} from "@/components/ui/carousel"

export default function ShowcaseSection({showcaseSlides}:{showcaseSlides:any[]}){

    return(
        <>
            <section className="border-y border-border bg-card py-20 max-w-full mx-auto">
                <div className="container max-w-full w-[2000px] mx-auto">
                <div className="mb-12 text-center mx-auto">
                    <Badge className="mb-4 bg-chart-2/20 text-chart-2 hover:bg-chart-2/30">Showcase</Badge>
                    <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Innovation Hub Showcase</h2>
                    <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                    Explore our state-of-the-art facilities and vibrant community spaces designed to foster creativity and
                    collaboration.
                    </p>
                </div>

                <Carousel slides={showcaseSlides} />
                </div>
            </section>
        </>
    )
}