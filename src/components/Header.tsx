// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header-title">
          Event Manager
        </div>
        <div className="header-links">
          <Link href="/">Home</Link>
          <Link href="/create">Create Event</Link>
          <Link href="/my-events">My Events</Link>
        </div>
      </nav>
    </header>
  );
}