import { getEvents } from "@/app/actions/events";
import { Calendar, MapPin, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Events & Meetings | OSS Community",
  description: "Check out our past and upcoming community meetings and events.",
};

const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Open Source Hackathon 2026",
    date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Join us for a 48-hour hackathon to build amazing open-source projects.",
    location: "Online / Discord",
    image_url: null,
    is_past: false,
  },
  {
    id: 2,
    title: "Monthly Community Call - August",
    date: new Date(new Date().getTime() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Our regular monthly sync discussing roadmap and welcoming new members.",
    location: "Google Meet",
    image_url: null,
    is_past: true,
  },
];

export default async function EventsPage() {
  const dbEvents = await getEvents();
  const events = dbEvents && dbEvents.length > 0 ? dbEvents : DUMMY_EVENTS;

  return (
    <main className="pt-24 pb-16 min-h-screen bg-oss-bg">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-display font-bold text-oss-lime mb-4">Meetings & Events</h1>
        <p className="text-oss-muted mb-12 max-w-2xl text-lg">
          Explore our past gatherings and upcoming sessions. 
          Upload your meeting photos to the Supabase database to populate this gallery.
        </p>

        <div className="flex flex-col gap-8">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            
            return (
              <div 
                key={event.id}
                className="flex flex-col md:flex-row bg-oss-panel rounded-2xl border border-oss-border overflow-hidden hover:border-oss-lime/30 transition-colors"
              >
                {/* Image Placeholder */}
                <div className="md:w-1/3 bg-oss-card border-r border-oss-border relative min-h-[200px] flex items-center justify-center">
                  {event.image_url ? (
                    <Image src={event.image_url} alt={event.title} fill className="object-cover" />
                  ) : (
                    <div className="flex flex-col items-center text-oss-muted opacity-50">
                      <ImageIcon size={48} className="mb-2" />
                      <span className="text-sm font-medium text-center px-4">No Photo Uploaded</span>
                    </div>
                  )}
                  {event.is_past && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-oss-border">
                      Past Event
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-oss-lime mb-3 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      {eventDate.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1.5 text-oss-muted">
                        <MapPin size={16} />
                        {event.location}
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-oss-text mb-3">{event.title}</h2>
                  <p className="text-oss-muted line-clamp-3">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
