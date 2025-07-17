import { redirect } from 'next/navigation';

export default function RootPage() {
  // Automatically redirect to German locale
  redirect('/de');
} 