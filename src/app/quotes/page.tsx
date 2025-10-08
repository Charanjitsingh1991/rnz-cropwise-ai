'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { format } from 'date-fns';
import { Package, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteRequest {
  _id: string;
  productId: string;
  productName: string;
  quantity: number;
  additionalNotes?: string;
  status: 'Pending' | 'Contacted' | 'Closed';
  createdAt: string;
  updatedAt: string;
}

export default function QuoteRequestsPage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    additionalNotes: ''
  });

  useEffect(() => {
    loadQuoteRequests();
  }, []);

  const loadQuoteRequests = async () => {
    try {
      const response = await fetch('/api/quotes');
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

  const submitQuoteRequest = async () => {
    if (!formData.productName || !formData.quantity) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: 'custom',
          productName: formData.productName,
          quantity: formData.quantity,
          additionalNotes: formData.additionalNotes
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Success',
          description: data.message,
        });
        setFormData({ productName: '', quantity: '', additionalNotes: '' });
        setShowForm(false);
        loadQuoteRequests(); // Reload the list
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit quote request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
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
              <h1 className="text-3xl font-bold">Quote Requests</h1>
              <p className="text-muted-foreground mt-2">
                Request quotes for our products and track your requests
              </p>
            </div>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Quote Request
            </Button>
          </div>

          {showForm && (
            <Card>
              <CardHeader>
                <CardTitle>New Quote Request</CardTitle>
                <CardDescription>
                  Submit a request for a product quote
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name *</Label>
                  <Input
                    id="productName"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    placeholder="Enter product name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any additional information or special requirements"
                    rows={3}
                  />
                </div>
                <div className="flex gap-3">
                  <Button onClick={submitQuoteRequest} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                  <Button variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                My Quote Requests
              </CardTitle>
              <CardDescription>
                Track the status of your quote requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              {quoteRequests.length > 0 ? (
                <div className="space-y-4">
                  {quoteRequests.map((request) => (
                    <div key={request._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{request.productName}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Quantity: {request.quantity}
                          </p>
                          {request.additionalNotes && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Notes: {request.additionalNotes}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            Submitted: {format(new Date(request.createdAt), "PPP")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={cn("text-white", getStatusVariant(request.status))}>
                            {getStatusIcon(request.status)}
                            <span className="ml-1">{request.status}</span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No quote requests yet</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Submit your first quote request to get started
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
