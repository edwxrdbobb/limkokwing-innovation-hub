import { EventsSection } from "@/components/landing-page/events-section";


export default function Events(){

    return(
        
    <div className="flex flex-col max-w-full mx-auto">
      {/* Hero Section */}
      <section className="border-b border-border py-20 max-w-7xl mx-auto">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Event</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Catch all our past and upcoming events
            </p>
          </div>
        </div>
      </section>

        {/* events */}
        <EventsSection isEventsPage={true} />
    </div>
    )
}