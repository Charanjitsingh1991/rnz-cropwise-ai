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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';


interface AdminTicketViewProps {
    initialTicket: SupportTicket;
}

export function AdminTicketView({ initialTicket }: AdminTicketViewProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  // Use state to make the ticket mutable
  const [ticket, setTicket] = useState<SupportTicket>(initialTicket);

  const [reply, setReply] = useState('');

  const getStatusVariant = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Open': return 'bg-blue-500 hover:bg-blue-500/90';
      case 'Answered': return 'bg-green-500 hover:bg-green-500/90';
      case 'Closed': return 'bg-gray-500 hover:bg-gray-500/90';
      default: return 'bg-gray-500 hover:bg-gray-500/90';
    }
  };

  const handleReply = () => {
    if (reply.trim() === '' || !ticket) return;
    // In a real app, this would submit the reply to the backend.
    // Here we just simulate it for the demo
    const newTicket = { ...ticket };
    newTicket.messages.push({
        id: `msg-${Date.now()}`,
        author: 'admin',
        authorName: 'RNZ Support',
        timestamp: new Date().toISOString(),
        content: reply
    });
    newTicket.status = 'Answered'; // Automatically set status to Answered after reply
    newTicket.updatedAt = new Date().toISOString();
    setTicket(newTicket);

    toast({ title: "Reply Sent", description: "Your reply has been sent to the user." });
    setReply('');
  };

  const handleStatusChange = (status: SupportTicket['status']) => {
    if (!ticket) return;
    // In a real app, this would submit the status change to the backend.
    const newTicket = { ...ticket, status, updatedAt: new Date().toISOString() };
    setTicket(newTicket);
    toast({ title: "Status Updated", description: `Ticket status changed to ${status}.` });
  }

  return (
    <Card className="max-w-4xl mx-auto">
        <CardHeader>
        <div className="flex justify-between items-start gap-4 flex-wrap">
            <div>
                <Button variant="outline" size="sm" onClick={() => router.push('/admin/support')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Tickets
                </Button>
                <CardTitle className="font-headline text-2xl">{ticket.subject}</CardTitle>
                <CardDescription>
                    From: {ticket.userName} | Opened: {format(new Date(ticket.createdAt), "PPP")}
                </CardDescription>
            </div>
                <div className="flex flex-col items-end gap-2 pt-2">
                <Label htmlFor="status-select" className="text-sm font-medium">Ticket Status</Label>
                    <Select onValueChange={handleStatusChange} value={ticket.status}>
                    <SelectTrigger id="status-select" className="w-[180px]">
                        <SelectValue>
                            <Badge className={cn("text-white", getStatusVariant(ticket.status))}>{ticket.status}</Badge>
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Open">Open</SelectItem>
                        <SelectItem value="Answered">Answered</SelectItem>
                        <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                </Select>
                </div>
        </div>
        </CardHeader>
        <CardContent>
        <div className="space-y-6 bg-muted/50 p-4 rounded-lg">
            {ticket.messages.map((message) => (
                <div key={message.id} className={cn("flex items-start gap-4", message.author === 'admin' ? 'justify-start' : 'justify-end')}>
                    {message.author === 'admin' && (
                        <Avatar className="border-2 border-green-500/50">
                            <AvatarFallback><ShieldCheck className="text-green-500" /></AvatarFallback>
                        </Avatar>
                    )}
                    <div className={cn("max-w-xl rounded-lg px-4 py-3 shadow-sm", 
                        message.author === 'admin' ? 'bg-primary text-primary-foreground' : 'bg-background'
                    )}>
                        <p className="text-sm font-semibold mb-1">{message.authorName}</p>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs mt-2 opacity-70 text-right">{format(new Date(message.timestamp), "p, PPP")}</p>
                    </div>
                    {message.author === 'user' && (
                        <Avatar className="border-2 border-primary/20">
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                    )}
                </div>
            ))}
        </div>

        {ticket.status !== 'Closed' && (
            <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Post a Reply</h3>
                <div className="space-y-4">
                    <Textarea 
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Type your response here..."
                        rows={5}
                    />
                    <Button onClick={handleReply} disabled={!reply.trim()}>Send Reply to User</Button>
                </div>
            </div>
        )}
        </CardContent>
    </Card>
  );
}
