"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import { Calendar } from "lucide-react"
import { EventModal } from "@/components/event-modal"

interface EventCard {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees: number
  image: string
  category: string
  status: "upcoming" | "past"
}

interface EventsSectionProps {
  eventCards?: EventCard[]
}

export function EventsSection({ eventCards }: EventsSectionProps) {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  
  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    
    fetchEvents();
  }, []);

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
    setIsModalOpen(true);
  };

  // Convert events from JSON to EventCard format for the carousel
  const convertedEvents: EventCard[] = events.map(event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location,
    attendees: event.id === "career-fair-2025" ? 200 : 
               event.id === "pitch-day-highlights" ? 85 :
               event.id === "itc-ready-salone-sessions" ? 110 : 50,
    image: event.image,
    category: event.tags[0] || "Event",
    status: new Date(event.date) > new Date() ? "upcoming" as const : "past" as const,
  }));

  const defaultEventCards: EventCard[] = [
    {
      id: "career-fair-2025",
      title: "LIMKOKWING CAREER FAIR 2025",
      description: "Connect with top final-year students and skilled graduates in Sierra Leone at our Second Annual Career Fair!",
      date: "2025-10-29",
      time: "10:00 AM – 4:30 PM",
      location: "Limkokwing University, Hill Station, Freetown",
      attendees: 200,
      image: "/event-029.jpg",
      category: "Career",
      status: "upcoming" as const,
    },
    {
      id: "pitch-day-highlights",
      title: "End-of-Semester Pitch Day Highlights",
      description: "A resounding success showcasing student innovation and entrepreneurship with industry partners and distinguished judges.",
      date: "2024-09-11",
      time: "Full Day Event",
      location: "Faculty of Business Management & Globalisation",
      attendees: 85,
      image: "/event-0830.jpg",
      category: "Innovation",
      status: "past" as const,
    },
    {
      id: "itc-ready-salone-sessions",
      title: "ITC READY Salone Training Sessions",
      description: "Transformative training sessions on pitch perfect techniques and AI for digital freelancers in partnership with ITC READY Salone.",
      date: "2024-09-01",
      time: "Multiple Sessions",
      location: "Limkokwing Innovation Hub",
      attendees: 110,
      image: "/innovation-hub-event-presentation.jpg",
      category: "Training",
      status: "past" as const,
    },
    {
      id: "startup-incubation-cohort-3",
      title: "Startup Incubation Program – Cohort 3 Orientation",
      description: "Welcome orientation for the 3rd Cohort of our Startup Incubation Program with university leadership and new student founders.",
      date: "2024-08-15",
      time: "Full Day Orientation",
      location: "Limkokwing Innovation Hub",
      attendees: 50,
      image: "/modern-event-space-presentation.jpg",
      category: "Incubation",
      status: "past" as const,
    },
  ]

  const cardsToDisplay = eventCards || (events.length > 0 ? convertedEvents : defaultEventCards)

  return (
    <>
      <section className="border-y border-border bg-card py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-chart-3/20 text-chart-3 hover:bg-chart-3/30">
              <Calendar className="mr-2 h-3 w-3" />
              Latest Events
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">What's Happening at the Innovation Hub</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Stay updated with our latest programs, events, and opportunities to connect with the innovation
              community.
            </p>
          </div>

          <AppleCardsCarousel cards={cardsToDisplay} onCardClick={handleEventClick} />
        </div>
      </section>
      
      {selectedEventId && (
        <EventModal 
          eventId={selectedEventId}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEventId(null);
          }}
        />
      )}
    </>
  )
}