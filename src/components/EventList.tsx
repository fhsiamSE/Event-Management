import { useState } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
}

export default function EventList({ events }: { events: Event[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? e.category === category : true)
  );
  return (
    <div className="event-list">
      <div className="event-list-search">
        <input
          className="event-list-input"
          placeholder="Search events..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="event-list-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Conference">Conference</option>
          <option value="Meetup">Meetup</option>
          <option value="Workshop">Workshop</option>
        </select>
      </div>
      <div>
        {filtered.length === 0 ? (
          <div className="event-list-empty">No events found.</div>
        ) : (
          filtered.map(event => (
            <div key={event.id} className="event-card">
              <div>
                <Link href={`/events/${event.id}`} className="event-card-title">{event.title}</Link>
                <div className="event-card-meta">{event.date} | {event.location} | {event.category}</div>
              </div>
              <Link href={`/events/${event.id}`} className="event-list-view-btn">View</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
