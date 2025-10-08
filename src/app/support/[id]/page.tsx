import { supportTickets } from '@/lib/static-data';
import type { SupportTicket } from '@/lib/types';
import { notFound } from 'next/navigation';
import { ViewTicketForm } from '@/components/support/view-ticket-form';

export async function generateStaticParams() {
    return supportTickets.map(ticket => ({
      id: ticket.id,
    }));
}

export default function ViewTicketPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const ticket = supportTickets.find((t) => t.id === id);

  if (!ticket) {
    notFound();
  }

  return (
    <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
            <ViewTicketForm ticket={ticket} />
        </div>
    </main>
  );
}
