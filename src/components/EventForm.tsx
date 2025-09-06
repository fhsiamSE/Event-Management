import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEventContext } from '../context/EventContext';

export default function EventForm() {
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', category: '' });
  const { myEvents, setMyEvents } = useEventContext();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location || !form.category) return;
    setMyEvents([...myEvents, { ...form, id: Date.now().toString() }]);
    router.push('/my-events');
  };
  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="event-form-input" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="event-form-textarea" />
      <input name="date" type="date" value={form.date} onChange={handleChange} required className="event-form-input" />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="event-form-input" />
      <select name="category" value={form.category} onChange={handleChange} required className="event-form-select">
        <option value="">Select Category</option>
        <option value="Conference">Conference</option>
        <option value="Meetup">Meetup</option>
        <option value="Workshop">Workshop</option>
      </select>
      <button type="submit" className="event-form-btn">Create Event</button>
    </form>
  );
}
