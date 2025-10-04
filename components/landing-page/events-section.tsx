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
    // Fetch events from the JSON file
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json");
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

  const defaultEventCards = [
    {
      id: "startup-weekend",
      title: "Startup Weekend",
      description: "A 54-hour event where attendees pitch ideas, form teams, and start companies. Come with an idea or join a team to build a minimum viable product.",
      date: "2023-11-15",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Hub, Main Campus",
      attendees: 120,
      image: "/event-001.jpg",
      category: "Entrepreneurship",
      status: "upcoming" as const,
    },
    {
      id: "tech-talk",
      title: "Tech Talk: AI in Business",
      description: "Join us for an insightful discussion on how artificial intelligence is transforming business operations and creating new opportunities.",
      date: "2023-12-05",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium, Technology Building",
      attendees: 85,
      image: "/event-002.jpg",
      category: "Technology",
      status: "upcoming" as const,
    },
    {
      id: "hackathon",
      title: "Innovation Hackathon",
      description: "A day-long coding competition where teams work together to solve real-world problems through technology solutions.",
      date: "2024-01-20",
      time: "10:00 AM - 8:00 PM",
      location: "Computer Labs, Engineering Building",
      attendees: 150,
      image: "/event-003.jpg",
      category: "Coding",
      status: "upcoming" as const,
    },
    {
      id: "design-workshop",
      title: "UX Design Workshop",
      description: "Learn the fundamentals of user experience design and apply them to create intuitive, user-friendly digital products.",
      date: "2024-02-10",
      time: "1:00 PM - 5:00 PM",
      location: "Design Studio, Creative Arts Building",
      attendees: 40,
      image: "/event-004.jpg",
      category: "Design",
      status: "upcoming" as const,
    },
  ]

  const cardsToDisplay = eventCards || defaultEventCards

  return (
    <section className="border-y border-border bg-card py-20 max-w-7xl mx-auto">
      <div className="container">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-chart-3/20 text-chart-3 hover:bg-chart-3/30">
            <Calendar className="mr-2 h-3 w-3" />
            Upcoming Events
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">What's Next at the Innovation Hub</h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Stay updated with our upcoming programs, events, and opportunities to connect with the innovation
            community.
          </p>
        </div>

        <AppleCardsCarousel cards={cardsToDisplay} />
      </div>
    </section>
  )
}