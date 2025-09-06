import { useEventContext } from '../context/EventContext';
import EventCard from '../components/EventCard';

export default function MyEvents() {
  const { myEvents, setMyEvents } = useEventContext();
  const handleDelete = (id: string) => setMyEvents(myEvents.filter(e => e.id !== id));
  return (
    <main className="my-events-main">
      <h1 className="my-events-title">My Events</h1>
      {myEvents.length === 0 ? <p className="my-events-empty">No events created yet.</p> :
        myEvents.map(event => (
          <div key={event.id} className="my-events-card">
            <EventCard event={event} />
            <button
              onClick={() => handleDelete(event.id)}
              className="my-events-delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
    </main>
  );
}
