import useSWR from 'swr';
import EventList from '../components/EventList';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  const { data: events, error } = useSWR('/api/events', fetcher);
  if (error) return <div>Failed to load events</div>;
  if (!events) return <div>Loading...</div>;
  return (
    <main className="event-list">
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </main>
  );
}
