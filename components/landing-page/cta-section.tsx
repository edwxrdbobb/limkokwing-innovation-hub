"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
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
  )
}