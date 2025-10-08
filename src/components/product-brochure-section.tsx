'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { FileText, Download, Eye, Clock, User, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Brochure {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnailUrl: string;
  fileSize: number;
  downloads: number;
  views: number;
  category: string;
  language: string;
  createdAt: string;
}

interface ProductBrochureSectionProps {
  productId: string;
  productName: string;
}

export default function ProductBrochureSection({ productId, productName }: ProductBrochureSectionProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [loading, setLoading] = useState(true);
  const [requesting, setRequesting] = useState(false);
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);

  // Fetch brochures for this product
  const fetchBrochures = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/brochures?productId=${productId}`);
      const data = await response.json();
      
      if (data.success) {
        setBrochures(data.data);
      }
    } catch (error) {
      console.error('Error fetching brochures:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrochures();
  }, [productId]);

  // Handle brochure request
  const handleBrochureRequest = async () => {
    if (!user) {
      toast({
        title: 'Login Required',
        description: 'Please log in to request a brochure',
        variant: 'destructive'
      });
      return;
    }

    try {
      setRequesting(true);
      const response = await fetch('/api/brochure-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Request Submitted',
          description: 'Your brochure request has been submitted successfully',
        });
        setIsRequestDialogOpen(false);
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to submit request',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error requesting brochure:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit request',
        variant: 'destructive'
      });
    } finally {
      setRequesting(false);
    }
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Brochures
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <p className="text-muted-foreground">Loading brochures...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Brochures
        </CardTitle>
      </CardHeader>
      <CardContent>
        {brochures.length > 0 ? (
          <div className="space-y-4">
            {brochures.map((brochure) => (
              <div key={brochure._id} className="flex items-start gap-4 p-4 border rounded-lg">
                                 {/* Thumbnail */}
                 <div className="flex-shrink-0">
                   <img
                     src={brochure.thumbnailUrl || `data:image/svg+xml;base64,${btoa(`
                       <svg width="64" height="80" xmlns="http://www.w3.org/2000/svg">
                         <rect width="64" height="80" fill="#f8f9fa"/>
                         <rect x="4" y="4" width="56" height="72" fill="#dc3545" rx="4"/>
                         <rect x="8" y="8" width="48" height="64" fill="#ffffff" rx="2"/>
                         <text x="32" y="40" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#dc3545">PDF</text>
                       </svg>
                     `)}`}
                     alt={brochure.title}
                     className="w-16 h-20 object-cover rounded border"
                   />
                 </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1">{brochure.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {brochure.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{formatFileSize(brochure.fileSize)}</span>
                    <span>{brochure.language}</span>
                    <Badge variant="secondary" className="text-xs">
                      {brochure.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(brochure.fileUrl, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = brochure.fileUrl;
                        link.download = brochure.title;
                        link.click();
                      }}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold mb-2">No Brochure Available</h3>
            <p className="text-muted-foreground mb-4">
              We don't have a brochure for this product yet. Request one and we'll notify you when it's available.
            </p>
            
            <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Mail className="h-4 w-4 mr-2" />
                  Request Brochure
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request Brochure</DialogTitle>
                  <DialogDescription>
                    Request a brochure for <strong>{productName}</strong>. We'll notify you when it becomes available.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 bg-muted rounded">
                    <User className="h-4 w-4" />
                    <span className="text-sm">
                      {user?.name || user?.email || 'Unknown User'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-muted rounded">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{user?.email}</span>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsRequestDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleBrochureRequest}
                    disabled={requesting}
                  >
                    {requesting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
