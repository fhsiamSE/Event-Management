import type { AppProps } from 'next/app';
import { EventProvider } from '../context/EventContext';
import Header from '../components/Header';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EventProvider>
      <Header />
      <Component {...pageProps} />
    </EventProvider>
  );
}
