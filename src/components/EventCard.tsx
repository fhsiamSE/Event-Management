interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="event-card">
      <h2 className="event-card-title">
        <span className="event-card-initial">{event.title.charAt(0)}</span>
        {event.title}
      </h2>
      <div className="event-card-meta">
        <span className="event-card-date">{event.date}</span>
        <span className="event-card-location">{event.location}</span>
        <span className="event-card-category">{event.category}</span>
      </div>
      <p className="event-card-desc">{event.description}</p>
    </div>
  );
}
