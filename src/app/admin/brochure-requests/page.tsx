'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  FileText, 
  User, 
  Mail, 
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Package
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface BrochureRequest {
  _id: string;
  productId: {
    _id: string;
    name: string;
    category: string;
  };
  productName: string;
  requestedBy: {
    _id: string;
    name: string;
    email: string;
  };
  userEmail: string;
  userName: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminBrochureRequestsPage() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<BrochureRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<BrochureRequest | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  // Fetch brochure requests
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/brochure-requests');
      const data = await response.json();
      
      if (data.success) {
        setRequests(data.data);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch brochure requests',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error fetching brochure requests:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch brochure requests',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Handle status update
  const handleStatusUpdate = async (requestId: string, status: string) => {
    try {
      setUpdating(true);
      const response = await fetch(`/api/brochure-requests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, adminNotes }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: `Request ${status} successfully`,
        });
        setIsDialogOpen(false);
        setSelectedRequest(null);
        setAdminNotes('');
        fetchRequests();
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to update request',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error updating request:', error);
      toast({
        title: 'Error',
        description: 'Failed to update request',
        variant: 'destructive'
      });
    } finally {
      setUpdating(false);
    }
  };

  // Open update dialog
  const openUpdateDialog = (request: BrochureRequest) => {
    setSelectedRequest(request);
    setAdminNotes(request.adminNotes || '');
    setIsDialogOpen(true);
  };

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'approved': return 'default';
      case 'rejected': return 'destructive';
      case 'completed': return 'default';
      default: return 'secondary';
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Brochure Requests</h1>
        <p className="text-muted-foreground">Manage user requests for product brochures</p>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p>Loading requests...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {requests.map((request) => (
            <Card key={request._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{request.productName}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Category: {request.productId?.category || 'Unknown'}
                      </p>
                    </div>
                  </div>
                  <Badge variant={getStatusBadgeVariant(request.status)} className="flex items-center gap-1">
                    {getStatusIcon(request.status)}
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{request.userName}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{request.userEmail}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Request ID: {request._id.slice(-8)}</span>
                  </div>
                </div>
                
                {request.adminNotes && (
                  <div className="bg-muted p-3 rounded">
                    <p className="text-sm font-medium mb-1">Admin Notes:</p>
                    <p className="text-sm text-muted-foreground">{request.adminNotes}</p>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Dialog open={isDialogOpen && selectedRequest?._id === request._id} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openUpdateDialog(request)}
                      >
                        Update Status
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Request Status</DialogTitle>
                        <DialogDescription>
                          Update the status for brochure request from {request.userName}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="adminNotes">Admin Notes (Optional)</Label>
                          <Textarea
                            id="adminNotes"
                            value={adminNotes}
                            onChange={(e) => setAdminNotes(e.target.value)}
                            placeholder="Add notes about this request..."
                            rows={3}
                          />
                        </div>
                      </div>
                      
                      <DialogFooter className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleStatusUpdate(request._id, 'rejected')}
                          disabled={updating}
                        >
                          {updating ? 'Updating...' : 'Reject'}
                        </Button>
                        <Button
                          onClick={() => handleStatusUpdate(request._id, 'approved')}
                          disabled={updating}
                        >
                          {updating ? 'Updating...' : 'Approve'}
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => handleStatusUpdate(request._id, 'completed')}
                          disabled={updating}
                        >
                          {updating ? 'Updating...' : 'Mark Complete'}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {requests.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No brochure requests found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
