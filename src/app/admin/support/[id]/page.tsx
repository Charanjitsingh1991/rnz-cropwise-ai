import { supportTickets } from '@/lib/static-data';
import { notFound } from 'next/navigation';
import { AdminTicketView } from '@/components/admin/admin-ticket-view';

export async function generateStaticParams() {
    return supportTickets.map(ticket => ({
      id: ticket.id,
    }));
}

// This is now a Server Component
export default function AdminViewTicketPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const ticket = supportTickets.find((t) => t.id === id);

  if (!ticket) {
    notFound();
  }

  return (
     <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
            <AdminTicketView initialTicket={ticket} />
        </div>
     </main>
  );
}
