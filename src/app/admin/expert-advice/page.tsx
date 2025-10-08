'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { UserCheck, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertRequest {
  _id: string;
  userId: string;
  userName: string;
  subject: string;
  message: string;
  cropType: string;
  farmSize: string;
  urgency: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
  updatedAt: string;
}

export default function AdminExpertAdvicePage() {
  const { toast } = useToast();
  const [expertRequests, setExpertRequests] = useState<ExpertRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [urgencyFilter, setUrgencyFilter] = useState<string>('all');

  useEffect(() => {
    loadExpertRequests();
  }, []);

  const loadExpertRequests = async () => {
    try {
      const response = await fetch('/api/admin/expert-advice');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setExpertRequests(data.expertRequests);
        }
      }
    } catch (error) {
      console.error('Failed to load expert requests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateExpertStatus = async (requestId: string, newStatus: string) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/expert-advice/${requestId}`, {
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
        loadExpertRequests(); // Reload the list
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update expert request status.',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <Clock className="h-4 w-4" />;
      case 'In Progress': return <MessageSquare className="h-4 w-4" />;
      case 'Completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const filteredRequests = expertRequests.filter(request => 
    (statusFilter === 'all' || request.status === statusFilter) &&
    (urgencyFilter === 'all' || request.urgency === urgencyFilter)
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading expert requests...</p>
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
              <h1 className="text-3xl font-bold">Expert Advice Management</h1>
              <p className="text-muted-foreground mt-2">
                Manage and respond to expert advice requests
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgency</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Expert Advice Requests ({filteredRequests.length})
              </CardTitle>
              <CardDescription>
                Review and manage expert advice requests from users
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredRequests.length > 0 ? (
                <div className="space-y-4">
                  {filteredRequests.map((request) => (
                    <div key={request._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{request.subject}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {request.message.length > 150 
                              ? `${request.message.substring(0, 150)}...` 
                              : request.message
                            }
                          </p>
                          <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                            <span>Crop: {request.cropType}</span>
                            <span>Farm Size: {request.farmSize}</span>
                            <span className={cn("font-medium", getUrgencyColor(request.urgency))}>
                              Urgency: {request.urgency}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Requested by: {request.userName} ({request.userId})
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Submitted: {format(new Date(request.createdAt), "PPP p")}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <Badge className={cn("text-white", getStatusVariant(request.status))}>
                            {getStatusIcon(request.status)}
                            <span className="ml-1">{request.status}</span>
                          </Badge>
                          <Select
                            value={request.status}
                            onValueChange={(value) => updateExpertStatus(request._id, value)}
                            disabled={isUpdating}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="In Progress">In Progress</SelectItem>
                              <SelectItem value="Completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No expert requests found</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {statusFilter === 'all' && urgencyFilter === 'all' 
                      ? 'No requests have been submitted yet' 
                      : `No requests match the current filters`
                    }
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
