import { useRouter } from 'next/router';
import useSWR from 'swr';
import EventCard from '../../components/EventCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: events } = useSWR('/api/events', fetcher);
  if (!events) return <div>Loading...</div>;
  const event = events.find((e: any) => e.id === id);
  if (!event) return <div>Event not found</div>;
  return <EventCard event={event} />;
}
