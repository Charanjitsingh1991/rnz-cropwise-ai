'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SupportTicket } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, User, ShieldCheck } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ViewTicketFormProps {
    ticket: SupportTicket;
}

export function ViewTicketForm({ ticket }: ViewTicketFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [reply, setReply] = useState('');

  const getStatusVariant = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Open': return 'bg-blue-500';
      case 'Answered': return 'bg-green-500';
      case 'Closed': return 'bg-gray-500';
    }
  };

  const handleReply = () => {
    if (reply.trim() === '') return;
    // In a real app, this would submit the reply to the backend.
    console.log('New reply:', reply);
    toast({ title: "Reply Sent", description: "Your message has been added to the ticket." });
    setReply('');
    // Here you would typically refetch the ticket data.
  };

  return (
    <Card className="max-w-4xl mx-auto">
        <CardHeader>
        <div className="flex justify-between items-start gap-4">
            <div>
                <Button variant="outline" size="sm" onClick={() => router.push('/support')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tickets
                </Button>
                <CardTitle className="font-headline text-2xl">{ticket.subject}</CardTitle>
                <CardDescription>
                    Ticket opened on {format(new Date(ticket.createdAt), "PPP")} by {ticket.userName}
                </CardDescription>
            </div>
                <Badge className={cn("text-white h-fit", getStatusVariant(ticket.status))}>{ticket.status}</Badge>
        </div>
        </CardHeader>
        <CardContent>
        <div className="space-y-6">
            {ticket.messages.map((message, index) => (
                <div key={message.id} className={cn("flex items-start gap-4", message.author === 'user' ? 'justify-start' : 'justify-end')}>
                    {message.author === 'user' && (
                        <Avatar className="border-2 border-primary/20">
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                    )}
                    <div className={cn("max-w-xl rounded-lg px-4 py-3 shadow-sm", 
                        message.author === 'user' ? 'bg-muted' : 'bg-primary text-primary-foreground'
                    )}>
                        <p className="text-sm font-semibold mb-1">{message.authorName}</p>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs mt-2 opacity-70 text-right">{format(new Date(message.timestamp), "p, PPP")}</p>
                    </div>
                    {message.author === 'admin' && (
                        <Avatar className="border-2 border-green-500/50">
                            <AvatarFallback><ShieldCheck className="text-green-500" /></AvatarFallback>
                        </Avatar>
                    )}
                </div>
            ))}
        </div>

        {ticket.status !== 'Closed' && (
            <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Add a Reply</h3>
                <div className="space-y-4">
                    <Textarea 
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Type your message here..."
                        rows={5}
                    />
                    <Button onClick={handleReply} disabled={!reply.trim()}>Send Reply</Button>
                </div>
            </div>
        )}
        </CardContent>
    </Card>
  );
}
