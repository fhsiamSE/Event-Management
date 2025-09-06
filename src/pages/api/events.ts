import { NextApiRequest, NextApiResponse } from 'next';

const events = [
  { id: '1', title: 'React Conf', date: '2025-09-10', location: 'NYC', category: 'Conference', description: 'React conference.' },
  { id: '2', title: 'Next.js Meetup', date: '2025-09-15', location: 'SF', category: 'Meetup', description: 'Meetup for Next.js.' },
  { id: '3', title: 'Workshop Day', date: '2025-09-20', location: 'LA', category: 'Workshop', description: 'Hands-on workshop.' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(events);
}
