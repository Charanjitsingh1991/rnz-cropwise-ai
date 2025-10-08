
'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import type { QuoteRequest } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileQuestion, Loader2, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function AdminQuotesPage() {
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "quoteRequests"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedRequests: QuoteRequest[] = [];
      querySnapshot.forEach((doc) => {
        fetchedRequests.push({ id: doc.id, ...doc.data() } as QuoteRequest);
      });
      setRequests(fetchedRequests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      toast({
        title: "Error",
        description: "Failed to fetch quote requests.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusChange = async (requestId: string, status: QuoteRequest['status']) => {
    try {
      const requestDocRef = doc(db, 'quoteRequests', requestId);
      await updateDoc(requestDocRef, { status });
      setRequests(prev => prev.map(req => req.id === requestId ? { ...req, status } : req));
      toast({
        title: "Status Updated",
        description: `Request status changed to ${status}.`
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Update Failed",
        description: "Could not update the request status.",
        variant: "destructive"
      });
    }
  };

  const getStatusVariant = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500 hover:bg-yellow-500/90';
      case 'Contacted': return 'bg-blue-500 hover:bg-blue-500/90';
      case 'Closed': return 'bg-gray-500 hover:bg-gray-500/90';
      default: return 'bg-gray-500 hover:bg-gray-500/90';
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FileQuestion className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="font-headline text-2xl">User Quote Requests</CardTitle>
                  <CardDescription>Review and respond to user quote requests. Update status and provide quotes as needed.</CardDescription>
                </div>
              </div>
              <Button onClick={fetchRequests} variant="outline" size="sm" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>User Info</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.map((req) => (
                        <TableRow key={req.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Image 
                                        src={req.productImageUrl} 
                                        alt={req.productName} 
                                        width={40} 
                                        height={40} 
                                        className="rounded-md object-cover h-10 w-10"
                                    />
                                    <span className="font-medium">{req.productName}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{req.userName}</p>
                                    <p className="text-sm text-muted-foreground">{req.userEmail}</p>
                                </div>
                            </TableCell>
                            <TableCell>{req.location}</TableCell>
                            <TableCell>{req.quantity}</TableCell>
                            <TableCell>{format(new Date(req.createdAt.seconds * 1000), "PPP")}</TableCell>
                            <TableCell className="text-right">
                               <Select onValueChange={(status: QuoteRequest['status']) => handleStatusChange(req.id, status)} defaultValue={req.status}>
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue>
                                             <Badge className={cn("text-white", getStatusVariant(req.status))}>{req.status}</Badge>
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Contacted">Contacted</SelectItem>
                                        <SelectItem value="Closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
            )}
            {!loading && requests.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-muted-foreground">No quote requests found.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
