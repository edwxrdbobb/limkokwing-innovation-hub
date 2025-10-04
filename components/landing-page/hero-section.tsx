import Image from "next/image"
import Link from "next/link"
import {Badge} from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection(){

    return(
        <>
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
        </>
    )
}