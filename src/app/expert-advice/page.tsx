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
import { UserCheck, Plus, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertRequest {
  _id: string;
  subject: string;
  message: string;
  cropType: string;
  farmSize: string;
  urgency: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  createdAt: string;
  updatedAt: string;
}

export default function ExpertAdvicePage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [expertRequests, setExpertRequests] = useState<ExpertRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    cropType: '',
    farmSize: '',
    urgency: 'Medium'
  });

  useEffect(() => {
    loadExpertRequests();
  }, []);

  const loadExpertRequests = async () => {
    try {
      const response = await fetch('/api/expert-advice');
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

  const submitExpertRequest = async () => {
    if (!formData.subject || !formData.message || !formData.cropType || !formData.farmSize) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/expert-advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Success',
          description: data.message,
        });
        setFormData({
          subject: '',
          message: '',
          cropType: '',
          farmSize: '',
          urgency: 'Medium'
        });
        setShowForm(false);
        loadExpertRequests(); // Reload the list
      } else {
        throw new Error('Failed to submit expert request');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit expert request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
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
              <h1 className="text-3xl font-bold">Expert Advice</h1>
              <p className="text-muted-foreground mt-2">
                Get personalized advice from agricultural experts
              </p>
            </div>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Request Expert Advice
            </Button>
          </div>

          {showForm && (
            <Card>
              <CardHeader>
                <CardTitle>Request Expert Advice</CardTitle>
                <CardDescription>
                  Submit your agricultural questions to our expert team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief subject of your question"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Detailed Question *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your agricultural issue or question in detail"
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cropType">Crop Type *</Label>
                    <Input
                      id="cropType"
                      value={formData.cropType}
                      onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                      placeholder="e.g., Wheat, Rice, Corn"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmSize">Farm Size *</Label>
                    <Input
                      id="farmSize"
                      value={formData.farmSize}
                      onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                      placeholder="e.g., 10 acres, 50 hectares"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low - General advice</SelectItem>
                      <SelectItem value="Medium">Medium - Planning phase</SelectItem>
                      <SelectItem value="High">High - Immediate issue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-3">
                  <Button onClick={submitExpertRequest} disabled={isSubmitting}>
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
                <UserCheck className="h-5 w-5" />
                My Expert Requests
              </CardTitle>
              <CardDescription>
                Track the status of your expert advice requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              {expertRequests.length > 0 ? (
                <div className="space-y-4">
                  {expertRequests.map((request) => (
                    <div key={request._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{request.subject}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {request.message.length > 100 
                              ? `${request.message.substring(0, 100)}...` 
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
                  <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No expert requests yet</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Submit your first expert advice request to get started
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
