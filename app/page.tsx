"use client"

import HeroSection from "@/components/landing-page/hero-section"
import StatSection from "@/components/landing-page/stat-section"
import MissionAndVissionSection from "@/components/landing-page/mission-and-vision"
import ShowcaseSection from "@/components/landing-page/showcase"
import { ProgramsSection } from "@/components/landing-page/programs-section"
import { EventsSection } from "@/components/landing-page/events-section"
import { TimelineSection } from "@/components/landing-page/timeline-section"
import { CTASection } from "@/components/landing-page/cta-section"

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

  return (
    <div className="flex flex-col max-w-full mx-auto px-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatSection />

      {/* Mission and Vision Section */}
      <MissionAndVissionSection />

      {/* Showcase Section */}
      <ShowcaseSection showcaseSlides={showcaseSlides} />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Events Section */}
      <EventsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
