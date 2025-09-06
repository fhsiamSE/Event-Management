import React, { createContext, useContext, useState, useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
}

interface EventContextType {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  myEvents: Event[];
  setMyEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [myEvents, setMyEvents] = useState<Event[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('myEvents');
    if (stored) setMyEvents(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('myEvents', JSON.stringify(myEvents));
  }, [myEvents]);

  return (
    <EventContext.Provider value={{ events, setEvents, myEvents, setMyEvents }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const context = useContext(EventContext);
  if (!context) throw new Error('useEventContext must be used within EventProvider');
  return context;
}
