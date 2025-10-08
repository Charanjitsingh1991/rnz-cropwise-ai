'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteRequest {
  _id: string;
  userId: string;
  userName: string;
  productId: string;
  productName: string;
  quantity: number;
  additionalNotes?: string;
  status: 'Pending' | 'Contacted' | 'Closed';
  createdAt: string;
  updatedAt: string;
}

export default function AdminQuoteRequestsPage() {
  const { toast } = useToast();
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadQuoteRequests();
  }, []);

  const loadQuoteRequests = async () => {
    try {
      const response = await fetch('/api/admin/quote-requests');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setQuoteRequests(data.quoteRequests);
        }
      }
    } catch (error) {
      console.error('Failed to load quote requests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuoteStatus = async (requestId: string, newStatus: string) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/quote-requests/${requestId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Success',
          description: data.message,
        });
        loadQuoteRequests(); // Reload the list
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update quote request status.',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'Contacted': return 'bg-blue-500';
      case 'Closed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <Clock className="h-4 w-4" />;
      case 'Contacted': return <CheckCircle className="h-4 w-4" />;
      case 'Closed': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredRequests = quoteRequests.filter(request => 
    statusFilter === 'all' || request.status === statusFilter
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading quote requests...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Quote Request Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage and respond to user quote requests
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requests</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Contacted">Contacted</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Quote Requests ({filteredRequests.length})
              </CardTitle>
              <CardDescription>
                Review and manage quote requests from users
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredRequests.length > 0 ? (
                <div className="space-y-4">
                  {filteredRequests.map((request) => (
                    <div key={request._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{request.productName}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Quantity: {request.quantity}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Requested by: {request.userName} ({request.userId})
                          </p>
                          {request.additionalNotes && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Notes: {request.additionalNotes}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            Submitted: {request.createdAt ? format(new Date(request.createdAt), "PPP p") : 'Unknown'}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <Badge className={cn("text-white", getStatusVariant(request.status))}>
                            {getStatusIcon(request.status)}
                            <span className="ml-1">{request.status}</span>
                          </Badge>
                          <Select
                            value={request.status}
                            onValueChange={(value) => updateQuoteStatus(request._id, value)}
                            disabled={isUpdating}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="Contacted">Contacted</SelectItem>
                              <SelectItem value="Closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No quote requests found</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {statusFilter === 'all' ? 'No requests have been submitted yet' : `No ${statusFilter.toLowerCase()} requests`}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
