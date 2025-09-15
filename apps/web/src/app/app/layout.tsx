// apps/web/src/app/app/layout.tsx
import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login'); // Redirect to your login page
  }

  // You can fetch profile here and pass to context if needed
  return (
    <div>
      <header>Authenticated Nav</header>
      <main>{children}</main>
    </div>
  );
}