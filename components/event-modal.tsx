"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventModalProps {
  eventId: string;
  isOpen: boolean;
  onClose: () => void;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  joinLink: string;
  tags: string[];
}

export function EventModal({ eventId, isOpen, onClose }: EventModalProps) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const fetchEventData = async () => {
      try {
        const response = await fetch(`/api/events/${eventId}`);
        if (response.ok) {
          const eventData = await response.json();
          setEvent(eventData);
        } else {
          console.error("Event not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event data:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-pulse text-xl">Loading event details...</div>
            </div>
          ) : !event ? (
            <div className="h-64 flex items-center justify-center">
              <div className="text-xl">Event not found</div>
            </div>
          ) : (
            <>
              {/* Event image */}
              <div className="w-full h-64 relative">
                <Image 
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white">{event.title}</h2>
                </div>
              </div>
              
              {/* Event details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="prose max-w-none mb-6">
                  <h3 className="text-xl font-semibold mb-2">About This Event</h3>
                  {event.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a href={event.joinLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                      Join This Event
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}