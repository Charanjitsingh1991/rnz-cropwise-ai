'use client';

import { useState } from 'react';
import { supportTickets as initialTickets } from '@/lib/static-data';
import type { SupportTicket } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>(initialTickets);

  const getStatusVariant = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Open': return 'bg-blue-500';
      case 'Answered': return 'bg-green-500';
      case 'Closed': return 'bg-gray-500';
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
                 <LifeBuoy className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-2xl">User Support Tickets</CardTitle>
                    <CardDescription>View and respond to user support tickets. Click on a ticket to provide answers and manage status.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium max-w-sm truncate">{ticket.subject}</TableCell>
                    <TableCell>{ticket.userName}</TableCell>
                    <TableCell>
                        <Badge className={cn("text-white", getStatusVariant(ticket.status))}>{ticket.status}</Badge>
                    </TableCell>
                    <TableCell>{format(new Date(ticket.updatedAt), "PPP")}</TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/support/${ticket.id}`}>
                            View Ticket <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
