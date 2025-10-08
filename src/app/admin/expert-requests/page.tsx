'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ExpertRequest {
  _id: string;
  userId: string;
  userEmail?: string;
  userName?: string;
  plantType: string;
  isHealthy: boolean;
  diseaseName?: string;
  diseaseSeverity?: string;
  confidenceScore: number;
  plantImage: string;
  diagnosisResult: any;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  adminNotes?: string;
  adminResponse?: string;
  createdAt: string;
  updatedAt: string;
  respondedAt?: string;
  respondedBy?: string;
}

export default function ExpertRequestsPage() {
  const { toast } = useToast();
  const [requests, setRequests] = useState<ExpertRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ExpertRequest | null>(null);
  const [adminResponse, setAdminResponse] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/expert-request');
      if (!response.ok) throw new Error('Failed to fetch requests');
      
      const data = await response.json();
      setRequests(data.requests);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load expert requests',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (requestId: string, status: string, response?: string) => {
    setSubmitting(true);
    try {
      const updateData: any = { status };
      if (response) {
        updateData.adminResponse = response;
        updateData.respondedAt = new Date().toISOString();
      }

      const res = await fetch(`/api/expert-request/${requestId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      if (!res.ok) throw new Error('Failed to update request');

      toast({
        title: 'Success',
        description: 'Request status updated successfully',
      });

      fetchRequests(); // Refresh the list
      setSelectedRequest(null);
      setAdminResponse('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update request status',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      in_progress: { color: 'bg-blue-100 text-blue-800', icon: Eye },
      completed: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <Badge className={config.color}>
        <Icon className="h-3 w-3 mr-1" />
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Expert Requests</h1>
        <p className="text-muted-foreground">
          Manage plant disease diagnosis requests from users
        </p>
      </div>

      <div className="grid gap-6">
        {requests.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Expert Requests</h3>
              <p className="text-muted-foreground">
                No expert advice requests have been submitted yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          requests.map((request) => (
            <Card key={request._id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {request.plantType} - {request.userName || request.userEmail}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Submitted on {formatDate(request.createdAt)}
                    </p>
                  </div>
                  {getStatusBadge(request.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Plant Information</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Plant:</strong> {request.plantType}</p>
                      <p><strong>Health:</strong> {request.isHealthy ? 'Healthy' : 'Diseased'}</p>
                      {!request.isHealthy && (
                        <>
                          <p><strong>Disease:</strong> {request.diseaseName}</p>
                          <p><strong>Severity:</strong> {request.diseaseSeverity}</p>
                        </>
                      )}
                      <p><strong>Confidence:</strong> {(request.confidenceScore * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">User Information</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Name:</strong> {request.userName || 'Not provided'}</p>
                      <p><strong>Email:</strong> {request.userEmail || 'Not provided'}</p>
                      <p><strong>User ID:</strong> {request.userId}</p>
                    </div>
                  </div>
                </div>

                {/* Plant Image */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Plant Image</h4>
                  <img
                    src={request.plantImage}
                    alt={`${request.plantType} plant`}
                    className="max-w-xs rounded-lg border"
                  />
                </div>

                {/* AI Diagnosis */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">AI Diagnosis</h4>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <p><strong>Description:</strong> {request.diagnosisResult.diseaseDescription}</p>
                    {request.diagnosisResult.affectedParts && (
                      <p><strong>Affected Parts:</strong> {request.diagnosisResult.affectedParts.join(', ')}</p>
                    )}
                    {request.diagnosisResult.productRecommendations && (
                      <p><strong>Recommended Products:</strong> {request.diagnosisResult.productRecommendations.join(', ')}</p>
                    )}
                  </div>
                </div>

                {/* Admin Response */}
                {request.adminResponse && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Admin Response</h4>
                    <div className="bg-blue-50 p-3 rounded-lg text-sm">
                      <p>{request.adminResponse}</p>
                      {request.respondedAt && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Responded on {formatDate(request.respondedAt)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Expert Request Details</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold">Plant Information</h4>
                            <p>Type: {request.plantType}</p>
                            <p>Health: {request.isHealthy ? 'Healthy' : 'Diseased'}</p>
                            {!request.isHealthy && (
                              <>
                                <p>Disease: {request.diseaseName}</p>
                                <p>Severity: {request.diseaseSeverity}</p>
                              </>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold">User Information</h4>
                            <p>Name: {request.userName || 'Not provided'}</p>
                            <p>Email: {request.userEmail || 'Not provided'}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">Plant Image</h4>
                          <img
                            src={request.plantImage}
                            alt={`${request.plantType} plant`}
                            className="max-w-full rounded-lg border"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold">AI Diagnosis</h4>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm">
                            <p>{request.diagnosisResult.diseaseDescription}</p>
                            {request.diagnosisResult.preventativeMeasures && (
                              <div className="mt-2">
                                <strong>Preventative Measures:</strong>
                                <ul className="list-disc list-inside mt-1">
                                  {request.diagnosisResult.preventativeMeasures.map((measure: string, index: number) => (
                                    <li key={index}>{measure}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {request.status === 'pending' && (
                          <div>
                            <h4 className="font-semibold mb-2">Admin Response</h4>
                            <Textarea
                              placeholder="Enter your expert advice and recommendations..."
                              value={adminResponse}
                              onChange={(e) => setAdminResponse(e.target.value)}
                              rows={4}
                            />
                            <div className="flex gap-2 mt-2">
                              <Button
                                onClick={() => updateRequestStatus(request._id, 'completed', adminResponse)}
                                disabled={submitting || !adminResponse.trim()}
                                size="sm"
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Complete with Response
                              </Button>
                              <Button
                                onClick={() => updateRequestStatus(request._id, 'in_progress')}
                                disabled={submitting}
                                variant="outline"
                                size="sm"
                              >
                                <Clock className="h-4 w-4 mr-2" />
                                Mark In Progress
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  {request.status === 'pending' && (
                    <>
                      <Button
                        onClick={() => updateRequestStatus(request._id, 'completed')}
                        disabled={submitting}
                        size="sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark Complete
                      </Button>
                      <Button
                        onClick={() => updateRequestStatus(request._id, 'cancelled')}
                        disabled={submitting}
                        variant="destructive"
                        size="sm"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
